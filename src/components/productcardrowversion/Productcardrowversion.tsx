"use client"

import React from 'react';
import Image from "next/legacy/image";
import { useState } from 'react'
import Modal from '@/components/modal/Modal'
import VegtableImg from "../../images/Rectangle 23978.svg";
import { TiLocation } from 'react-icons/ti';

const ProductRowVersion = () => {

  
  const [modalOpen, setModalOpen] = useState(false); 
  const handleOpenModal = () => {    setModalOpen(true);  };
  const handleCloseModal = () => {    setModalOpen(false);  };  

  return (
    <div className='border-[#479332] border-[1px] p-[1.5%] justify-between rounded-md flex flex-col sm:flex-row'>

      <div className='flex justify-center'>
        <Image src={VegtableImg} alt='Vegetable' className='w-[500] h-[500] sm:w-[300] sm:h-[300] md:w-[400] md:h-[400]' />
      </div>

      <div className='flex flex-col w-full md:w-[60%]'>
        <div className='text-[#b4b5b5] text-sm font-medium'>Vegetables</div>
        <div className='text-[#253D4E] font-semibold my-[5px] text-lg'>
          <span>Redish </span><span>5kg</span>
        </div>
        <div className='flex gap-4'>
          <div className='text-[12px] flex gap-1 my-[5px]'>
            <span className='text-[#b4b5b5] text-sm font-medium'>By</span>
            <span className='text-[#588F27] text-sm font-medium'>Organic Nature</span>
          </div>
          <div className='flex h-5 gap-1 items-center'>
            <TiLocation className="h-[100%] w-auto text-[#598f26]" />
            <p className="font-bold text-xs">Devanahalli, Karnataka</p>
          </div>
        </div>
        <div className='text-[#9f9e9e] text-sm mt-5'>
          <p>
            Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-3 items-center sm:items-start'>
        <div className='flex items-center gap-2 text-lg mb-[5px]'>
          <span className='font-semibold'>Rs 1,200</span>
          <span className='text-[#ADADAD] text-sm line-through'>Rs 1,500</span>
        </div>
        
        <div className='bg-[#479332] w-full text-white text-sm px-[25px] py-[10px] rounded-md ' onClick={handleOpenModal}>I’M Interested</div>
        <div className='bg-[#51150A] w-full text-white text-sm px-[25px] text-center py-[10px] rounded-md '>Buy Now</div>
        
        
      </div>
      {modalOpen && <Modal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default ProductRowVersion;
