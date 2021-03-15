import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
export default function ErrorMessage() {
  return (
    <Fragment>
      <h1>Bad things happened.</h1>
      <Link to="/">Go Home</Link>
      <Route path="/"></Route>
    </Fragment>
  );
}
