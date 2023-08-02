"use client"
import React, { useRef } from 'react'
import ProductCard from '../productCard/ProductCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import "slick-carousel/slick/slick-theme.css";


const Products = () => {
    const slider = useRef<any>(null)
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    let arr = [1, 2, 3, 54, 6, 7, 8, 454, 43, 1212, 12]
  return (
    <div className='flex justify-center items-center border-[2px] border-[black] '>
    <button onClick={() => slider.current.slickPrev()}><IoIosArrowBack className='h-[25px] w-[25px]' /></button>
    <div className='back '>
        <div className='w-[100%]'>
            <Slider ref={slider} {...settings} className='!w-[100%]'>
               {arr.map((item:any,idx:number)=>{
                return <ProductCard key={idx}/>
               })}
            </Slider>
        </div>
    </div>
    <button onClick={() => slider.current.slickNext()} ><IoIosArrowForward className='h-[25px] w-[25px]' /></button>
</div>
    // <div>
    //     <ProductCard/>
    //     <div className='border-[#479332] border-[1px] w-fit p-[15px] rounded-md'>
    //         <div>
    //             <div className='flex items-center justify-between'>
    //                 <div className='relative'><Image src={DiscountImg} alt='' /> <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit text-xs text-center flex gap-2 text-white font-medium'><span>15%</span><span>OFF</span></div></div>
    //                 <div><Image src={heartImg} alt='' /></div>
    //             </div>
    //             <div><Image src={VegtableImg} alt=''/></div>
    //             <div className='text-[#ADADAD] text-[12px]'>Vegetables</div>
    //             <div className='text-[#253D4E] font-semibold'><span>Redish </span><span>5kg</span></div>
    //             <div className='text-[12px] flex gap-1'><span className='text-[#ADADAD]' >By</span><span className='text-[#588F27] font-medium'>Organic Nature</span></div>
    //             <div className='flex items-center gap-2 my-[5px]'><span className='font-semibold ' >Rs 1,200</span><span className='text-[#ADADAD] text-sm line-through'>Rs 1,500</span></div>
    //             <div className='flex items-center justify-between'>
    //                 <div className='bg-[#479332] text-white text-sm px-[20px] py-[10px] rounded-md'>I’M Interested</div>
    //             <div className='bg-[#51150A] flex items-center justify-center px-[12px] py-[13px] rounded-md'><Image src={arrow} alt=''/></div>
    //             </div>

    //         </div>
    //     </div>
    // </div>
  )
}

export default Products
