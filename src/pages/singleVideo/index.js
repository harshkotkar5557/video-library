import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ACTIONHISTORY } from "../../actions/watchHistory";
import VideoCard from "../../components/videoCard";
import { useWatchHistory } from '../../context/watchHistory'
import { videos } from "../../db/videos";
const SingleVideo = () => {
  let { id } = useParams();
  const singleVd = videos.find((vd)=> vd._id === id)
  const [ singleVideo, setSingleVideo ] = useState(singleVd)
  const { dispatchWatchHistoryList } = useWatchHistory()

  return (
    <div className="single-video-outer-container">
      <div className="iframe-box">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
        <div className="video-detail-box">
          <h2>{singleVideo.title}</h2>
          <div className="d-flex justify-between">
            <p className="views">{singleVideo.views} views</p>
            <div className="icon-box">
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="related-video-coatainer">
          <div><h2>Filters</h2></div>
          {
            videos && videos.map((video) => (
              <VideoCard key={video._id} video={video}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
