import React from "react";
import Hydrate from "../../../../utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";
import getQueryClient from "../../../../utils/getQueryClient";
import { fetchCategoryProducts } from "@/utils/databaseService";
import Productsidecomponent from "@/components/productsidecomponent/Productsidecomponent";

const CategoryProducts = async ({ params }:any) => {
  console.log(params);

  const queryClient: any = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["shop", "category", params?.slug],
    queryFn: () => fetchCategoryProducts({ slug: params?.slug }),
    cacheTime: 60 * 60 * 3,
  });
  const dehydratedState = dehydrate(queryClient);
  
  return (
    <Hydrate state={dehydratedState}>
      <Productsidecomponent />
    </Hydrate>
  );
};
export default CategoryProducts;
