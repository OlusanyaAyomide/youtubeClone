import React from 'react'
import Link from 'next/link'

export default function Card({item}) {
    console.log(item.snippet.thumbnails.high)
    const test= item.snippet.thumbnails.high
    console.log(item)
    console.log(test["url"])
  return (
    <div className='h-[240px] w-full rounded-lg mb-1 overflow-hidden p-10'>
        <div><img src={`${item.snippet.thumbnails.high.url}`} alt="" className='object-contain' /></div>
        <Link href={`channels/${item.id.channeId}`}>
            <h1 className='text-[18px] font-bold'>{item.snippet.channelTitle}</h1></Link>
    </div>
  )
}
