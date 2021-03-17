import React, { Fragment, useState } from "react";

export default function AddDeck() {
  const [formData, setFormData] = useState({ deckName: "", description: "" });
  function changeHandler({ target }) {
    setFormData(() => ({ ...formData, [target.name]: target.value }));
  }
  // console.log(formData);
  async function submitHandler() {}
  return (
    <Fragment>
      <h2>Create Deck</h2>
      <form name="addDeck" onSubmit={submitHandler}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="text"
            name="deckName"
            value={formData.deckName}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Deck Name"
            onChange={changeHandler}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Deck Description"
            onChange={changeHandler}
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
