import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-5xl font-bold text-cyan-200'>{title}</h1>
    <p className='py-6 text-base w-1/3'>{overview}</p>
    <div className=''>
        <button className='bg-white text-bold text-black  px-10 p-3 font-bold text-xl  rounded-lg hover:bg-opacity-80'>▶️Play</button>
        <button className= ' mx-2 bg-gray-700 text-bold text-white  px-8 p-3 font-bold text-xl rounded-lg hover:bg-opacity-70'>🔄️More Info</button>
    </div>
      
    </div>
  )
}

export default VideoTitle
