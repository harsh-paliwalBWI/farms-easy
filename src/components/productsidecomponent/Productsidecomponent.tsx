"use client"

import React, { useState } from 'react';
import {PiListDashesLight} from 'react-icons/pi';
import {RxGrid} from 'react-icons/rx';
import ProductCard from '../productCard/ProductCard';


const options=["Default Sorting", "Ascending Sorting", "Descending Sorting" ]

import Productcardrowversion from '@/components/productcardrowversion/Productcardrowversion'




const Productsidecomponent = () => {

    const [viewMode, setViewMode] = useState('grid');


  return (
    <div className=' w-[75%]'>
        <div className=' flex items-center justify-between  mb-8'>
            <div>
               <h2 className='font-medium'>Showing <span>1</span>-<span>6</span> of <span>6</span> results</h2>
            </div>
         <div>
         <div className='flex gap-8 items-center' >
         <div className='flex gap-6'>
  <div
    className={`rounded h-[52px] flex items-center justify-center w-[52px]  ${
      viewMode === 'grid' ? 'bg-[#D8E3CF]' : ''
    }`}
    onClick={() => setViewMode('grid')}
  >
    <RxGrid className='h-[25px] w-[30px]' />
  </div>
  <div
    className={`rounded h-[52px] flex items-center justify-center w-[52px]  ${
      viewMode === 'list' ? 'bg-[#D8E3CF]' : ''
    }`}
    onClick={() => setViewMode('list')}
  >
    <PiListDashesLight className='h-[25px] w-[30px]' />
  </div>
</div>


             
    
      <select
      
        className="bg-[#F4F4F4] px-6 py-4 rounded font-medium">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    
    </div>



         </div>
      
        </div>


   
  {viewMode === 'grid' ? (
    
  <div className=' flex  gap-6'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </div>
    
  ) : (
    <div className=' flex flex-col gap-6'>
      <Productcardrowversion />
      <Productcardrowversion />
      <Productcardrowversion />
      <Productcardrowversion />
      </div>
  )}
</div>


  
  );
};

export default Productsidecomponent;
