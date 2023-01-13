import React,{Fragment,useState,useEffect,useContext} from 'react'
import Header from '../../components/feed/Header'
import Hero from '../../components/detail/Hero'
import Description from '../../components/detail/Description'
import Comments from '../../components/detail/Comments'
import ChannelVideo from '../../components/detail/ChannelVideo'
import Allcontext from '../../store/Allcontext'
import FetchApi from '../../store/FetchApi'
import Footer from "../../components/feed/Footer"

export default function VideoDetail({data,comments}) {
  const [Toggle,setToggle] = useState(null)
  const [dataStore,setdataStore] = useState({data,comments})
  const {isDarkMode} = useContext(Allcontext)

  useEffect(()=>{
    if (!Toggle){return}
    async function FetchData(){
      const data = await FetchApi(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${Toggle}`)
      const comments = await FetchApi(`commentThreads?part=snippet&videoId=${Toggle}&maxResults=100`)
      if(data,comments){
        setdataStore({data,comments})
        window.scroll(0,0)
      }
    }
    FetchData()
  },[Toggle])


  return (
    <Fragment>
      <div className={isDarkMode?"bg-dark-500":""}>
        <Header ishome={false}/>
        <div className='flex flex-col md:flex-row flex-wrap'>
          <div className='cont w-full md:w-8/12'>
            <Hero data={dataStore.data}/>
            <Description data={dataStore.data}/>
            <Comments comments ={dataStore.comments}/>
          </div>
          <div className='w-full md:w-4/12'>
           <ChannelVideo data={dataStore.data} setToggle ={setToggle}/>
          </div>
        </div>
        <Footer/>
      </div>
    </Fragment>
  )
}

export async function getServerSideProps(context){
  const {params} = context
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f14f66dcf3msh77e651411894bd9p1bbd03jsn5e107a09d497',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  }; 
  async function FetchVideoDetail(){
    const res = await fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${params.detailid}`,options)
    const data = await res.json()
    return data
  }
  async function FetchComment(){
    const res = await fetch(`https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${params.detailid}&maxResults=100`,options)
    const data = await res.json()
    return data
  }
  const data = await FetchVideoDetail()
  const comments = await FetchComment()
  return({
    props:{data,comments}
 })
}