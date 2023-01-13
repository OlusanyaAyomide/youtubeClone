import React from 'react'

export default function Footer() {
  return (
    <div className='bg-youtube-500'>
        <div className='flex flex-col md:flex-row mb-2 py-10 w-full cont border-b'>
            <div className="flex items-center w-6/12">
                <span className='py-[3px] px-[14px] mr-1 md:mr-2 bg-white rounded-lg'><i className={`fa fa-play  text-extrabold text-youtube-500 ml-1`}></i></span><span className='font-sans font-bold tracking-tighter leading-2 text-lg md:text-xl text-white'>MeTube</span>
            </div>
        <div className='text-white w-full md:w-6/12 mt-8 md:mt-0 lg:text-[18xl]'>A light Weight You Tube Clone</div>
        </div>
        <h1 className='text-[12px] pb-4 text-white cont flex items-center'>All Rights Reserved</h1>
    </div>
  )
}
