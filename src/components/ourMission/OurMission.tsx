import React from 'react'
import vision from "../../images/vision 1.svg"
import target from "../../images/target 1.svg"
import ourMission from "../../images/information-button 1.svg"
import backGroundImage from "../../images/bg-image01 1.svg"
import Image from 'next/image'

const DUMMY_DATA=[{image:ourMission,heading:'WHO WE ARE',text:"We are a successful private company with",text1:"extensive knowledge of natural and organic",text2:"products."},
{image:target,heading:'OUR MISSION',text:"To educate and empower the world about the",text1:"good and positive effects of adopting an",text2:"organic lifestyle."},
{image:vision,heading:'OUR VISION',text:"We helped people live a better, healthier, and",text1:"wholesome life by providing them with 100%",text2:"authentic organic food"}]

const OurMission = async() => {
  return (
    <div className='relative bg-our-mission-bg  py-[100px]'>
      
        <div className='w-full relative'>
          {/* <Image src={backGroundImage} width={1000} height={1000} style={{ width: "100vw", objectFit: "cover" }} alt="" /> */}
          <div className='flex justify-center lg:gap-[100px] gap-[50px]  flex-wrap w-[90%] mx-auto  '>
        {DUMMY_DATA.map((item:any,idx:number)=>{
            return <div className=' text-center flex flex-col items-center'>
<div className='mb-[30px]' ><Image src={item.image} width={70} height={70} alt=''/></div>
<div className='text-[#51150a] font-bold text-2xl mb-[10px]'>{item.heading}</div>
<div className='text-xs font-semibold'>
<div >{item.text}</div>
<div>{item.text1}</div>
<div>{item.text2}</div>
</div>

            </div>
        })}
        </div>
          </div>
      
    </div>
  )
}

export default OurMission