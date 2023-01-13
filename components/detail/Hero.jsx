import React,{useState,useEffect} from 'react'
import { placeholder } from '../../constant/contants'
import { useContext } from 'react'
import Allcontext from '../../store/Allcontext'
import Tags from './Tags'
import { ViewCount,timeAgo } from '../../store/FetchApi'
import FetchApi from '../../store/FetchApi'
import Image from 'next/image'
import VideoPlayer from './VideoPlayer'
import Link from 'next/link'

export default function Hero({data}) {
  const {inview,isDarkMode} = useContext(Allcontext)
  const videoId = data.items[0].id
  const videoInfo = data.items[0].snippet
  const channelId = data.items[0].snippet.channelId
  const videoImage = data.items[0].snippet.thumbnails.high.url
  const [imageUrl,setImageUrl] = useState(false)
  useEffect(()=>{
    async function FetchUrl(){
     const data = await FetchApi(`channels?part=snippet%2Cstatistics&id=${channelId}`)
     setImageUrl(data.items[0].snippet.thumbnails.high.url)
    }
    FetchUrl()
},[])
  return (
    <section className={`w-full`}>
        <div className={`overflow-hidden h-[280px] sm:h-[320px] md:h-[280px] lg:h-[340px] w-full ${inview?"":"fixed"} md:static top-0 left-0 z-10`}>
          <VideoPlayer videoId ={videoId} videoImage ={videoImage}/>
        </div>
        {!inview &&<div className='fixed z-10 top-[280px] left-0 sm:top-[320px] md:hidden w-full'><Tags data={data}/></div>}
        <div className={`my-1 ${inview?"":"sm:mt-[390px] mt-[370px] md:mt-0"}`}>
          <h1 className='mb-1 text-blue-500 text-sm'>{videoInfo.localized.title} </h1>
          <h1 className={`text-[20px] sm:text-[22px] lg:text-[24px] ${isDarkMode?"text-white":""}`}>{videoInfo.title}</h1>
        </div>
        <div className='flex items-center'>
          {imageUrl && <div className='h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full overflow-hidden relative'>
            <Link href={`/channels/${channelId}`}>
            <Image src={imageUrl} fill={true} alt='cover-image' style={{objectFit:"cover"}} sizes = "(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
            </Link>
          </div>}
          <Link href={`/channels/${channelId}`}>
          <h1 className={`ml-4 text-[18px] md:text-[20px] ${isDarkMode?"text-white":""}`}>{videoInfo.channelTitle}<span className='text-sm ml-2 text-gray-500'>{ViewCount(data.items[0].statistics.viewCount)}k views</span></h1>  
          </Link>
        </div>   
    </section>
  )
}
