import React, { useEffect, useState, Fragment } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import ErrorMessage from "../Common/ErrorMessage";
import DeckNav from "./DeckNav";
import ViewDeck from "./ViewDeck";
import StudyCard from "../Card/StudyCard";

export default function Study({ error, setError }) {
  const [deck, setDeck] = useState({});
  const [cardIndex, setCardIndex] = useState(0);
  const [card, setCard] = useState({});
  const [viewingFront, setViewingFront] = useState(true);
  const {
    params: { deckId },
  } = useRouteMatch();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    readDeck(deckId, signal).then(setDeck).catch(setError);
  }, []);

  if (error) {
    return <ErrorMessage setError={setError} />;
  }

  const flipClickHandler = (event) => {};
  const nextClickHandler = (event) => {};
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
          <Link></Link>
        </div>
      </div>
    </Fragment>
  );
}
