import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
export default function UserForm({
  setNeedForm,
  setSigningIn,
  setCreatingAccount,
  setUserId,
}) {
  const history = useHistory();

  function cancelForm() {
    setNeedForm(false);
    setSigningIn(false);
    setCreatingAccount(false);
  }

  async function submitUser() {
    // submit user
    // await submitUser().then(setUserId(undefined)).then(history.push("/decks"));
    history.push("/decks");
  }

  return (
    <Fragment>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            placeholder="bob123"
            type="text"
            maxLength="16"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            maxLength="25"
            placeholder="super-secret-password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-md btn-primary"
          onClick={submitUser}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn ml-1 btn-md btn-secondary"
          onClick={cancelForm}
        >
          Cancel
        </button>
      </form>
    </Fragment>
  );
}
