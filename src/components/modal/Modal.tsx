import React, {FC} from 'react';
import { TiTimes } from 'react-icons/ti';
import Button from '../Button/Button';

interface Props{
    handleCloseModal:any;

}


const Modal:FC<Props> = ({ handleCloseModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white w-[38rem]  rounded-3xl p-12">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold">I&apos;M Interested</h2>
          <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
            <TiTimes className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <input type="text" placeholder="Your Name*" className="border-[0.5px] rounded-sm py-3 md:py-4 px-4 md:px-6" />
          <input type="tel" placeholder="Phone Number*" className="border-[0.5px] rounded-sm py-3 md:py-4 px-4 md:px-6" />
          <input type="email" placeholder="Your Email*" className="border-[0.5px] rounded-sm py-3 md:py-4 px-4 md:px-6" />
          <input type="number" placeholder="Quantity" className="border-[0.5px] rounded-sm py-3 md:py-4 px-4 md:px-6" />
          <input type="text" placeholder="Enter Quoted Price" className="border-[0.5px] rounded-sm py-3 md:py-4 px-4 md:px-6" />
          <div className='flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6'>
            <Button text={"SUBMIT"} className='px-6 py-3 md:px-[60px] md:py-[15px]' />
            <div className='text-sm md:text-base font-semibold mt-2 md:mt-0'>
              Or You Can Call <span className='text-[#598f26] font-semibold'>1800-234-4284</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
