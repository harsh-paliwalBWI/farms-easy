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
        <div className="flex flex-col gap-6 ">
          <input type="text" placeholder="Your Name*" className=" border-[0.5px] border-[#E3E3E3] rounded-sm py-4 px-6" />
          <input type="tel" placeholder="Phone Number*" className="border-[0.5px] border-[#E3E3E3] rounded-sm py-4 px-6" />
          <input type="email" placeholder="Your Email*" className="border-[0.5px] border-[#E3E3E3] rounded-sm py-4 px-6" />
          <input type="number" placeholder="Quantity" className="border-[0.5px] border-[#E3E3E3] rounded-sm py-4 px-6" />
          <input type="text" placeholder="Enter Quoted Price" className="border-[0.5px] border-[#E3E3E3] rounded-sm py-4 px-6" />
          <div className='flex items-center justify-between mt-6'>
          <Button text={"SUBMIT"} className='px-[60px] py-[15px] ' />
          <div className='text-base font-semibold'>Or You Can Call <span className=' text-[#598f26] text-2xl font-semibold'>1800-234-4284</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
