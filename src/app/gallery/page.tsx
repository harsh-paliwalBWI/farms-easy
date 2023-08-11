
import Farmgallery from '@/components/farmgallery/Farmgallery'
import LogosSection from '@/components/logosSection/LogosSection'
import Videosection from '@/components/videosection/Videosection'
import Button from '@/components/Button/Button'
import Leaf from '@/components/leaf/Leaf'
import React from 'react'

const Gallery = async() => {
  return (
    <div>
       <Leaf text={"Gallery"}/>
        <Farmgallery/>
        <div className='justify-center flex  mb-[6rem] mt-[6rem]'>
           <Button text="Load More" className='md:px-[60px] md:py-[20px] px-[30px]  py-[10px]'/>
        </div>
        
        <Videosection/>
        <LogosSection/>
        
    </div>
  )
}

export default Gallery