import React from "react";
import ReactPlayer from "react-player";

export default function Video() {
  const params = new URLSearchParams(window.location.search);
  const link = params.get("id");
  return (
    <div>
      <ReactPlayer url={"https://www.youtube.com/watch?v=" + link} />
    </div>
  );
}