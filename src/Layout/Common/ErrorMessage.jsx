import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export default function ErrorMessage({ setError }) {
  setError(undefined);
  return (
    <Fragment>
      <h1>Bad things happened.</h1>
      <Link to="/">
        <h3>Go Home</h3>
      </Link>
    </Fragment>
  );
}
