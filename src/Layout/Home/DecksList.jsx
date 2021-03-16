import React, { useState, useEffect, Fragment } from "react";
import { useRouteMatch } from "react-router-dom";
import { listDecks } from "../../utils/api/index";
import ErrorMessage from "../Common/ErrorMessage";
import DeckMap from "./DecksMap";

export default function DeckList({ decks, setDecks, error, setError }) {
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    listDecks(signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, []);

  if (error) {
    return <ErrorMessage setError={setError} />;
  }

  return <DeckMap decks={decks} error={error} setError={setError} />;
}
