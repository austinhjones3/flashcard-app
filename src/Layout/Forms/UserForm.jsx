import React, { Fragment } from "react";
export default function UserForm() {
  return (
    <Fragment>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            placeholder="bob123"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            placeholder="super-secret-password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </form>
    </Fragment>
  );
}
