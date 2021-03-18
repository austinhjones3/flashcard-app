/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Study from "../Study/Study";
import { readDeck } from "../../utils/api/index";
import ViewNav from "./ViewNav";
import ManageDeck from "./ManageDeck";
import CardsList from "./CardsList";
import AddCard from "../Forms/AddCard";
import EditCard from "../Forms/EditCard";
import EditDeck from "../Forms/EditDeck";

export default function View({ setDecks, error, setError }) {
  const [deck, setDeck] = useState({ cards: [] });
  const abortController = new AbortController();
  const {
    params: { deckId },
    url,
  } = useRouteMatch();

  useEffect(() => {
    console.log("READ DECK RUNNING");

    readDeck(deckId, abortController.signal).then(setDeck).catch(setError);

    return () => abortController.abort();
  }, []);

  console.log(deck); //> 2. correct 3. correct 4. undefined 5. undefined
  return (
    <Fragment>
      <Switch>
        <Route path={`${url}/cards/:cardId/edit`}>
          <EditCard
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
            deckId={deckId}
            error={error}
            setError={setError}
          />
        </Route>
        <Route path={`${url}/cards/new`}>
          <AddCard
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
            deckId={deckId}
            error={error}
            setError={setError}
          />
        </Route>
        <Route path={`${url}/edit`}>
          <EditDeck
            setDecks={setDecks}
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
            deckId={deckId}
            error={error}
            setError={setError}
          />
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
        <Route exact path={`${url}`}>
          <ViewNav deck={deck} />
          <ManageDeck deck={deck} />
          {Object.keys(deck).length > 0 ? (
            deck.cards.length > 0 ? (
              <h2>Cards</h2>
            ) : (
              <h2>There are no cards in this deck yet.</h2>
            )
          ) : null}
          <CardsList deck={deck} url={url} />
        </Route>
      </Switch>
    </Fragment>
  );
}
