import React from 'react'
import ProfileVideo from './profileVideo'
import Image from 'next/image'
import FetchApi from '../../store/FetchApi'

export default function Hero({detail,video}) {
    const channelDetail = detail.items[0]
    const timg = channelDetail.brandingSettings.image.bannerExternalUrl
    const channelimg = channelDetail.snippet.thumbnails.high.url
    const subscriber=(number)=>{
        if(number.length > 3){
            return Math.round((Number(number))/1000)}
            return number}

  return (
    <div className='w-full md:w-10/12 lg:w-11/12 cont'>
        <div className='w-full h-[100px] md:h-[140px] lg:h-[180px] mt-2 mb-3 relative'>
            <Image src={timg} fill={true} alt='cover-image' style={{objectFit:"cover"}}/>
        </div>
        <div className='flex flex-col md:flex-row mt-4 md:items-center'>
            <div className='h-[70px] w-[70px] md:w-[90px] md:h-[90px] overflow-hidden rounded-full mx-auto md:mx-0 relative'>
                {/* <img src={channelDetail.snippet.thumbnails.high.url} alt="Channel-Image" className='object-cover h-full w-full' /> */}
                <Image src={channelimg} fill={true} alt="channel-img" style={{objectFit:"cover"}}/>
            </div>
            <div className='md:ml-2 mx-auto text-center mt-2'>
                <h1 className='text-xl font-semibold'>{channelDetail.brandingSettings.channel.title}</h1>
                <h1 className='text-sm lg:text-md md:text-[17px] my-1 text-gray-700 font-normal'>{channelDetail.snippet.customUrl}</h1>
                <h1 className='text-sm lg:text-md text-gray-700 '>{subscriber(channelDetail.statistics.subscriberCount)}k Subscribers</h1>
            </div>
        </div>
        <div className='text-center md:text-left text-gray-900'>
            <h1>{channelDetail.brandingSettings.channel.description}</h1>
        </div>
        <ProfileVideo video ={video}/>
    </div>
  )
}
