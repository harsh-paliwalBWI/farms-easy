import React from "react";
import NavbarClient from "./NavbarClient";
import getQueryClient from "@/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import {
  fetchCategories,
  fetchSubCategories,
  fetchSubSubCategories,
  getUserData,
} from "@/utils/databaseService";
import Hydrate from "@/utils/hydrate.client";
import { cookies } from "next/dist/client/components/headers";

const Navbar = async () => {
  const queryClient = getQueryClient();
  const cookie = cookies().get("uid");
  await queryClient.prefetchQuery(["categories"], fetchCategories);
  await queryClient.prefetchQuery(["subCategories"], fetchSubCategories);
  await queryClient.prefetchQuery(["subSubCategories"], fetchSubSubCategories);
  await queryClient.prefetchQuery(["userData"], () => getUserData(cookie));
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <NavbarClient cookie={cookie} />
    </Hydrate>
  );
};

export default Navbar;
