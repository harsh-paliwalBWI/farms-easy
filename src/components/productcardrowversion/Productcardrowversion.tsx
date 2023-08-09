import React from 'react';
import Image from 'next/image';
import VegtableImg from "../../images/Rectangle 23978.svg";
import { TiLocation } from 'react-icons/ti';

const ProductRowVersion = () => {
  return (
    <div className='border-[#479332] border-[2px] p-[1.5%] justify-between rounded-md flex '>
      {/* Image */}
      <div className='flex justify-center '>
        <Image src={VegtableImg} alt='Vegetable'   className=' w-[500] h-[500]'/>
      </div>


      {/* Details */}
      <div className='flex flex-col w-[60%]  '>
        {/* Product Name */}
        <div className='text-[#b4b5b5] text-sm font-medium'>Vegetables</div>
        {/* Product Details */}
        <div className='text-[#253D4E] font-semibold my-[5px] text-lg'>
          <span>Redish </span><span>5kg</span>
        </div>
        {/* Vendor and Location */}
        <div className='flex gap-4'>
          <div className='text-[12px] flex gap-1 my-[5px]'>
            <span className='text-[#b4b5b5] text-sm font-medium'>By</span>
            <span className='text-[#588F27] text-sm font-medium'>Organic Nature</span>
          </div>
          <div className='flex gap-1 items-center'>
            <TiLocation className="h-[100%]  text-[#598f26]" />
            <p className="font-medium text-sm">Devanahalli, Karnataka</p>
          </div>
        </div>
        {/* Description */}
        <div className='text-[#9f9e9e] text-sm mt-5'>
          <p>
          Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint.
          </p>
        </div>
      </div>
      {/* Price and Button */}
      <div className='flex flex-col gap-3    items-center'>
        <div className='flex items-center gap-2 text-lg mb-[5px]'>
          <span className='font-semibold'>Rs 1,200</span>
          <span className='text-[#ADADAD] text-sm line-through'>Rs 1,500</span>
        </div>
        <div className='bg-[#479332] text-white text-sm px-[25px] py-[10px] rounded-md w-fit'>I’M Interested</div>
      </div>
    </div>
  );
};

export default ProductRowVersion;
