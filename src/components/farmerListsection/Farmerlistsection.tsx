"use client";

import React from "react";
import Farmerlistitem from "../farmerlistitem/Farmerlistitem";

import ImageA from "../../images/farmerlist1.svg";
import ImageB from "../../images/farmerlist2.svg";
import ImageC from "../../images/farmerlist3.svg";
import ImageD from "../../images/farmerlist4.svg";
import ImageE from "../../images/farmerlist5.svg";
import ImageF from "../../images/farmerlist6.svg";
import { useQuery } from "@tanstack/react-query";
import { fetchFarmers } from "@/utils/databaseService";

const DUMMY_DATA = [
  {
    fermerlistImage: ImageA,
    heading: "Ganga Certified Organic Farm",
    categories: "Vegetables, Fruits, Nuts, Flowers, Grains, Spices etc...",
    location: "Devanahalli, Karnataka",
    text: "Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint. Neque aliquam vestibulum morbi blandit.",
  },
  {
    fermerlistImage: ImageB,
    heading: "ACACIA Organic Farm",
    categories: "Vegetables, Fruits, Nuts, Flowers, Grains, Spices etc...",
    location: "Devanahalli, Karnataka",
    text: "Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint. Neque aliquam vestibulum morbi blandit.",
  },
  {
    fermerlistImage: ImageC,
    heading: "Shiv Organic Farm",
    categories: "Vegetables, Fruits, Nuts, Flowers, Grains, Spices etc...",
    location: "Devanahalli, Karnataka",
    text: "Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint. Neque aliquam vestibulum morbi blandit.",
  },
  {
    fermerlistImage: ImageD,
    heading: "Nature Farming",
    categories: "Vegetables, Fruits, Nuts, Flowers, Grains, Spices etc...",
    location: "Devanahalli, Karnataka",
    text: "Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint. Neque aliquam vestibulum morbi blandit.",
  },
  {
    fermerlistImage: ImageE,
    heading: "KGN Organic Farm",
    categories: "Vegetables, Fruits, Nuts, Flowers, Grains, Spices etc...",
    location: "Devanahalli, Karnataka",
    text: "Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint. Neque aliquam vestibulum morbi blandit.",
  },
  {
    fermerlistImage: ImageF,
    heading: "Farm Organic Nature",
    categories: "Vegetables, Fruits, Nuts, Flowers, Grains, Spices etc...",
    location: "Devanahalli, Karnataka",
    text: "Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint. Neque aliquam vestibulum morbi blandit.",
  },
];

const Farmerlistsection = () => {
  const { data: farmers, isLoading } = useQuery({
    queryKey: ["farmers"],
    queryFn: () => fetchFarmers(),
  });
  return (
    <>
      <div className="my-[1rem] px-[3.5%]  pb-[8.5%] items-center">
        {/* <div className="flex flex-col gap-y-8 md:flex-row md:flex-wrap md:justify-between"> */}
        <div className="grid grid-cols-2 gap-6">
          {farmers &&
            farmers?.map((vendor: any) => {
              return (
                <div key={vendor.id}>
                  <Farmerlistitem vendor={vendor} />
                </div>
              );
            })}
          {/* {DUMMY_DATA.map((item: any, idx: number) => (
            <div key={idx} className="w-full md:w-[48%]">
              <Farmerlistitem item={item} />
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Farmerlistsection;
