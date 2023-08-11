import Headersectiontype2 from "@/components/headersectiontype2/Headersectiontype2";
import Productdescription from "@/components/productdescription/productdescription";
import Productqualities from "@/components/productsqualities/Productqualities";

import React from "react";

const Page = async ({ params }: any) => {
  // console.log(params.id);
  
  return (
    <div>
      <Headersectiontype2 heading={"Shop"} />
      <Productdescription />
      <Productqualities />
    </div>
  );
};

export default Page;
