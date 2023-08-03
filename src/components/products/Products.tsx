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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1242,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    return (
        <div className='flex justify-center items-center mt-10 '>
            <button onClick={() => slider.current?.slickPrev()} className='bg-[#F2F3F4] p-2 rounded-full '><IoIosArrowBack className='h-[25px] w-[25px]' /></button>
            <div className='back '>
                <div className='w-[85vw]'>
                    <Slider ref={slider} {...settings} className='' dotsClass={`slick-dots `} arrows={true} nextArrow={<></>} prevArrow={<></>} draggable={true}>
                        {[1, 2, 3, 4, 4, 7, 6, 3, 5].map((item: any, idx: number) => {
                            return <div key={idx} className='lg:w-[25vw]'>
                                <ProductCard />
                            </div>
                        })}

                    </Slider>
                </div>
            </div>
            <button onClick={() => slider.current.slickNext()} className='bg-[#F2F3F4] p-2 rounded-full '><IoIosArrowForward className='h-[25px] w-[25px]' /></button>
        </div>

    )
}

export default Products
