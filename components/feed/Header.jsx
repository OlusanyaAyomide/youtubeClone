import React,{useState} from 'react'
import Search from './Search'
import Link from 'next/link'

export default function Header({ishome}) {

  const [issearching,setissearching] = useState(false)
  const changeToggle = ()=>{setissearching((prev=>!prev))}
  return (
    <div className={`cont flex justify-between items-center navshadow relative py-2 ${issearching ? "mb-8":""}`}>
      <div className='w-4/12'>
        {!issearching && ishome && <div className="flex items-center"><span className='py-[3px] px-[14px] mr-1 md:mr-2 bg-youtube-500 rounded-lg'><i className='fa fa-play  text-extrabold text-white ml-1'></i></span><span className='font-sans font-bold tracking-tighter leading-2 text-lg md:text-xl'>YouTube</span></div>}
        {!ishome && !issearching && <Link href={"/"}><span><i className='fa fa-long-arrow-left ml-5 text-xl font-bold'></i></span></Link>}
      </div>
      <div className='md:w-9/12'><Search bool={issearching} toggle = {changeToggle}/></div>
      {!issearching && <div className='w-3/12 text-center flex pl-5 justify-between'><button onClick={changeToggle} className="md:hidden"
      ><i className='fa fa-search text-xl text-gray-700'></i></button>
      <div className='bg-cyan-500 rounded-full h-[32px] w-[32px]'></div>
      </div>}
    </div>
  )
}