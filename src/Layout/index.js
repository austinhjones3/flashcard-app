import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Common/Header";
import SignIn from "./SignIn/SignIn";
import Home from "./Home/Home";
import NotFound from "./Common/NotFound";
import View from "./ViewDeck/View";
import CreateDeck from "./Forms/CreateDeck";

export default function Layout() {
  // will be passed around the app to retrieve appropriate decks
  const [userId, setUserId] = useState(undefined);
  const [decks, setDecks] = useState([]);

  return (
    <Fragment>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/decks/new">
            <CreateDeck decks={decks} setDecks={setDecks} />
          </Route>
          <Route path="/decks/:deckId">
            <View decks={decks} setDecks={setDecks} />
          </Route>
          <Route path="/decks">
            <Home decks={decks} setDecks={setDecks} />
          </Route>

          <Route exact path="/">
            <SignIn setUserId={setUserId} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      <footer className="mt-4"></footer>
    </Fragment>
  );
}
