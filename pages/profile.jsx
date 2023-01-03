import React from 'react'
import Header from '../components/Header'
import Editpassword from '../components/Editpassword'
import { getSession } from 'next-auth/react'

export default function profile({session}) {
  return (
    <div>
        <Header session={session}/>
        <Editpassword/>
    </div>
  )
}
export async function getServerSideProps(context){
    const session = await getSession({req:context.req})
    console.log(session)
    if (!session){
      return({
      redirect:{
        destination:"/",
        permanent:false
      }
    })
      
    }
    else{
      return({
        props:{
          session
        }
      })
    }
}
