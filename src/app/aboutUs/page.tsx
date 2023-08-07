import FromFarmacy from '@/components/fromFarmacy/FromFarmacy'
import HaveQuestions from '@/components/haveQuestions/HaveQuestions'
import Headersectiontype2 from '@/components/headersectiontype2/Headersectiontype2'
import Leaf from '@/components/leaf/Leaf'
import OrganicSince from '@/components/organicSince/OrganicSince'
import React from 'react'

const Page = async() => {
  return (
    <div>
      <Leaf text="About Us"/>
        <OrganicSince/>
        <FromFarmacy/>
        <HaveQuestions/>
    </div>
  )
}

export default Page