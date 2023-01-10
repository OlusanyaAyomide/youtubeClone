<<<<<<< HEAD
import React from 'react'

export default function index() {
  return (
    <div>index</div>
  )
=======
import React,{Fragment} from 'react'
import Head from "next/head"
import Header from '../components/feed/Header'
import Category from '../components/feed/Category'
import Feed from '../components/feed/Feed'
import MyHead from '../components/channels/MyHead'

export default function index({Data}) {
  return (
    <Fragment>
      <MyHead/>
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
      'X-RapidAPI-Key': 'f14f66dcf3msh77e651411894bd9p1bbd03jsn5e107a09d497',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'}
    })
    const data = await res.json()
    return data
  }
  try{
    const Data = await fetchData()
    return ({
      props:{Data}
    })
  }
  catch(err){return({notFound:true})}
>>>>>>> 32f4348c59311bc36226724caa95e93d584929c7
}
