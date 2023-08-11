"use client"

import React from 'react'
import Button from '../Button/Button';


import organicLogo from "../../images/Frame (1).svg"
import Products from '../products/Products';
import Farmerpageproducts from '../farmerpageproducts/Farmerpageproducts';

const Ourproducts = () => {
  return (
    <div className='flex flex-col px-[3.5%] py-[3.5%]'>
    <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
      <div className='mb-4 md:mb-0'>
        <h1 className='font-bold text-xl md:text-3xl'>Our Products</h1>
      </div>
      <div className=''>
        <Button text="VIEW ALL" className='px-[50px] py-[12px] ' />
      </div>
    </div>
    <div className='flex flex-col'>
      <Farmerpageproducts />
    </div>
  </div>
  )
}

export default Ourproducts