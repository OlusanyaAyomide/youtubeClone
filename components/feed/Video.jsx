import React from 'react'
import Link from 'next/link'
import moment from 'moment'

export default function VideoCard({item}) {
    const timeAgo = moment(item.snippet.publishedAt).fromNow()
  return (
    <div>
        <div className='h-[240px] sm:h-[220px] md:h-[200px] lg:h-[180px] w-full rounded-lg mb-1 overflow-hidden '>
            <Link href={`/detail/${item.id.videoId}`}><img src={item.snippet.thumbnails.high.url} alt="Video-image" className='h-full w-full scale-y-[133%]'/></Link>
        </div>
        <div className='mt-1'>
            <Link href={`/detail/${item.id.videoId}`}><h1 className='text-[16px] leading-4 font-[600]'>{item.snippet.title}</h1></Link>
            <div className="flex justify-between mt-2">
            <Link href={`channels/${item.snippet.channelId}`} 
            className="text-gray-700 text-[16px] ">
                <h1>{item.snippet.channelTitle}</h1></Link>
                <h1 className='text-gray-700 text-sm font-semibold'>{timeAgo}</h1>
            </div>
       
        </div>
    </div>
  )
}
