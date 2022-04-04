import React from 'react'

const VideoCard = () => {
  return (
    <div className='video-item'>
        <img src='/web-dev.jpg' alt='web-development' />
        <div>
            <h3 className='title'>Web development</h3>
            <div className='description'>10k views | 13 hours ago</div>
        </div>
        <button class="btn secondary w-full" onClick={()=>navigator('/video/:id')}>Watch now</button>
    </div>
  )
}

export default VideoCard