import React from 'react'
import img from "../../images/Group 6.svg"
import Image from 'next/image'


const DUMMY_DATA=[{heading:"Top Sells",items:[{image:img,name:"ghjhgkhkjhkjk",qty:"10 kg",price:"1,333",disPrice:"4,455"},{image:img,name:"Orange",qty:"10 kg",price:"1,333",disPrice:"4,455"},{image:img,name:"Orange",qty:"10 kg",price:"1,333",disPrice:"4,455"}]},
{heading:"Top Sells",items:[{image:img,name:"Orange",qty:"10 kg",price:"1,333",disPrice:"4,455"},{image:img,name:"orange",qty:"10 kg",price:"1,333",disPrice:"4,455"},{image:img,name:"orange",qty:"10 kg",price:"1,333",disPrice:"4,455"}]},
{heading:"Top Sells",items:[{image:img,name:"Orange",qty:"10 kg",price:"1,333",disPrice:"4,455"},{image:img,name:"orange",qty:"10 kg",price:"1,333",disPrice:"4,455"},{image:img,name:"orange",qty:"10 kg",price:"1,333",disPrice:"4,455"}]},
{heading:"Top Sells",items:[{image:img,name:"Orange",qty:"10 kg",price:"1,333",disPrice:"4,455"},{image:img,name:"orange",qty:"10 kg",price:"1,333",disPrice:"4,455"},{image:img,name:"orange",qty:"10 kg",price:"1,333",disPrice:"4,455"}]}]
const CategoryList = () => {
  return (
    <div className=' px-[3.5%]'>
        <div className='border-[2px] border-black flex justify-center gap-10'>
        {DUMMY_DATA.map((item:any,idx:number)=>{
            return <div className='w-[100%]'>
                <div className='text-[#253D4E] text-xl font-semibold '>{item.heading}</div>
                <div className='w-full'>
                {item.items.map((item:any,idx:number)=>{
                    return   <div className='flex gap-3 items-center '>
                    <div><Image src={item.image} alt=''/></div>
                    <div className='flex flex-col gap-3 '>
                        <div className='text-[#253D4E] text-sm font-medium'><span>{item.name}</span><span>{item.qty}</span></div>
                        <div className='text-sm font-medium'><span className='text-[#588F27]'>{item.price}</span><span className='text-[#ADADAD] line-through'>{item.disPrice}</span></div>
                    </div>
                </div>
                })}
                </div>
            </div>
        })}
        {/* <div className='flex items-center border-[2px] border-[black] w-fit'>
            <div><Image src={img} alt=''/></div>
            <div className='flex flex-col gap-3'>
                <div className='text-[#253D4E] text-sm font-medium'><span>Orange</span><span>10kg</span></div>
                <div className='text-sm font-medium'><span className='text-[#588F27]'>Rs 1,550</span><span className='text-[#ADADAD] line-through'>Rs 1,550</span></div>
            </div>
        </div> */}
        </div>
    </div>
  )
}

export default CategoryList