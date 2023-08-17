import Headersectiontype2 from "@/components/headersectiontype2/Headersectiontype2";
import Productdescription from "@/components/productdescription/productdescription";
import Productqualities from "@/components/productsqualities/Productqualities";
import { cookies } from "next/dist/client/components/headers";

import React from "react";

const Page = async ({ params }: any) => {
  // console.log(params.id);
  const cookie = cookies().get("uid");

  return (
    <div>
      <Headersectiontype2 heading={"Product"} />
      <Productdescription cookie={cookie} />
      <Productqualities />
    </div>
  );
};

export default Page;
