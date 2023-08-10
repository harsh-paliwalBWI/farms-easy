

import Farmergallery from '@/components/farmergallery/Farmergallery'
import Farmersectionabout from '@/components/farmersectionabout/Farmersectionabout'
import Leaf from '@/components/leaf/Leaf'
import Ourproducts from '@/components/ourproducts/Ourproducts'

import React from 'react'

const Page = async() => {
  return (
    <div>
        <Leaf text={"ACACIA Organic Farm"}/>
        <Farmersectionabout/>
        <Ourproducts/>
        <Farmergallery/>
       
        
    </div>
  )
}

export default Page