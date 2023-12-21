import React from "react";
import ProfileClient from "./ProfileClient";
import { cookies } from "next/dist/client/components/headers";
import getQueryClient from "@/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import { getUserData } from "@/utils/databaseService";
import Hydrate from "@/utils/hydrate.client";

export const metadata = {
  title: "Profile",
};

const Profile = async () => {
  const cookie = cookies().get("uid");
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(["userData"], () => getUserData(cookie));
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ProfileClient cookie={cookie} />
    </Hydrate>
  );
};

export default Profile;
