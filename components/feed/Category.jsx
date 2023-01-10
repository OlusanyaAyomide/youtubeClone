import React, { useContext } from 'react'
import { NavbarIcons } from '../../constant/contants'
import Allcontext from '../../store/Allcontext'
import { useRouter } from 'next/router'

export default function Category() {
  const Allctx = useContext(Allcontext)
  const {setSearchParam,sethasrendered,hasrendered} = Allctx
  const {query,push} = useRouter()

  const handleChange=(item)=>{
    if(!hasrendered){ sethasrendered(true) }
    setSearchParam(item)
    if (!query.id){
      push("/")
    }
  }
  const NavIcons = NavbarIcons.map((item,key)=>{
    return(
      <button className ="category-button text-youtube-500 mx-2 hover:text-white" onClick={()=>{handleChange(item.title!=="Home"?item.title:"New")}}
       key={key}>
        <span className= {`my-1 block  hover:text-black text-xl text-center ${item.title === "Sport"?"md:mr-1":"md:mr-3"}`}><i className={`fa ${item.icon}`}></i></span>
        <span className= 'my-1 mt-2 text-center text-black hover:text-white block md:ml-3 font-semibold capitalize px-6 md:px-0'>{item.title}</span>
      </button>
    )
  })
  return (
    <div className = "overflow-hidden pl-2 cont md:w-2/12 w-full">
      <div className='flex flex-row md:flex-col overflow-auto md:-ml-2'>
        {NavIcons}
      </div>
    </div>
  )
}
