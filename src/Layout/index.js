import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Common/Header";
import DeckList from "./Home/DecksList";
import NotFound from "./Common/NotFound";
import ViewDeck from "./Deck/View";

export default function Layout() {
  const [error, setError] = useState(undefined);
  const [decks, setDecks] = useState([]);

  return (
    <Fragment>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/decks/:deckId">
            <ViewDeck decks={decks} error={error} setError={setError} />
          </Route>
          <Route path="/">
            <DeckList
              decks={decks}
              setDecks={setDecks}
              error={error}
              setError={setError}
            />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}
