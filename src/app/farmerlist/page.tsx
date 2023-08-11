
import Farmerlistsection from '@/components/farmerListsection/Farmerlistsection'
import Leaf from '@/components/leaf/Leaf'

import React from 'react'

const Farmerlist = async() => {
  return (
    <div>
        
        <Leaf text={"Farmer List"}/>
        <Farmerlistsection/>
       
        
    </div>
  )
}

export default Farmerlist