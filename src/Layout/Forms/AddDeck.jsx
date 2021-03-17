import React, { Fragment } from "react";

export default function AddDeck() {
  return (
    <Fragment>
      <h2>Create Deck</h2>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Deck Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Deck Description"
          ></textarea>
        </div>
        <button type="button" className="btn btn-secondary mr-1" onClick="">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" onClick="">
          Submit
        </button>
      </form>
    </Fragment>
  );
}
