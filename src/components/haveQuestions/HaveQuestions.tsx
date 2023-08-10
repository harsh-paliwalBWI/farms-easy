"use client"
import React from 'react';
import Img from "../../images/Rectangle 24012.svg";
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useMediaQuery from '@mui/material/useMediaQuery';


const DUMMY_DATA=[{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod."},
{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod."},
{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod."},
{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod."},
{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod."}]

const HaveQuestions = () => {
  const matches = useMediaQuery('(max-width:941px)');
  const matches2 = useMediaQuery('(max-width:480px)');
  return (
    <div className={`bg-have-questions-bg bg-cover bg-no-repeat flex md:flex-row flex-col gap-[60px]   items-center ${matches?"py-[30px]":"py-0"} ${matches2?"px-[7%]":matches?"px-[3.5%]":"pr-[3.5%]"}`}>
      {!matches&&
      <div className='w-1/2'>
        <Image src={Img} alt='' width={900} height={900} />
      </div>
      }
      <div className={`${matches?"w-[100%]":"w-1/2"}`}>
        <div className='xl:text-4xl text-2xl font-bold mb-[10px] sm:text-start text-center '>Have Questions?</div>
        {DUMMY_DATA.map((item: any, idx: number) => (
          <Disclosure key={idx}>
            <Disclosure.Button className="xl:py-7 py-4 flex justify-between  items-center border-b-[1px] border-[#E6F2DA] w-full sm:pr-[30px] ">
              <span className='xl:text-sm text-xs font-medium'>{item.question}</span>
              <MdOutlineKeyboardArrowDown className="h-[22px] w-[22px]" />
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 w-full text-xs">
              {item.answer}
            </Disclosure.Panel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

export default HaveQuestions;
