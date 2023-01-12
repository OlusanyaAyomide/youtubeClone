import React, { useState } from 'react'
import {DemoComments} from "../../constant/contants"
import { placeholder } from '../../constant/contants'
import Image from 'next/image'
import moment from 'moment/moment'

export default function Comments({comments}) {
  const thread = comments.items
  const initialValue=()=>{
  if (thread.length < 10){return thread.length}return 10}
  const [mapThrough,setMapThrough] = useState(initialValue())
  const handleChange=(bool)=>{
    if(bool){setMapThrough((prev=>prev+10))}
    else{setMapThrough(prev=>prev-10)}
  }
  const timeAgo = (time)=>{return moment(time).fromNow()}

  const CommentList = thread.map((item,key)=>{
    const author = item.snippet.topLevelComment.snippet
    if (key >= mapThrough){return}
    return(
      <div className='flex my-4 items-center' key={key}>
        <div>
        <div className='mr-2 h-[40px] w-[40px] overflow-hidden rounded-full relative'>
          {/* <img src={placeholder} alt="profileImage" className='object-cover h-full w-full'/> */}
          <Image src={author.authorProfileImageUrl} fill={true} alt="ProfileImage" style={{objectFit:"cover"}} sizes =""/>
          </div>
        </div>
        <div className='ml-2'>
            <h1><span className='font-semibold mr-2'>{author.authorDisplayName}</span>
            <span className='text-gray-700 text-sm'>
              {timeAgo(author.publishedAt)}</span></h1>
            <h1>{author.textDisplay}</h1>
        </div>
      </div>
    )
  })
  return (
    <section className='cont my-4 '>
      <h1 className="text-lg pl-2">{DemoComments.length} Comments</h1>
        <div className='relative'>
          {CommentList}
          <div className='absolute -bottom-1 w-full flex py-2 pt-4 justify-between bg-white sm:pr-8 md:pr-16'>
            {mapThrough < DemoComments.length && <button className='pl-r pr-4 rounded-md  bg-white text-base' onClick={()=>(handleChange(true))}>Show more...</button>}
            {mapThrough > 10 && <button className='pl-r pr-4 rounded-md bg-white text-base' onClick={()=>{handleChange(false)}}>Show less...</button>}
            </div>
        </div>
    </section>
  )
}
