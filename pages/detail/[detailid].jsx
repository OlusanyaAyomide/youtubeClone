import React,{Fragment} from 'react'
import MyHead from '../../components/channels/MyHead'
import Header from '../../components/feed/Header'
import Hero from '../../components/detail/Hero'
import ChannelDetail from '../../components/detail/channelDetail'
import Description from '../../components/detail/Description'

export default function VideoDetail() {
  return (
    <Fragment>
        <MyHead/>
        <Header ishome={false}/>
        <div className='flex flex-col md:flex-row flex-wrap'>
          <div className='cont w-full md:w-8/12'>
            <Hero/>
            <Description/>
          </div>
          <div className='w-full md:w-4/12 h-[200vh]'>
           <ChannelDetail/>
          </div>
        </div>
    </Fragment>
  )
}
