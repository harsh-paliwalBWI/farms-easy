"use client";
import React, { useState } from "react";
import CategoryImg from "../../../images/Vector.svg";
import Image from "next/image";
import hydroponicImg from "../../../images/Frame 34412.svg";
import sproutImg from "../../../images/sprout 1 (1).svg";
import CategoryCard from "../categoryCard/CategoryCard";

const DUMMY_DATA = [
  { image: sproutImg, catText: "FARM PRODUCTS", catText2: "" },
  { image: CategoryImg, catText: "ORGANIC FARM", catText2: "PRODUCTS" },
  { image: hydroponicImg, catText: "HYDROPONIC ", catText2: "FARM PRODUCTS " },
];

const CategoryAvl = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    // <div className=' w-[70%] mx-auto chooseCategory gap-8 '>
    <>
      <div className="flex justify-center md:flex-no-wrap flex-wrap gap-x-10 gap-2  w-[90%] mx-auto sm:mb-[70px] mb-[50px]">
        {DUMMY_DATA.map((item: any, idx: number) => {
          return (
            <div
              key={idx}
              className="cursor-pointer"
              // onClick={() => setSelectedCategory(idx)}
            >
              <div
                className={`${
                  idx === selectedCategory ? "bg-[#a4d672]" : "bg-white"
                } rounded-full w-[102px] h-[102px]  flex justify-center items-center mx-auto translate-y-[30px]`}
              >
                <Image
                  src={item.image}
                  height={60}
                  width={60}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
              <div
                className={`${
                  idx === selectedCategory ? "bg-[#588f27]" : "bg-[#b1bca6]"
                }   text-white font-semibold rounded-md  text-center h-[120px] pt-[40px] pb-[35px] w-[250px] px-[20px] `}
              >
                <div className="sm:text-lg text-base  font-medium">
                  {item.catText}
                </div>
                <div className="sm:text-lg text-base  font-medium">
                  {item.catText2}
                </div>
              </div>
            </div>
          );
        })}
        {/* <CategoryCard /> */}
      </div>
      <CategoryCard />
    </>
  );
};
// border-[2px] border-[black]
export default CategoryAvl;
