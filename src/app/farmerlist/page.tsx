import Farmerlistsection from "@/components/farmerListsection/Farmerlistsection";
import Leaf from "@/components/leaf/Leaf";
import { fetchFarmers } from "@/utils/databaseService";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";

import React from "react";

const Farmerlist = async () => {
  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: ["farmers"],
    queryFn: () => fetchFarmers(),
  });

  const dehydratedState = dehydrate(client);
  return (
    <Hydrate state={dehydratedState}>
      <Leaf text={"Farmer List"} />
      <Farmerlistsection />
    </Hydrate>
  );
};

export default Farmerlist;
