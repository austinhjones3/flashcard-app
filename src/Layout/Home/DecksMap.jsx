import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function DecksMap({ decks }) {
  return (
    <Fragment>
      {decks.map((deck, index) => (
        <div className="card mb-1" key={index + 1}>
          <div className="card-body">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="card-title">{deck.name}</h5>
              {deck.cards ? <small>{deck.cards.length} cards</small> : null}
            </div>
            <p className="card-text">{deck.description}</p>
            <Link className="btn btn-secondary mr-1" to={`/decks/${index + 1}`}>
              <span className="oi oi-eye" /> View
            </Link>
            <Link className="btn btn-primary" to={`/decks/${index + 1}/study`}>
              <span className="oi oi-book" /> Study
            </Link>
            <button type="button" className="btn btn-danger float-right">
              <span className="oi oi-trash" />
            </button>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
