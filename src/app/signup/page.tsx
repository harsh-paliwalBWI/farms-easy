"use client"

import Signup from '@/components/signup/Signup'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = async() => {
    const router=useRouter()
    const redirectToLoginHandler=()=>{
        router.push("/login")
    }
  return (
<Signup redirectToLogin={redirectToLoginHandler}/>
  )
}

export default page