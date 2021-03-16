import React from "react";
import { Link, Route } from "react-router-dom";

function NotFound() {
  return (
    <div className="NotFound">
      <h1>Not Found</h1>
      <Link to="/">
        <h3>Go Home</h3>
      </Link>
      <Route path="/"></Route>
    </div>
  );
}

export default NotFound;
