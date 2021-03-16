import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1>Bad Things Happened</h1>
      <ReactPlayer
        title="Video"
        url="https://www.youtube.com/embed/dQw4w9WgXcQ"
        playing
        allowfullscreen
        muted={true}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <Link to="/">
        <h3>Go Home</h3>
      </Link>
    </div>
  );
}
