import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { updateDeck } from "../../utils/api/index";
import ErrorMessage from "../Common/ErrorMessage";

export default function EditDeck({ deck, setDeck, deckUrl, error, setError }) {
  const [formData, setFormData] = useState(deck);
  const abortController = new AbortController();
  const history = useHistory();

  function changeHandler({ target }) {
    setFormData(() => ({ ...formData, [target.name]: target.value }));
  }

  async function submitHandler(event) {
    event.preventDefault();
    await updateDeck(formData, abortController.signal)
      .then((response) => setDeck(() => ({ ...deck, ...response })))
      .then(history.push(deckUrl))
      .catch((e) => {
        setError(() => e);
        console.log(e);
      });
  }

  if (error) {
    return <ErrorMessage setError={setError} />;
  }

  return (
    <Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={deckUrl}>{formData.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h2>Edit Deck</h2>
      <form name="editCard" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Deck Name"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Deck Description"
            onChange={changeHandler}
            required
          ></textarea>
        </div>
        <Link className="btn btn-secondary mr-1" to={`${deckUrl}`}>
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
}
