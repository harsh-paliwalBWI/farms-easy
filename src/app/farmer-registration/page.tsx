"use client";

import Button from "@/components/Button/Button";
import Leaf from "@/components/leaf/Leaf";
import React from "react";

const FarmerRegistration = () => {
  return (
    <div>
      <Leaf text="Farmer Registration" />
      <div className=" w-[80%] flex flex-col mx-auto mb-20 py-8  shadow-center rounded-lg">
        <div className="w-full px-4">
          <h2 className="text-2xl font-bold">Farmer Registration</h2>
        </div>
        <div className="flex flex-wrap w-full px-4  justify-between">
          <div className=" flex gap-1 flex-col w-full md:w-[49%] my-2 ">
            <p className="text-gray-400 text-sm">Your Name *</p>
            <input
              className="py-2 border border-gray-200 rounded-[5px] shadow-inner"
              type="text"
              name="name"
              id=""
            />
          </div>
          <div className=" flex gap-1 flex-col w-full md:w-[49%] my-2 ">
            <p className="text-gray-400 text-sm">Your Email *</p>
            <input
              className="py-2 border border-gray-200 rounded-[5px] shadow-inner"
              type="email"
              name="email"
              id=""
            />
          </div>
          <div className=" flex gap-1 flex-col w-full md:w-[49%] my-2 ">
            <p className="text-gray-400 text-sm">Phone Number *</p>
            <input
              className="py-2 border border-gray-200 rounded-[5px] shadow-inner"
              type="text"
              name="phone"
              id=""
            />
          </div>
          <div className=" flex gap-1 flex-col w-full md:w-[49%] my-2 ">
            <p className="text-gray-400 text-sm">Address *</p>
            <input
              className="py-2 border border-gray-200 rounded-[5px] shadow-inner"
              type="text"
              name="address"
              id=""
            />
          </div>
          <div className=" flex gap-1 flex-col w-full md:w-[49%] my-2 ">
            <p className="text-gray-400 text-sm">Company FPO</p>
            <input
              className="py-2 border border-gray-200 rounded-[5px] shadow-inner"
              type="text"
              name="fpo"
              id=""
            />
          </div>
          <div className=" flex gap-1 flex-col w-full md:w-[49%] my-2 ">
            <p className="text-gray-400 text-sm">Aadhar Card Number</p>
            <input
              className="py-2 border border-gray-200 rounded-[5px] shadow-inner"
              type="text"
              name="aadharCard"
              id=""
            />
          </div>
        </div>
        <div className="px-4 mt-10">
          <Button
            onClickHandler={() => {}}
            isLoading={false}
            text={"Submit"}
            className="px-[40px] py-[15px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FarmerRegistration;
