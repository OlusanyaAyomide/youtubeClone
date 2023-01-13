import React, { useState,useContext } from 'react'
import Image from 'next/image'
import moment from 'moment/moment'
import Allcontext from '../../store/Allcontext'

export default function Comments({comments}) {
  const thread = comments?.items
  const {isDarkMode} = useContext(Allcontext)
  const initialValue=()=>{
  if (thread?.length < 10){return thread.length}return 10}
  const [mapThrough,setMapThrough] = useState(initialValue())
  const handleChange=(bool)=>{
    if(bool){setMapThrough((prev=>prev+10))}
    else{setMapThrough(prev=>prev-10)}
  }
  const timeAgo = (time)=>{return moment(time).fromNow()}

  const CommentList = thread?.map((item,key)=>{
    const author = item.snippet.topLevelComment.snippet
    if (key >= mapThrough){return}
    return(
      <div className='flex my-4 items-center' key={key}>
        <div>
        <div className='mr-2 h-[40px] w-[40px] overflow-hidden rounded-full relative'>
          <Image src={author.authorProfileImageUrl} fill={true} alt="ProfileImage" style={{objectFit:"cover"}} sizes = "(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
          </div>
        </div>
        <div className='ml-2'>
            <h1><span className='font-semibold mr-2'>{author.authorDisplayName}</span>
            <span className={`${isDarkMode?"text-gray-500":"text-gray-700"}  text-sm`}>
              {timeAgo(author.publishedAt)}</span></h1>
            <h1 className='text-sm md:text-base'>{author.textDisplay}</h1>
        </div>
      </div>
    )
  })
  return (
    <section className={`cont my-4 ${isDarkMode?"text-white":""}`}>
      <h1 className="text-lg pl-2">{thread?.length} Comments</h1>
        <div className='relative'>
          {CommentList}
          <div className={`absolute ${isDarkMode?"bg-dark-500":"bg-white"} -bottom-1 w-full flex py-2 pt-4 justify-between sm:pr-8 md:pr-16`}>
            {mapThrough < thread?.length && <button className={`pl-r pr-4 rounded-md  ${isDarkMode?"bg-dark-500":"bg-white"} text-base outline-none`} onClick={()=>(handleChange(true))}>Show more...</button>}
            {mapThrough > 10 && <button className={`pl-6 outline-none pr-8 rounded-md text-base ${isDarkMode?"bg-dark-500":"bg-white"}`} onClick={()=>{handleChange(false)}}>Show less...</button>}
            </div>
        </div>
    </section>
  )
}
