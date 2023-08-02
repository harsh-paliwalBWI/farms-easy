import React from 'react'
import VegtableImg from "../../images/Rectangle 23978.svg"
import DiscountImg from "../../images/Vector (3).png"
import heartImg from "../../images/Frame 34409.svg"
import Image from 'next/image'
import arrow from "../../images/Vector (1).svg"

const Products = async() => {
  return (
    <div>
        <div className='border-[#479332] border-[1px] w-fit p-[15px] rounded-md'>
            <div>
                <div className='flex items-center justify-between'>
                    <div className='relative'><Image src={DiscountImg} alt='' /> <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit text-xs text-center flex gap-2'><span>15%</span><span>off</span></div></div>
                    <div><Image src={heartImg} alt='' /></div>
                </div>
                <div><Image src={VegtableImg} alt=''/></div>
                <div className='text-[#ADADAD]'>Vegetables</div>
                <div className='text-[#253D4E]'><span>Redish </span><span>5kg</span></div>
                <div className='text-[#253D4E]'><span className='text-[#ADADAD]' >By</span><span className='text-[#588F27]'>Organic Nature</span></div>
                <div className='text-[#253D4E]'><span className='' >Rs 1,200</span><span className='text-[#ADADAD]'>Rs 1,500</span></div>
                <div className='flex items-center'>
                    <div className='bg-[#479332]'>I’M Interested</div>
                <div className='bg-[#51150A] flex items-center justify-center'><Image src={arrow} alt=''/></div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Products
