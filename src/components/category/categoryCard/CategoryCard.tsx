// import React from 'react'
// import image1 from "../../../images/Rectangle 6.svg"
// import image2 from "../../../images/Rectangle 7.svg"
// import image3 from "../../../images/Rectangle 8.svg"
// import image4 from "../../../images/Rectangle 5.svg"
// import image5 from "../../../images/Rectangle 4.svg"
// import image6 from "../../../images/Rectangle 15.svg"
// import Image from 'next/image'

// const DUMMY_DATA = [{ image: image1, btnText: "Vegetables" },
// { image: image2, btnText: "Vegetables" },
// { image: image3, btnText: "Vegetables" }, { image: image4, btnText: "Vegetables" },
// { image: image5, btnText: "Vegetables" }, { image: image6, btnText: "Vegetables" },]
// const CategoryCard = async () => {
//   return (
//     <div className=' border-[2px] border-black  flex '>
//       {/* <div className='flex flex-wrap border-[2px] border-[green] mx-auto w-90%'> */}
//       {/* <div className='category-card w-full'> */}
//       {DUMMY_DATA.map((item: any, idx: number) => {
//         return <div className='border-[2px] border-[red]' key={idx}>
//           <div className=''><Image src={item.image} width={500} height={500} alt='' /></div>
//           <div><button>{item.btnText}</button></div>
//         </div>
//       })}
//       {/* </div> */}
//     </div>
//   )
// }

// export default CategoryCard

// import React from 'react';
// import image1 from "../../../images/Rectangle 6.svg";
// import image2 from "../../../images/Rectangle 7.svg";
// import image3 from "../../../images/Rectangle 8.svg";
// import image4 from "../../../images/Rectangle 5.svg";
// import image5 from "../../../images/Rectangle 4.svg";
// import image6 from "../../../images/Rectangle 15.svg";
// import Image from 'next/image';

// const DUMMY_DATA = [
//   { image: image1, btnText: "VEGETABLES" },
//   { image: image2, btnText: "FRUITS" },
//   { image: image3, btnText: "GRAINS" },
//   { image: image4, btnText: "SPICES" },
//   { image: image5, btnText: "NUTS" },
//   { image: image6, btnText: "FLOWERS" },
// ];

// const CategoryCard = async () => {
//   return (
//     <div className='grid grid-cols-3 gap-x-8 gap-y-10 relative z-10 border-[2px] border-black'>
//       {DUMMY_DATA.map((item, idx) => {
//         return (
//           <div key={idx} className='flex flex-col justify-center items-center  border-[2px] border-[green]  '>
//             <div className='border-[2px] border-[red]'>
//               <Image src={item.image}  alt=''   />
//             </div>
//             <div className='translate-y-[-15px] relative z-30 w-[100%] border-[2px] border-black'>
//               <button className='  py-[10px] bg-[#E0EAD3] font-bold rounded-md border-[2px] border-black'>{item.btnText}</button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CategoryCard;

"use client";

import React from "react";
import image1 from "../../../images/Rectangle 6.svg";
import image2 from "../../../images/Rectangle 7.svg";
import image3 from "../../../images/Rectangle 8.svg";
import image4 from "../../../images/Rectangle 5.svg";
import image5 from "../../../images/Rectangle 4.svg";
import image6 from "../../../images/Rectangle 15.svg";
import Image from "next/image";

const DUMMY_DATA = [
  { image: image1, btnText: "VEGETABLES" },
  { image: image2, btnText: "FRUITS" },
  { image: image3, btnText: "GRAINS" },
  { image: image4, btnText: "SPICES" },
  { image: image5, btnText: "NUTS" },
  { image: image6, btnText: "FLOWERS" },
];

const CategoryCard = ({ selectedCategory, subCategories }: any) => {
  console.log(subCategories, selectedCategory);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 gap-x-8 md:gap-y-10  gap-y-3  place-items-center">
      {subCategories
        ?.filter((cat: any) => cat?.categories.includes(selectedCategory))
        .map((item: any, idx: any) => {
          return (
            <div key={idx} className="">
              <div className="">
                <Image
                  src={item.image?.url}
                  width={500}
                  height={500}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="">
                <button className=" w-[60%] py-[15px] bg-[#E0EAD3] font-bold rounded-md -translate-y-6 drop-shadow-xl md:text-lg sm:text-base text-sm">
                  {item?.name}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CategoryCard;
