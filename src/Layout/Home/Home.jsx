/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, Fragment } from "react";
import { listDecks } from "../../utils/api/index";

import DecksMap from "./DecksMap";
import CreateDeckButton from "./CreateDeckButton";

export default function Home({ decks, setDecks }) {
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    listDecks(signal)
      .then(setDecks)
      .catch((e) => {
        console.log(e);
      });
    return () => abortController.abort();
  }, []);

  return (
    <Fragment>
      <CreateDeckButton />
      <DecksMap decks={decks} setDecks={setDecks} />
    </Fragment>
  );
}
