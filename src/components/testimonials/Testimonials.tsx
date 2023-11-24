"use client";
import React from "react";
// import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Slider from "react-slick";
import userImg from "../../images/Ellipse 10.png";
import quotationImg from "../../images/quotation 2.svg";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import FlatIcon from "../flatIcon/flatIcon";

const DUMMY_DATA = [
  {
    feedback:
      "We are very happy with our farm produce sold at fair price from our farms itself and its a stress free process for us",
    userImg: userImg,
    name: "MUTHUSWAMY P",
    type: "Customer",
  },
  {
    feedback:
      "We Thank Framseasy , our stress has reduced due to procurement from farm model of Farmeasy. Gone are the days when Farmers were trying to sell their own produce in wholesale markets",
    userImg: userImg,
    name: "KRISHNA KUMAR S",
    type: "Customer",
  },
  {
    feedback:
      "We are very happy with Farmseasy for providing us support relating marketing agriculture products at the right time the products are procured fresh from our farms and transported in a timely manne",
    userImg: userImg,
    name: "SARALA DEVI",
    type: "Customer",
  },
];

const Testimonials = () => {
  const slider = useRef<any>(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const matches = useMediaQuery("(max-width:1150px)");
  return (
    <div className={` pb-[150px] ${matches ? "pb-[20px]" : "pb-[150px]"}`}>
      <div className="text-center text-[#51150a] font-semibold md:text-lg sm:text-base text-sm mb-[10px] ">
        Testimonials
      </div>
      <div className="text-[#253d4e] text-center md:text-3xl sm:text-2xl text-xl font-bold">
        What Our Clients Says
      </div>
      <div className="flex justify-center items-center gap-0 md:gap-[20px] pb-[20px]  px-[3.5%] ">
        <div className="back w-[100%]  mt-[20px] ">
          <Slider
            ref={slider}
            {...settings}
            dotsClass={`slick-dots `}
            arrows={false}
            className="!w-[100%]"
          >
            {DUMMY_DATA.map((item: any, idx: number) => {
              return (
                <div key={item} className="">
                  <div className=" flex flex-col items-center mb-[30px] ">
                    <div
                      className={` ${
                        idx === 0 ? "bg-[#51150a]" : "bg-[#588f27]"
                      } h-[70px] w-[70px] rounded-full flex justify-center items-center relative z-30 translate-y-[30px]`}
                    >
                      <FlatIcon
                        icon={"flaticon-quotation text-5xl text-white"}
                      />
                      {/* <Image
                        src={quotationImg}
                        alt=""
                        height={40}
                        width={40}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      /> */}
                    </div>
                    <div
                      className={`py-[60px] px-[30px] rounded-lg  ${
                        idx === 0 ? "bg-[#F9F5F4]" : "bg-[#f1f3e8]"
                      } relative z-10   border-b-[#ececec] `}
                    >
                      <div
                        className={`absolute w-10 h-10 -bottom-[5px] left-0 right-0 mx-auto  ${
                          idx === 0 ? "bg-[#F9F5F4]" : "bg-[#f1f3e8]"
                        } rotate-45`}
                      ></div>
                      <div className="text-center md:text-[15px] text-[13px] text-[#555555] text-xs leading-5 ">
                        {item.feedback}
                      </div>
                    </div>
                  </div>
                  <div className=" text-center md:mb-[50px] mb-[20px]">
                    {/* <div className=" flex justify-center items-center mb-[10px]">
                      <Image
                        src={item.userImg}
                        alt=""
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div> */}
                    <div className="sm:text-xl font-semibold mb-[5px] ">
                      {item.name}
                    </div>
                    <div className="md:text-[14px] text-[13px] text-[#588f27] font-medium">
                      {item.type}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
