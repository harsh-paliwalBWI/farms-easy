"use client"
import React from 'react'
import Image from 'next/image'
// import img from "../../images/Group 6.svg"
import img from "../../images/Group.svg"

const dummdData=[{img:img,heading:"FRESH & ORGANIC",text:"Neque porro quisquam est, qui dolorem "
,text1:"ipsum quia dolor sit amet, consectetur,",
text2:"adipisci velit, sed qu"},
{img:img,heading:"CERTIFIED ORGANIC SOURCES",text:"Neque porro quisquam est, qui dolorem "
,text1:"ipsum quia dolor sit amet, consectetur,",
text2:"adipisci velit, sed qu"},{img:img,heading:"Pesticide Free",text:"Neque porro quisquam est, qui dolorem "
,text1:"ipsum quia dolor sit amet, consectetur,",
text2:"adipisci velit, sed qu"}]

const Features = () => {
  return (
    <div className='px-[3.5%]'>
<div className='flex items-center justify-between  py-[50px]'>
    {dummdData.map((item:any,idx:number)=>{
        return <div className='flex items-start gap-10'>
            <div className='bg-[#588F27] h-[80px] w-[80px] rounded-full flex items-center justify-center'><Image src={item.img} alt='' height={35} width={35}/></div>
            <div>
            <div className='font-semibold text-lg mb-[3px]'>{item.heading}</div>
            <div className='text-[#777777] text-xs'>
            <div >{item.text}</div>
            <div>{item.text1}</div>
            <div>{item.text2}</div>
            </div>
            </div>
        </div>
    })}
</div>
    </div>
  )
}

export default Features