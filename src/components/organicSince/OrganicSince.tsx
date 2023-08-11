"use client";
import React from "react";
import farmerImg from "../../images/Rectangle 24011.svg";
import organicLogo from "../../images/Frame (1).svg";
import vegetableImg from "../../images/blink-img-1.svg";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
const DUMMY_DATA = [
  { count: "30+", text: "Store Tie-Up" },
  { count: "20K", text: "Land Acres" },
  { count: "100+", text: "Organic Products" },
];

const OrganicSince = () => {
  const matches = useMediaQuery("(max-width:1113px)");
  const matches2 = useMediaQuery("(max-width:480px)");
  return (
    <div className=" sm:px-[3.5%] px-[7%]   md:pb-[80px] md:pt-[20px]  w-full">
      <div className="flex justify-center items-end  gap-[80px]  ">
        {!matches && (
          <div className="flex flex-col   w-fit   relative ">
            <div className="h-[550px] w-[550px] ">
              <Image
                src={farmerImg}
                alt=""
                height={1000}
                width={1000}
                className=""
              />
            </div>
            <div className="absolute bottom-[-20px]">
              <Image
                src={vegetableImg}
                alt=""
                width={1000}
                height={1000}
                className="h-[180px] w-[180px]"
              />
            </div>
          </div>
        )}
        <div className=" flex flex-col justify-center  w-full items-center ">
          <div className="font-bold sm:text-4xl text-2xl sm:mb-[25px] mb-[10px]">
            Organic Since 2015
          </div>
          <div className="text-[#6a6a6a] text-xs font-medium sm:mb-[40px] mb-[20px] text-center">
            A one-stop shop full of all the right choices, NativeFarm is a
            health food haven with organic fruit & vegetables, organic bread
            from bakeries, only organic meat and sustainable fish from British
            waters. Our over-flowing groceries range is full of gluten-free,
            dairy-free, raw food and healthy options, while our Health &
            Bodycare department.
          </div>
          <div className="flex gap-x-[100px] sm:gap-y-[50px] gap-y-[30px] flex-wrap sm:mb-[70px] mb-[20px] ">
            {DUMMY_DATA.map((item: any, idx: number) => {
              return (
                <div key={idx}>
                  <div className="text-[#588f27] md:text-4xl sm:text-2xl text-xl font-bold mb-[5px]">
                    {item.count}
                  </div>
                  <div className="font-semibold sm:text-base text-sm">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-5 ">
            <div
              className={`w-[150px] h-[150px]  flex items-center justify-center ${
                matches2 ? "w-[100px] h-[100px]" : "w-[150px] h-[150px]"
              }`}
            >
              <Image
                src={organicLogo}
                alt=""
                width={1000}
                height={1000}
                className=""
              />
            </div>
            <div className="">
              <div className="text-[#51150A] font-bold mb-[5px] sm:text-lg text-base">
                Amit Malviya
              </div>
              <div className="text-[#555555] sm:text-sm text-xs font-semibold">
                Founder of the Company
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicSince;
