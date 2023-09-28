import { getUserInterestedProductsData } from "@/utils/databaseService";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";
import React from "react";
import MyInterests from "./MyInterests";
import { cookies } from "next/dist/client/components/headers";

const Interests = async () => {
  const cookie = cookies().get("uid");

  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: ["my-interests"],
    queryFn: () => getUserInterestedProductsData(cookie),
  });

  const dehydratedState = dehydrate(client);
  return (
    <Hydrate state={dehydratedState}>
      <MyInterests cookie={cookie} />
    </Hydrate>
  );
};

export default Interests;
