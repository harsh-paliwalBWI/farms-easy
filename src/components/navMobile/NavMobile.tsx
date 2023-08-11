"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { BiGridAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import logo from "../../images/logo (2).png";
import { FiSearch } from "react-icons/fi";

const NavMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const pathname = usePathname();
  const mobile = useMediaQuery("(max-width:480px)");
  const matches = useMediaQuery("(max-width:624px)");
  return (
    <div className="w-full  sm:px-[3.5%] px-[7%]  py-[10px] bg-[#eef0e5] font-medium text-md  relative ">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src={logo}
            alt=""
            width={mobile ? 100 : 150}
            height={mobile ? 100 : 150}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <div className="flex items-center sm:gap-10 gap-5">
          <div className=" sm:px-[10px] sm:py-[10px] px-[5px] py-[5px] rounded-md">
            <FiSearch className="sm:h-[22px] sm:w-[22px] h-[18px] w-[18px]" />
          </div>
          <div
            onClick={(prev) => {
              setIsMobile(true);
              document.body.classList.add("no-scroll");
            }}
          >
            <AiOutlineMenu className="sm:h-[25px] sm:w-[25px] h-[20px] w-[20px]" />
          </div>
        </div>
      </div>

      {isMobile && (
        <div
          className={` bg-[white]  ${
            matches ? "w-[100%]" : "w-[50%]"
          } absolute top-0 right-0 h-screen z-30`}
        >
          <div
            onClick={() => {
              setIsMobile(false);
              document.body.classList.remove("no-scroll");
            }}
            className="absolute top-[20px] right-[20px]"
          >
            <AiOutlineClose className="h-[20px] w-[20px]" />
          </div>
          <div className="flex  flex-col gap-10 font-medium  mx-auto  p-[30px]">
            <Link
              href={"/"}
              className={`flex gap-1 items-center  ${
                pathname === "/" && "text-[#619533] "
              } `}
              onClick={() => {
                setIsMobile(false);
                document.body.classList.remove("no-scroll");
              }}
            >
              <div className=" -mt-1">
                <FiHome className="h-[25px] w-[25px]" />
              </div>
              <div>Home</div>
            </Link>
            <Link
              href={"/aboutUs"}
              className={`${pathname.includes("aboutUs") && "text-[#619533]"}`}
              onClick={() => {
                setIsMobile(false);
                document.body.classList.remove("no-scroll");
              }}
            >
              About Us
            </Link>
            <Link
              href={"/gallery"}
              className={`${pathname.includes("gallery") && "text-[#619533]"}`}
              onClick={() => {
                setIsMobile(false);
                document.body.classList.remove("no-scroll");
              }}
            >
              Gallery
            </Link>
            <Link
              href={"/farmerlist"}
              className={`${
                pathname.includes("farmerlist") && "text-[#619533]"
              }`}
              onClick={() => {
                setIsMobile(false);
                document.body.classList.remove("no-scroll");
              }}
            >
              Farmer List
            </Link>
            <Link
              href={"/contactUs"}
              className={`${
                pathname.includes("contactUs") && "text-[#619533]"
              }`}
              onClick={() => {
                setIsMobile(false);
                document.body.classList.remove("no-scroll");
              }}
            >
              Contact Us
            </Link>
            <div className="flex items-center text-[#51150a] font-bold gap-2 ">
              <div>
                <BsTelephone className="h-[18px] w-[18px]" />
              </div>
              <div>1800-234-3566</div>
            </div>
            <div className="flex items-center gap-5 text-white bg-[#588f27] py-[15px] px-[20px] rounded-md text-md font-medium w-fit">
              <div>
                <BiGridAlt className="h-[28px] w-[28px]" />
              </div>
              <div>All Categories</div>
              <div>
                <MdOutlineKeyboardArrowRight className="h-[25px] w-[25px]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
