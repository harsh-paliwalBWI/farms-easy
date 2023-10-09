// import '../assets/flaticons/flaticon_mycollection.css'

import { dehydrate } from "@tanstack/react-query";
import HomeClient from "./HomeClient";
import { fetchCategories, fetchHomeData, fetchSubCategories, fetchSubSubCategories } from "@/utils/databaseService";
import Hydrate from "@/utils/hydrate.client";
import getQueryClient from "@/utils/getQueryClient";

export default async function Home() {
  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  await client.prefetchQuery({
    queryKey: ["homeData"],
    queryFn: fetchHomeData,
  });

  
  await client.prefetchQuery({
    queryKey: ["subCategories"],
    queryFn: fetchSubCategories,
  });
  await client.prefetchQuery({
    queryKey: ["subSubCategories"],
    queryFn: fetchSubSubCategories,
  });
  const dehydratedState = dehydrate(client);
  return (
    <Hydrate state={dehydratedState}>
      <HomeClient />
    </Hydrate>
  );
}
