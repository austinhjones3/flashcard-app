import React from "react";
import { Link } from "react-router-dom";
export default function ViewNav({ deck }) {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">
            <span className="oi oi-home" /> Home
          </Link>
        </li>
        <li class="breadcrumb-item active">{deck.name}</li>
      </ol>
    </nav>
  );
}
