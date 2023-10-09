import React from "react";
import getQueryClient from "../../utils/getQueryClient";
import { fetchCategories } from "../../utils/databaseService";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../../utils/hydrate.client";

const CategoryPage = async () => {
  const queryClient: any = getQueryClient();
  await queryClient.prefetchQuery(["categories"], fetchCategories);

  const dehydratedState = dehydrate(queryClient);
  return <Hydrate state={dehydratedState}></Hydrate>;
};

export default CategoryPage;
