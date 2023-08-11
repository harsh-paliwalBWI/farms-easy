"use client"

import React from 'react';
import videoimg1 from "../../images/video-image1.svg"
import videoimg2 from "../../images/video-image2.svg"
import videoimg3 from "../../images/video-image3.svg"
import Image from "next/image"

const Videosection = () => {
    return (
      <div
    className="relative flex items-center justify-center bg-cover  bg-videobg  px-[3.5%] ">
     
        
        
        <div className="py-[6rem]  flex flex-col  ">
          <h1 className="text-white text-4xl font-bold mb-[1rem]">Harmful Chemical Free </h1>
<h1 className="text-white text-4xl font-bold mb-[5rem] ">Healthy Fresh Vegetables & Fruits!</h1>
          <div className="flex flex-wrap h-[100%]  m-[0 auto]  items-center gap-11 justify-center">
            <div className="">
            <Image
              src={videoimg1}
              alt=''
              className=" rounded-lg"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
               
            </div>
            <div className="">
            <Image
              src={videoimg2}
              alt=''
              className="rounded-lg "
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            </div>
            <div className="">
            <Image
              src={videoimg3}
              alt=''
              className=" rounded-lg "
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            </div>
          </div>
        </div>
      

      </div>
    );
};

export default Videosection;
