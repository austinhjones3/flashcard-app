/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Study from "../Study/Study";
import { readDeck } from "../../utils/api/index";
import ViewNav from "./ViewNav";
import ManageDeck from "./ManageDeck";
import CardsList from "./CardsList";
import AddEditCard from "../Forms/AddEditCard";
import EditDeck from "../Forms/EditDeck";

/**
 *
 * @param {Object} ComponentProps - decks{Array}, setDecks{Function}
 * @returns {JSX} - a switch-route system that displays the add/edit card form,
 * the edit deck form, the study component, or the view deck component group.
 */
export default function View({ decks, setDecks }) {
  const [deck, setDeck] = useState({});
  const abortController = new AbortController();
  const {
    params: { deckId },
    url,
  } = useRouteMatch();

  useEffect(() => {
    readDeck(deckId, abortController.signal).then(setDeck).catch(console.log);
    return () => abortController.abort();
  }, []);

  return (
    <Fragment>
      <Switch>
        <Route path={`${url}/cards/:cardId/edit`}>
          <AddEditCard
            edit={true}
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
            deckId={deckId}
          />
        </Route>
        <Route path={`${url}/cards/new`}>
          <AddEditCard
            edit={false}
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
            deckId={deckId}
          />
        </Route>
        <Route path={`${url}/edit`}>
          <EditDeck deck={deck} setDeck={setDeck} deckUrl={url} />
        </Route>
        <Route path={`${url}/study`}>
          <Study deckId={deckId} deck={deck} setDeck={setDeck} />
        </Route>

        <Route exact path={url}>
          <ViewNav deck={deck} />
          <ManageDeck
            deck={deck}
            decks={decks}
            setDecks={setDecks}
            deckId={deckId}
          />

          {Object.keys(deck).length > 0 ? (
            deck.cards.length > 0 ? (
              <h2 className="mb-3">Cards</h2>
            ) : (
              <h2>There are no cards in this deck yet.</h2>
            )
          ) : null}
          <CardsList setDeck={setDeck} deck={deck} url={url} />
        </Route>
      </Switch>
    </Fragment>
  );
}
