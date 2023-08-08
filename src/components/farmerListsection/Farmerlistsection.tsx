import React from 'react';
import Farmerlistitem from '../farmerlistitem/Farmerlistitem';

import ImageA from "../../images/farmerlist1.svg";
import ImageB from "../../images/farmerlist2.svg";
import ImageC from "../../images/farmerlist3.svg";
import ImageD from "../../images/farmerlist4.svg";
import ImageE from "../../images/farmerlist5.svg";
import ImageF from "../../images/farmerlist6.svg";

const DUMMY_DATA = [
  { fermerlistImage: ImageA, heading: "Ganga Certified Organic Farm", categories: "Vegetables, Fruits, Nuts, Flowers, Grains, Spices etc...", location: "Devanahalli, Karnataka", text: "Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint. Neque aliquam vestibulum morbi blandit." },
  { fermerlistImage: ImageB, heading: "ACACIA Organic Farm", categories: "Vegetables, Fruits, Nuts, Flowers, Grains, Spices etc...", location: "Devanahalli, Karnataka", text: "Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint. Neque aliquam vestibulum morbi blandit." },
  { fermerlistImage: ImageC, heading: "Shiv Organic Farm", categories: "Vegetables, Fruits, Nuts, Flowers, Grains, Spices etc...", location: "Devanahalli, Karnataka", text: "Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint. Neque aliquam vestibulum morbi blandit." },
  { fermerlistImage: ImageD, heading: "Nature Farming", categories: "Vegetables, Fruits, Nuts, Flowers, Grains, Spices etc...", location: "Devanahalli, Karnataka", text: "Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint. Neque aliquam vestibulum morbi blandit." },
  { fermerlistImage: ImageE, heading: "KGN Organic Farm", categories: "Vegetables, Fruits, Nuts, Flowers, Grains, Spices etc...", location: "Devanahalli, Karnataka", text: "Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint. Neque aliquam vestibulum morbi blandit." },
  { fermerlistImage: ImageF, heading: "Farm Organic Nature", categories: "Vegetables, Fruits, Nuts, Flowers, Grains, Spices etc...", location: "Devanahalli, Karnataka", text: "Quos unde voluptas illo deserunt unde. At totam est explicabo earum voluptas. Minus consequatur voluptatem non. Quis voluptatem et et sint. Neque aliquam vestibulum morbi blandit." },
];

const Farmerlistsection = () => {
  return (
    <>
      
        <div className="  my-[1rem] px-[3.5%] py-[3.5%] items-center">
          <div className="flex flex-wrap justify-between gap-y-8 w-[100%]">
            {DUMMY_DATA.map((item: any, idx: number) => {
              return (
                <div key={idx} className='w-[48%]'>
                  <Farmerlistitem item={item} />
                </div>
              );
            })}
          </div>
        </div>
      
    </>
  );
};

export default Farmerlistsection;
