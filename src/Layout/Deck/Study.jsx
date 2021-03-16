import React, { useEffect, useState, Fragment } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import ErrorMessage from "../Common/ErrorMessage";
import StudyNav from "./StudyNav";
import StudyCards from "../Card/StudyCards";

export default function Study({ deckId, deck, error, setError }) {
  const [viewingFront, setViewingFront] = useState(false);
  const [index, setIndex] = useState(0);
  if (error) {
    return <ErrorMessage setError={setError} />;
  }

  console.log(deck);
  return (
    <Fragment>
      <StudyNav deck={deck} deckId={deckId} />
      <h2>Study: {deck.name}</h2>
      <StudyCards
        deck={deck}
        viewingFront={viewingFront}
        setViewingFront={setViewingFront}
        index={index}
        setIndex={setIndex}
      />
    </Fragment>
  );
}
