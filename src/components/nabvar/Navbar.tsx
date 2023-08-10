"use client";
import React from 'react'
// import {TbHomeDown} from "react-icons"
import { FiHome } from 'react-icons/fi'
import { BiGridAlt } from "react-icons/bi"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useMediaQuery from '@mui/material/useMediaQuery';
import NavMobile from '../navMobile/NavMobile';
import SearchHeader from '../searchHeader/SearchHeader';



const Navbar = () => {
    const pathname = usePathname();
    const mobile= useMediaQuery('(max-width:1080px)');

    return (
        <div>
            {!mobile&&
            <div className=''>
            <SearchHeader/>
            </div>}
            {mobile?<NavMobile/>:
        <div className='w-full  px-[3.5%] flex justify-between py-[12px] bg-[#eef0e5] font-medium text-md'>
            <div className='flex items-center gap-10 font-medium  '>
                <div className='flex items-center gap-5 text-white bg-[#588f27] py-[15px] px-[20px] rounded-md text-md font-medium'>
                    <div><BiGridAlt className="h-[28px] w-[28px]" /></div>
                    <div>All Categories</div>
                    <div><MdOutlineKeyboardArrowRight className="h-[25px] w-[25px]" /></div>
                </div>
                <Link href={"/"} className={`flex gap-1 items-center  ${pathname === "/" && 'text-[#619533] '} `}>
                    <div className=' -mt-1'><FiHome className="h-[25px] w-[25px]" /></div>
                    <div>Home</div>
                </Link>
                <Link href={"/aboutUs"} className={`${pathname.includes('aboutUs') && "text-[#619533]"}`}>About Us</Link>
                <Link href={"/gallery"} className={`${pathname.includes('gallery') && "text-[#619533]"}`}>Gallery</Link>
                <Link href={"/farmerlist"} className={`${pathname.includes('farmerlist') && "text-[#619533]"}`}>Farmer List</Link>
                <Link href={"/contactUs"} className={`${pathname.includes('contactUs') && "text-[#619533]"}`}>Contact Us</Link>
            </div>
            <div className='flex items-center text-[#51150a] font-bold gap-2 '>
                <div><BsTelephone className="h-[18px] w-[18px]" /></div>
                <div>1800-234-3566</div>
            </div>
        </div>
}
        </div>
    )
}

export default Navbar