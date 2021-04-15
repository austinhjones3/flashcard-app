import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {Object} ComponentProps - deck{Object}
 * @returns {JSX} -
 */
export default function ViewNav({ deck }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
            <span className="oi oi-home" /> Home
          </Link>
        </li>
        <li className="breadcrumb-item active">{deck.name}</li>
      </ol>
    </nav>
  );
}
