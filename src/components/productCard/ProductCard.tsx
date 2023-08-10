import React from 'react'
import VegtableImg from "../../images/Rectangle 23978.svg"
import DiscountImg from "../../images/Vector (3).png"
import heartImg from "../../images/Frame 34409.svg"
import Image from 'next/image'

const ProductCard = () => {
  return (
    
      <div className='border-[#479332] border-[1px] w-[230px] h-[345px] p-[15px] rounded-md flex justify-center '>
        <div>
          <div className='flex items-center justify-between'>
            <div className='relative'><Image src={DiscountImg} alt='' width={65} height={65} /> <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit text-[12px] text-center flex gap-2 text-white font-medium '><span>15%</span><span>OFF</span></div></div>
            <div><Image src={heartImg} alt='' /></div>
          </div>
          <div className=' my-[10px]'><Image src={VegtableImg} alt='' /></div>
          <div className='text-[#ADADAD] text-[12px]'>Vegetables</div>
          <div className='text-[#253D4E] font-semibold my-[5px]'><span>Redish </span><span>5kg</span></div>
          <div className='text-[12px] flex gap-1 my-[5px]'><span className='text-[#ADADAD]' >By</span><span className='text-[#588F27] font-medium'>Organic Nature</span></div>
          <div className='flex items-center gap-2 mb-[5px]'><span className='font-semibold ' >Rs 1,200</span><span className='text-[#ADADAD] text-sm line-through'>Rs 1,500</span></div>
          <div className='flex items-center justify-between gap-3'>
            <div className='bg-[#588F27] text-white text-xs px-[20px] py-[10px] rounded-md w-full text-center '>I’M Interested</div>
            {/* <div className='bg-[#51150A] flex items-center justify-center px-[12px] py-[11px] rounded-md'><Image src={arrow} alt='' /></div> */}
          </div>

        </div>
      </div>
    
  )
}

export default ProductCard