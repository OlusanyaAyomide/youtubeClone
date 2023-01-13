import React,{useEffect, useState,useContext} from 'react'
import Allcontext from '../../store/Allcontext'
import Tags from './Tags'
import FetchApi,{timeAgo} from '../../store/FetchApi'
import Image from 'next/image'

export default function  ChannelVideo({data,setToggle}) {
  const channelId =  data.items[0].snippet.channelId
  const [channelData,setChannelData] = useState(false)
  const {isDarkMode} = useContext(Allcontext)
  useEffect(()=>{
          async function Fetchvideos(){
            const data =await FetchApi(`search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=50`)
            setChannelData(data)
          }
          Fetchvideos()
      },[])
  let ChannelVideo
  if (channelData){
    ChannelVideo = channelData.items.map((item,key)=>{
      return(
          <div className={`w-full my-6'key={key} ${isDarkMode?"text-white":""}`} key={key}>
              <div className={`flex items-center rounded-lg ${isDarkMode?"bg-dark-400":"bg-gray-100"} my-6`}>
                  <div className='h-[80px] w-4/12 overflow-hidden rounded-tr-lg rounded-tl-lg relative' onClick={()=>{
                    setToggle(item.id.videoId)
                  }}>
                      <Image src={item.snippet.thumbnails.high.url} fill={true} alt='cover-image' style={{objectFit:"cover"}} sizes = "(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
                  </div>
                  <div className='w-8/12 ml-2' onClick={()=>setToggle(item.id.videoId)}>
                      <button className={`${isDarkMode?"text-gray-300":"text-gray-800"} block md:text-sm lg:text-base`} onClick={()=>
                        {setToggle(item.id.videoId)}}>
                        {item.snippet.title}
                      </button>
                      <h1 className='text-sm pr-1 text-gray-500 text-right'>{timeAgo(item.snippet.publishTime)}</h1>
                  </div>
              </div>
          </div>
      )
    })
  }

  return (
    <div className={`cont my-4 md:my-0 ${isDarkMode?"text-white":""}`}>
        <div className='mb-5 hidden md:block'>
          <Tags data ={data}/>
        </div>
        <h1 className='text-lg mb-4'>More from this channel</h1>
        {channelData && <div>
            {ChannelVideo}
        </div>}
        {!channelData && <div>Loading.....</div>}
    </div>
  )
}
