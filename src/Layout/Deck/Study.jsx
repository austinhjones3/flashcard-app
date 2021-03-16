import React, { useEffect, useState, Fragment } from "react";
import { useRouteMatch, Link } from "react-router-dom";

import ErrorMessage from "../Common/ErrorMessage";
import DeckNav from "./StudyNav";
import StudyCard from "../Card/StudyCard";

export default function Study({ deckId, deck, error, setError }) {
  if (error) {
    return <ErrorMessage setError={setError} />;
  }

  // const flipClickHandler = (event) => {};
  // const nextClickHandler = (event) => {};
  console.log(deck);
  return (
    <Fragment>
      <DeckNav deck={deck} deckId={deckId} />
      <h2>Study: {deck.name}</h2>
      {/* <StudyCard card={card} viewingFront={viewingFront} /> */}
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">Cards</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
