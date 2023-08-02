import React from 'react'
// import {TbHomeDown} from "react-icons"
import { FiHome } from 'react-icons/fi'
import {BiGridAlt} from "react-icons/bi"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {BsTelephone} from "react-icons/bs"
import Link from 'next/link'


const Navbar = async() => {
  return (
    <div className=' '>
        <div className='w-full  px-[3.5%] flex justify-between py-[12px] bg-[#eef0e5] font-medium text-md'>
            <div className='flex items-center gap-10 font-medium  '>
                <div className='flex items-center gap-5 text-white bg-[#588f27] py-[15px] px-[20px] rounded-md text-md font-medium'>
                    <div><BiGridAlt className="h-[28px] w-[28px]"/></div>
                    <div>All Categories</div>
                    <div><MdOutlineKeyboardArrowRight className="h-[25px] w-[25px]"/></div>
                </div>
                <Link href={"/"} className='flex gap-3 items-center text-[#619533]  '>
                <div><FiHome className="h-[25px] w-[25px]"/></div>
                    <div>Home</div>
                </Link>
                {/* <div className='flex gap-3 items-center text-[#619533] cursor-pointer '>
                    <div><FiHome className="h-[25px] w-[25px]"/></div>
                    <div>Home</div>
                </div> */}
                <Link href={"/aboutUs"}>About Us</Link>
                <div>Services</div>
                <Link href={"/gallery"}>Gallery</Link>
                <Link href={"/farmerlist"}>Farmer List</Link>
                <Link href={"/contactUs"}>Contact Us</Link>
               
            </div>
            <div className='flex items-center text-[#51150a] font-bold gap-2 '>
                <div><BsTelephone className="h-[18px] w-[18px]"/></div>
                <div>1800-234-3566</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar