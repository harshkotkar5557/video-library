import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoCard from "../../components/videoCard";
import { videos } from "../../db/videos";
import { usePlayList } from "../../context/playListContext";
import { ACTIONPLAYLIST } from "../../actions/playList";

const Videos = () => {
  const [isPlayListModal, setPlayListModal] = useState(false);
  const [createListForm, setCreateListForm] = useState(false);
  const [selectVideoId, setSelectedVideoId] = useState(null);

  const { playlist, dispatchPlayList } = usePlayList();
  const navigator = useNavigate();

  function togglePlayListModal(id) {
    isPlayListModal ? setSelectedVideoId(null) : setSelectedVideoId(id);
    setPlayListModal(!isPlayListModal);
  }

  function toggleCreateListForm() {
    setCreateListForm(!createListForm);
  }

  function createList(e) {
    e.preventDefault();
    const listItem = {
      id: playlist.length + 1,
      listName: e.target[0].value,
      description: e.target[1].value,
      img:'/video-not-working.png',
      videos: [],
    };
    dispatchPlayList({ type: ACTIONPLAYLIST.CREATE_PLAYLIST, payload:{ list: listItem}})
    setCreateListForm(false);
  }

  function addRemoveVideoToList(e, id) {
    if (e.target.checked) {
      dispatchPlayList({ type: ACTIONPLAYLIST.ADD_VIDEO_LIST, payload:{ listId: id, newVideoId:selectVideoId}})
    } else {
      dispatchPlayList({ type: ACTIONPLAYLIST.DELETE_VIDEO_LIST, payload:{ listId: id, newVideoId:selectVideoId}})
    }
  }

  return (
    <div className="video-outer-container">
      <h2 className="p-1">Trending videos</h2>
      <section className="video-container">
        {videos.map((video) => (
          <VideoCard
            video={video}
            key={video._id}
            handlePlayListModal={togglePlayListModal}
          />
        ))}

        {isPlayListModal && (
          <div className="modal modal-center">
            <div className="d-flex justify-end">
              <i
                onClick={togglePlayListModal}
                className="fa fa-times fx-1 i-hover"
                aria-hidden="true"
              ></i>
            </div>
            <h1>Save to</h1>
            {playlist &&
              playlist.map((list) => (
                <label key={list.id} className="select-input">
                  <input
                    type="checkbox"
                    name="light"
                    className="checkbox-input"
                    value=""
                    checked={selectVideoId ? list.videos.includes(selectVideoId): false}
                    onChange={(e) => addRemoveVideoToList(e,list.id)}
                  />
                  <span className="text">{list.listName}</span>
                </label>
              ))}
            {!createListForm && (
              <button className="btn secondary" onClick={toggleCreateListForm}>
                Create new playlist
              </button>
            )}
            {createListForm && (
              <form className="playlist-form" onSubmit={(e) => createList(e)}>
                <input
                  placeholder="playlist name"
                  type="text"
                  required
                ></input>
                <input
                  placeholder="playlist description"
                  type="text"
                ></input>
                <button className="btn secondary" type="submit">
                  Create
                </button>
              </form>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Videos;
