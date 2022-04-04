import React from 'react'
import { useNavigate } from 'react-router-dom'
import VideoCard from '../../components/videoCard'

const Home = () => {
  
    const navigator = useNavigate()

  return (
    <div className='page-section'>
      <div className='img-container position-relative'>
        <img className='display-img' src='/display-img.jpg' alt='display-img' />
        <button class="btn default watch-btn" onClick={()=>navigator('/videos')}>Watch now</button>
      </div>
      <h1 className='heading'> Must watch video</h1>
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

export default Home