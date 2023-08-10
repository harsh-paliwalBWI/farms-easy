// "use client"
// import React from 'react';
// import phoneImg from "../../images/App.svg";
// import Image from 'next/image';
// import appStoreImg from "../../images/image 13.svg"
// import playStoreImg from "../../images/image 14.svg"

// const PlayStoreLink = () => {
//   return (
//     <div className='bg-playstore-image bg-cover bg-no-repeat px-[3.5%] relative border-[2px] border-[black] '>
//       <div className='flex w-full  justify-between gap-[100px]  items-center  border-[2px] border-[red] '>
//         <div className=' border-[2px] border-[black]'>
//           <div className='text-[#588f27] font-bold text-4xl'>Shop Bulk Organic From</div>
//           <div className='text-[#51150a] font-bold text-4xl my-[10px]'>FARMACY FARM FRESH</div>
//           <div className='text-[#588f27] font-bold text-4xl mb-[25px]'>Android & IOS App</div>
//    <div className='text-md font-bold mb-[60px]'>Available on both IOS & Android</div>
//    <div className='flex items-center'>
//     <div className='w-[205px]'><Image src={appStoreImg} alt='' width={1000} height={1000}/></div>
//     <div className='w-[240px]'><Image src={playStoreImg} alt='' width={1000} height={1000}/></div>
//    </div>
//         </div>
//         <div className='w-[680px]  xl:translate-y-[-100px]  relative border-[2px] border-[red]  '>
//           <Image src={phoneImg} alt='' width={1000} height={1000} className=' ' />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PlayStoreLink;

import React from 'react';
import phoneImg from "../../images/App.svg";
import Image from 'next/image';
import appStoreImg from "../../images/image 13.svg"
import playStoreImg from "../../images/image 14.svg"

const PlayStoreLink = () => {
  return (
    <div className='bg-playstore-image bg-cover bg-no-repeat px-[3.5%] relative border-[2px] border-[black] py-[120px] '>
      <div className='flex w-full justify-between gap-[100px] items-center border-[2px] border-[red] relative '>
        <div className='border-[2px] border-[black]'>
          <div className='text-[#588f27] font-bold text-4xl'>Shop Bulk Organic From</div>
          <div className='text-[#51150a] font-bold text-4xl my-[10px]'>FARMACY FARM FRESH</div>
          <div className='text-[#588f27] font-bold text-4xl mb-[25px]'>Android & IOS App</div>
          <div className='text-md font-bold mb-[60px]'>Available on both IOS & Android</div>
          <div className='flex items-center'>
            <div className='w-[205px]'><Image src={appStoreImg} alt='' width={1000} height={1000}/></div>
            <div className='w-[240px]'><Image src={playStoreImg} alt='' width={1000} height={1000}/></div>
          </div>
        </div>
        <div className='w-[600px]  border-[2px] border-[red] absolute bottom-[-200px] translate-y-[-10px] right-0 '>
          <div className=''>
            <Image src={phoneImg} alt='' width={1000} height={1000} className=' ' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayStoreLink;





