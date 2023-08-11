"use client"

import React from 'react'
import MapImg from "../../images/Rectangle 23991.svg"
import Image from "next/legacy/image"
import triangle from "../../images/Rectangle 23990.svg"
import Button from '../Button/Button';
// import useMediaQuery from '@mui/material/useMediaQuery';

const DropALine = async () => {
    // const matches = useMediaQuery('(min-width:1096px)');
    return (
        <div className='relative  z-0 '>

            <div className=' relative z-10'>
                <Image src={MapImg} alt='' width={1000} height={1000} style={{ width: "100vw", objectFit: "cover" }} />
            </div>
            <div className='absolute md:top-[-350px] sm:top-[-600px] top-[-600px]  w-[85%] mx-auto  sm:px-[50px] px-[20px] sm:py-[50px] py-[25px] shadow-2xl rounded-xl get-in-touch z-30 bg-white left-1/2 transform -translate-x-1/2 '
            >
                <div className='md:text-4xl text-2xl font-semibold mb-[30px] '>Drop us a Line</div>
                <div className='flex gap-5 md:flex-row flex-col mb-[30px]'>
                    <div className='md:w-[50%] w-[100%] border-[0.5px] border-[#E3E3E3]  rounded-sm ' ><input type='text' placeholder='Your Name*' className='outline-0 w-full py-[15px] px-[20px]' /></div>
                    <div className='md:w-[50%] w-[100%] border-[0.5px] border-[#E3E3E3]  rounded-sm'><input type='email' placeholder='Your Email*' className='outline-0 w-full py-[15px]   px-[20px]' /></div>
                </div>
                <div className='flex gap-5 md:flex-row flex-col mb-[30px]'>
                    <div className='md:w-[50%] w-[100%] border-[0.5px] border-[#E3E3E3] rounded-sm ' ><input type='text' placeholder='Phone Number*' className='outline-0 w-full py-[15px]   px-[20px]' /></div>
                    <div className='md:w-[50%] w-[100%] border-[0.5px] border-[#E3E3E3]  rounded-sm'><input type='email' placeholder='Website' className='outline-0 w-full py-[15px]   px-[20px]' /></div>
                </div>
                <div className='border-[0.5px] border-[#E3E3E3] rounded-sm mb-[35px] textarea-container'>
                    <textarea placeholder='Message...' rows={6} className='outline-0 w-full py-[15px] px-[20px]' />

                </div>
                <Button text={"Get in Touch"} className='px-[40px] py-[15px]'/>
            </div>
        </div>
    );
};

export default DropALine;
