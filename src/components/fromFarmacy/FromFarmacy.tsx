import React from 'react'
import HeartVegetableImg from "../../images/image 28.svg"
import image1 from "../../images/vegetable 1.svg"
import image2 from "../../images/Frame 34412.svg"
import image3 from "../../images/wheat-plant 1.svg"
import image4 from "../../images/organic-product 1.svg"
import image5 from "../../images/Frame 34412 (1).svg"
import image6 from "../../images/fruit (2) 1.svg"
import Image from 'next/image'
const DUMMY_DATA=[{heading:"Healthy Food",text:"We advocate that food be authentic and",text1:"ethical, freshly prepared and tasty.",image:image1},
{heading:"Fresh Products",text:"We advocate that food be authentic and",text1:"ethical, freshly prepared and tasty.",image:image2},
{heading:"Hydroponic Products",text:"We advocate that food be authentic and",text1:"ethical, freshly prepared and tasty.",image:image3}]

const DUMMY_DATA1=[{heading:"100% Organic",text:"We advocate that food be authentic and",text1:"ethical, freshly prepared and tasty.",image:image4},
{heading:"Local Growth",text:"We advocate that food be authentic and",text1:"ethical, freshly prepared and tasty.",image:image5},
{heading:"Pesticide Free",text:"We advocate that food be authentic and",text1:"ethical, freshly prepared and tasty.",image:image6}]


const FromFarmacy = async() => {
  return (
    <div className='px-[3.5%]'>
        <div className='text-center font-bold text-2xl'>Form Farmacy Farm Fresh</div>
        <div className='flex border-[2px] border-[black] justify-center items-center'>
            <div>
            {
                DUMMY_DATA.map((item:any,idx:number)=>{
                    return <div className='flex items-center' key={idx}>
                        <div className='border-[2px] border-[black]'>
                        <div className='font-bold text-lg'>{item.heading}</div>
                        <div className='text-xs text-[#606060] font-medium text-right'>{item.text}</div>
                        <div className='text-xs text-[#606060] font-medium text-right'>{item.text1}</div>
                        </div>
                        <div className='border-[2px] border-[black]'><Image src={item.image} alt='' height={50} width={50}/></div>
                    </div>
                })
            }
            </div>
            <div><Image src={HeartVegetableImg} alt='' height={400} width={400}/></div>
            <div>
            {
                DUMMY_DATA1.map((item:any,idx:number)=>{
                    return <div className='flex items-center' key={idx}>
                        <div className='border-[2px] border-[black]'>
                        <div className='font-bold text-lg'>{item.heading}</div>
                        <div className='text-xs text-[#606060] text-right'>{item.text}</div>
                        <div className='text-xs text-[#606060] text-right'>{item.text1}</div>
                        </div>
                        <div className='border-[2px] border-[black]'><Image src={item.image} alt='' height={50} width={50}/></div>
                    </div>
                })
            }
            </div>
        </div>
    </div>
  )
}

export default FromFarmacy