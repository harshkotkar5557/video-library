import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useWatchHistory } from '../../context/watchHistory';
import VideoCard from '../../components/videoCard';
import { ACTIONHISTORY } from '../../actions/watchHistory';

const History = () => {

    const navigator = useNavigate();
    const { watchHistory, dispatchWatchHistoryList } = useWatchHistory()

  return (
    <div>
      <div className="d-flex justify-between m-1">
      <button className="btn secondary" onClick={() => navigator(-1)}>
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <button className="btn secondary" onClick={()=> dispatchWatchHistoryList({ type: ACTIONHISTORY.CLEAR_HISTORY})}>
        Clear history
      </button>
      </div>
    
    <h2 className="m-1 text-center">Watch History</h2>
    <section className="video-container m-1">
      {watchHistory.length === 0 ? (
        <h2 className="m-1">No Data</h2>
      ) : (
        watchHistory.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))
      )}
    </section>
  </div>
  )
}

export default History