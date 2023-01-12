import React,{Fragment} from 'react'
import Head from "next/head"
import Header from '../components/feed/Header'
import Category from '../components/feed/Category'
import Feed from '../components/feed/Feed'
import MyHead from '../components/channels/MyHead'

export default function index({Data}) {
  return (
    <Fragment>
      <Header ishome = {true}/>
        <div className='feed-control'>
      <Category/>
      <Feed data ={Data}/>
      </div>

    </Fragment>
  )
}
export async function getServerSideProps(context){
  async function fetchData (){
    console.log("fetching")
    const res = await fetch("https://youtube-v31.p.rapidapi.com/search?maxResults=50&part=snippet&q=New",{
      headers:{
      'X-RapidAPI-Key': '6c6fd5bcb8msh5430c505dbd79d0p1202e7jsnf26e7df8338d',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'}
    })
    const data = await res.json()
    return data
  }
  try{
    const Data = await fetchData()
    console.log(Data)
    return ({
      props:{Data}
    })
  }
  catch(err){return({notFound:true})}

}
