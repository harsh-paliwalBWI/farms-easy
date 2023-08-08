

import React from 'react'
import Button from '../Button/Button';


import organicLogo from "../../images/Frame (1).svg"
import Products from '../products/Products';
import Farmerpageproducts from '../farmerpageproducts/Farmerpageproducts';

const Ourproducts = () => {
  return (
    <div className='flex  px-[3.5%]  py-[3.5%] flex-col'>
        <div className='flex justify-between'>
        <div className=''>
             <h1 className='font-semibold text-3xl '>Our Products</h1>
        </div>
        
        <div className=' '> <Button text="VIEW ALL" className='px-[40px] py-[15px]'/></div>
       
        </div>
        <div className='flex  '>
        <Farmerpageproducts/>
        
        </div>
        




    </div>
  )
}

export default Ourproducts