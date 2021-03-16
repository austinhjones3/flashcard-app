import React from "react";
import { Link } from "react-router-dom";
import { trash, pen } from "../../images/icons";

export default function CardsList({ deck }) {
  return Object.keys(deck).length > 0
    ? deck.cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <span className="card-text d-flex justify-content-between">
              <p className="mr-5">{card.front}</p>
              <p className="ml-5">{card.back}</p>
            </span>

            <Link className="btn btn-danger float-right ml-1">{trash}</Link>
            <Link className="btn btn-secondary float-right">{pen} Edit</Link>
          </div>
        </div>
      ))
    : null;
}
