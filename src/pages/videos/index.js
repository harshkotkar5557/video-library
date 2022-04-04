import React from 'react'
import VideoCard from '../../components/videoCard'

const Videos = () => {
    return (
    <div className='video-outer-container'>
        <h2 className='p-1'>Trending videos</h2>  
        <section className='video-container'>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard/>
        </section>
    </div>
    
  )
}

export default Videos