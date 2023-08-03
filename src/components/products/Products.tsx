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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //             initialSlide: 2
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //             initialSlide: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    };
    const arr = [1, 2, 3, 54, 6, 7]
  return (
    <div className='flex justify-center items-center '>
    <button onClick={() => slider.current.slickPrev()}><IoIosArrowBack className='h-[25px] w-[25px]' /></button>
    <div className='back '>
        <div className='w-[100%]'>
        {/* <ProductCard /> */}

            {/* <Slider ref={slider}  className='' dotsClass={`slick-dots `}>
                {[1,2,3,4,4,7,6,3,5].map((item:any,idx:number)=>{
                    return <ProductCard key={idx}/>
                 
                })}
             
            </Slider> */}
        </div>
    </div>
    <button onClick={() => slider.current.slickNext()} ><IoIosArrowForward className='h-[25px] w-[25px]' /></button>
</div>

  )
}

export default Products
