import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CreateDeckButton from "./CreateDeckButton";
import { eye, book, trash } from "../../images/icons";

export default function DeckMap({ decks }) {
  return (
    <Fragment>
      <CreateDeckButton />
      {decks.map((deck, index) => (
        <div className="card mb-2" key={index}>
          <div className="card-body">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="card-title">{deck.name}</h5>
              <small>{deck.cards.length} cards</small>
            </div>
            <p className="card-text">{deck.description}</p>
            <Link className="btn btn-secondary mr-1" to={`/decks/${deck.id}`}>
              {eye} View
            </Link>
            <Link className="btn btn-primary" to={`/decks/${deck.id}/study`}>
              {book} Study
            </Link>
            <button type="button" className="btn btn-danger float-right">
              {trash} Delete
            </button>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
