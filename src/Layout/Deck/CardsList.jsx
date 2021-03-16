import React from "react";
import { Link } from "react-router-dom";

export default function CardsList({ deck }) {
  return Object.keys(deck).length > 0
    ? deck.cards.map((card, index) => (
        <div className="card">
          <div className="card-body">
            <span className="card-text d-flex justify-content-between">
              <p className="mr-5">{card.front}</p>
              <p className="ml-5">{card.back}</p>
            </span>
            <Link className="btn"></Link>
            <Link className="btn"></Link>
          </div>
        </div>
      ))
    : null;
}
