import React from 'react'
import Image1 from "../../images/gallery image1.svg"
import Image2 from "../../images/gallery image2.svg"
import Image3 from "../../images/gallery image3.svg"
import Image4 from "../../images/gallery image4.svg"
import Image5 from "../../images/gallery image5.svg"
import Image6 from "../../images/gallery image6.svg"

import Image from 'next/image'
const DATA1 = [{ GalleryImage: Image1 }, { GalleryImage: Image2 }, { GalleryImage: Image3 }, { GalleryImage: Image4 }, { GalleryImage: Image5 }, { GalleryImage: Image6 }
]


const Farmgallery = async () => {
  return (<>
    <div className=' mt-[1rem] mb-[7rem]' >
      <div className='text-center font-bold text-4xl mb-[2rem]'>Our Farm Gallery</div>
      {/* <div className='flex border-[2px] border-[black] '> */}


      <div className="h-[100%]  m-[0 auto]  p-[50px]  items-center">
        <div className=" flex flex-wrap justify-between">

          {
            DATA1.map((item: any, idx: number) => {
              return <div className='' key={idx}>
                <Image src={item.GalleryImage} alt='' className="mb-[20px] rounded-lg" />
              </div>

            })
          }

        </div>
        {/* </div> */}


      </div>


    </div>


  </>)
}

export default Farmgallery