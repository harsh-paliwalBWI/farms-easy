"use client"

import React from 'react';
import Image from 'next/image';
import { FC } from "react";
import { TiLocation } from 'react-icons/ti';

interface Props {
  item?: any,
}

const Farmerlistitem: FC<Props> = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-5 bg-[#f8f9f8] rounded-3xl p-4 md:p-8 md:flex-row">
    <div className="bg-white w-[10rem] h-[10rem] md:w-[12rem] md:h-[12rem] aspect-[1/1] flex items-center justify-center rounded-xl">
      <Image src={item.fermerlistImage} alt='' />
    </div>

    <div className="ml-4 md:ml-6 text-left">
      <h2 className="text-xl font-semibold text-black-200">{item.heading}</h2>
      <p className="mb-4 md:mb-6 text-[#189213] text-sm">{item.categories}</p>
      <div className='flex h-5  gap-1 items-center my-[5px] mb-2 md:mb-4'>
            <TiLocation className="h-[100%] w-auto text-[#588F27]" />
            <p className="font-medium text-sm  ">{item.location}</p>
      </div>
      
      <p className="text-sm text-[#8d8d8d]">{item.text}</p>
    </div>
  </div>
  );
};

export default Farmerlistitem;
