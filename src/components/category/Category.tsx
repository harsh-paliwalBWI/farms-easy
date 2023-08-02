import React from 'react'
import CategoryAvl from './categoryAvl/CategoryAvl'
import CategoryCard from './categoryCard/CategoryCard'

const Category = async() => {
  return (
    <div className='bg-category-bg bg-cover bg-no-repeat py-[50px] border-[2px] border-black px-[3.5%] '>
        <div className='text-center'>
            <div className='text-[#588F27] font-bold text-lg'>What we offer for you</div>
            <div className='font-bold text-2xl pb-[50px]'>Explores by Category</div>
            {/* <CategoryAvl/> */}
            <CategoryCard/>
        </div>
    </div>
  )
}

export default Category