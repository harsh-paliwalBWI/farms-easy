import React from 'react'
import image1 from "../../../images/Rectangle 6.svg"
import image2 from "../../../images/Rectangle 7.svg"
import image3 from "../../../images/Rectangle 8.svg"
import image4 from "../../../images/Rectangle 5.svg"
import image5 from "../../../images/Rectangle 4.svg"
import image6 from "../../../images/Rectangle 15.svg"
import Image from 'next/image'

const DUMMY_DATA = [{ image: image1, btnText: "Vegetables" },
{ image: image2, btnText: "Vegetables" },
{ image: image3, btnText: "Vegetables" }, { image: image4, btnText: "Vegetables" },
{ image: image5, btnText: "Vegetables" }, { image: image6, btnText: "Vegetables" },]
const CategoryCard = async () => {
  return (
    <div className=' border-[2px] border-black  category-card gap-8 '>
      {/* <div className='flex flex-wrap border-[2px] border-[green] mx-auto w-90%'> */}
      {/* <div className='category-card w-full'> */}
      {DUMMY_DATA.map((item: any, idx: number) => {
        return <div className='' key={idx}>
          <div className=''><Image src={item.image} width={1000} height={1000} alt='' /></div>
          <div><button>{item.btnText}</button></div>
        </div>
      })}
      {/* </div> */}
    </div>
  )
}

export default CategoryCard

// import React from 'react';
// import image1 from "../../../images/Rectangle 6.svg";
// import image2 from "../../../images/Rectangle 7.svg";
// import image3 from "../../../images/Rectangle 8.svg";
// import image4 from "../../../images/Rectangle 5.svg";
// import image5 from "../../../images/Rectangle 4.svg";
// import image6 from "../../../images/Rectangle 15.svg";
// import Image from 'next/image';

// const DUMMY_DATA = [
//   { image: image1, btnText: "Vegetables" },
//   { image: image2, btnText: "Vegetables" },
//   { image: image3, btnText: "Vegetables" },
//   { image: image4, btnText: "Vegetables" },
//   { image: image5, btnText: "Vegetables" },
//   { image: image6, btnText: "Vegetables" },
// ];

// const CategoryCard = () => {
//   return (
//     <div className='border-[2px] border-black w-[100vw]'>
//       <div className='category-card'>
//         {DUMMY_DATA.map((item, idx) => (
//           <div key={idx} className='grid-item'>
//             <div className=''>
//               <Image src={item.image} width={500} height={500} alt='' />
//             </div>
//             <div><button>{item.btnText}</button></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryCard;
