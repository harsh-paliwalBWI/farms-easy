import FilterComponent from "@/components/filtercomponent/Filtercomponent";
import Headersectiontype2 from "@/components/headersectiontype2/Headersectiontype2";
import Productsidecomponent from "@/components/productsidecomponent/Productsidecomponent";
import { cookies } from "next/dist/client/components/headers";
import React from "react";

const SubCategoryProducts = async ({ params }: any) => {
  // console.log(params);
  const cookie = cookies().get("uid");

  return (
    <div className="">
      <Headersectiontype2 heading={"Vegetables"} />
      <div className="flex flex-col md:flex-row justify-between items-start px-[3.5%] md:gap-6 py-[1.5%]">
        <FilterComponent />
        <Productsidecomponent cookie={cookie} />
      </div>
    </div>
  );
};

export default SubCategoryProducts;
