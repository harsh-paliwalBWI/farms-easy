"use client"
import React, { useState,FC } from 'react'
import whiteLogo from "../../images/Group 3.svg"
import Image from 'next/image'
import smallLeaf from "../../images/Group 34147.svg"
import { FcGoogle } from "react-icons/fc"
import check from "../../images/Vector 28.svg"

import { useRouter } from 'next/navigation'
interface Props{
    redirectToLogin:any
}
const Signup:FC<Props> = ({redirectToLogin}) => {
    const router=useRouter()
    const DUMMY_DATA = [{ image: smallLeaf, text: "Includes Wide variety of Products." },
    { image: smallLeaf, text: "Fresh Groceries, Delivered to You." },
    { image: smallLeaf, text: "Helping you make Healthy choices." }]
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    const redirectToLoginHandler=()=>{
        router.push("/login")
    }
  return (
    <div className='bg-login-bg  bg-cover bg-no-repeat px-[3.5%]'>
    <div className='flex md:flex-row flex-wrap  md:justify-between justify-center md:gap-0 gap-5 py-[10%] '>
        <div className=''>
            <div className='md:mb-[35%] mb-[15%]'><Image src={whiteLogo} alt='' width={1000} height={1000} className=' sm:w-[300px] sm:h-[100px] h-[60px] w-[200px] ' /></div>
          <div className='flex flex-col gap-5'>
            {DUMMY_DATA.map((item: any, idx: number) => {
                return <div className='flex gap-5 items-center' key={idx}>
                    <div><Image src={item.image} alt='' width={20} height={20} /></div>
                    <div className='text-white'>{item.text}</div>
                </div>
                
            })}
            </div>
        </div>
        {/* <div className='flex md:w-[50%] w-[100%] border-[2px] border-[red]'> */}
        <div className='bg-white  px-[40px] py-[50px]  rounded-xl relative  md:w-[50%] w-[100%] create-account'>
        <div className='absolute top-[-20px] left-[-25px]'><Image src={smallLeaf} alt='' height={50} width={50}/></div>
            <div className='font-bold text-3xl mb-[30px]'>Create an account</div>
            <div className='text-[#777777] text-sm mb-[30px]'>Let’s get started!</div>
            <div className=' mb-[20px]'><input type='name' placeholder='Name' className=' w-full  px-[20px] py-[5px] outline-0' /></div>
            <div className=' mb-[20px]'><input type='email' placeholder='Email' className=' w-full  px-[20px] py-[5px] outline-0' /></div>
            <div className='   mb-[20px]'><input type='text' placeholder='Password' className='  w-full px-[20px] py-[5px] outline-0' /></div>
            <div className=' text-center bg-[#62A403] py-[12px] rounded-2xl text-[white]'>Create an account</div>
            <div className="flex items-center justify-center gap-10 my-[20px]">
                <div className="w-[25%] h-[0.2px] bg-[#dfdfdf]"></div>
                <span className="text-gray-600">OR</span>
                <div className="w-[25%] h-px bg-[#dfdfdf]"></div>
            </div>
            <div className='flex border-[1px] border-text-[#777777] items-center justify-center gap-3  py-[12px] mb-[40px]'>
                <div className=''><FcGoogle className="h-[25px] w-[25px]" /></div>
                <div className='font-semibold text-lg'>Log In with Google</div>
            </div>
            <div className='flex justify-center items-center gap-3 font-medium text-base'>
                <div>Don&apos;t have an account? </div>
                <div onClick={redirectToLoginHandler} className='text-[#51150A]'>Log in</div>
            </div>


        </div>
    </div>
    </div>
// </div>
  )
}

export default Signup