import React from 'react'
import basketImg from "../../images/orga-image01 1.svg"
import location from "../../images/Location.svg"
import meail from "../../images/Message.svg"
import calling from "../../images/Calling.svg"
import organicLogo from "../../images/Frame (1).svg"
import Image from 'next/image'
import {HiLocationMarker} from "react-icons/hi"
import call from "../../images/Calling.png"
import locationImg from "../../images/Location.png"
import messageImg from "../../images/Message.png"
import triangle from "../../images/Rectangle 23990.svg"

const DummyData=[{image:locationImg,heading:"Visit Us",subHeading:"92 Bowery St., New York, NY 10013, USA"},
{image:messageImg,heading:"Mail Us",subHeading:"support@farmacyfarm.com"},{image:call,heading:"Call Us",subHeading:"1233-777-2615"}]


const GetInTouch = () => {
  return (
    <div className='flex  px-[3.5%] justify-center gap-[150px] mb-[400px] '>
        <div className=''>
            <div className='text-[#588f27] text-md font-semibold mb-[5px]'>Our Contacts</div>
            <h1 className='font-semibold text-2xl mb-[10px]'>Get in Touch</h1>
            <div className='text-[#555555] font-medium text-xs mb-[20px]'>
                <div>Get in touch to discuss your employee wellbeing needs today.</div>
                <div> Please give us a call, drop us an email or fill out the contact form</div>
                <div>and we’ll get back to you.</div>
            </div>
            <div className=' flex flex-col gap-6'>
                {DummyData.map((item:any,idx:number)=>{
                    return <div className='flex items-center gap-5 ' key={idx}>
                         <div className='bg-[#588f27] h-[60px] w-[60px] rounded-full flex justify-center items-center'><Image src={item.image} alt='' width={23} height={23}/></div>
                    <div>
                        <div className='text-lg font-semibold'>{item.heading}</div>
                        <div className='text-[#555555] font-medium text-xs'>{item.subHeading}</div>
                    </div>
                    </div>
                })}
          
            </div>
        </div>
        <div className='flex items-start '> <div className='w-[400px] h-[400px] '><Image src={basketImg} alt='' width={1000} height={1000}/></div>
        <div className='w-[170px] h-[170px]   translate-x-[-120px] translate-y-[-40px]'><Image src={organicLogo} alt='' width={1000} height={1000}/></div>
        </div>
    </div>
  )
}

export default GetInTouch