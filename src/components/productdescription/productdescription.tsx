"use client"
import React, { useState }  from 'react'
import { TiLocation } from 'react-icons/ti';
import Modal from '@/components/modal/Modal'





import Image from 'next/image'

import brocli1 from "../../images/brocli1.svg";
import brocli2 from "../../images/brocli2.svg";
import brocli3 from "../../images/brocli3.svg";
import brocli4 from "../../images/brocli4.svg";
import brocli5 from "../../images/brocli5.svg";




const DUMMY_DATA= { id: 6, productname: 'Broccoli 10kg', price: 2000,orignalprice:2500, image1: brocli1,image2: brocli2,image3: brocli3,image4: brocli4,image5: brocli5, discount: '15', category:'vegetables', vendor:'Organic Nature',vendorlocation:'Devanahalli, Karnataka', para1:'Rhoncus est pellentesque elit ullamcorper. Consequat ac felis donec et odio pellentesque diam. Elementum nibh tellus molestie nunc non blandit massa enim nec. Ipsum consequat nisl vel pretium.', Sku: 'Variable Product-10'}

const Productdescription = () => {

    const [modalOpen, setModalOpen] = useState(false); 
     const handleOpenModal = () => {    setModalOpen(true);  };
       const handleCloseModal = () => {    setModalOpen(false);  };



  return (
    <div className='px-[3.5%] py-[5.5%]'>
      <div className='flex flex-col md:flex-row justify-center gap-[60px]'>
        <div className='md:w-[50%]'>
          <div className='flex flex-col gap-[1rem]'>
            <Image src={DUMMY_DATA.image1} alt='' className='w-full' width={1000} height={1000} />
            <div className='flex gap-[1rem]'>
                <Image src={DUMMY_DATA.image2} alt='' className='w-[25%]' width={1000} height={1000}/>
                <Image src={DUMMY_DATA.image3} alt='' className='w-[25%]' width={1000} height={1000}/>
                <Image src={DUMMY_DATA.image4} alt='' className='w-[25%]' width={1000} height={1000}/>
                <Image src={DUMMY_DATA.image5} alt='' className='w-[25%]' width={1000} height={1000}/>
                    </div>   
    </div>
        
    </div>
    <div className='flex flex-col gap-[.5rem] md:w-[44%]'>
        <div className='font-semibold text-2xl '>{DUMMY_DATA.productname}</div>
        <div className='flex justify-between'>
        <div className=' text-base font-medium  text-[#b4b5b5]'>By <span className='text-[#598f26]'>{DUMMY_DATA.vendor}</span></div>


         <div className='flex gap-1 items-center'>
        <TiLocation className="h-[120%] w-[auto] text-[#598f26]" ></TiLocation>
        <p className="font-medium  text-base ">{DUMMY_DATA.vendorlocation}</p>
        </div>
        </div>
       
        <div className='flex gap-2  items-center mt-[1rem] mb-[.5rem]'>
        <div className=' text-3xl font-semibold text-[#598f26] '>Rs {DUMMY_DATA.price}</div>
        <div className=' text-2xl line-through font-medium  text-[#b4b5b5] '>Rs {DUMMY_DATA.orignalprice}</div>
        </div>
        
        <hr></hr>

        <div className=' text-base text-[#8a8b8a] font-medium  leading-8'>{DUMMY_DATA.para1}</div>
        <div className=' text-base font-semibold  my-[1rem]'>SKU: <span className='text-[#5b5b5a]'>{DUMMY_DATA.Sku}</span></div>
        <button type="button" className=" text-white bg-[#598f26] w-[45%] font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2"  onClick={handleOpenModal} >I'M INTERESTED</button>
    </div>
    </div>
    {modalOpen && <Modal handleCloseModal={handleCloseModal} />}
</div>
       
  )
}

export default Productdescription