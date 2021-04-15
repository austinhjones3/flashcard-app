import React, { Fragment } from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {Object} ComponentProps - deck{Object}
 * @returns {JSX} - a display to tell the user they must add more cards before studying
 */
export default function NotEnoughCards({ deck }) {
  return (
    <Fragment>
      <div className="card border-0">
        <div className="card-body px-0">
          <h4 className="card-title">Not Enough Cards</h4>
          <p className="card-text">
            You need at least 3 cards to study. There
            {deck.cards.length === 1
              ? " is 1 card "
              : ` are ${deck.cards.length} cards `}
            in this deck.
          </p>
          <Link className="btn btn-primary" to={`/decks/${deck.id}/cards/new`}>
            <span className="oi oi-plus"></span> Add Cards
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
