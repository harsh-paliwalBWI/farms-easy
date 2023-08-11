"use client"
import React from 'react'
import Image from "next/image"
import OffersImg from "../../images/Rectangle 23976 (1).png"

const Offers = () => {
  return (
    <div>
        <div className='relative'><Image
          src={OffersImg}
          alt=''
          width={1000}
          height={1000}
          style={{
            width: "100vw",
            objectFit: "cover",
            maxWidth: "100%",
            height: "auto"
          }} />
        <div className='absolute top-1/2 transform  -translate-y-1/2   px-[3.5%]'>
            <div className='sm:font-bold font-semibold lg:text-lg md:text-base sm:text-sm text-xs md:mb-[10px] mb-0'>Special</div>
            <div className='text-[#FD941A] sm:font-bold font-semibold lg:text-5xl md:text-3xl sm:text-lg text-sm md:mb-[10px] mb-0' >Healthy and Fresh</div>
            <div  className='font-medium lg:text-2xl md:text-xl sm:text-lg text-xs md:mb-[10px] mb-0'>Vegetable</div>
            <div className='text-[#FF3939] sm:font-bold font-semibold lg:text-6xl md:text-4xl sm:text-2xl text-xs'>30% OFF</div>
        </div>
        </div>
    </div>
  );
}

export default Offers