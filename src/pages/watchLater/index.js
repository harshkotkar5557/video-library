import React from "react";
import { useWatchLater } from "../../context/watchLater";
import { ACTION } from "../../actions/watchLater";
import VideoCard from "../../components/videoCard";

const WatchLater = () => {
  const { watchLaterList} = useWatchLater();

  return (
    <div>
      <div className="text-center m-1">Watch Later ({watchLaterList.length})</div>
        <div className="video-outer-container">
          {watchLaterList &&
            watchLaterList.map((video) => (
              <VideoCard video={video} key={video._id} isDeleteOption={true} />
            ))}
        </div>
    </div>
  );
};

export default WatchLater;
