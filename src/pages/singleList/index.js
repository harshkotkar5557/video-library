import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { usePlayList } from "../../context/playListContext";
import VideoCard from "../../components/videoCard";
import { videos } from "../../db/videos";

const SingleList = () => {
  let { id } = useParams();

  const [listToShown, setListToShown] = useState([]);
  const [listName, setListName] = useState("");
  const { playlist, setPlaylist } = usePlayList();
  const navigator = useNavigate();

  useEffect(() => {
    getListVideo(id);
  }, [id]);

  function getListVideo(listId) {
    let list = playlist.find((list) => list.id === Number(listId));
    setListName(list.listName);
    let listVideo = list
      ? videos.filter((vd) => list.videos.includes(vd._id))
      : [];
    setListToShown(listVideo);
  }

  return (
    <div>
      <button className="btn secondary m-1" onClick={() => navigator(-1)}>
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </button>
      <h2 className="m-1 text-center">{listName}</h2>
      <section className="video-container m-1">
        {listToShown.length === 0 ? (
          <h2 className="m-1">No Data</h2>
        ) : (
          listToShown.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))
        )}
      </section>
    </div>
  );
};

export default SingleList;
