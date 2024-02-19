"use client";
import React, { useRef, useState } from "react";
import CategoryImg from "../../../images/Vector.svg";
import Image from "next/image";
import hydroponicImg from "../../../images/Frame 34412.svg";
import sproutImg from "../../../images/sprout 1 (1).svg";
import CategoryCard from "../categoryCard/CategoryCard";
import FlatIcon from "@/components/flatIcon/flatIcon";
import { useMediaQuery } from "@mui/material";
import Slider from "react-slick";

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
  const slider = useRef<any>(null);
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
          // dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // dots: true,
        },
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(
    categories && categories[0]?.id
  );

  const matches = useMediaQuery("(max-width:950px)");

  return (
    // <div className=' w-[70%] mx-auto chooseCategory gap-8 '>
    <>
      <div className="flex justify-center flex-no-wrap gap-1 sm:gap-4 md:gap-7  w-[100%] mx-auto md:mb-[70px] sm:mb-[50px] mb-[30px]">
        {matches ? (
          <>
            <Slider
              ref={slider}
              {...settings}
              dotsClass={`slick-dots`}
              arrows={false}
              className="!w-full mt-3 "
            >
              {categories &&
                categories.map((item: any, idx: number) => {
                  return (
                  
                      <div
                       key={item?.id}
                        className={`${
                          item?.id === selectedCategory
                            ? "bg-[#588f27]"
                            : "bg-[#b1bca6]"
                        }  flex text-white font-semibold rounded-md  text-center  h-[55px] sm:h-[65px] md:h-[100px]   w-fit  p-1 sm:p-1.5  cursor-pointer`}
                        onClick={() => setSelectedCategory(item?.id)}
                      >
                
                        <div
                          className={`${
                            item?.id === selectedCategory
                              ? "bg-[#a4d672]"
                              : "bg-white"
                          } z-50 rounded-full w-fit p-1 sm:p-1.5 md:p-2 aspect-square  flex justify-center items-center mx-auto `}
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
                            } text-xl sm:text-3xl md:text-5xl`}
                          />
                        </div>

                        <div className="md:text-base sm:text-sm text-xs text-white  font-medium">
                          {item.name}
                        </div>
                       
                      </div>
                   
                  );
                })}
            </Slider>
          </>
        ) : (
          <>
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
                        item?.id === selectedCategory
                          ? "bg-[#a4d672]"
                          : "bg-white"
                      } rounded-full w-[20px] sm:w-[60px] md:w-[100px] aspect-square  flex justify-center items-center mx-auto translate-y-[30px]`}
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
                        } text-xl sm:text-3xl md:text-5xl`}
                      />
                    </div>
                    <div
                      className={`${
                        item?.id === selectedCategory
                          ? "bg-[#588f27]"
                          : "bg-[#b1bca6]"
                      }   text-white font-semibold rounded-md  text-center  h-[60px] sm:h-[90px] md:h-[120px] pt-[40px] pb-[28px] md:pb-[35px] w-[70px]  sm:w-[160px] md:w-[250px] px-[4px] sm:px-[12px] md:px-[20px] `}
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
          </>
        )}

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
