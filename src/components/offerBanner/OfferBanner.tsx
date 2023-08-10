"use client"
import React from 'react'
import bannerImg from "../../images/Group 1747.png"
import sideImg from "../../images/Offer2-img.svg"
import Image from 'next/image'
import {FiArrowRight} from "react-icons/fi"
import leftBanner from '../../images/Group 1748.png'
import sideImg1 from "../../images/Offer1-img.svg"
import useMediaQuery from '@mui/material/useMediaQuery';

const OfferBanner = () => {
  const matches = useMediaQuery('(max-width:685px)');
  const matches2 = useMediaQuery('(max-width:480px)');

  return (
    <div className='sm:px-[3.5%] px-[7%]  py-[100px]'>
      <div className='flex flex-wrap gap-5  justify-center items-center '>
      {/* <div className='grid grid-cols-2 gap-5 place-items-center '> */}

      <div style={{ position: "relative" }} className='relative w-fit '>
          <Image src={leftBanner} alt='' width={matches2?850:650} height={matches2?850:650}  className=' ' />
          <div className='absolute top-1/2 transform  -translate-y-1/2  sm:px-[40px] px-[20px]   '>
            <div className='text-white bg-[#FD9419] sm:w-[120px] w-[60px] text-center rounded-sm sm:py-[5px] py-[3px] sm:text-sm text-[8px] sm:mb-[10px] mb-[5px]'>Free delivery</div>
            <div className={`text-[#253D4E] md:text-3xl sm:text-xl text-xs font-bold sm:mb-[10px] mb-[5px]`}>Free delivery over Rs 2000</div>
            <div className='text-[#51150A]  sm:text-base text-[10px] font-semibold  '>Shop Rs 2000 product and get</div>
            <div className={`text-[#51150A]  sm:text-base text-[10px] font-semibold ${matches2?"mb-[10px]":matches?"mb-[20px]":"mb-[35px]"} `}>free delivery Anywhre. </div>
            <div className={`text-[#edeeec] text-xs  bg-[#588F27]  items-center w-fit flex gap-3 sm:px-[20px] px-[10px] ${matches2?"py-[5px]":matches?"py-[10px]":"py-[15px]"} rounded-md`}><span className='sm:text-base text-xs'>Shop Now</span><FiArrowRight className="sm:h-[20px] sm:w-[20px] h-[12px] w-[12px]"/></div>
          </div>
          <div className='absolute bottom-0 right-0 transform translate-y-1   '><Image src={sideImg1} alt='' width={matches2?60:matches?130:180} height={matches2?60:matches?130:180} className=' '/></div>
        </div>
        <div style={{ position: "relative" }} className='relative w-fit '>
          <Image src={bannerImg} alt='' width={650} height={650} className='' />
          <div className='absolute top-1/2 transform  -translate-y-1/2  sm:px-[40px] px-[20px]   '>
            <div className='text-white bg-[#51150A] sm:w-[120px] w-[60px] text-center rounded-sm sm:py-[5px] py-[3px] sm:text-sm text-[8px] sm:mb-[10px] mb-[5px]'>60% off</div>
            <div className={`text-[#253D4E] md:text-3xl sm:text-xl text-xs font-bold sm:mb-[10px] mb-[5px]`}>Organic Food</div>
            <div className='text-[#51150A]  sm:text-base text-[10px] font-semibold  '>Save up to 60% off on your first </div>
            <div className={`text-[#51150A]  sm:text-base text-[10px] font-semibold ${matches2?"mb-[10px]":matches?"mb-[20px]":"mb-[35px]"} `}> order </div>

            <div className={`text-[#edeeec] text-xs  bg-[#588F27]  items-center w-fit flex gap-3 sm:px-[20px] px-[10px] ${matches2?"py-[5px]":matches?"py-[10px]":"py-[15px]"} rounded-md`}><span className='sm:text-base text-xs'>Order Now</span><FiArrowRight className="sm:h-[20px] sm:w-[20px] h-[12px] w-[12px]"/></div>
          </div>
          <div className='absolute bottom-0 right-0 transform translate-y-1  '><Image src={sideImg} alt='' width={matches2?80:matches?160:250} height={matches2?80:matches?160:250}  /></div>
        </div>
      </div>
    
      </div>
  )
}

export default OfferBanner





