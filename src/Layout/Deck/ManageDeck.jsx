import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { pen, book, plus, trash } from "../../images/icons";

export default function ManageDeck({ deck }) {
  const { url } = useRouteMatch();
  return (
    <div className="card border-0">
      <div className="card-body px-0">
        <h4 className="card-title">{deck.name}</h4>
        <p className="card-text">{deck.description}</p>
        <Link className="btn btn-secondary mr-1" to="">
          {pen} Edit
        </Link>
        <Link className="btn btn-primary mr-1" to={`${url}/study`}>
          {book} Study
        </Link>
        <Link className="btn btn-primary mr-1" to="">
          {plus} Add Cards
        </Link>
        <Link className="btn btn-danger float-right" to="">
          {trash}
        </Link>
      </div>
    </div>
  );
}
