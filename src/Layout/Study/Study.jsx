import React, { useState, Fragment } from "react";
import { useRouteMatch } from "react-router-dom";
import StudyNav from "./StudyNav";
import StudyCards from "./StudyCards";
import NotEnoughCards from "./NotEnoughCards";

/**
 *
 * @param {Object} ComponentProps - deckId{Number}, deck{Object}
 * @returns {JSX} - the breadcrumb of the study component, and either
 * the card display or the 'not enough cards' message.
 */
export default function Study({ deckId, deck }) {
  const [viewingFront, setViewingFront] = useState(true);
  const [index, setIndex] = useState(0);
  const { url } = useRouteMatch();

  console.log(deck);
  return (
    <Fragment>
      <StudyNav deck={deck} deckId={deckId} />
      <h2>Study: {deck.name}</h2>
      {Object.keys(deck).length ? (
        deck.cards.length > 2 ? (
          <StudyCards
            deck={deck}
            viewingFront={viewingFront}
            setViewingFront={setViewingFront}
            index={index}
            setIndex={setIndex}
          />
        ) : (
          <NotEnoughCards deck={deck} url={url} />
        )
      ) : null}
    </Fragment>
  );
}
