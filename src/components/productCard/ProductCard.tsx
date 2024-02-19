import React, { useState } from "react";
import VegtableImg from "../../images/Rectangle 23978.svg";
import DiscountImg from "../../images/Vector (3).png";
import heartImg from "../../images/Frame 34409.svg";
import { TiLocation } from "react-icons/ti";
import { HiOutlineArrowRight } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { checkUserLogin } from "@/utils/databaseService";
import Image from "next/image";
import Link from "next/link";
import FlatIcon from "../flatIcon/flatIcon";
import { currency } from "@/utils/constant";
import Modal from "../modal/Modal";
import { getDiscountedPercentage } from "@/utils/utilities";
import { cookies } from "next/dist/client/components/headers";
import { auth } from "@/config/firebase-config";
import SideMenuLogin from "../sidemenulogin/SideMenulogin";
import { toast } from "react-toastify";

const ProductCard = ({ product, setSelectedProduct, handleOpenModal }: any) => {
  // const cookie = cookies().get("uid");

  const [isShowLoginMenu, setShowLoginMenu] = useState(false);
  const handleLoginClick = () => {
    // setShowLoginMenu(!isShowLoginMenu);
    // document.body.classList.add("no-scroll");
    toast.error("Login First");
  };

  const closeLoginMenu = () => {
    setShowLoginMenu(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="border-[#479332] border-[1px] p-[6px] sm:p-[9px] md:p-[12px] rounded-md flex h-full ">
      <div className="w-full h-full">
        <div className="flex items-center justify-between">
          <div className="relative h-[25px] sm:h-[30px] md:h-[35px] w-[35%] sm:w-[33%] md:w-[30%] ">
            <Image
              src={DiscountImg}
              alt=""
              width={65}
              height={65}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              className="w-auto h-fit object-contain"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit text-[10px] sm:text-xs md:text-sm text-center flex gap-2 text-white font-medium">
              <span className="text-white">
                {getDiscountedPercentage({
                  price: product?.variants[0]?.price?.mrp,
                  discountedPrice: product?.variants[0]?.price?.discounted,
                })}
              </span>
              <span className="text-white text-[10px] sm:text-xs md:text-sm">
                OFF
              </span>
            </div>
          </div>
          <div className="invisible">
            <FlatIcon icon={`flaticon-heart text-lg sm:text-xl md:text-2xl `} />
          </div>
        </div>
        <div className="my-[6px] sm:my-[8px] md:my-[10px] flex justify-center h-[100px] sm:h-[130px] md:h-[160px]">
          <Image
            src={product?.images[product?.coverImage]?.url}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        {/* <div className="text-[#ADADAD] text-[12px]">{product?.vendor?.name}</div> */}
        <div className="text-[#253D4E] font-semibold my-[3px] sm:my-[4px] md:my-[5px]">
          <span className="text-xs sm:text-sm md:text-base">
            {product?.name}{" "}
          </span>
          <span className="text-xs sm:text-sm md:text-base">
            {product?.variants[0]?.weight} {product?.variants[0]?.unit}
          </span>
        </div>
        <div className="text-[12px] flex gap-1 my-[3px] sm:my-[4px] md:my-[5px]">
          <span className="text-[#ADADAD] text-xs sm:text-sm md:text-base">
            By
          </span>
          <span className="text-[#588F27] text-xs sm:text-sm md:text-base font-medium">
            {product?.vendor?.name}
          </span>
        </div>
        {product?.vendor?.location?.address && (
          <div className="flex h-5  gap-1 items-center my-[3px] sm:my-[4px] md:my-[5px] ">
            <FlatIcon
              icon={`flaticon-location-fill text-sm sm:text-base md:text-lg text-primary`}
            />
            {/* <i className="h-[100%] w-auto text-[#598f26]" /> */}
            <p className="font-semibold text-[10px] sm:text-xs md:text-sm overflow-hidden truncate ">
              {product?.vendor?.location?.address?.trim()
                ? product.vendor.location.address
                : "Not available"}
            </p>
          </div>
        )}
        {/* {console.log(product?.vendor?.location?.address?.trim(), "ffffff")} */}
        <div className="flex items-center gap-2 my-[3px] sm:my-[4px] md:my-[5px]">
          <span className="font-semibold text-xs sm:text-sm md:text-base">
            {currency}{" "}
            {product?.variants[0]?.price?.discounted ||
              product?.variants[0]?.price?.mrp}
          </span>
          {product?.variants[0]?.price?.discounted &&
            product?.variants[0]?.price?.discounted !==
              product?.variants[0]?.price?.mrp && (
              <span className="text-[#ADADAD] text-[10px] sm:text-xs md:text-sm line-through">
                {currency} {product?.variants[0]?.price?.mrp}
              </span>
            )}
        </div>
        <div className="flex items-center justify-between gap-3">
          <div
            onClick={
              auth?.currentUser?.uid
                ? () => {
                    setSelectedProduct(product);
                    setTimeout(() => {
                      handleOpenModal();
                    }, 200);
                  }
                : handleLoginClick
            }
            className="bg-[#588F27] cursor-pointer text-white text-xs px-[9px] sm:px-[11px] md:px-[13px] py-[9px] sm:py-[12px] md:py-[15px] rounded-md w-full text-center"
          >
            I’M Interested
          </div>

          <Link href={`/product/${product?.slug}`}>
            <div className="bg-[#51150A] flex items-center justify-center px-[9px] sm:px-[11px] md:px-[13px] py-[10px] sm:py-[12px] md:py-[14px] rounded-md">
              <FlatIcon
                icon={`flaticon-left-arrow text-xs sm:text-sm md:text-base text-white`}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
