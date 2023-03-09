import React from 'react'

const VideoCard = ({cardImage,videoTitle,channelName,views}) => {
  return (
    <div className='w-72 p-1'>
      <img className='rounded-xl' src={cardImage} alt="card-image" />
      <h1 className='font-bold mt-1'>{videoTitle}</h1>
      <h2 className='text-gray-900 text-sm'>{channelName}</h2>
      <h3 className='text-gray-900 text-xs'>{views} views</h3>
    </div>
  )
}

export default VideoCard
