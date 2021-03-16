import React, { useState, useEffect, Fragment } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { listDecks } from "../utils/api/index";
import ErrorMessage from "./Common/ErrorMessage";
import DeckMap from "./DeckMap";

export default function DeckList({ error, setError }) {
  const [decks, setDecks] = useState([]);
  const { url } = useRouteMatch();
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    listDecks(signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, []);

  if (error) {
    return <ErrorMessage setError={setError} />;
  }

  return (
    <Fragment>
      <Link className="btn btn-secondary mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
        </svg>{" "}
        Create a deck
      </Link>
      <Switch>
        <Route path={`${url}`}>
          <DeckMap decks={decks} />
        </Route>
      </Switch>
    </Fragment>
  );
}
