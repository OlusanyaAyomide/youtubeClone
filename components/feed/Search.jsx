import React,{useState,useContext} from 'react'
import Allcontext from '../../store/Allcontext'
import { useRouter } from 'next/router'

export default function Search({bool,toggle}) {
  const Allctx = useContext(Allcontext)
    //true mobile
    const [input,setinput] = useState("")
    const {query,push} = useRouter()
  return (
    <div className={`flex items-center ${bool?"absolute top-4 w-full inset-0 py-2 pr-2":""}`}>
        <span className={`fa fa-long-arrow-left ${Allctx.isDarkMode?"text-white":""} text-xl mr-2 ${bool?"":"hidden"} font-bold w-1/12 text-center`} onClick={()=>toggle()}></span>
        <input placeholder="Search MeTube" value={input} className={`px-2 h-[36px] text-[18px] outline-none font-semibold text ${!bool?"w-9/12 hidden md:block":" w-10/12"} bg-gray-500/20 rounded-tl-[16px] rounded-bl-[16px] border border-t-black/70 border-r-0 border-l-black/70 border-b-black/70 ${Allctx.isDarkMode?"text-white":""}`} onChange={(e)=>{
          setinput(e.target.value)
        }}/>
        <span className={`bg-gray-500/20 w-2/12 ${!bool?"hidden md:block":""} block pt-1 border border-l-0 border-t-black/70 border-r-black/70 border-b-black/70 rounded-br-[16px] rounded-tr-[16px] h-[36px] text-center text-xl font-semibold  text-gray-700 px-2`} onClick={()=>{
          setinput("")
          if (input ===""){return}
          Allctx.sethasrendered(true)
          Allctx.setSearchParam(input)
          if(query.channelid || query.detailid){push("/")}
        }}><i className='fa fa-search mr-2 block'></i></span>
    </div>
  )
} 
