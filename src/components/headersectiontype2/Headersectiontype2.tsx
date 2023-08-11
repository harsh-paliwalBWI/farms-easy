"use client"

import React, { FC } from 'react';
import headingsectionimage from "../../images/Rectangle 2.svg";
import Image from "next/image";

interface Props {
  heading: string;
}

const Headersectiontype2: FC<Props> = ({ heading }) => {
  return (
    <div className='relative'>
      <Image
        src={headingsectionimage}
        className="h-auto w-[100vw] object-cover"
        alt=""
        style={{
          maxWidth: "100%",
          height: "auto"
        }}></Image>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className='text-lg text-[#ffffff] font-semibold text-center sm:mb-[20px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>{heading}</div>
        <div className='flex text-white gap-3 text-sm sm:text-sm md:text-lgbase lg:text-lg xl:text-xl justify-center items-center'>
          <p className='text-white'>Home</p>
          <div className="rounded-full bg-[#A4D672] w-[10px] h-[10px]"></div>
          <p className='text-white'>Vegetables</p>
        </div>
      </div>
    </div>
  );
}

export default Headersectiontype2;
