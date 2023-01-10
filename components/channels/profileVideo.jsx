import React from 'react'

export default function ProfileVideo({video}) {
  const videoArray = video.items
  const ChannelVideo = videoArray.map((item,key)=>{
    return(
        <div className='w-full sm:w-6/12 lg:w-3/12 my-2  md:border-b sm:px-2 'key={key}>
            <div className='flex sm:flex-col items-center rounded-lg bg-gray-50 '>
                <div className='sm:h-[120px] lg:h-[140px] h-[80px] w-4/12 sm:w-full overflow-hidden rounded-tr-lg rounded-tl-lg'><img src={item.snippet.thumbnails.high.url} alt="channelImage" className="object-cover md:object-cover h-full w-full scale-y-[140%] sm:scale-100 mr-4"/>
                </div>
                <div className='w-8/12 sm:w-full ml-2 sm:ml-0'>
                    <h1 className='text-gray-800 font-semibold text-base'>{item.snippet.title}</h1>
                    <h1 className='text-sm pr-1 text-gray-500 text-right'>{item.time}</h1>
                </div>
            </div>
        </div>
    )
  })
  return (
    <div className='cont'>
        <h1 className='text-xl lg:text-2xl font-semibold text-center my-4  border-b'>Videos</h1>
        <div className='flex flex-col sm:flex-row flex-wrap'>
            {ChannelVideo}
        </div>
    </div>
  )
}
