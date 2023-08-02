import React from 'react'
import Image from 'next/image'
import triangle from "../../images/Rectangle 23990.svg"
import { FC, useState } from 'react'
interface Props {
    className: string,
   
  }

const Button:FC<Props> = ({className}) => {
  return (
  <>
  <div className={`${className} relative border-[2px] border-[#588F27]  text-sm font-semibold w-fit`}>
                    Get In Touch<Image src={triangle} alt='' className='absolute bottom-0 right-0' />
                </div>
  </>
  )
}

export default Button