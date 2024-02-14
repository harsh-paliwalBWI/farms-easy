"use client";
import React, { useRef } from "react";
import img from "../../images/Group 6.svg";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchHomeData } from "@/utils/databaseService";
import { currency } from "@/utils/constant";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import Slider from "react-slick";

const DUMMY_DATA = [
  {
    heading: "Top Sells",
    items: [
      {
        image: img,
        name: "Orange",
        qty: "10 kg",
        price: "1,333",
        disPrice: "4,455",
      },
      {
        image: img,
        name: "Orange",
        qty: "10 kg",
        price: "1,333",
        disPrice: "4,455",
      },
      {
        image: img,
        name: "Orange",
        qty: "10 kg",
        price: "1,333",
        disPrice: "4,455",
      },
    ],
  },
  {
    heading: "Top Sells",
    items: [
      {
        image: img,
        name: "Orange",
        qty: "10 kg",
        price: "1,333",
        disPrice: "4,455",
      },
      {
        image: img,
        name: "orange",
        qty: "10 kg",
        price: "1,333",
        disPrice: "4,455",
      },
      {
        image: img,
        name: "orange",
        qty: "10 kg",
        price: "1,333",
        disPrice: "4,455",
      },
    ],
  },
  {
    heading: "Top Sells",
    items: [
      {
        image: img,
        name: "Orange",
        qty: "10 kg",
        price: "1,333",
        disPrice: "4,455",
      },
      {
        image: img,
        name: "orange",
        qty: "10 kg",
        price: "1,333",
        disPrice: "4,455",
      },
      {
        image: img,
        name: "orange",
        qty: "10 kg",
        price: "1,333",
        disPrice: "4,455",
      },
    ],
  },
  {
    heading: "Top Sells",
    items: [
      {
        image: img,
        name: "Orange",
        qty: "10 kg",
        price: "1,333",
        disPrice: "4,455",
      },
      {
        image: img,
        name: "orange",
        qty: "10 kg",
        price: "1,333",
        disPrice: "4,455",
      },
      {
        image: img,
        name: "orange",
        qty: "10 kg",
        price: "1,333",
        disPrice: "4,455",
      },
    ],
  },
];

const categoryList = [
  { type: "topSells", name: "Top Sells" },
  { type: "topRated", name: "Top Rated" },
  { type: "trending", name: "Trending Items" },
  { type: "newlyAdded", name: "Recently Added" },
];

