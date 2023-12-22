import React from "react";
import MyOrdersPage from "./MyOrdersPage";
import { cookies } from "next/dist/client/components/headers";
import getQueryClient from "@/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/utils/hydrate.client";
import { getUserOrders } from "@/utils/databaseService";

const MyOrders = async () => {
  const cookie = cookies().get("uid");

  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: ["my-orders"],
    queryFn: () => getUserOrders(cookie),
  });

  const dehydratedState = dehydrate(client);
  return (
    <Hydrate state={dehydratedState}>
      <MyOrdersPage cookie={cookie} />
    </Hydrate>
  );
};

export default MyOrders;
