"use client"
import React from 'react'
import Img from "../../images/Rectangle 24012.svg"
import Image  from 'next/image'
import { Disclosure } from '@headlessui/react'
import { IoIosArrowUp } from "react-icons/io"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

const DUMMY_DATA=[{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod."},
{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod."},
{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod."},
{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod."},
{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod."}]


const HaveQuestions = () => {
  return (
    <div className=' bg-have-questions-bg bg-cover bg-no-repeat flex gap-[80px] items-center pr-[3.5%] '>
        <div className='h-fit'><Image src={Img} alt='' width={600} height={600} className=''/></div>
        <div className=' w-[60%] 3xl:w-[80%]'>
            <div className='text-3xl font-bold mb-[10px]'>Have Questions?</div>
        <div className=''>
            {DUMMY_DATA.map((item:any,idx:number)=>{
                return <Disclosure  key={idx}>
                <Disclosure.Button className="py-5 flex justify-between items-center border-b-[1px] border-[#E6F2DA] w-full pr-[30px] ">
                  <span className='text-xs font-medium'>{item.question}</span>
                  <MdOutlineKeyboardArrowDown/>
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 w-full text-xs">
                {item.answer}
                </Disclosure.Panel>
              </Disclosure>

            })}
       
        </div>
        </div>
    </div>
  )
}

export default HaveQuestions