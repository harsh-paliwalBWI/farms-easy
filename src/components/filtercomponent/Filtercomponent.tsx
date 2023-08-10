import React from 'react';

const FilterComponent = () => {
  return (
    <div className="flex flex-col p-4 w-[95%]  md:w-[28%] gap-8 bg-[#F6F9F3] border-[#588F27] border-t-4 rounded-xl">
      
      <div className="">
       
        <ul className='space-y-7'>
          <li className="cursor-pointer">Potatos</li>
          <li className="cursor-pointer">Broccoli</li>
          <li className="cursor-pointer">Green Beans</li>
          <li className="cursor-pointer">Potatos</li>
          <li className="cursor-pointer">Potatos</li>
          <li className="cursor-pointer">Broccoli</li>
          <li className="cursor-pointer">Green Beans</li>
          <li className="cursor-pointer">Potatos</li>
          <li className="cursor-pointer">Potatos</li>
          <li className="cursor-pointer">Broccoli</li>
          <li className="cursor-pointer">Green Beans</li>
          <li className="cursor-pointer">Potatos</li>

          
        </ul>
      </div>
      <hr></hr>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Filter by Price</h2>
        <input
          type="range"
          min="1000"
          max="10000"
          step="10"
          className="w-full bg-[#56B03D]"
        />
        <div className="flex justify-between">
          <h2 className="text-base font-semibold">Rs 1000</h2>
          <h2 className="text-base font-semibold">Rs 10000</h2>
        </div>
      </div>
      <hr />
      <div>
        <h2 className="text-lg font-semibold mb-2">Popular tags</h2>
        <div className="flex flex-wrap gap-2">
          <div className="rounded-full bg-[#FFFFFF] py-3 px-5">Fruits</div>
          <div className="rounded-full bg-[#FFFFFF] py-3 px-5">Tomato</div>
          <div className="rounded-full bg-[#FFFFFF] py-3 px-5">Almonds</div>
          <div className="rounded-full bg-[#FFFFFF] py-3 px-5">Black Pepper</div>
          <div className="rounded-full bg-[#FFFFFF] py-3 px-5">Cardamom</div>
          
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
