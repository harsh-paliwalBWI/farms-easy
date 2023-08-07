"use client"
import React from 'react'
import Image from 'next/image'
import OffersImg from "../../images/Rectangle 23976 (1).png"

const Offers = () => {
  return (
    <div>
        <div className='relative'><Image src={OffersImg} alt='' width={1000} height={1000} style={{ width: "100vw", objectFit: "cover" }}/>
        <div className='absolute top-1/2 transform  -translate-y-1/2   px-[3.5%] '>
            <div className='font-bold text-lg mb-[10px]'>Special</div>
            <div className='text-[#FD941A] font-bold text-5xl mb-[10px]' >Healthy and Fresh</div>
            <div  className='font-medium text-2xl mb-[10px]'>Vegetable</div>
            <div className='text-[#FF3939] font-bold text-6xl'>30% OFF</div>
        </div>
        </div>
    </div>
  )
}

export default Offers