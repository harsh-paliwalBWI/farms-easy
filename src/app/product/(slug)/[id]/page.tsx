import Headersectiontype2 from "@/components/headersectiontype2/Headersectiontype2";
import Productdescription from "@/components/productdescription/productdescription";
import Productqualities from "@/components/productsqualities/Productqualities";
import { fetchSingleProduct } from "@/utils/databaseService";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";
import { cookies } from "next/dist/client/components/headers";

import React from "react";

const Page = async ({ params }: any) => {
  // console.log(params.id);
  const cookie = cookies().get("uid");
  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: ["product", params?.id],
    queryFn: () => fetchSingleProduct({ slug: params?.id }),
  });

  const dehydratedState = dehydrate(client);

  return (
    <Hydrate state={dehydratedState}>
      <Headersectiontype2 slug={params?.id} />
      <Productdescription cookie={cookie}  slug={params?.id} />
      <Productqualities slug={params?.id} />
    </Hydrate>
  );
};

export default Page;
