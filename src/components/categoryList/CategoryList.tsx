"use client";
import React from "react";
import img from "../../images/Group 6.svg";
import Image from "next/legacy/image";

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

const CategoryList = () => {
  return (
    <div className=" sm:px-[3.5%] px-[7%] md:py-[100px] sm:py-[60px] py-[30px] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-8 gap-x-8 md:gap-y-10  gap-y-3 ">
        {/* <div className='flex justify-center gap-10'> */}
        {DUMMY_DATA.map((item: any, idx: number) => {
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
                        <Image src={item.image} alt="" />
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
        })}
      </div>
    </div>
  );
};

export default CategoryList;
