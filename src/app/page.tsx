import Image from 'next/image'
import LogosSection from '@/components/logosSection/LogosSection'
import OurMission from '@/components/ourMission/OurMission'
import HealthierWay from '@/components/healthierWay/HealthierWay'
import Category from '@/components/category/Category'
import PlayStoreLink from '@/components/playstoreLink/PlayStoreLink'
import Testimonials from '@/components/testimonials/Testimonials'
import Products from '@/components/products/Products'
import CategoryList from '@/components/categoryList/CategoryList'
import getQueryClient from '@/utils/getQueryClient'
import { dehydrate } from "@tanstack/query-core";
import Hydrate from '@/utils/hydrate.client'

// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = (await res.json());
//   return users;
// }

export default async function Home() {
  // const queryClient = getQueryClient();
  // await queryClient.prefetchQuery(["hydrate-users"], getUsers);
  // const dehydratedState = dehydrate(queryClient);
  return (
    <div className='w-full'>
      {/* <Hydrate state={dehydratedState}> */}
      <HealthierWay />
      {/* </Hydrate> */}
      {/* <Category/> */}
      <Products />
      {/* <CategoryList/> */}
      <LogosSection />
      <Testimonials />
      <PlayStoreLink />
      <OurMission />

    </div>
  )
}
