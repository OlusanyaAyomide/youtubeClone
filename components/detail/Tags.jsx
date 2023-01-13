import React,{useContext} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Allcontext from '../../store/Allcontext'

export default function Tags({data}) {
    const TagList = data.items[0].snippet.tags
    const {push} = useRouter()
    const {isDarkMode}  = useContext(Allcontext)
    const {setSearchParam,sethasrendered} = useContext(Allcontext)
    const navigate =(tag)=>{
        sethasrendered(true)
        setSearchParam(tag)
        push("/")
    }

    let rendered = 0
    const RenderedList = TagList?.map((item,key)=>{
        if(item.length < 7){
            rendered+=1
        }
        else{return}
        if(rendered > 10){return}
        return(
            <button className={`${isDarkMode?"bg-[#040414] border text-white":"bg-gray-100"} px-2 py-1 rounded-lg mx-1`} onClick={()=>navigate(item)} key ={key}> {item} </button>
        )
    })

  return (
    <div className={`w-full overflow-hidden ${isDarkMode?"bg-dark-500":"bg-white"}`}>
        <div className='flex py-2 overflow-auto'>
           {RenderedList} 
        </div>
    </div>
  )
}
