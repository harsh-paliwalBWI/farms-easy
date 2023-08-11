"use client"

import React from 'react'
import VegtableImg from "../../images/Rectangle 23978.svg"
import DiscountImg from "../../images/Vector (3).png"
import { useState } from 'react'
import Modal from '@/components/modal/Modal'
import { TiLocation } from 'react-icons/ti';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { BsHeart } from 'react-icons/bs';

import Image from "next/image"




const ProductCard = () => {

  const [modalOpen, setModalOpen] = useState(false); 
  const handleOpenModal = () => {    setModalOpen(true);  };
  const handleCloseModal = () => {    setModalOpen(false);  };  

  return (
    <div className='border-[#479332] border-[1px] w-[full] md:w-[full] p-[12px] rounded-md flex'>
    <div className='w-full'>
      <div className='flex items-center justify-between'>
        <div className='relative'>
          <Image
            src={DiscountImg}
            alt=''
            width={65}
            height={65}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit text-[12px] text-center flex gap-2 text-white font-medium'>
            <span>15%</span>
            <span>OFF</span>
          </div>
        </div>
        <div>
          <BsHeart className='h-[18px] w-[20.59px] text-[#777777]' />
        </div>
      </div>
      <div className='my-[10px] flex justify-center'>
        <Image
          src={VegtableImg}
          alt=''
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <div className='text-[#ADADAD] text-[12px]'>Vegetables</div>
      <div className='text-[#253D4E] font-semibold my-[5px]'>
        <span>Redish </span>
        <span>5kg</span>
      </div>
      <div className='text-[12px] flex gap-1 my-[5px]'>
        <span className='text-[#ADADAD]'>By</span>
        <span className='text-[#588F27] font-medium'>Organic Nature</span>
      </div>
      <div className='flex h-5  gap-1 items-center my-[5px] '>
            <TiLocation className="h-[100%] w-auto text-[#598f26]" />
            <p className="font-bold text-xs">Devanahalli, Karnataka</p>
      </div>
      <div className='flex items-center gap-2 mb-[5px]'>
        <span className='font-semibold'>Rs 1,200</span>
        <span className='text-[#ADADAD] text-sm line-through'>Rs 1,500</span>
      </div>
      <div className='flex items-center justify-between gap-3'>
        <div className='bg-[#588F27] text-white text-xs px-[20px] py-[15px] rounded-md w-full text-center' onClick={handleOpenModal}>
          I’M Interested
        </div>
        <div className='bg-[#51150A] flex items-center justify-center px-[13px] py-[14px] rounded-md'>
          <HiOutlineArrowRight className="text-white" />
        </div>
      </div>
    </div>
    {modalOpen && <Modal handleCloseModal={handleCloseModal} />}
  </div>
  );
}

export default ProductCard