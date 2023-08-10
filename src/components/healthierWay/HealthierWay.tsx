"use client";
import React from 'react';
import BannerImg from "../../images/healthierBanner.svg";
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = (await res.json());
//   return users;
// }


const HealthierWay = () => {
  // const { data } = useQuery({
  //   queryKey: ["hydrate-users"],
  //   queryFn: () => getUsers(),
  // });

  return (
    <div className='relative '>
      <div className='relative '>
        <div style={{ position: "relative" }}>
          <Image src={BannerImg} alt='' width={1000} height={1000} style={{ width: "100vw", objectFit: "cover" }} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center  w-[90%]  '>
            <div className='text-[#B4EF52] 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg text-base  font-semibold sm:mb-[25px] '>Organic Made Easy</div>
            <div className='text-white 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-xl text-base font-bold sm:mb-[15px] '>Choose Best Healthier Way of Life</div>
            <div className='text-[#edeeec] mb-[5px] md:text-lg  sm:text-sm text-xs '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </div>
            <div className='text-[#edeeec]  md:text-lg sm:text-sm text-xs sm:pb-0 '>commodo con</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthierWay;
