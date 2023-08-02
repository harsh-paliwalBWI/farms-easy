
import Farmgallery from '@/components/farmgallery/Farmgallery'
import Headersection from '@/components/headersection/Headersection'
import LogosSection from '@/components/logosSection/LogosSection'
import Videosection from '@/components/videosection/Videosection'
import React from 'react'

const Page = async() => {
  return (
    <div>
        <Headersection/>
        <Farmgallery/>
        <Videosection/>
        <LogosSection/>
        
    </div>
  )
}

export default Page