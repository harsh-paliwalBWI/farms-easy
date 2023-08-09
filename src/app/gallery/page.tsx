
import Farmgallery from '@/components/farmgallery/Farmgallery'
import Headersection from '@/components/headersection/Headersection'
import LogosSection from '@/components/logosSection/LogosSection'
import Videosection from '@/components/videosection/Videosection'
import Leaf from '@/components/leaf/Leaf'
import React from 'react'

const Page = async() => {
  return (
    <div>
       <Leaf text={"Gallery"}/>
        <Farmgallery/>
        <Videosection/>
        <LogosSection/>
        
    </div>
  )
}

export default Page