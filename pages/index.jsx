import React,{Fragment,useContext} from 'react'
import Head from "next/head"
import Header from '../components/feed/Header'
import Category from '../components/feed/Category'
import Feed from '../components/feed/Feed'
import Allcontext from '../store/Allcontext'
import Footer from '../components/feed/Footer'

export default function index({Data}) {
  const {isDarkMode} = useContext(Allcontext)
  return (
    <Fragment>
      <div className={isDarkMode?"bg-dark-500":"bg-white"}>
      <Header ishome = {true}/>
        <div className='feed-control'>
      <Category/>
      <Feed data ={Data}/>
      </div>
      </div>
      <Footer/>
    </Fragment>
  )
}
export async function getServerSideProps(context){
  async function fetchData (){
    const res = await fetch("https://youtube-v31.p.rapidapi.com/search?maxResults=50&part=snippet&q=Latest",{
      headers:{
      'X-RapidAPI-Key': '6c6fd5bcb8msh5430c505dbd79d0p1202e7jsnf26e7df8338d',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'}
    })
    const Data = await res.json()
    const status = res.ok
    return {Data,status}
  } 
  try{
    const {Data,status}= await fetchData()
    if(!status){
      return{notFound:true}
    }
    return ({
      props:{Data}
    })
  }
  catch(err){return({notFound:true})}

}
