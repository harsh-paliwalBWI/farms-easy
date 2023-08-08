

import FilterComponent from '@/components/filtercomponent/Filtercomponent'
import Headersectiontype2 from '@/components/headersectiontype2/Headersectiontype2'

import Productsidecomponent from '@/components/productsidecomponent/Productsidecomponent'


import React from 'react'

const Page = async() => {
  return (
    <div className=''>
        <Headersectiontype2 heading={"Vegetables"}/>
        <div className='flex justify-between  px-[3.5%] gap-6 py-[1.5%]'>
        <FilterComponent/>
        <Productsidecomponent/>
        
        </div>
        
       
        
    </div>
  )
}

export default Page