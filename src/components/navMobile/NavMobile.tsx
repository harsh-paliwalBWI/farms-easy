"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import logo from "../../images/logo (2).png";
import { FiSearch } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";

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
        <div className='h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-10'>

          <div
            className={` bg-[white]  ${matches ? "w-[100%]" : "w-[50%]"
              } absolute top-0 left-0 h-screen z-30 rounded-tr-3xl rounded-br-3xl sm:w-[50%] w-[100%] `}
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
            <div className="flex  flex-col gap-2 font-medium    px-[30px] ">
              <div className=" w-[150px] py-[5px] mt-[20px] mb-[10px] ">
                <Image
                  src={logo}
                  alt=""
                  className=""
                />
              </div>
              <Link
                href={"/"}
                className={`flex gap-1 items-center  ${pathname === "/" && "text-[#619533] "
                  }  py-[5px] `}
                onClick={() => {
                  setIsMobile(false);
                  document.body.classList.remove("no-scroll");
                }}
              >
                Home
              </Link>
              <div className={`flex items-center gap-2  py-[5px] `}><div>All Categories</div><div><SlArrowDown className="h-[10px] w-[10px]" /></div></div>
              <Link
                href={"/aboutUs"}
                className={`${pathname.includes("aboutUs") && "text-[#619533]"}  py-[5px] `}
                onClick={() => {
                  setIsMobile(false);
                  document.body.classList.remove("no-scroll");
                }}
              >
                About Us
              </Link>
              <Link
                href={"/gallery"}
                className={`${pathname.includes("gallery") && "text-[#619533]"}  py-[5px] `}
                onClick={() => {
                  setIsMobile(false);
                  document.body.classList.remove("no-scroll");
                }}
              >
                Gallery
              </Link>
              <Link
                href={"/farmerlist"}
                className={`${pathname.includes("farmerlist") && "text-[#619533]"
                  }  py-[5px] `}
                onClick={() => {
                  setIsMobile(false);
                  document.body.classList.remove("no-scroll");
                }}
              >
                Farmer List
              </Link>
              <Link
                href={"/contactUs"}
                className={`${pathname.includes("contactUs") && "text-[#619533]"
                  }  py-[5px] `}
                onClick={() => {
                  setIsMobile(false);
                  document.body.classList.remove("no-scroll");
                }}
              >
                Contact Us
              </Link>
              <div className="flex items-center text-[#51150a] font-bold gap-2  py-[5px] ">
                <div>
                  <BsTelephone className="h-[18px] w-[18px]" />
                </div>
                <div>1800-234-3566</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
