/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { readCard, updateCard } from "../../utils/api/index";
import ErrorMessage from "../Common/ErrorMessage";

export default function EditCard({ deck, setDeck, deckUrl, error, setError }) {
  const [card, setCard] = useState({});
  const [formData, setFormData] = useState({});
  const {
    params: { cardId },
  } = useRouteMatch();
  const abortController = new AbortController();
  const history = useHistory();

  useEffect(() => {
    async function getCard() {
      await readCard(cardId, abortController.signal)
        .then((response) => {
          setCard(() => ({ ...card, ...response }));
        })
        .catch(setError);
      return () => abortController.abort();
    }
    getCard();
  }, []);

  useEffect(() => {
    setFormData(() => ({
      ...formData,
      ...card,
    }));
  }, [card]);

  function changeHandler({ target }) {
    setFormData(() => ({ ...formData, [target.name]: target.value }));
  }

  async function submitHandler(event) {
    event.preventDefault();
    await updateCard(formData, abortController.signal)
      .then((response) => {
        // VERY IMPORTANT LINE
        const index = deck.cards.findIndex((selected) => selected.id === card.id);
        deck.cards[index] = response;
        setDeck(() => ({ ...deck }));
      })
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
            <Link to={`${deckUrl}`}>Deck: {deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h2>Edit Card</h2>
      <form name="editCard" onSubmit={submitHandler}>
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
