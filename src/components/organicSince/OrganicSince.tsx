import React from 'react'
import farmerImg from "../../images/Rectangle 24011.svg"
import organicLogo from "../../images/Frame (1).svg"
import vegetableImg from "../../images/blink-img-1.svg"
import Image from 'next/image'
const DUMMY_DATA=[{count:"30+",text:"Store Tie-Up"},{count:"20K",text:"Land Acres"},{count:"100+",text:"Organic Products"}]

const OrganicSince = () => {
  return (
    <div className=' px-[3.5%]  pb-[80px] pt-[20px] '>
        <div className='flex justify-center items-end  gap-[80px] '> 
        <div className='flex flex-col   w-fit   relative'>
        {/* <div><Image src={vegetableImg} alt='' width={1000} height={1000} className='h-[150px] w-[150px] translate-x-[150px] translate-y-[50px]'/></div> */}
            <div className='h-[500px] w-[500px]'><Image src={farmerImg} alt='' height={1000} width={1000}/>
            </div>
        <div className='absolute bottom-[-20px]'><Image src={vegetableImg} alt='' width={1000} height={1000} className='h-[170px] w-[170px]'/></div>

            
        </div>
        
        <div className=' flex flex-col justify-center'>
            <div className='font-bold text-3xl mb-[15px]'>Organic Since 2015</div>
            <div className='text-[#6a6a6a] text-xs font-medium mb-[30px]'>A one-stop shop full of all the right choices, NativeFarm is a health food haven with organic<br/> 
            fruit & vegetables, organic bread from bakeries, only organic meat and sustainable fish from<br/> 
            British waters. Our over-flowing groceries range is full of gluten-free, dairy-free, raw food<br/>
             and healthy options, while our Health & Bodycare department.</div>
             <div className='flex  justify-between mb-[50px] '>
                {DUMMY_DATA.map((item:any,idx:number)=>{
                    return <div key={idx}>
                        <div className='text-[#588f27] text-2xl font-bold mb-[5px]'>{item.count}</div>
                        <div className='font-semibold text-sm'>{item.text}</div>
                    </div>
                })}
             </div>
             <div className='flex items-center gap-5 '>
                    <div className='w-[150px] h-[150px]  flex items-center justify-center'><Image src={organicLogo} alt='' width={1000} height={1000}/></div>
                    <div className=''>
                    <div className='text-[#51150a] font-bold mb-[5px]'>Amit Malviya</div>
                    <div className='text-[#5f5f5f] text-xs font-semibold'>Founder of the Company</div>
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default OrganicSince