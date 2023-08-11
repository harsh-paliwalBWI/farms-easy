"use client";
import React, { useState } from "react";
import img from "../../images/Frame 34407.svg";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
import Modal from "../modal/Modal";

const SellsCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    // <div className=' w-fit'>
    // </div>
    <div className="border-[#479332] border-[1px]  rounded-md flex justify-center h-[370px] lg:h-[370px]  relative">
      <div className=" flex flex-col items-center">
        <div className="  w-fit">
          <Image
            src={img}
            alt=""
            width={1000}
            height={1000}
            className="rounded-t-sm "
            style={{
              width: "230px",
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <div className="px-[15px] absolute bottom-[15px] w-full">
          <div className="text-[#ADADAD] text-[12px]">Vegetables</div>
          <div className="text-[#253D4E] font-semibold my-[10px] flex gap-2 ">
            <span>Mallika Mango</span>
            <span>5kg</span>
          </div>
          <div className="text-[12px] flex gap-1 my-[10px]">
            <span className="text-[#ADADAD]">By</span>
            <span className="text-[#588F27] font-medium">Organic Nature</span>
          </div>
          <div className="flex items-center gap-2 mb-[20px]">
            <span className="font-semibold ">Rs 1,200</span>
            <span className="text-[#ADADAD] text-sm line-through font-semibold">
              Rs 1,500
            </span>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#588F27] text-white text-base w-full py-[10px] rounded-md text-center">
              I&apos;M Interested
            </div>
            <Link href={"/product/new-product"}>
              <div className="bg-[#51150A] flex items-center justify-center px-[13px] py-[14px] rounded-md">
                <HiOutlineArrowRight className="text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {modalOpen && <Modal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default SellsCard;
