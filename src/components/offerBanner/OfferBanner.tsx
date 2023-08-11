"use client";
import React from "react";
import bannerImg from "../../images/Group 1747.png";
import sideImg from "../../images/Offer2-img.svg";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import leftBanner from "../../images/Group 1748.png";
import sideImg1 from "../../images/Offer1-img.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

const OfferBanner = () => {
  const matches = useMediaQuery("(max-width:685px)");
  const matches2 = useMediaQuery("(max-width:480px)");

  return (
    <div className="sm:px-[3.5%] px-[7%]  py-[100px]">
      <div className="flex flex-wrap gap-5  justify-center items-center ">
        {/* <div className='grid grid-cols-2 gap-5 place-items-center '> */}

        <div
          style={{ position: "relative" }}
          className="relative min-w-[90vw] md:min-w-[45vw] md:flex-1 "
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/bwi-emb-farmacy.appspot.com/o/Offer1.png?alt=media&token=7aef680f-e2be-4935-bcec-fc31fad0be55"
            width={100}
            height={100}
            layout="responsive"
            className="w-full h-full"
            alt="banner"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div
          style={{ position: "relative" }}
          className="relative min-w-[90vw] md:min-w-[45vw] md:flex-1 "
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/bwi-emb-farmacy.appspot.com/o/Offer2.png?alt=media&token=d4d9882c-6821-4a35-920c-c48094c3edb4"
            width={100}
            height={100}
            layout="responsive"
            className="w-full h-full"
            alt="banner"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
