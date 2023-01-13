import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Card({item}) {
    const test= item.snippet.thumbnails.high.url
  return (
    <div className='h-[240px] w-full rounded-lg mb-1 overflow-hidden px-4'>
        <div className='h-[200px] rounded-xl overflow-hidden relative'>
          {/* <Link href={`channels/${item.id.channelId}`}> */}
            {/* <img src={test} alt="" className='object-cover h-full w-full' /> */}
            <Image src={test} fill={true} alt="ProfileImage" style={{objectFit:"cover"}} sizes = "(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
          {/* </Link> */}
          </div>
        <Link href={`/channels/${item.id.channelId}`}>
            <h1 className='text-[18px] font-bold'>{item.snippet.channelTitle}</h1>
          </Link>
    </div>
  )
}
