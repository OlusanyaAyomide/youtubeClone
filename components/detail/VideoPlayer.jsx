import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'

export default function VideoPlayer({videoId}) {
  const [pass,setpass] = useState(false)
  useEffect(()=>{setpass(true)})
  if (pass){
    return (
      <ReactPlayer controls={true} url ={`http://www.youtube.com/watch?v=${videoId}`} width="100%" height="100%"/>
    )
  }
  else{
    return(
      <div className='h-full w-full bg-gray-300'></div>
    )
  }

}
