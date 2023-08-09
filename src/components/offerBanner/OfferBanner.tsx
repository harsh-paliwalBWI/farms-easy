import React from 'react'
import bannerImg from "../../images/Group 1747.png"
import sideImg from "../../images/Offer2-img.svg"
import Image from 'next/image'
import {FiArrowRight} from "react-icons/fi"
import leftBanner from '../../images/Group 1748.png'
import sideImg1 from "../../images/Offer1-img.svg"

const OfferBanner = () => {
  return (
    <div className='px-[3.5%]  py-[100px]'>
      <div className='flex  gap-5 3xl:gap-[5%] justify-center items-center '>
      {/* <div className='grid grid-cols-2 gap-5 place-items-center '> */}

      <div style={{ position: "relative" }} className='relative w-fit '>
          <Image src={leftBanner} alt='' width={650} height={650} className=' ' />
          <div className='absolute top-1/2 transform  -translate-y-1/2  px-[40px]   '>
            <div className='text-white bg-[#FD9419] w-[120px] text-center rounded-sm py-[5px] text-sm mb-[10px]'>Free delivery</div>
            <div className='text-[#253D4E] md:text-3xl text-xl font-bold mb-[10px]'>Free delivery over Rs 2000</div>
            <div className='text-[#51150A]  text-base font-semibold  '>Shop Rs 2000 product and get</div>
            <div className='text-[#51150A]  text-base font-semibold mb-[35px] '>free delivery Anywhre. </div>
            <div className='text-[#edeeec] text-xs  bg-[#588F27]  items-center w-fit flex gap-3 px-[20px] py-[15px] rounded-md'><span className='text-base'>Shop Now</span><FiArrowRight className="h-[20px] w-[20px]"/></div>
          </div>
          <div className='absolute bottom-0 right-0 transform translate-y-1   '><Image src={sideImg1} alt='' width={180} height={180} className=' '/></div>
        </div>
        <div style={{ position: "relative" }} className='relative w-fit '>
          <Image src={bannerImg} alt='' width={650} height={650} className='' />
          <div className='absolute top-1/2 transform  -translate-y-1/2  px-[40px]   '>
            <div className='text-white bg-[#51150A] w-[120px] text-center rounded-sm py-[5px] text-sm mb-[10px]'>60% off</div>
            <div className='text-[#253D4E] md:text-3xl text-xl font-bold mb-[10px]'>Organic Food</div>
            <div className='text-[#51150A]  text-base font-semibold   '>Save up to 60% off on your first </div>
            <div className='text-[#51150A]  text-base font-semibold mb-[35px] '> order </div>

            <div className='text-[#edeeec] text-xs  bg-[#588F27]  items-center w-fit flex gap-3 px-[20px] py-[15px] rounded-md'><span className='text-base'>Order Now</span><FiArrowRight className="h-[20px] w-[20px]"/></div>
          </div>
          <div className='absolute bottom-0 right-0 transform translate-y-1  '><Image src={sideImg} alt='' width={250} height={250} /></div>
        </div>
      </div>
    
      </div>
  )
}

export default OfferBanner





