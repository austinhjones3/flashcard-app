import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserForm from "../Forms/UserForm";

export default function SignIn({ setUserId }) {
  // setUserId after submission
  /** need submit handler that creates the user (happy path) */
  const [signingIn, setSigningIn] = useState(false);
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [needForm, setNeedForm] = useState(false);

  function showForm(event) {
    event.preventDefault();
    if (event.target.innerText.includes("Sign")) {
      setSigningIn(true);
    } else {
      setCreatingAccount(true);
    }
    setNeedForm(true);
  }

  return (
    <Fragment>
      <div className="jumbotron">
        <h1 className="display-4">You've never seen an app quite like this...</h1>
        <p className="lead"></p>
        <hr className="my-4" />
        <h4 className="mb-4">
          {signingIn
            ? "Sign In"
            : creatingAccount
            ? "Create User Account"
            : "Create An Account, or Sign-In"}
        </h4>
        {needForm ? (
          <UserForm
            setSigningIn={setSigningIn}
            setCreatingAccount={setCreatingAccount}
            setNeedForm={setNeedForm}
            setUserId={setUserId}
          />
        ) : (
          <Fragment>
            <button onClick={showForm} className="btn btn-primary btn-lg">
              Create Account
            </button>
            <button onClick={showForm} className="btn btn-secondary btn-lg ml-2">
              Sign In
            </button>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
