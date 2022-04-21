import React, { useState } from "react";
import { usePlayList } from "../../context/playListContext";
import { useNavigate } from "react-router-dom";
import { ACTIONPLAYLIST } from "../../actions/playList";

const Playlist = () => {
  const [isModalOpen, setModal] = useState(false);
  const { playlist, dispatchPlayList } = usePlayList();
  const navigator = useNavigate();

  function RemoveVideoToList(listId) {
    dispatchPlayList({
      type: ACTIONPLAYLIST.DELETE_PLAYLIST,
      payload: { listId: listId },
    });
  }

  function createList(e) {
    e.preventDefault();
    const listItem = {
      id: playlist.length + 1,
      listName: e.target[0].value,
      description: e.target[1].value,
      img: "/video-not-working.png",
      videos: [],
    };
    dispatchPlayList({
      type: ACTIONPLAYLIST.CREATE_PLAYLIST,
      payload: { list: listItem },
    });
    setModal(false);
  }

  return (
    <div className="video-playlist">
      <div className="d-flex justify-between m-1">
        <button className="btn secondary" onClick={() => navigator(-1)}>
          {" "}
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <button
          className="btn secondary"
          onClick={() => setModal(!isModalOpen)}
        >
          Create list
        </button>
      </div>

      <h2 className="m-1 text-center">My Playlist</h2>
      <section className="video-container m-1">
        {playlist.length === 0 && <h2>No playlist</h2>}
        {playlist.length > 0 &&
          playlist.map((list) => (
            <div className="video-item" key={list.id}>
              <div className="d-flex m-1 align-center justify-between">
                <h3 className="m-1 flex-1 cursor-pointer" onClick={()=> navigator(`/list/${list.id}`)}>{list.listName}</h3>
                <abbr title="remove from playlist">
                  <i
                    className="fa fa-trash delete-icons"
                    onClick={() => RemoveVideoToList(list.id)}
                    aria-hidden="true"
                  ></i>
                </abbr>
              </div>

              <div className="d-flex m-1 align-center justify-between">
                <p>{list.description}</p>
                <p>videos ({list.videos.length})</p>
              </div>
            </div>
          ))}
      </section>
      {isModalOpen && (
        <div className="modal modal-center">
          <div className="d-flex justify-end">
            <i
              onClick={() => setModal(!isModalOpen)}
              className="fa fa-times fx-1 i-hover"
              aria-hidden="true"
            ></i>
          </div>
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
        </div>
      )}
    </div>
  );
};

export default Playlist;
