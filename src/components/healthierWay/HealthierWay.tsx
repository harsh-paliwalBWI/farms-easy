import React from 'react';
import BannerImg from "../../images/healthierBanner.svg";
import Image from 'next/image';

const HealthierWay =async() => {
  return (
    <div className='relative '>
      <div className='relative '>
        <div style={{ position: "relative" }}>
          <Image src={BannerImg} alt='' width={1000} height={1000} style={{ width: "100vw", objectFit: "cover" }} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center  w-[90%]  '>
            <div className='text-[#B4EF52] md:text-2xl text-lg  font-semibold sm:mb-[15px] '>Organic Made Easy</div>
            <div className='text-white md:text-4xl text-xl font-bold sm:mb-[15px] '>Choose Best Healthier Way of Life</div>
            <div className='text-[#edeeec] mb-[5px] text-xs '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </div>
            <div className='text-[#edeeec] text-xs sm:pb-0 pb-[20px]'>commodo con</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthierWay;
