"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiGridAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import NavMobile from "../navMobile/NavMobile";
import SearchHeader from "../searchHeader/SearchHeader";
import { usePathname } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchSubCategories } from "@/utils/databaseService";
import OutsideClickHandler from "../../utils/OutsideClickHandler";
import FlatIcon from "../flatIcon/flatIcon";

const NavbarClient = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
  const { data: subCategories } = useQuery({
    queryKey: ["sub-categories"],
    queryFn: () => fetchSubCategories(),
  });

  const pathname = usePathname();
  const mobile = useMediaQuery("(max-width:1080px)");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      {!mobile && (
        <div className="">
          <SearchHeader />
        </div>
      )}
      {mobile ? (
        <NavMobile />
      ) : (
        <div className="w-full  px-[3.5%] flex justify-between py-[12px] bg-[#eef0e5] font-medium text-md">
          <div className="flex items-center gap-10 font-medium relative  ">
            <OutsideClickHandler
              onClick={() => {
                setIsCategoriesOpen(false);
                setSelectedCategory("");
              }}
            >
              <div className="flex items-center gap-5 text-white bg-[#588f27]  rounded-md text-md font-medium relative hover:cursor-pointer">
                <div
                  className="flex items-center gap-5 py-[15px] px-[20px]"
                  onClick={() => {
                    setIsCategoriesOpen((val) => !val);
                    setSelectedCategory("");
                  }}
                >
                  <div>
                    <BiGridAlt className="h-[28px] w-[28px] text-white" />
                  </div>
                  <div className="text-white">All Categories</div>
                  <div>
                    {/* <i className="flaticon-black-plane text-primary-6000 text-" /> */}
                    <MdOutlineKeyboardArrowRight className="h-[25px] w-[25px] text-white" />
                  </div>
                </div>
                {isCategoriesOpen && (
                  <div className="absolute top-[58px] left-0 w-full bg-white z-50 rounded-xl shadow-sm">
                    <div className="flex flex-col  ">
                      {categories &&
                        categories?.map((category: any, idx: any) => {
                          return (
                            <div className="relative" key={idx}>
                              <Link
                                href={"/category/category-1/subCategory2"}
                                onClick={(e) => {
                                  if (category.isSubCategory) {
                                    e.preventDefault();
                                  } else {
                                    setIsCategoriesOpen(false);
                                    setSelectedCategory("");
                                  }
                                }}
                              >
                                <div
                                  onClick={() => {
                                    if (category.isSubCategory) {
                                      if (selectedCategory === category?.id) {
                                        setSelectedCategory("");
                                      } else {
                                        setSelectedCategory(category?.id);
                                      }
                                    }
                                  }}
                                  className={`px-4 py-3   ${
                                    idx !== categories.length - 1 &&
                                    "border-b border-[#dbdbdb]"
                                  } flex justify-between items-center `}
                                >
                                  <p className="">{category.name}</p>
                                  {category.isSubCategory &&
                                    (selectedCategory === category?.id ? (
                                      <FlatIcon
                                        icon="flaticon-down-arrow"
                                        classname={`text-primary`}
                                      />
                                    ) : (
                                      // <i className="flaticon-down-arrow text-primary w-fit flex items-center" />
                                      <FlatIcon
                                        icon="flaticon-down-arrow"
                                        classname={`text-primary -rotate-90`}
                                      />
                                    ))}
                                </div>
                              </Link>
                              {selectedCategory === category?.id && (
                                <div className="absolute top-0 left-full bg-white border-l rounded-lg border-[#dbdbdb] w-auto min-w-[200px]">
                                  {subCategories &&
                                    subCategories?.map((sub: any, idx: any) => {
                                      return (
                                        <Link
                                          key={idx}
                                          onClick={() => {
                                            setIsCategoriesOpen(false);
                                            setSelectedCategory("");
                                          }}
                                          href={
                                            "/category/category-1/subCategory2"
                                          }
                                        >
                                          <div
                                            className={`px-4 py-3  flex justify-between `}
                                          >
                                            <p className="">{sub.name}</p>
                                            <div></div>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>
            </OutsideClickHandler>

            <Link
              href={"/"}
              className={`flex gap-1 items-center justify-center ${
                pathname === "/" && "!text-primary"
              } `}
            >
              <div className="-mt-1">
                {/* <FiHome
                  className={`w-[25px] h-[25px]  ${
                    pathname === "/" && "!text-[#619533]"
                  } `}
                /> */}
                <FlatIcon
                  icon="flaticon-home"
                  classname={`text-2xl ${pathname === "/" && "!text-primary"}`}
                />
              </div>
              <p className={` ${pathname === "/" && "!text-primary"} `}>Home</p>
            </Link>
            <Link
              href={"/aboutUs"}
              className={`${pathname.includes("aboutUs") && "text-primary"}`}
            >
              <p
                className={`${pathname.includes("aboutUs") && "text-primary"}`}
              >
                About Us
              </p>
            </Link>
            <Link
              href={"/gallery"}
              className={`${pathname.includes("gallery") && "text-primary"}`}
            >
              <p
                className={`${pathname.includes("gallery") && "text-primary"}`}
              >
                Gallery
              </p>
            </Link>
            <Link
              href={"/farmerlist"}
              className={`${pathname.includes("farmerlist") && "text-primary"}`}
            >
              <p
                className={`${
                  pathname.includes("farmerlist") && "text-primary"
                }`}
              >
                Farmer List
              </p>
            </Link>
            <Link
              href={"/contactUs"}
              className={`${pathname.includes("contactUs") && "text-primary"}`}
            >
              <p
                className={`${
                  pathname.includes("contactUs") && "text-primary"
                }`}
              >
                Contact Us
              </p>
            </Link>
          </div>
          <div className="flex items-center  font-bold gap-2 ">
            <div>
              <FlatIcon icon="flaticon-calling text-xl text-[#51150a]" />
            </div>
            <p className="text-[#51150A]">1800-234-3566</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarClient;
