import React from 'react'
import GetInTouch from '@/components/geteInTouch/GetInTouch'
import DropALine from '@/components/dropALine/DropALine'
import Leaf from '@/components/leaf/Leaf'

const page = async() => {
  return (
    <div>
      <Leaf text="Contact Us"/>
      <GetInTouch/>
      <DropALine/>
    </div>
  )
}

export default page