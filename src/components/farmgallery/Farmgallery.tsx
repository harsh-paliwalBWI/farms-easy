"use client";

import React, { useState } from "react";
import Image1 from "../../images/gallery image1.svg";
import Image2 from "../../images/gallery image2.svg";
import Image3 from "../../images/gallery image3.svg";
import Image4 from "../../images/gallery image4.svg";
import Image5 from "../../images/gallery image5.svg";
import Image6 from "../../images/gallery image6.svg";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchFarmGallery } from "@/utils/databaseService";
import FlatIcon from "../flatIcon/flatIcon";

const DATA1 = [
  { GalleryImage: Image1 },
  { GalleryImage: Image2 },
  { GalleryImage: Image3 },
  { GalleryImage: Image4 },
  { GalleryImage: Image5 },
  { GalleryImage: Image6 },
];

const Farmgallery = () => {
  const { data }: any = useQuery({
    queryKey: ["farm-gallery"],
    queryFn: () => fetchFarmGallery(),
  });
  const [hoverdIndex, setHoveredIndex]: any = useState(null);
  return (
    <div className="px-[3.5%] sm:px-6 lg:px-8">
      <div className="text-center font-bold text-2xl md:text-4xl md:mb-[2rem] mb-[2rem]">
        Our Farm Gallery
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {data &&
          data?.status &&
          data?.res?.images?.slice(0, 6)?.map((item: any, idx: number) => (
            <div
              className="rounded-3xl overflow-hidden relative"
              key={idx}
            >
              <Image
                src={item.url}
                alt=""
                width={100}
                height={100}
                layout="responsive"
                // sizes="100vw"
                className="rounded-3xl w-full h-full"
              />
              <div
                className="absolute w-full h-full rounded-3xl hover:bg-[#17921386] visible-[none] top-0 left-0 flex justify-center items-center hover:cursor-pointer hover:border-[4px] hover:border-[#A4D672]"
                onMouseEnter={() => {
                  setHoveredIndex(idx);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                }}
              >
                {hoverdIndex === idx && (
                  <FlatIcon icon="flaticon-leaf text-6xl text-white" />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Farmgallery;
