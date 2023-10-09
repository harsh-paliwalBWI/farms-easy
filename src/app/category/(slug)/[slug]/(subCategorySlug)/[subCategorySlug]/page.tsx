import React from "react";
import getQueryClient from "../../../../../../utils/getQueryClient";
import {
  fetchCategoryProducts,
  fetchSubCategories,
} from "../../../../../../utils/databaseService";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../../../../../../utils/hydrate.client";
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
  await queryClient.prefetchQuery({
    queryKey: ["subCategory", params?.slug, params?.subCategorySlug],
    queryFn: () => {},
    // fetchSubCategories({
    //   slug: params?.slug,
    //   subCategorySlug: params?.subCategorySlug,
    // }),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      {/* <SubCategoryProductComponent params={params} /> */}
    </Hydrate>
  );
};

export default SubCategory;
