import React from "react";
import NavbarClient from "./NavbarClient";
import getQueryClient from "@/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import { fetchCategories, fetchSubCategories } from "@/utils/databaseService";
import Hydrate from "@/utils/hydrate.client";

const Navbar = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["categories"], fetchCategories);
  await queryClient.prefetchQuery(["sub-categories"], fetchSubCategories);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <NavbarClient />
    </Hydrate>
  );
};

export default Navbar;
