import React from "react";

const IframeCard = ({ video }) => {
  return (
    <iframe
      width="560"
      height="315"
      src= {`https://www.youtube.com/embed/${video._id}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default IframeCard;
