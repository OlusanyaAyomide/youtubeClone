import React from 'react'
import { placeholder } from '../../constant/contants'
export default function Hero() {
  return (
    <section className='w-full'>
        <div className='overflow-hidden h-[280px] sm:h-[320px] md:h-[280px] lg:h-[340px] w-full bg-red-500'>
          <img src={placeholder} alt="PlaceHolder" className='object-cover h-full w-full'/>
        </div>
        <div className='my-1'>
          <h1 className='mb-1 text-blue-500 text-sm'>Build Modern UI/Ux Website </h1>
          <h1 className='text-[20px] sm:text-[22px] lg:text-[24px]'>Build and Deploy 4 intercative react websites in 9 hours</h1>
        </div>
        {/* channel */}
        <div className='flex items-center'>
          <div className='h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full overflow-hidden'><img src={placeholder} alt={"Profile"} className="object-cover h-full w-full"/></div>
          <h1 className='ml-4 text-[18px] md:text-[20px]'>Javascript Matstery Channel<span className='text-sm ml-2 text-gray-500'>500 viewers</span></h1>  
        </div>   
    </section>
  )
}
