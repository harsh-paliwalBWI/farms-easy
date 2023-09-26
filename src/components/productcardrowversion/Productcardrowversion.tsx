"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/modal/Modal";
import VegtableImg from "../../images/Rectangle 23978.svg";
import { TiLocation } from "react-icons/ti";
import Link from "next/link";
import { currency } from "@/utils/constant";

const ProductRowVersion = ({ product, cookie, params }: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="border-[#479332] border-[1px] p-[1.5%] justify-between rounded-md flex flex-col sm:flex-row">
      <div className="flex justify-center w-[25%]">
        <Image
          src={product?.images[product?.coverImage]?.url}
          alt={product?.name}
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>

      <div className="flex flex-col w-full flex-1">
        <div className="text-[#b4b5b5] text-sm font-medium">
          {" "}
          {(params?.subCategorySlug &&
            params?.subCategorySlug?.split("-").join(" ")) ||
            ""}
        </div>
        <div className="text-[#253D4E] font-semibold my-[5px] text-lg">
          <span>{product?.name}</span>
          <span>
            {product?.variants[0]?.weight}
            {product?.variants[0]?.unit}
          </span>
        </div>
        <div className="flex gap-4">
          <div className="text-[12px] flex gap-1 my-[5px]">
            <span className="text-[#b4b5b5] text-sm font-medium">By</span>
            <span className="text-[#588F27] text-sm font-medium">
              {product?.vendor?.name}
            </span>
          </div>
          <div className="flex h-5 gap-1 items-center">
            <TiLocation className="h-[100%] w-auto text-[#598f26]" />
            <p className="font-bold text-xs">
              {product?.vendor?.location?.address}
            </p>
          </div>
        </div>
        <div className="text-[#9f9e9e] text-sm mt-5">
          <p>
            Quos unde voluptas illo deserunt unde. At totam est explicabo earum
            voluptas. Minus consequatur voluptatem non. Quis voluptatem et et
            sint.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center sm:items-star w-auto">
        <div className="flex items-center gap-2 text-lg mb-[5px]">
          <span className="font-semibold">
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
            )}{" "}
        </div>

        <div
          className="bg-[#479332] w-full text-white text-sm px-[25px] py-[10px] rounded-md "
          onClick={handleOpenModal}
        >
          I’M Interested
        </div>
        <Link href={`/product/${product?.id}`} className="w-full">
          <div className="bg-[#51150A] w-full text-white text-sm px-[25px] text-center py-[10px] rounded-md ">
            Buy Now
          </div>
        </Link>
      </div>
      {modalOpen && (
        <Modal
          handleCloseModal={handleCloseModal}
          selectedProduct={product}
          cookie={cookie}
        />
      )}
    </div>
  );
};

export default ProductRowVersion;
