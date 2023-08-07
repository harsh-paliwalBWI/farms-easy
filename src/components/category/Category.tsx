import React from 'react'
import CategoryAvl from './categoryAvl/CategoryAvl'
import CategoryCard from './categoryCard/CategoryCard'
import img from "../../images/slider-bg-vert-1 1.svg"
import bottomImg from "../../images/slider-bg-vert-1 2.svg"
import Image from 'next/image'

const Category = async() => {
  return (
    <div className='bg-category-bg bg-cover bg-no-repeat py-[150px] px-[3.5%] relative  '>
        <div className='text-center'>
            <div className='text-[#588F27] font-bold text-lg mb-[10px]'>What we offer for you</div>
            <div className='font-bold text-3xl pb-[50px] text-[#253D4E]'>Explores by Category</div>
            {/* <CategoryAvl/> */}
            <CategoryCard/>
        </div>
        <div className='absolute top-0 left-0   '><Image src={img} alt='' width={1000} height={1000} style={{ width: "100vw", objectFit: "cover" }}/></div>
        <div className='absolute bottom-0 left-0  '><Image src={bottomImg} alt='' width={1000} height={1000} style={{ width: "100vw", objectFit: "cover" }}/></div>
    </div>
  )
}

export default Category