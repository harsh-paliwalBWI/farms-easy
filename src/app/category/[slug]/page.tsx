import React from "react";
import Hydrate from "../../../utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";
import getQueryClient from "../../../utils/getQueryClient";
import {
  fetchSubCategories,
} from "../../../utils/databaseService";

// export const metadata = {
//   title: "Category",
//   description: "",
// };
// export async function generateMetadata({ params, searchParams }) {
//   // read route params
//   const id = params?.slug;
//   const { name }: any = await fetchBySlug({
//     collectionName: "categories",
//     collectionSlug: id,
//   });

//   return {
//     title: name,
//   };
// }

const Category = async ({ params }:any) => {
  const queryClient: any = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["category", params?.slug],
    // queryFn: () => fetchSubCategories({ slug: params?.slug }),
    queryFn: () => {},
    cacheTime: 60 * 60 * 3,
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
    </Hydrate>
  );
};

export default Category;
