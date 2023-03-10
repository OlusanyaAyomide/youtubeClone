import React, { useContext, useEffect,useState } from 'react'
import Allcontext from '../../store/Allcontext'
import FetchApi from '../../store/FetchApi'
import Card from './Card'
import VideoCard from './Video'

export default function Feed({data}) {
  const Allctx = useContext(Allcontext)
  const {searchParam,hasrendered,isDarkMode} = Allctx
  const [feeds,setfeeds] = useState({data})
  const FeedList = feeds.data.items.map((item,key)=>{
    return(
        <div className='w-full sm:w-6/12 lg:w-3/12 px-2 my-4' key={key}>
            {item.id.kind === "youtube#video" && <VideoCard item = {item}/>}
            {item.id.kind === "youtube#channel" && <Card item ={item}/>}
        </div>
    )
  })
  useEffect(()=>{
    if(!hasrendered){return}
    FetchApi(`search?part=snippet&q=${searchParam}`)
    .then((data)=>{
      setfeeds({data})
    })
  },[searchParam])
  return (
    <div className='w-full md:w-10/12 lg:w-11/12 cont'>
      <h1 className={`my-2 text-2xl md:text-[28px] lg:text-[33px] font-extrabold capitalize ${isDarkMode?"text-white":"text-black"}`}>{searchParam}<span className='text-youtube-500 ml-2'>Videos</span></h1>
      <div className='flex flex-wrap'>
        {FeedList}
      </div>
    </div>
  )
}
