import React, { Fragment, useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Study from "./Study";
import { readDeck } from "../../utils/api/index";
import ViewNav from "./ViewNav";
import ManageDeck from "./ManageDeck";
import CardsList from "./CardsList";
import AddCard from "../Forms/AddCard";
import EditCard from "../Forms/EditCard";
import EditDeck from "../Forms/EditDeck";

export default function View({ error, setError }) {
  const [deck, setDeck] = useState({});
  const {
    params: { deckId },
    url,
  } = useRouteMatch();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    readDeck(deckId, signal).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, []);

  console.log(deck);
  return (
    <Fragment>
      <Switch>
        <Route path={`${url}/cards/:cardId/edit`}>
          <EditCard />
        </Route>
        <Route path={`${url}/cards/new`}>
          <AddCard />
        </Route>
        <Route path={`${url}/edit`}>
          <EditDeck />
        </Route>
        <Route path={`${url}/study`}>
          <Study
            deckId={deckId}
            deck={deck}
            setDeck={setDeck}
            error={error}
            setError={setError}
          />
        </Route>
        <Route path={`${url}`}>
          <ViewNav deck={deck} />
          <ManageDeck deck={deck} />
          <h2>Cards</h2>
          <CardsList deck={deck} url={url} />
        </Route>
      </Switch>
    </Fragment>
  );
}
