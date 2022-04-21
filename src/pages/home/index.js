import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoCard from "../../components/videoCard";
import { usePlayList } from "../../context/playListContext";
import { videos } from "../../db/videos";

const Home = () => {
  const [isPlayListModal, setPlayListModal] = useState(false);
  const [createListForm, setCreateListForm] = useState(false);
  const [selectVideoId, setSelectedVideoId] = useState(null);
  const navigator = useNavigate();
  const { playlist, setPlaylist } = usePlayList();

  function togglePlayListModal(id) {
    isPlayListModal ? setSelectedVideoId(null) : setSelectedVideoId(id);
    setPlayListModal(!isPlayListModal);
  }

  function toggleCreateListForm() {
    setCreateListForm(!createListForm);
  }

  function createList(e) {
    e.preventDefault();
    let listImg = videos.find((vd)=>vd._id === selectVideoId)
    const listItem = {
      id: playlist.length + 1,
      listName: e.target[0].value,
      description: e.target[1].value,
      img:listImg.staticImg,
      videos: [],
    };
    setPlaylist([...playlist, listItem]);
    setCreateListForm(false);
  }

  function addRemoveVideoToList(e, listName) {
    let newPlaylist = playlist.map((list) => {
      if (listName === list.listName) {
        if (e.target.checked) {
          list.videos = [...list.videos, selectVideoId];
        } else {
          list.videos = list.videos.filter((video) => video !== selectVideoId);
        }
      }
      return list;
    });
    setPlaylist(newPlaylist);
  }

  return (
    <div className="page-section">
      <div className="img-container position-relative">
        <img className="display-img" src="/display-img.jpg" alt="display-img" />
        <button
          className="btn default watch-btn"
          onClick={() => navigator("/videos")}
        >
          Watch now
        </button>
      </div>
      <h1 className="heading"> Must watch video</h1>
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
                    checked={
                      selectVideoId
                        ? list.videos.includes(selectVideoId)
                        : false
                    }
                    onChange={(e) => addRemoveVideoToList(e, list.listName)}
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
                  className="text-input"
                  type="text"
                ></input>
                <input
                  placeholder="playlist description"
                  className="text-input"
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

export default Home;
