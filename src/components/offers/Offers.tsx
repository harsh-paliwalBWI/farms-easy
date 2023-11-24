"use client";
import React from "react";
import Image from "next/image";
import OffersImg from "../../images/Rectangle 23976 (1).png";

const Offers = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={OffersImg}
          alt=""
          width={1000}
          height={1000}
          style={{
            width: "100vw",
            objectFit: "cover",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Offers;
