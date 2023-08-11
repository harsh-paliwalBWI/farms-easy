import React, { FC } from "react";
import leafimage from "../../images/Group 34147.svg";
import headingsectionimage from "../../images/Rectangle 2.svg";
import Image from "next/image";
const DUMMY_DATA = [
  { count: "30+", text: "Store Tie-Up" },
  { count: "20K", text: "Land Acres" },
  { count: "100+", text: "Organic Products" },
];

interface Props {
  heading: string;
}
const Headersectiontype2: FC<Props> = ({ heading }) => {
  return (
    <div className="relative">
      <Image
        src={headingsectionimage}
        className="  h-auto w-[100vw] object-cover"
        alt=""
      ></Image>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#ffffff] font-bold mb-[20px]">
          {heading}
        </div>
        <div className="flex text-white gap-3 text-sm justify-center items-center">
          <div>Home</div>
       <div>Contacts</div>
        </div>
      </div>
    </div>
  );
};

export default Headersectiontype2;
