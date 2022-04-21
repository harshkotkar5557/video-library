import React from "react";
import { useParams } from "react-router-dom";
const SingleVideo = () => {

  let { id } = useParams();

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        autoplay={true}
      ></iframe>
    </div>
  );
};

export default SingleVideo;
