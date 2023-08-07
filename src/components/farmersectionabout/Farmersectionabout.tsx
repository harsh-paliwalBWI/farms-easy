import React from 'react'
import farmerlogoimage from "../../images/logobackground.svg"
import Image from 'next/image'
const DUMMY_DATA={para1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",para2:"  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}

const Farmersectionabout = () => {
  return (
    <div className=' border-[2px]  px-[3.5%] py-[3.5%] mt-16 '>
    <div className='flex border-[2px] border-[red] justify-center gap-[60px] items-center '>
    <div className=' border-[2px] border-[black] '>
    
        <div className=' w-[575px]'><Image src={farmerlogoimage} alt=''  width={1000} height={1000}/></div>
    </div>
    <div className='flex flex-col gap-[2rem] border-[2px] border-[black] '>
        <div className='font-bold text-3xl '>About Us</div>
        <div className=' text-base font-medium  leading-8'>{DUMMY_DATA.para1}</div>
        <div className=' text-base font-medium  leading-8'>{DUMMY_DATA.para2}</div>
    </div>
    </div>
</div>
       
  )
}

export default Farmersectionabout