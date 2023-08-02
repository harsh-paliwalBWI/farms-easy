import React from 'react'
import CategoryImg from "../../../images/Vector.svg"
import Image from 'next/image'
import hydroponicImg from "../../../images/Frame 34412.svg"

const DUMMY_DATA=[{image:CategoryImg,catText:"Farm Products",catText2:""},{image:CategoryImg,catText:"Organic Farm ",catText2:"Products"},{image:hydroponicImg,catText:"Hydroponic ",catText2:"Farm Products"}]

const CategoryAvl = async() => {
  return (
    // <div className=' w-[70%] mx-auto chooseCategory gap-8 '>

     <div className='flex justify-center md:flex-no-wrap flex-wrap gap-8  w-[70%] mx-auto'> 
{DUMMY_DATA.map((item:any,idx:number)=>{
    return <div>
        <div className={`${idx===0?"bg-[#a4d672]":"bg-white"} rounded-full w-[80px] h-[80px]  flex justify-center items-center mx-auto translate-y-[30px]`}>
          <Image src={item.image} height={50} width={50} alt=''/></div>
        <div className={`${idx===0?"bg-[#588f27]":"bg-[#b1bca6]"}  text-white rounded-md  text-center h-[110px] pt-[40px] pb-[25px] w-[200px] px-[20px] `}>
        <div className='text-lg'>{item.catText}</div>
        <div className='text-lg'>{item.catText2}</div>
        </div>
    </div>
})}
    </div>
  )
}
// border-[2px] border-[black]
export default CategoryAvl