import React from "react";
import { Link } from "react-router-dom";
import CardDelete from "../Common/CardDelete";

export default function CardsList({ error, setError, setDeck, deck, url }) {
  return Object.keys(deck).length > 0
    ? deck.cards.map((card, index) => (
        <div className="card mb-1" key={index}>
          <div className="card-body">
            <span className="card-text d-flex row">
              <p className="col-5">{card.front}</p>
              <p className="col-2"></p>
              <p className="col-5">{card.back}</p>
            </span>
            <div className="float-right row">
              <Link
                className="btn btn-secondary"
                to={`${url}/cards/${card.id}/edit`}
              >
                <span className="oi oi-pencil" /> Edit
              </Link>
              <CardDelete
                error={error}
                setError={setError}
                deck={deck}
                cardId={card.id}
                setDeck={setDeck}
              />
            </div>
          </div>
        </div>
      ))
    : null;
}
