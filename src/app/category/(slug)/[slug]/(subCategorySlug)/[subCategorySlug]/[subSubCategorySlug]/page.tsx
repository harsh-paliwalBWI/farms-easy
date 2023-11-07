import React from "react";
import { dehydrate } from "@tanstack/react-query";
import CategoryClient from "@/app/category/CategoryClient";
import getQueryClient from "@/utils/getQueryClient";
import {
  fetchCategories,
  fetchSubCategories,
  fetchSubSubCategories,
  fetchSubSubSubCategories,
} from "@/utils/databaseService";
import Hydrate from "@/utils/hydrate.client";
export async function generateMetadata({ params, searchParams }: any) {
  // read route params
  const id = params?.slug;
  // const { name }: any = await fetchBySlug({
  //   collectionName: "categories",
  //   collectionSlug: id,
  //   subCollection: "subcategories",
  //   subCollectionSlug: params?.subCategorySlug,
  // });

  // return {
  //   title: name ,
  // };
}

const SubSubSubCategory = async ({ params }: any) => {
  const queryClient: any = getQueryClient();
  await queryClient.prefetchQuery(["categories"], fetchCategories);
  await queryClient.prefetchQuery(["subCategories"], fetchSubCategories);
  await queryClient.prefetchQuery(["subSubCategories"], fetchSubSubCategories);
  await queryClient.prefetchQuery(
    ["subSubSubCategories"],
    fetchSubSubSubCategories
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <CategoryClient params={params} />
    </Hydrate>
  );
};

export default SubSubSubCategory;