const CategoryList = () => {
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

  const { data: homeData } = useQuery({
    queryKey: ["homeData"],
    queryFn: () => fetchHomeData(),
  });

  const matches = useMediaQuery("(max-width:950px)");

  return (
    <div className=" sm:px-[3.5%] px-[7%] md:py-[100px] sm:py-[60px] py-[30px] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-8 gap-x-8 md:gap-y-10  sm:gap-y-8 gap-y-6">
        {/* <div className='flex justify-center gap-10'> */}

        {categoryList?.map((item) => {
          return (
            <div className="w-[100%]  " key={item.type}>
              <div className="">
                <div className="text-[#253D4E] sm:text-xl text-lg font-semibold mb-[10px] ">
                  {item.name}
                </div>

                <div className=" h-1 relative mb-[25px] sm:w-[80%] w-full">
                  <div className="absolute top-0 left-0 w-1/2 h-full border-t-[2px] border-[#588f27]"></div>
                  <div className="absolute top-0 right-0 w-1/2 h-full border-t-[2px] border-[#ebebeb]"></div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-7">
                {matches ? (
                  <>
                    <Slider
                      ref={slider}
                      {...settings}
                      dotsClass={`slick-dots`}
                      arrows={false}
                      className="!w-[100%] "
                    >
                      {homeData &&
                        homeData.filter((home: any) => home.type === item.type)
                          .length !== 0 &&
                        homeData
                          .filter((home: any) => home.type === item.type)[0]
                          ?.products.map((product: any, idx: number) => {
                            return (
                              <Link
                                href={`/product/${product?.slug}`}
                                key={product?.id}
                              >
                                <div
                                  key={idx}
                                  className="flex gap-3  items-center"
                                >
                                  <div className="w-[20%] lg:w-[25%] bg-slate-200">
                                    <Image
                                      src={
                                        product?.images[product.coverImage]
                                          ?.url || ""
                                      }
                                      alt={product.name}
                                      width={1000}
                                      height={1000}
                                      className="w-full h-full object-contain"
                                      style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                      }}
                                    />
                                  </div>
                                  <div className="flex flex-col gap-3 ">
                                    <div className="text-[#253D4E] text-sm font-medium flex gap-3">
                                      <span>{product.name}</span>
                                      {/* <span>{item.qty}</span> */}
                                    </div>
                                    <div className="text-sm font-medium  flex gap-3 items-center">
                                      <span className="text-[#588F27]">
                                        {currency}
                                        {product?.variants[0]?.price?.mrp}
                                      </span>
                                      {product?.variants[0]?.price
                                        ?.discounted && (
                                        <span className="text-[#ADADAD] line-through">
                                          {currency}
                                          {
                                            product?.variants[0]?.price
                                              ?.discounted
                                          }
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                    </Slider>
                  </>
                ) : (
                  <>
                    {homeData &&
                      homeData.filter((home: any) => home.type === item.type)
                        .length !== 0 &&
                      homeData
                        .filter((home: any) => home.type === item.type)[0]
                        ?.products.map((product: any, idx: number) => {
                          return (
                            <Link
                              href={`/product/${product?.slug}`}
                              key={product?.id}
                            >
                              <div
                                key={idx}
                                className="flex gap-3  items-center"
                              >
                                <div className="w-[20%] lg:w-[25%] bg-slate-200">
                                  <Image
                                    src={
                                      product?.images[product.coverImage]
                                        ?.url || ""
                                    }
                                    alt={product.name}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-contain"
                                    style={{
                                      maxWidth: "100%",
                                      height: "auto",
                                    }}
                                  />
                                </div>
                                <div className="flex flex-col gap-3 ">
                                  <div className="text-[#253D4E] text-sm font-medium flex gap-3">
                                    <span>{product.name}</span>
                                    {/* <span>{item.qty}</span> */}
                                  </div>
                                  <div className="text-sm font-medium  flex gap-3 items-center">
                                    <span className="text-[#588F27]">
                                      {currency}
                                      {product?.variants[0]?.price?.mrp}
                                    </span>
                                    {product?.variants[0]?.price
                                      ?.discounted && (
                                      <span className="text-[#ADADAD] line-through">
                                        {currency}
                                        {
                                          product?.variants[0]?.price
                                            ?.discounted
                                        }
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                  </>
                )}
              </div>
            </div>
          );
        })}

        {/* {DUMMY_DATA.map((item: any, idx: number) => {
          return (
            <div className="w-[100%]  " key={idx}>
              <div className="">
                <div className="text-[#253D4E] sm:text-xl text-lg font-semibold mb-[10px] ">
                  {item.heading}
                </div>

                <div className=" h-1 relative mb-[25px] sm:w-[80%] w-full">
                  <div className="absolute top-0 left-0 w-1/2 h-full border-t-[2px] border-[#588f27]"></div>
                  <div className="absolute top-0 right-0 w-1/2 h-full border-t-[2px] border-[#ebebeb]"></div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-7">
                {item.items.map((item: any, idx: number) => {
                  return (
                    <div key={idx} className="flex gap-3  items-center ">
                      <div>
                        <Image
                          src={item.image}
                          alt=""
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-3 ">
                        <div className="text-[#253D4E] text-sm font-medium flex gap-3">
                          <span>{item.name}</span>
                          <span>{item.qty}</span>
                        </div>
                        <div className="text-sm font-medium  flex gap-3 items-center">
                          <span className="text-[#588F27]">{item.price}</span>
                          <span className="text-[#ADADAD] line-through">
                            {item.disPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default CategoryList;
