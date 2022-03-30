import React from 'react'
import { useNavigate } from 'react-router-dom'

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
        <div className='video-item'>
            <img src='/web-dev.jpg' alt='web-development' />
          <div>
            <h3 className='title'>Web development</h3>
            <div className='description'>10k views | 13 hours ago</div>
          </div>
          <button class="btn secondary w-full" onClick={()=>navigator('/video/:id')}>Watch now</button>
        </div>
        <div className='video-item'>
        <img src='/web-dev.jpg' alt='web-development'/>
          <div>
            <h3 className='title'>Web development</h3>
            <div className='description'>10k views | 13 hours ago</div>
          </div>
          <button class="btn secondary w-full">Watch now</button>
        </div>
        <div className='video-item'>
          <img src='/web-dev.jpg' alt='web-development'/>
          <div>
            <h3 className='title'>Web development</h3>
            <div className='description'>10k views | 13 hours ago</div>
          </div>
          <button class="btn secondary w-full">Watch now</button>
        </div>
        <div className='video-item'>
        <img src='/web-dev.jpg' alt='web-development'/>
          <div>
            <h3 className='title'>Web development</h3>
            <div className='description'>10k views | 13 hours ago</div>
          </div>
          <button class="btn secondary w-full">Watch now</button>
        </div>
      </section>

    </div>
  )
}

export default Home