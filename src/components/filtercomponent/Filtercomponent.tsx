"use client";
import React from "react";
import Slider from "rc-slider";
import { useState } from "react";
import "rc-slider/assets/index.css";

const FilterComponent = () => {
  const [sliderValue, setSliderValue] = useState([1000, 10000]);

  const handleSliderChange = (value: any) => {
    setSliderValue(value);
  };

  return (
    <div className="flex flex-col p-4 w-[95%]  md:w-[28%] gap-8 bg-[#F6F9F3] border-[#588F27] border-t-4 rounded-xl">
      <div className="">
        <ul className="space-y-7">
          <li className="cursor-pointer">Potatos</li>
          <li className="cursor-pointer">Broccoli</li>
          <li className="cursor-pointer">Green Beans</li>
        </ul>
      </div>
      <hr></hr>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Filter by Price</h2>
        <div>
          <Slider
            range
            min={1000}
            max={10000}
            className="text-red"
            defaultValue={[1000, 10000]}
            allowCross={false}
            onChange={(e) => handleSliderChange(e)}
          />
        </div>

        <div className="flex justify-between">
          <h2 className="text-base font-semibold">Rs {sliderValue[0]}</h2>
          <h2 className="text-base font-semibold">Rs {sliderValue[1]}</h2>
        </div>
      </div>
      <hr />
      <div>
        <h2 className="text-lg font-semibold mb-2">Popular tags</h2>
        <div className="flex flex-wrap gap-2">
          <div className="rounded-full bg-[#FFFFFF] py-3 px-5">Fruits</div>
          <div className="rounded-full bg-[#FFFFFF] py-3 px-5">Tomato</div>
          <div className="rounded-full bg-[#FFFFFF] py-3 px-5">Almonds</div>
          <div className="rounded-full bg-[#FFFFFF] py-3 px-5">
            Black Pepper
          </div>
          <div className="rounded-full bg-[#FFFFFF] py-3 px-5">Cardamom</div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
