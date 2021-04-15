import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {Object} ComponentProps - deck{Object}, deckId{Number}
 * @returns {JSX} - the study page's breadcrumb
 */
export default function StudyNav({ deck, deckId }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
            <span className="oi oi-home" /> Home
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
        </li>
        <li className="breadcrumb-item active">Study</li>
      </ol>
    </nav>
  );
}
