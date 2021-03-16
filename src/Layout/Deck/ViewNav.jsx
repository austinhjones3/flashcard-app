import React from "react";
import { Link } from "react-router-dom";
import { home } from "../../images/icons";
export default function ViewNav({ deck }) {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">{home} Home</Link>
        </li>
        <li class="breadcrumb-item active">{deck.name}</li>
      </ol>
    </nav>
  );
}
