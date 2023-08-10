"use client"
import React from 'react'
import img from "../../images/Frame 34407.svg"
import Image from 'next/image'

const SellsCard = () => {
  return (
    // <div className=' w-fit'>
    <div className='border-[#479332] border-[1px]   rounded-md flex justify-center h-[400px] w-[230px] relative'>
      <div>
       
        <div className='  w-fit'><Image src={img} alt='' width={1000}  height={1000} style={{width:"230px",height:"auto"}} className='rounded-t-sm '/></div>
        <div className='px-[15px] absolute bottom-[15px] w-full'>
        <div className='text-[#ADADAD] text-[12px]'>Vegetables</div>
        <div className='text-[#253D4E] font-semibold my-[10px] flex gap-2 '><span>Mallika Mango</span><span>5kg</span></div>
        <div className='text-[12px] flex gap-1 my-[10px]'><span className='text-[#ADADAD]' >By</span><span className='text-[#588F27] font-medium'>Organic Nature</span></div>
        <div className='flex items-center gap-2 mb-[20px]'><span className='font-semibold ' >Rs 1,200</span><span className='text-[#ADADAD] text-sm line-through font-semibold'>Rs 1,500</span></div>
          <div className='bg-[#588F27] text-white text-base w-full py-[10px] rounded-md text-center'>I’M Interested</div>
        </div>
      </div>
    </div>
  // </div>
  )
}

export default SellsCard