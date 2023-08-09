import React from 'react';
import videobg from "../../images/video-bg 1.svg"
import videoimg1 from "../../images/video-image1.svg"
import videoimg2 from "../../images/video-image2.svg"
import videoimg3 from "../../images/video-image3.svg"
import Image from 'next/image'

const Videosection = () => {
    return (
        <div
      className="relative flex items-center justify-center bg-cover bg-center bg-videobg h-[100vh] px-[3.5%] ">
        {/* <Image src={videobg} alt='' className="relative bg-cover bg-center h-[100vh] w-[100vw]" > */}
           
          
          <div className="absolute  flex flex-col  ">
            <h1 className="text-white text-4xl font-bold mb-[2rem]">Harmful Chemical Free </h1>
<h1 className="text-white text-4xl font-bold mb-[2rem] ">Healthy Fresh Vegetables & Fruits!</h1>
            <div className="flex flex-wrap h-[100%]  m-[0 auto] space-x-4 item-center justify-center">
              <div className="">
              <Image src={videoimg1} alt='' className="mb-[20px] rounded-lg" />
                 
              </div>
              <div className="">
              <Image src={videoimg2} alt='' className="mb-[20px] rounded-lg" />
              </div>
              <div className="">
              <Image src={videoimg3} alt='' className="mb-[20px] rounded-lg" />
              </div>
            </div>
          </div>
        

        </div>
      );
};

export default Videosection;
