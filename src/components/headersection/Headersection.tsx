"use client"

import React from 'react'
import leafimage from "../../images/Group 34147.svg"
import headingsectionimage from "../../images/Rectangle 2.svg"
import Image from "next/image"
const DUMMY_DATA=[{count:"30+",text:"Store Tie-Up"},{count:"20K",text:"Land Acres"},{count:"100+",text:"Organic Products"}]

const Headersection = () => {
  return (
    <div className='relative'>

      <Image
        src={headingsectionimage}
        className="  h-auto w-[100vw] object-cover"
        alt=""
        style={{
          maxWidth: "100%",
          height: "auto"
        }}></Image>
        
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#ffffff]">
        Gallery
      </div>
      <div className=" absolute top-1/2 left-1/2 transform  -translate-x-1/2   translate-y-4  sm:translate-y-6 md:translate-y-10 lg:translate-y-16 xl:translate-y-24">
      <Image
        src={leafimage}
        alt=""
        className='h-10 sm:h-12 md:h-24  lg:h-36   xl:h-auto '
        style={{
          maxWidth: "100%",
          height: "auto"
        }}></Image>
      </div>
            </div>
  );
}

export default Headersection