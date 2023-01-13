import React,{useContext} from 'react'
import Link from 'next/link'
import moment from 'moment'
import Allcontext from '../../store/Allcontext'

export default function VideoCard({item}) {
    const timeAgo = moment(item.snippet.publishedAt).fromNow()
    const {isDarkMode} = useContext(Allcontext)
  return (
    <div>
        <div className='h-[200px] sm:h-[220px] md:h-[200px] lg:h-[180px] w-full rounded-lg mb-1 overflow-hidden '>
            <Link href={`/detail/${item.id.videoId}`}><img src={item.snippet.thumbnails.high.url} alt="Video-image" className='h-full w-full scale-y-[133%]'/></Link>
        </div>
        <div className='mt-1'>
            <Link href={`/detail/${item.id.videoId}`}><h1 className={`text-sm sm:text-base  font-[500] capitalize leading-4 tracking-wide ${isDarkMode?"text-white":""}`}>{item.snippet.title}</h1></Link>
            <div className="flex justify-between mt-1">
            <Link href={`channels/${item.snippet.channelId}`} 
            className="text-gray-700 text-sm sm:text-base ">
                <h1>{item.snippet.channelTitle}</h1></Link>
                <h1 className='text-gray-700 text-sm font-semibold'>{timeAgo}</h1>
            </div>
       
        </div>
    </div>
  )
}
