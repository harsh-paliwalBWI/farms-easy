"use client"
import React,{useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import useMediaQuery from '@mui/material/useMediaQuery';
import {AiOutlineClose} from "react-icons/ai"
import Link from 'next/link'
import { FiHome } from 'react-icons/fi'
import { BiGridAlt } from "react-icons/bi"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { usePathname } from 'next/navigation'
import { BsTelephone } from "react-icons/bs"

const NavMobile = () => {
  const [isMobile,setIsMobile]=useState<boolean>(false)
  const pathname = usePathname();
  return (
    <div className='w-full  px-[3.5%]  py-[22px] bg-[#eef0e5] font-medium text-md flex justify-end relative'>
        <div onClick={(prev)=>setIsMobile(true)}><AiOutlineMenu className="h-[25px] w-[25px]"/></div>
        {isMobile&&<div className='border-[2px] border-[black] bg-[white] w-[50%] absolute top-0 right-0 h-screen z-30'>
<div onClick={()=>setIsMobile(false)}><AiOutlineClose/></div>
<div className='flex  flex-col gap-10 font-medium border-[2px] border-[black] mx-auto  px-[30px]'>
               
                <Link href={"/"} className={`flex gap-1 items-center  ${pathname === "/" && 'text-[#619533] '} `} onClick={()=>setIsMobile(false)}>
                    <div className=' -mt-1'><FiHome className="h-[25px] w-[25px]" /></div>
                    <div>Home</div>
                </Link>
                <Link href={"/aboutUs"} className={`${pathname.includes('aboutUs') && "text-[#619533]"}`} onClick={()=>setIsMobile(false)}>About Us</Link>
                <Link href={"/gallery"} className={`${pathname.includes('gallery') && "text-[#619533]"}`} onClick={()=>setIsMobile(false)}>Gallery</Link>
                <Link href={"/farmerlist"} className={`${pathname.includes('farmerlist') && "text-[#619533]"}`} onClick={()=>setIsMobile(false)}>Farmer List</Link>
                <Link href={"/contactUs"} className={`${pathname.includes('contactUs') && "text-[#619533]"}`} onClick={()=>setIsMobile(false)}>Contact Us</Link>
                <div className='flex items-center text-[#51150a] font-bold gap-2 '>
                <div><BsTelephone className="h-[18px] w-[18px]" /></div>
                <div>1800-234-3566</div>
            </div>
            <div className='flex items-center gap-5 text-white bg-[#588f27] py-[15px] px-[20px] rounded-md text-md font-medium w-fit'>
                    <div><BiGridAlt className="h-[28px] w-[28px]" /></div>
                    <div>All Categories</div>
                    <div><MdOutlineKeyboardArrowRight className="h-[25px] w-[25px]" /></div>
                </div>
            </div>
           
        </div>}
    </div>
  )
}

export default NavMobile