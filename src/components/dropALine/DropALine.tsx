import React from 'react'
import MapImg from "../../images/Rectangle 23991.svg"
import Image from 'next/image'
import triangle from "../../images/Rectangle 23990.svg"
import Button from '../Button/Button';

const DropALine = async () => {
    return (
        <div className='relative  z-0'>

            <div className=' relative z-10'>
                <Image src={MapImg} alt='' width={1000} height={1000} style={{ width: "100vw", objectFit: "cover" }} />
            </div>
            <div className='absolute top-[-350px]   w-[90%] mx-auto  px-[30px] py-[40px] shadow-2xl rounded-xl get-in-touch z-30 bg-white left-1/2 transform -translate-x-1/2'
            >
                <div className='text-2xl font-bold mb-[20px] '>Drop us a Line</div>
                <div className='flex gap-5 mb-[25px]'>
                    <div className='w-[50%] border-[0.5px] border-[#E3E3E3]  rounded-sm ' ><input type='text' placeholder='Your Name*' className='outline-0 w-full py-[8px] px-[20px]' /></div>
                    <div className='w-[50%] border-[0.5px] border-[#E3E3E3]  rounded-sm'><input type='email' placeholder='Your Email*' className='outline-0 w-full py-[8px] px-[20px]' /></div>
                </div>
                <div className='flex gap-5 mb-[25px]'>
                    <div className='w-[50%] border-[0.5px] border-[#E3E3E3] rounded-sm ' ><input type='text' placeholder='Phone Number*' className='outline-0 w-full py-[8px] px-[20px]' /></div>
                    <div className='w-[50%] border-[0.5px] border-[#E3E3E3]  rounded-sm'><input type='email' placeholder='Website' className='outline-0 w-full py-[8px] px-[20px]' /></div>
                </div>
                <div className='border-[0.5px] border-[#E3E3E3] rounded-sm mb-[25px]'>
                    <textarea placeholder='Message...' rows={6} className='outline-0 w-full py-[8px] px-[20px]' />

                </div>
                <Button className='px-[40px] py-[15px]'/>
            </div>
        </div>
    );
};

export default DropALine;
