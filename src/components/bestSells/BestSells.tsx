"use client";
import React, { useRef } from "react";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import ProductCard from "../productCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SellsCard from "../sellsCard/SellsCard";
import img from "../../images/Frame 34407.svg";
import Image from "next/image";
import offerImg from "../../images/Group 1749 (1).png";
import { AiOutlineMail } from "react-icons/ai";
import { LuKey } from "react-icons/lu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CiViewList } from "react-icons/ci";
import FlatIcon from "../flatIcon/flatIcon";

const BestSells = () => {
  const matches = useMediaQuery("(max-width:770px)");

  const slider = useRef<any>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 957,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 1
        },
      },
    ],
  };
  return (
    <div className="px-[3.5%] pb-2 ">
      <div className="flex items-center justify-between ">
        <div className="text-[#253D4E] font-bold text-3xl">
          Daily Best Sells
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <button
              onClick={() => slider.current?.slickPrev()}
              className="bg-[#F2F3F4] p-2 rounded-full "
            >
              <FlatIcon icon={`flaticon-left-arrow text-2xl rotate-180 `} />
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={() => slider.current.slickNext()}
              className="bg-[#F2F3F4] p-2 rounded-full "
            >
              <FlatIcon icon={`flaticon-left-arrow text-2xl  `} />
            </button>
          </div>
        </div>
        {/* {matches?<div><CiViewList className="h-[30px] w-[30px] text-[#253D4E]"/></div>:
            <div className='flex items-center gap-10 text-[#253D4E] font-semibold text-base'>
            <div>Featured</div>
            <div>Popular</div>
            <div>Newly added</div>
            <div className='flex gap-3 items-center'>
                <div><button onClick={() => slider.current?.slickPrev()} className='bg-[#F2F3F4] p-2 rounded-full '><MdArrowBack className='h-[25px] w-[25px]' /></button></div>
                <div> <button onClick={() => slider.current.slickNext()} className='bg-[#F2F3F4] p-2 rounded-full '><MdArrowForward className='h-[25px] w-[25px]' /></button></div>
            </div>
            </div>
} */}
      </div>
      <div className="flex md:justify-start justify-center lg:flex-row flex-col gap-5 items-center my-4  w-full mx-auto   ">
        {/* <div className='back '> */}
        <div className="w-full lg:w-[73%] h-full ">
          <Slider
            ref={slider}
            {...settings}
            className=""
            dotsClass={`slick-dots `}
            arrows={true}
            nextArrow={<></>}
            prevArrow={<></>}
            draggable={true}
          >
            {[1, 2, 3, 4, 4, 7, 6, 3, 5].map((item: any, idx: number) => {
              return (
                <div key={idx} className="">
                  <SellsCard />
                </div>
              );
            })}
          </Slider>
        </div>
        {/* </div> */}
        <div className="w-full relative rounded-md  max-h-[370px] ">
          <Image
            src={offerImg}
            className=""
            width={1000}
            height={1000}
            // layout="responsive"
            alt=""
            style={{
              aspectRatio: "auto",
              height: "370px",
              width: "100%",
              maxWidth: "100%",
              // height: "auto",
            }}
          />
          <div className="absolute bottom-[15px] px-[15px] max-h-[370px] w-full bst-sell-form">
            <div className="text-[#588F27] font-bold text-2xl text-center mb-[20px]">
              10% OFF
            </div>
            <div className="text-center text-sm font-bold mb-[35px]">
              <div>For New Member Sign Up At </div>
              <div>The First Time</div>
            </div>
            <div className="mb-[20px]">
              <div className="text-xs font-bold mb-[5px]">
                <span>Email address</span>
                <span className="text-[red]">*</span>
              </div>
              <div className="flex items-center gap-2  w-full px-[10px] rounded-sm bg-[#FFFFFF] ">
                <span>
                  <FlatIcon icon={`flaticon-message  text-[#ADADAD] `} />
                </span>
                <input
                  placeholder="johndoe@gmail.com"
                  className="w-[90%] outline-0 py-[7px] "
                />
              </div>
            </div>
            <div className="mb-[30px]">
              <div className="text-xs font-bold mb-[5px]">
                <span>Password</span>
                <span className="text-[red]">*</span>
              </div>
              <div className="flex items-center gap-2 rounded-sm w-full px-[10px] bg-[#FFFFFF] mb-[10px]">
                <span>
                  <LuKey className="text-[#ADADAD] h-[15px] w-[15px]" />
                </span>
                <input
                  placeholder="johndoe@gmail.com"
                  className="w-[90%] outline-0 py-[7px] "
                />
              </div>
            </div>
            <div className="bg-[#588F27] text-base text-center text-[#FFFFFF] py-[12px] rounded-md">
              Register Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSells;
