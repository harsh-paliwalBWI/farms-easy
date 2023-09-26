"use client";

import React from "react";
import Button from "../Button/Button";

import organicLogo from "../../images/Frame (1).svg";
import Products from "../products/Products";
import Farmerpageproducts from "../farmerpageproducts/Farmerpageproducts";
import { useQuery } from "@tanstack/react-query";
import {
  fetchFarmerProducts,
  fetchSingleFarmer,
} from "@/utils/databaseService";

const Ourproducts = ({ params }: any) => {
  const { data: farmerProducts } = useQuery({
    queryKey: ["farmers", params?.farmerdetails, "products"],
    queryFn: () => fetchFarmerProducts(params?.farmerdetails),
  });

  return (
    <div className="flex flex-col px-[3.5%] py-[3.5%] mt-10">
      <div className="flex flex-col  md:flex-row justify-between items-center mb-12">
        <div className="mb-4 md:mb-0">
          <h1 className="font-bold text-xl md:text-3xl">Our Products</h1>
        </div>
        <div className="">
          <Button text="VIEW ALL" className="px-[50px] py-[12px] " />
        </div>
      </div>
      <div className="flex flex-col">
        <Farmerpageproducts products={farmerProducts} />
      </div>
    </div>
  );
};

export default Ourproducts;
