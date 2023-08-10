import React from 'react';
import Image1 from "../../images/gallery image1.svg";
import Image2 from "../../images/gallery image2.svg";
import Image3 from "../../images/gallery image3.svg";
import Image4 from "../../images/gallery image4.svg";
import Image5 from "../../images/gallery image5.svg";
import Image6 from "../../images/gallery image6.svg";

import Image from 'next/image';

const DATA1 = [
  { GalleryImage: Image1 },
  { GalleryImage: Image2 },
  { GalleryImage: Image3 },
  { GalleryImage: Image4 },
  { GalleryImage: Image5 },
  { GalleryImage: Image6 },
];

const Farmgallery = async () => {
  return (
    
      <div className=' mt-[2rem]  px-[3.5%] sm:px-6 lg:px-8'> 
        <div className='text-center font-bold text-2xl md:text-4xl md:mb-[6rem] mb-[3rem]'>Our Farm Gallery</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8"> 
          {
            DATA1.map((item: any, idx: number) => (
              <div className='rounded-lg overflow-hidden' key={idx}> 
                <Image src={item.GalleryImage} alt='' width={500} height={500} layout='responsive' /> 
              </div>
            ))
          }
        </div>
      </div>
    
  );
};

export default Farmgallery;
