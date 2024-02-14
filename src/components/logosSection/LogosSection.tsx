"use client";

import React, { useRef } from "react";
import brand1 from "../../images/brand-1.svg";
import brand2 from "../../images/brand-2.svg";
import brand3 from "../../images/brand-3.svg";
import brand4 from "../../images/brand-4.svg";
import brand5 from "../../images/brand-5.svg";
import Image from "next/image";
import Slider from "react-slick";
import { useMediaQuery } from "@mui/material";

const IMAGES = [
  { image: brand4 },
  { image: brand2 },
  { image: brand5 },
  { image: brand3 },
  { image: brand1 },
];

const LogosSection = () => {
  const slider = useRef<any>(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 3,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };

  const matches = useMediaQuery("(max-width:950px)");

  return (
    <div className="  w-full ">
      {/* <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr]  gap-5'> */}
      <div className="flex flex-wrap gap-x-[20px] gap-y-[40px] justify-around items-center md:py-[60px] py-[40px]  ">
        {matches ? (
          <>
            <Slider
              ref={slider}
              {...settings}
              dotsClass={`slick-dots`}
              arrows={false}
              className="!w-[100%] "
            >
              {IMAGES.map((item: any, idx: number) => {
                return (
                  <div className="w-[180px]  " key={idx}>
                    <Image
                      src={item.image}
                      height={1000}
                      width={1000}
                      alt=""
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                );
              })}
            </Slider>
          </>
        ) : (
          <>
            {IMAGES.map((item: any, idx: number) => {
              return (
                <div className="w-[180px]  border-2 border-black" key={idx}>
                  <Image
                    src={item.image}
                    height={1000}
                    width={1000}
                    alt=""
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              );
            })}{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default LogosSection;
