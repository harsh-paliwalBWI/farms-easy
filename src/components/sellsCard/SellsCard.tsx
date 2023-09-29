"use client";
import React, { useState } from "react";
import img from "../../images/Frame 34407.svg";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
import Modal from "../modal/Modal";
import FlatIcon from "../flatIcon/flatIcon";
import { currency } from "@/utils/constant";

const SellsCard = ({ product, setSelectedProduct, handleOpenModal }: any) => {
  return (
    // <div className=' w-fit'>
    // </div>
    <div className="border-[#479332] border-[1px] w-full  rounded-md flex justify-center h-[370px] lg:h-[370px]  relative">
      <div className=" flex flex-col items-center">
        <div className="w-fit  h-[160px] flex justify-center items-center">
          <Image
            src={product?.images[product?.coverImage]?.url}
            alt=""
            width={1000}
            height={1000}
            className="rounded-t-sm w-full h-full object-contain "
            style={
              {
                // width: "230px",
                // maxWidth: "100%",
                // height: "auto",
              }
            }
          />
        </div>
        <div className="px-[15px] absolute bottom-[15px] w-full">
          {/* <div className="text-[#ADADAD] text-[12px]">Vegetables</div> */}
          <div className="text-[#253D4E] font-semibold my-[10px] flex gap-2 ">
            <span>{product?.name}</span>
            <span>
              {" "}
              {/* {product?.variants[0]?.weight} {product?.variants[0]?.unit} */}
            </span>
          </div>
          <div className="text-[12px] flex gap-1 my-[10px]">
            <span className="text-[#ADADAD]">By</span>
            <span className="text-[#588F27] font-medium">
              {product?.vendor?.name}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-[20px]">
            <span className="font-semibold ">
              {currency}{" "}
              {product?.variants[0]?.price?.discounted ||
                product?.variants[0]?.price?.mrp}
            </span>
            {product?.variants[0]?.price?.discounted &&
              product?.variants[0]?.price?.discounted !==
                product?.variants[0]?.price?.mrp && (
                <span className="text-[#ADADAD] text-sm line-through">
                  {currency} {product?.variants[0]?.price?.mrp}
                </span>
              )}
          </div>
          <div className="flex gap-2">
            <div
              className="bg-[#588F27] text-white text-xs flex items-center justify-center w-full py-[10px] rounded-md text-center cursor-pointer"
              onClick={() => {
                setSelectedProduct(product);
                setTimeout(() => {
                  handleOpenModal();
                }, 200);
              }}
            >
              I&apos;M Interested
            </div>
            <Link href={`/product/${product?.slug}`}>
              <div className="bg-[#51150A] flex items-center justify-center px-[13px] py-[14px] rounded-md">
                <FlatIcon icon={`flaticon-left-arrow text-md text-white  `} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellsCard;
