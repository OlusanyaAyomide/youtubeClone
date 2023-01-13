import React,{Fragment,useContext} from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/feed/Header'
import Category from '../../components/feed/Category'
import Hero from '../../components/channels/Hero'
import Allcontext from '../../store/Allcontext'
import Footer from "../../components/feed/Footer"

export default function Channels({detail,video}) {
    // const router = useRouter()
    const {isDarkMode} = useContext(Allcontext)
  return (
    <div className={`${isDarkMode?"bg-dark-500":""}`}>
      <Fragment>
          <Header ishome={false}/>
          <div className='feed-control'>
          <Category/>
          <Hero detail = {detail} video ={video}/>
          </div>
          <Footer/>
      </Fragment>
    </div>
  )
}

export async function getServerSideProps(context){
  const {params} = context
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6c6fd5bcb8msh5430c505dbd79d0p1202e7jsnf26e7df8338d',
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