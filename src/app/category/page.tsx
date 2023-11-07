import React from "react";
import getQueryClient from "../../utils/getQueryClient";
import {
  fetchCategories,
  fetchSubCategories,
  fetchSubSubCategories,
  fetchSubSubSubCategories,
} from "../../utils/databaseService";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../../utils/hydrate.client";
import CategoryClient from "./CategoryClient";

const CategoryPage = async ({ params }: any) => {
  const queryClient: any = getQueryClient();
  const dehydratedState = dehydrate(queryClient);
  await queryClient.prefetchQuery(["categories"], fetchCategories);
  await queryClient.prefetchQuery(["subCategories"], fetchSubCategories);
  await queryClient.prefetchQuery(["subSubCategories"], fetchSubSubCategories);
  await queryClient.prefetchQuery(
    ["subSubSubCategories"],
    fetchSubSubSubCategories
  );
  return (
    <Hydrate state={dehydratedState}>
      <CategoryClient params={params} />
    </Hydrate>
  );
};

export default CategoryPage;
