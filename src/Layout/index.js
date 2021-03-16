import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Common/Header";
import DeckList from "./DeckList";
import NotFound from "./Common/NotFound";
import ViewDeck from "./Deck/ViewDeck";
import Study from "./Deck/Study";

export default function Layout() {
  const [error, setError] = useState(undefined);
  return (
    <Fragment>
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/decks/:deckId/study">
            <Study error={error} setError={setError} />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck />
          </Route>
          <Route exact path="/">
            <DeckList error={error} setError={setError} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}
