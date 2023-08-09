
import Farmerlistsection from '@/components/farmerListsection/Farmerlistsection'
import Headersection from '@/components/headersection/Headersection'
import Leaf from '@/components/leaf/Leaf'

import React from 'react'

const Page = async() => {
  return (
    <div>
        
        <Leaf text={"Farmer List"}/>
        <Farmerlistsection/>
       
        
    </div>
  )
}

export default Page