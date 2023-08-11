"use client"

import React,{FC} from 'react'
import leaf from "../../images/Rectangle 2 (3).svg"
import Image from "next/legacy/image"
import smallLeaf from "../../images/Group 34147.svg"
interface Props{
text:string
}
const Leaf:FC<Props> = ({text}) => {
  return (
    <div className='flex flex-col items-center'>
<div style={{ position: "relative" }} className=''>
          <Image src={leaf} alt='' width={1000} height={1000} style={{ width: "100vw", objectFit: "cover" }} className='' />
           <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center  w-[90%] text-white font-semibold sm:text-4xl text-xl '>
           {text}
          </div>
          </div>
          <div className='md:translate-y-[-50px] sm:translate-y-[-30px] translate-y-[-15px]'>
          <Image src={smallLeaf} alt='' width={80} height={80} className='md:w-[100%] md:h-[100%] sm:w-[60px] sm:h-[60px] h-[30px] w-[30px] '/>
          </div>
    </div>
  )
}

export default Leaf