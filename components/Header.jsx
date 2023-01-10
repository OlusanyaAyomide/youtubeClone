import React,{useContext, useEffect} from 'react'
import Link from 'next/link'
import AuthContext from '../store/auth-context'
import { useSession,signOut } from 'next-auth/react'
export default function Header({session}) {
  // console.log(test)
  const Authctx = useContext(AuthContext)
   const {data:sessions,status} = useSession()
  useEffect(()=>{
    if(!session){return}
    Authctx.AddSessionData({
      username:sessions.user.email.username,
      email:sessions.user.email.email,
      id:sessions.user.email.id
    })
  },[session])
  return (
    <div className='flex bg-[#5f1272] py-4'>
      <div className='w-7/12 md:w-6/12 flex items-center'>
        <h1 className='text-center font-bold w-full text-[#f0e2f0] text-xl md:text-2xl'>Next Auth</h1>
      </div>
      <div className='w-5/12 md:w-6/12 flex justify-around items-center'>
      {!session && <Link href="/"><button className='text-[#f0e2f0] font-semibold px-2'>Login</button></Link>}
        <Link href="/profile"><button className='text-[#f0e2f0] font-semibold px-2'>profile</button></Link>
       {session && <button className='text-white px-4 py-2 border border-[#f0e2f0] rounded-md' onClick={()=>{signOut()}}>Logout</button>}
      </div>
    </div>
  )
}
