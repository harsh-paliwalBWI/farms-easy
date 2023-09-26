import Farmergallery from "@/components/farmergallery/Farmergallery";
import Farmersectionabout from "@/components/farmersectionabout/Farmersectionabout";
import Leaf from "@/components/leaf/Leaf";
import Ourproducts from "@/components/ourproducts/Ourproducts";
import { fetchSingleFarmer } from "@/utils/databaseService";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";

import React from "react";

const FarmerDetails = async ({ params }: any) => {
  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: ["farmers", params?.farmerdetails],
    queryFn: () => fetchSingleFarmer({ farmerdetails: params?.farmerdetails }),
  });

  const dehydratedState = dehydrate(client);
  return (
    <Hydrate state={dehydratedState}>
      <Leaf text={params?.farmerdetails?.split('-').join(' ')} />
      <Farmersectionabout params={params} />
      <Ourproducts params={params} />
      <Farmergallery params={params} />
    </Hydrate>
  );
};

export default FarmerDetails;
