import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWatchLater } from "../../context/watchLater";
import { ACTION } from "../../actions/watchLater";

const VideoCard = ({ video, handlePlayListModal, isDeleteOption = false }) => {
  const navigator = useNavigate();
  const [watchLater, setWatchLater] = useState(false);

  const { dispatchWatchLaterList } = useWatchLater();

  function addToList(video) {
    dispatchWatchLaterList({
      type: ACTION.ADD_TO_LIST,
      payload: {
        video: video,
      },
    });
    setWatchLater(false);
  }

  function removeFromList(video) {
    dispatchWatchLaterList({
      type: ACTION.REMOVE_FROM_LIST,
      payload: {
        video: video,
      },
    });
    setWatchLater(false);
  }

  return (
    <div className="position-relative">
      <div className="video-item">
      <abbr title="Add to playlist">
          <i
            onClick={() => handlePlayListModal(video._id)}
            className="fa fa-list list-icon"
            aria-hidden="true"
          ></i>
        </abbr>
        <div onClick={() => navigator(`/video/${video._id}`)}>
          <img src={video.staticImg} alt={video.title} />
        
        <div className="d-flex justify-between gap-1 title-box">
          <h3 className="title">{video.title}</h3>
        </div>
        <div className="description">10k views | 13 hours ago</div>
        <button
          className="btn secondary w-full"
          onClick={() => navigator(`/video/${video._id}`)}
        >
          Watch now
        </button>
        </div>
        <i
            className={`fa fa-${
              isDeleteOption ? "trash" : "ellipsis-v"
            } more-option-icons cursor-pointer fx-1-half i-hover trash`}
            aria-hidden="true"
            onClick={() =>
              isDeleteOption
                ? removeFromList(video)
                : setWatchLater(!watchLater)
            }
          ></i>
      </div>
      {watchLater && (
        <div className="modal watch-later-modal">
          <button
            className="btn secondary watch-later-btn"
            onClick={() => addToList(video)}
          >
            Watch Later
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
