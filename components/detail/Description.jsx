import React,{useState,useContext} from 'react'
import Linkify from 'react-linkify'
import moment from 'moment/moment'
import { ViewCount } from '../../store/FetchApi'
import Allcontext from '../../store/Allcontext'

export default function Description({data}) {
  const videoInfo = data.items[0].snippet
  const {isDarkMode} = useContext(Allcontext)
  const timeAgo = (time)=>{return moment(time).fromNow()}
  const [isfull,setisfull] = useState(false)
  const formatter =(comment)=>{
      const step1 = comment.replace("<","").replace(">","")
      return step1
  }

  return (
    <div className={`w-full my-6 py-2 ${isDarkMode?"bg-dark-400 text-white":"bg-gray-100"} rounded-lg cont`}>
        <span className="inline-block mr-2">
          {ViewCount(data.items[0].statistics.viewCount)}k views</span>
        <span className="inline-block ml-2">{timeAgo(videoInfo.publishedAt)}</span>
        <div className={`relative ${!isfull?"h-[100px]":"h-full"} overflow-hidden text-sm`}>
            <Linkify><h1 className={isDarkMode?"text-white":""}>{formatter(videoInfo.description)}</h1></Linkify>
        <button className={`absolute rounded-3xl pl-8 ${isDarkMode?"bg-dark-400 text-white":"bg-gray-100"} md:px-3 -bottom-1 py-1 right-0 md:pl-16 font-semibold`} onClick={
            ()=>{setisfull((prev=>!prev))}
        }>Show {!isfull?"More":"Less"}</button>
        </div>
    </div>
  )
}
