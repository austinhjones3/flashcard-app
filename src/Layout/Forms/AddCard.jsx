import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../Common/ErrorMessage";
import { createCard } from "../../utils/api/index";

export default function AddCard({
  deckUrl,
  deck,
  setDeck,
  deckId,
  error,
  setError,
}) {
  const [formData, setFormData] = useState({ front: "", back: "" });
  const [added, setAdded] = useState(false);
  function changeHandler({ target }) {
    setFormData(() => ({ ...formData, [target.name]: target.value }));
  }

  async function submitHandler(event) {
    event.preventDefault();
    const abortController = new AbortController();
    await createCard(deckId, formData, abortController.signal)
      .then((response) => {
        deck.cards.push(response);
        setDeck(() => ({ ...deck }));
      })
      .then(setFormData(() => ({ ...formData, front: "", back: "" })))
      .then(() => setAdded(() => !added))
      .then(
        window.setTimeout(function () {
          setAdded(() => !added);
        }, 3000)
      )
      .catch(setError);
    return () => abortController.abort();
  }

  if (error) {
    return <ErrorMessage setError={setError} />;
  }

  console.log(formData);
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
            <Link to={`${deckUrl}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <h2>{deck.name}: Add Card</h2>
      <form name="addCard" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Front</label>
          <textarea
            name="front"
            value={formData.front}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Front side of card"
            onChange={changeHandler}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Back</label>
          <textarea
            name="back"
            value={formData.back}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Back side of card"
            onChange={changeHandler}
          ></textarea>
        </div>
        <Link className="btn btn-secondary mr-1" to={`${deckUrl}`}>
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {added ? (
          <div class="alert alert-success fade show mt-1" role="alert">
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            Card added to {deck.name}!
          </div>
        ) : null}
      </form>
    </Fragment>
  );
}
