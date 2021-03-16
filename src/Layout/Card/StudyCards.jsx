import React from "react";

export default function StudyCards({
  deck,
  index,
  viewingFront,
  setIndex,
  setViewingFront,
}) {
  // const flipClickHandler = (event) => {};
  // const nextClickHandler = (event) => {};
  return (
    <div className="card w-75">
      <div className="card-body">
        <h5 className="card-title">Cards</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  );
}
