import React from "react";
import getQueryClient from "../../../../../../utils/getQueryClient";
import {
  fetchCategories,
  fetchCategoryProducts,
  fetchSubCategories,
  fetchSubSubCategories,
  fetchSubSubSubCategories,
} from "../../../../../../utils/databaseService";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../../../../../../utils/hydrate.client";
import CategoryClient from "@/app/category/CategoryClient";
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

const SubCategory = async ({ params }: any) => {
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

export default SubCategory;
