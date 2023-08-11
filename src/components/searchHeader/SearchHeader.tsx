"use client";
import React from "react";
import logo from "../../images/logo (2).png";
import Image from "next/image";
import lilHeart from "../../images/li_heart.svg";
import arrowDown from "../../images/li_chevron-down.svg";
import userImg from "../../images/Ellipse 2.svg";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import FlatIcon from "../flatIcon/flatIcon";
const SearchHeader = () => {
  return (
    <div className="flex items-center justify-between px-[3.5%] py-[10px]">
      <Link href={"/"}>
        <div>
          <Image
            src={logo}
            alt=""
            width={180}
            height={180}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </Link>
      <div className="flex justify-between items-center gap-3 rounded-sm  w-[50%] bg-[#F9F9F9]">
        <input
          className="rounded-sm  outline-0 px-[10px] w-full py-[12px] bg-[#F9F9F9] "
          placeholder="Search for items..."
        />
        <div className="bg-[#51150A] h-full py-[14px] px-[15px] text-white rounded-r-sm">
          <FlatIcon icon="flaticon-search text-lg" />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <div>
            <FlatIcon icon="flaticon-heart text-2xl" />
            {/* <Image
              src={lilHeart}
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            /> */}
          </div>
          <div>Wishlist</div>
        </div>
        <Link href={"/login"}>Login</Link>
        {/* <div className='flex items-center gap-3'>
      <div><Image src={userImg} alt=''/></div>
      <div>Ramzi Cherif</div>
      <div><Image src={arrowDown} alt=''/></div>
      </div> */}
      </div>
    </div>
  );
};

export default SearchHeader;
