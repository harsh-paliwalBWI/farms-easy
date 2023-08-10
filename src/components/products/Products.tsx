"use client"
import React, { useRef } from 'react'
import ProductCard from '../productCard/ProductCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import "slick-carousel/slick/slick-theme.css";
import {MdArrowBack} from "react-icons/md"
import {MdArrowForward} from "react-icons/md"
import {CiViewList} from "react-icons/ci"
import useMediaQuery from '@mui/material/useMediaQuery';



const Products = () => {
    const matches = useMediaQuery('(max-width:1094px)');
    const matches2 = useMediaQuery('(max-width:480px)');
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
                    // dots: true
                   
                }
            },
            {
                breakpoint:1515,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
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
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };
    return (
        <div className=' px-[3.5%] pt-[100px]'>
            <div className='flex items-center justify-between mb-[65px]'>
            <div className='text-[#253D4E] font-bold md:text-3xl sm:text-2xl text-xl'>Featured Products</div>
            {/* {matches?<div><CiViewList className="h-[30px] w-[30px] text-[#253D4E]"/></div>:
            <div className='flex gap-10 text-[#253D4E] font-semibold text-base'>
            <div>All</div>
            <div>Vegetables</div>
            <div>Fruits</div>
            <div>Cereals</div>
            <div>Spices</div>
            <div>Nuts</div>
            <div>Pulses</div>
            <div>Flower</div>
            </div>
} */}
            </div>
        <div className='flex justify-center items-center '>
            {!matches2&&
            <button onClick={() => slider.current?.slickPrev()} className='bg-[#F2F3F4] p-2 rounded-full  '><MdArrowBack className='h-[25px] w-[25px]' /></button>
            }
          <div className='back '>
                <div className='w-[85vw]'>
                    <Slider ref={slider} {...settings} className='' dotsClass={`slick-dots `} arrows={true} nextArrow={<></>} prevArrow={<></>} draggable={true}>
                        {[1, 2, 3, 4, 4, 7, 6, 3, 5].map((item: any, idx: number) => {
                            return <div key={idx} className='lg:w-[27vw] '>
                                <ProductCard />
                            </div>
                        })}

                    </Slider>
                </div>
            </div>
            {!matches2&&
        
        <button onClick={() => slider.current.slickNext()} className='bg-[#F2F3F4] p-2 rounded-full  '><MdArrowForward className='h-[25px] w-[25px]' /></button>
            }
        </div>

        </div>

    )
}

export default Products

// import React, { useRef } from 'react';
// import ProductCard from '../productCard/ProductCard';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import "slick-carousel/slick/slick-theme.css";
// import { MdArrowBack, MdArrowForward } from "react-icons/md";
// import { CiViewList } from "react-icons/ci";
// import useMediaQuery from '@mui/material/useMediaQuery';

// const Products = () => {
//     const matches = useMediaQuery('(max-width:1094px)');
//     const slider = useRef<any>(null);

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 7,
//         slidesToScroll: 5,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1242,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 4,
//                     infinite: true,
//                     // dots: true
//                 }
//             },
//             {
//                 breakpoint:1515,
//                 settings: {
//                     slidesToShow: 5,
//                     slidesToScroll: 5,
//                     infinite: true,
//                     // dots: true
//                 }
//             },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     // dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <div className='px-[3.5%] pt-[100px]'>
//             {/* ...other code... */}
//             <div className='flex items-center justify-between mb-[65px]'>
//             <div className='text-[#253D4E] font-bold md:text-3xl sm:text-2xl text-xl'>Featured Products</div>
//             {matches?<div><CiViewList className="h-[30px] w-[30px] text-[#253D4E]"/></div>:
//             <div className='flex gap-10 text-[#253D4E] font-semibold text-base'>
//             <div>All</div>
//             <div>Vegetables</div>
//             <div>Fruits</div>
//             <div>Cereals</div>
//             <div>Spices</div>
//             <div>Nuts</div>
//             <div>Pulses</div>
//             <div>Flower</div>
//             </div>
// }
//             </div>
//             <div className='flex justify-center items-center'>
//                 <button onClick={() => slider.current?.slickPrev()} className='bg-[#F2F3F4] p-2 rounded-full border-[2px] border-[black]'><MdArrowBack className='h-[25px] w-[25px]' /></button>
//                 <div className='mx-auto w-full md:w-[85vw]'>
//                     <Slider ref={slider} {...settings} className='' dotsClass={`slick-dots `} arrows={true} nextArrow={<></>} prevArrow={<></>} draggable={true}>
//                         {/* ...product cards... */}
//                         {[1, 2, 3, 4, 4, 7, 6, 3, 5].map((item: any, idx: number) => {
//                             return <div key={idx} className='lg:w-[25vw] w-[15vw] border-[2px] border-[red]'>
//                                 <ProductCard />
//                             </div>
//                         })}
//                     </Slider>
//                 </div>
//                 <button onClick={() => slider.current?.slickNext()} className='bg-[#F2F3F4] p-2 rounded-full border-[2px] border-[black]'><MdArrowForward className='h-[25px] w-[25px]' /></button>
//             </div>
//         </div>
//     );
// }

// export default Products;

