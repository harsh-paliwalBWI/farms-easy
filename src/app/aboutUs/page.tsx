import FromFarmacy from '@/components/fromFarmacy/FromFarmacy'
import HaveQuestions from '@/components/haveQuestions/HaveQuestions'

import Leaf from '@/components/leaf/Leaf'
import OrganicSince from '@/components/organicSince/OrganicSince'
import React from 'react'

const AboutUs = async() => {
  return (
    <div>
      <Leaf text="About Us"/>
        <OrganicSince/>
        <FromFarmacy/>
        <HaveQuestions/>
    </div>
  )
}

export default AboutUs