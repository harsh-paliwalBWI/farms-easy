"use client";
import React, { useState } from "react";
import CategoryImg from "../../../images/Vector.svg";
import Image from "next/image";
import hydroponicImg from "../../../images/Frame 34412.svg";
import sproutImg from "../../../images/sprout 1 (1).svg";
import CategoryCard from "../categoryCard/CategoryCard";
import FlatIcon from "@/components/flatIcon/flatIcon";

const DUMMY_DATA = [
  { image: "flaticon-sprout", catText: "FARM PRODUCTS", catText2: "" },
  { image: "flaticon-organic", catText: "ORGANIC FARM", catText2: "PRODUCTS" },
  {
    image: "flaticon-hydroponic-2",
    catText: "HYDROPONIC ",
    catText2: "FARM PRODUCTS ",
  },
];

const CategoryAvl = ({ categories, subCategories }: any) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categories && categories[0]?.id
  );
  return (
    // <div className=' w-[70%] mx-auto chooseCategory gap-8 '>
    <>
      <div className="flex justify-center md:flex-no-wrap flex-wrap  gap-1 sm:gap-4 md:gap-7  w-[90%] mx-auto md:mb-[70px] sm:mb-[50px] mb-[30px]">
        {categories &&
          categories.map((item: any, idx: number) => {
            return (
              <div
                key={item?.id}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(item?.id)}
              >
                <div
                  className={`${
                    item?.id === selectedCategory ? "bg-[#a4d672]" : "bg-white"
                  } rounded-full w-[60px] sm:w-[80px] md:w-[102px] aspect-square  flex justify-center items-center mx-auto translate-y-[30px]`}
                >
                  <FlatIcon
                    icon={`${
                      idx === 0
                        ? "flaticon-sprout"
                        : idx === 1
                        ? "flaticon-organic"
                        : "flaticon-hydroponic-2"
                    } ${
                      item?.id === selectedCategory
                        ? "text-white"
                        : "text-primary"
                    } text-5xl`}
                  />
                </div>
                <div
                  className={`${
                    item?.id === selectedCategory
                      ? "bg-[#588f27]"
                      : "bg-[#b1bca6]"
                  }   text-white font-semibold rounded-md  text-center  h-[60px] sm:h-[90px] md:h-[120px] pt-[40px] pb-[28px] md:pb-[35px] w-[250px] px-[20px] `}
                >
                  <div className="sm:text-lg text-base text-white  font-medium">
                    {item.name}
                  </div>
                  {/* <div className="sm:text-lg text-base text-white  font-medium">
                    {item.catText2}
                  </div> */}
                </div>
              </div>
            );
          })}
        {/* <CategoryCard /> */}
      </div>
      <CategoryCard
        selectedCategory={selectedCategory}
        subCategories={subCategories}
        categories={categories}
      />
    </>
  );
};
// border-[2px] border-[black]
export default CategoryAvl;
