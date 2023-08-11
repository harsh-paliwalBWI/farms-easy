"use client"

import React from 'react'

import Image from 'next/image'
import { GoDotFill } from 'react-icons/go';
import desc1 from "../../images/descriptionimg1.svg";
import desc2 from "../../images/descriptionimg2.svg";





const DUMMY_DATA= {  descriptiontext: 'Broccoli juice has been associated with numerous health benefits, including improved blood flow, lower blood pressure, and increased exercise performance. Packed with essential nutrients, Broccoli are a great source of fiber, folate (vitamin B9), manganese, potassium, iron, and vitamin C. Beets contain a high concentration of nitrates, which have a blood pressure-lowering effect. This may lead to a reduced risk of heart attacks, heart failure, and stroke.Broccoli are delicious raw but more frequently cooked or pickled. There are numerous types of Broccoli, many of which are distinguished by their color — yellow, white, pink, or dark purple. Broccoli juice acts as a great blood purifier, which is key to keeping your skin glowing and healthy. Broccoli are also rich in Vitamin C which helps in clearing blemishes and evens out your skin tone while giving it a natural glow. Raw or cooked beetroot offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw and cooked beetroots, respectively. Beetroots have a glycemic index (GI) score of 61, which is considered medium.',
image1: desc1,image2: desc2, 
additionaltext: 'Broccoli juice has been associated with numerous health benefits, including improved blood flow, lower blood pressure, and increased exercise performance. Packed with essential nutrients, Broccoli are a great source of fiber, folate (vitamin B9), manganese, potassium, iron, and vitamin C. Beets contain a high concentration of nitrates, which have a blood pressure-lowering effect. This may lead to a reduced risk of heart attacks, heart failure, and stroke.Broccoli are delicious raw but more frequently cooked or pickled. There are numerous types of Broccoli, many of which are distinguished by their color — yellow, white, pink, or dark purple. Broccoli juice acts as a great blood purifier, which is key to keeping your skin glowing and healthy. Broccoli are also rich in Vitamin C which helps in clearing blemishes and evens out your skin tone while giving it a natural glow. Raw or cooked beetroot offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw and cooked beetroots, respectively. Beetroots have a glycemic index (GI) score of 61, which is considered medium.', features: [' Vitamin A18.0IU',' Vitamin C89.4mg',' Calcium 24.0mg','Potassium 233mg',] }

const Productqualities = () => {
  return (
    <div className='px-[3.5%] pt-[2.5%] pb-[3.5%]'>
    <div className='flex flex-col md:flex-row justify-center gap-[60px]'>
      <div className='md:w-[47%]'>
        <div className='flex flex-col gap-[2rem]'>
          <Image src={DUMMY_DATA.image1} alt='' className='w-full' width={1000} height={1000} />
          <Image src={DUMMY_DATA.image2} alt='' className='w-full' width={1000} height={1000} />
        </div>
      </div>
      <div className='flex flex-col gap-[2rem] md:w-[47%]'>
        <div className='flex justify-between'>
          <div className='font-medium text-xl md:text-2xl text-[#598f26] underline underline-offset-4'>Description</div>
          <div className='font-medium text-xl md:text-2xl text-[#598f26] underline underline-offset-4'>Additional Information</div>
        </div>
        <div className='text-sm font-medium leading-6 mt-2 md:mt-4'>{DUMMY_DATA.descriptiontext}</div>
        <div className='font-medium text-xl mt-4'>Features</div>
        {DUMMY_DATA.features.map((feature, index) => (
          <div className='text-sm font-medium flex gap-2 items-center' key={index}> <GoDotFill /> {feature}</div>
        ))}
      </div>
    </div>
  </div>
       
  )
}

export default Productqualities
