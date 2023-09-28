import { getUserBuyNowRequests } from "@/utils/databaseService";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";
import React from "react";
import MyBuyNowRequests from "./MyBuyNowRequests";
import { cookies } from "next/dist/client/components/headers";

const Interests = async () => {
  const cookie = cookies().get("uid");

  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: ["my-buy-requests"],
    queryFn: () => getUserBuyNowRequests(cookie),
  });

  const dehydratedState = dehydrate(client);
  return (
    <Hydrate state={dehydratedState}>
      <MyBuyNowRequests cookie={cookie} />
    </Hydrate>
  );
};

export default Interests;
