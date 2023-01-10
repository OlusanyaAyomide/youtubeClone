import React,{Fragment} from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/feed/Header'
import MyHead from '../../components/channels/MyHead'
import Category from '../../components/feed/Category'
import Hero from '../../components/channels/Hero'
import ProfileVideo from '../../components/channels/profileVideo'
export default function Channels({detail,video}) {
    const router = useRouter()
    console.log(router.query.channelid)
  return (
    <div><Fragment>
          <MyHead ishome={false}/>
          <Header/>
          <div className='feed-control'>
          <Category/>
          <Hero detail = {detail} video ={video}/>
        
          </div>
 
      </Fragment></div>
  )
}

export async function getServerSideProps(context){
  const {params} = context
  console.log(params.channelid)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f14f66dcf3msh77e651411894bd9p1bbd03jsn5e107a09d497',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  }; 
  
  async function FetchDetail(){
    const res = await fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${params.channelid}`,options)
    const data = await res.json()
    return data
  }
  async function FetchVideo(){
    const res = await fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=${params.channelid}&part=snippet%2Cid&order=date&maxResults=50`,options)
    const data = await res.json()
    return data
  }
  try{
    const channelDetail = await FetchDetail()
    const channeVideo = await FetchVideo()
    return({
      props:{
        detail:channelDetail,
        video:channeVideo,
      }
    })
  }catch(err){console.log(err)
    return({
      notFound:true
    })
  }


}