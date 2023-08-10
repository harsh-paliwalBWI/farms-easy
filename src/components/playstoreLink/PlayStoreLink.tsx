// import React from 'react'
// import phoneImg from "../../images/App.svg"
// import Image from 'next/image'

// const PlayStoreLink = async() => {
//   return (
//     <div className='bg-playstore-image bg-cover bg-no-repeat px-[3.5%] relative'>
// <div className='flex w-full  border-[2px] border-black relative'>
//     {/* <div className='w-[100%] border-[2px] border-black h-fit '> */}
//     <div className='font-bold text-4xl absolute top-[50%] translate-y-[-50%]'>
//         <div className='text-[#588f27]'>Shop Bulk Organic From</div>
//         <div className='text-[#51150a]'>Farmacy Farm Fresh</div>
//         <div className='text-[#588f27]'>Android & IOS App</div>
        

//     </div>
//     {/* </div> */}

//     <div className='w-[500px] h-[500px] absolute right-0'><Image src={phoneImg} alt='' width={1000} height={1000}/></div>
// </div>
//     </div>
//   )
// }
// // translate-y-[-80px]

// export default PlayStoreLink

import React from 'react';
import phoneImg from "../../images/App.svg";
import Image from 'next/image';
import appStoreImg from "../../images/image 13.svg"
import playStoreImg from "../../images/image 14.svg"

const PlayStoreLink = () => {
  return (
    <div className='bg-playstore-image bg-cover bg-no-repeat px-[3.5%] relative'>
      <div className='flex w-full  justify-center gap-[100px] 3xl:gap-[300px] items-center '>
        <div className=''>
          <div className='text-[#588f27] font-bold text-4xl'>Shop Bulk Organic From</div>
          <div className='text-[#51150a] font-bold text-4xl my-[10px]'>FARMACY FARM FRESH</div>
          <div className='text-[#588f27] font-bold text-4xl mb-[25px]'>Android & IOS App</div>
   <div className='text-md font-bold mb-[60px]'>Avaialble on both IOS & Andriod</div>
   <div className='flex items-center'>
    <div className='w-[180px]'><Image src={appStoreImg} alt='' width={1000} height={1000}/></div>
    <div className='w-[220px]'><Image src={playStoreImg} alt='' width={1000} height={1000}/></div>

   </div>

        </div>
        <div className='w-[600px] h-[600px] translate-y-[-80px] '>
          <Image src={phoneImg} alt='' width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
}

export default PlayStoreLink;
