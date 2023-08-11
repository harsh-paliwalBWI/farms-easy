"use client"
import React from 'react'
import Image from "next/legacy/image"
import triangle from "../../images/Rectangle 23990.svg"
import { FC, useState } from 'react'
interface Props {
    className: string,
    text: string
   
  }

const Button:FC<Props> = ({className,text}) => {
  return (
  <>
  <div className={`${className} relative border-[2px] border-[#588F27]  text-base font-bold w-fit`}>
                    {text}<Image src={triangle} alt='' className='absolute bottom-0 right-0' />
                </div>
  </>
  )
}

export default Button