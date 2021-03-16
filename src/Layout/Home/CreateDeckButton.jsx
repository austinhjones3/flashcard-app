import React from "react";
import { Link } from "react-router-dom";
import { plus } from "../../images/icons";

export default function CreateDeckButton() {
  return (
    <Link className="btn btn-secondary mb-2" to="/">
      {plus} Create a deck
    </Link>
  );
}
