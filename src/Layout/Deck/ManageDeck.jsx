import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function ManageDeck({ deck }) {
  const { url } = useRouteMatch();
  return (
    <div className="card border-0">
      <div className="card-body px-0">
        <h4 className="card-title">{deck.name}</h4>
        <p className="card-text">{deck.description}</p>
        <Link className="btn btn-secondary mr-1" to={`${url}/edit`}>
          <span className="oi oi-pencil" /> Edit
        </Link>
        <Link className="btn btn-primary mr-1" to={`${url}/study`}>
          <span className="oi oi-book" /> Study
        </Link>
        <Link className="btn btn-primary mr-1" to={`${url}/cards/new`}>
          <span className="oi oi-plus" /> Add Card
        </Link>
        <Link className="btn btn-danger float-right" to="">
          <span className="oi oi-trash" />
        </Link>
      </div>
    </div>
  );
}
