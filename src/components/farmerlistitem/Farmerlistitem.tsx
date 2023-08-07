import React from 'react';
import Image from 'next/image';
import { FC } from "react";

interface Props {
  item?: any,
}

const Farmerlistitem: FC<Props> = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="  flex bg-[#f8f9f8]  rounded-3xl  px-8 py-8  ">
      <div className="bg-white w-[12rem] h-[12rem]  aspect-[1/1]  flex items-center justify-center rounded-xl">
        <Image src={item.fermerlistImage} alt='' />
      </div>

      <div className="  text-left  ml-[1.5rem] ">
        <h2 className="  text-xl font-semibold text-black-200 ">{item.heading}</h2>
        <p className="mb-[2rem]  text-[#69b665] inline-block text-sm">{item.categories}</p>
        <p className="font-medium text-sm mb-[1rem]">{item.location}</p>
        <p className="text-sm   text-[#8d8d8d]">{item.text}</p>
      </div>
    </div>
  );
};

export default Farmerlistitem;
