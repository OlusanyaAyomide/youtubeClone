import React,{useState} from 'react'
import { Demodesc } from '../../constant/contants'

export default function Description() {
    const [isfull,setisfull] = useState(false)
  return (
    <div className='w-full my-6 py-2 bg-gray-100 rounded-lg cont'>
        <span className="inline-block mr-2">308k views</span>
        <span className="inline-block ml-2">1 month Ago</span>
        <div className={`relative ${!isfull?"h-[100px]":"h-full"} overflow-hidden text-sm`}>
            <h1>{Demodesc}</h1>
        <button className="absolute rounded-3xl pl-8 bg-gray-100 md:px-3 -bottom-1 py-1 right-0 md:pl-16 font-semibold" onClick={
            ()=>{setisfull((prev=>!prev))}
        }>Show {!isfull?"More":"Less"}</button>
        </div>
    </div>
  )
}
