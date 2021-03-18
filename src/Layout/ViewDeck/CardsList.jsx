import React from "react";
import { Link } from "react-router-dom";

export default function CardsList({ deck, url }) {
  return Object.keys(deck).length > 0
    ? deck.cards.map((card, index) => (
        <div className="card mb-1" key={index}>
          <div className="card-body">
            <span className="card-text d-flex justify-content-between">
              {/* try a max width of some sort here to create an evenly spaced partition between the sides of the card */}
              <p className="mr-5">{card.front}</p>
              <p className="ml-5">{card.back}</p>
            </span>

            <Link className="btn btn-danger float-right ml-1">
              <span className="oi oi-trash" />
            </Link>
            <Link
              className="btn btn-secondary float-right"
              to={`${url}/cards/${card.id}/edit`}
            >
              <span className="oi oi-pencil" /> Edit
            </Link>
          </div>
        </div>
      ))
    : null;
}
