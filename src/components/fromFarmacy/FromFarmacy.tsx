"use client";
import React from "react";
import HeartVegetableImg from "../../images/image 28.svg";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import blinkImg from "../../images/blink-img-3.svg";
import FlatIcon from "../flatIcon/flatIcon";
const DUMMY_DATA = [
  {
    heading: "Healthy Food",
    text: "We advocate that food be authentic and",
    text1: "ethical, freshly prepared and tasty.",
    image: "flaticon-vegetable",
  },
  {
    heading: "Fresh Products",
    text: "We advocate that food be authentic and",
    text1: "ethical, freshly prepared and tasty.",
    image: "flaticon-fruit",
  },
  {
    heading: "Hydroponic Products",
    text: "We advocate that food be authentic and",
    text1: "ethical, freshly prepared and tasty.",
    image: "flaticon-hydroponic-2",
  },
];

const DUMMY_DATA1 = [
  {
    heading: "100% Organic",
    text: "We advocate that food be authentic and",
    text1: "ethical, freshly prepared and tasty.",
    image: "flaticon-organic-product",
  },
  {
    heading: "Local Growth",
    text: "We advocate that food be authentic and",
    text1: "ethical, freshly prepared and tasty.",
    image: "flaticon-wheat-plant",
  },
  {
    heading: "Pesticide Free",
    text: "We advocate that food be authentic and",
    text1: "ethical, freshly prepared and tasty.",
    image: "flaticon-pesticide-free",
  },
];

const FromFarmacy = () => {
  const matches = useMediaQuery("(max-width:941px)");
  return (
    <div className="sm:px-[3.5%] px-[7%]   relative ">
      {/* <div className="text-center font-bold sm:text-4xl text-2xl">
        From Farmacy Farm Fresh
      </div> */}
      {/* sm:my-[60px] my-[20px] */}
      <div className="flex justify-center md:flex-row flex-col items-center sm:mt-[40px]  sm:mb-[60px] mb-[40px] ">
        <div className="  flex flex-col sm:gap-[60px] gap-[30px]">
          {DUMMY_DATA.map((item: any, idx: number) => {
            return (
              <div className="flex items-center gap-5" key={idx}>
                <div className="">
                  <div className="font-bold sm:text-lg text-base text-right mb-[5px]">
                    {item.heading}
                  </div>
                  <div className="text-xs text-[#606060] font-medium text-right">
                    {item.text}
                  </div>
                  <div className="text-xs text-[#606060] font-medium text-right">
                    {item.text1}
                  </div>
                </div>
                {/* <div className=''>
                            <Image src={item.image} alt='' height={50} width={50}/>
                            </div> */}
                <div className="relative rounded-full h-[40px] w-[40px] bg-[#EFF4DC] z-30 ml-4">
                  <FlatIcon
                    icon={`${item?.image} text-[2.5rem] text-primary absolute top-[-30%] left-[-30%]`}
                  />
                  {/* <Image
                    src={item.image}
                    alt=""
                    height={50}
                    width={50}
                    className="absolute top-[-30%] left-[-30%]"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  /> */}
                  {/* <div className="h-[40px] w-[40px] rounded-full bg-[#EFF4DC] absolute top-[50%] left-[50%] opacity-50 "></div> */}
                  /
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <Image
            src={HeartVegetableImg}
            alt=""
            height={550}
            width={550}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="  flex flex-col sm:gap-[60px] gap-[30px]">
          {DUMMY_DATA1.map((item: any, idx: number) => {
            return (
              <div className="flex items-center gap-5" key={idx}>
                <div className="relative rounded-full h-[40px] w-[40px] bg-[#EFF4DC] z-30 ml-4">
                  <FlatIcon
                    icon={`${item?.image} text-[2.5rem] text-primary absolute top-[-40%] left-[30%]`}
                  />

                  {/* <div className="h-[40px] w-[40px] rounded-full bg-[#EFF4DC] absolute top-[50%] left-[50%] opacity-50 "></div> */}
                </div>
                <div className="">
                  <div className="font-bold sm:text-lg text-base mb-[5px] ">
                    {item.heading}
                  </div>
                  <div className="text-xs text-[#606060] text-right">
                    {item.text}
                  </div>
                  <div className="text-xs text-[#606060] ">{item.text1}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {!matches && (
        <div className="absolute right-0 top-0">
          <Image
            src={blinkImg}
            alt=""
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default FromFarmacy;
