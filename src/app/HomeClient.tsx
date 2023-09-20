import React from "react";
import Image from "next/image";
import LogosSection from "@/components/logosSection/LogosSection";
import OurMission from "@/components/ourMission/OurMission";
import HealthierWay from "@/components/healthierWay/HealthierWay";
import Category from "@/components/category/Category";
import PlayStoreLink from "@/components/playstoreLink/PlayStoreLink";
import Testimonials from "@/components/testimonials/Testimonials";
import CategoryList from "@/components/categoryList/CategoryList";
import Offers from "@/components/offers/Offers";
import BestSells from "@/components/bestSells/BestSells";
import OfferBanner from "@/components/offerBanner/OfferBanner";
import Features from "@/components/features/Features";
import Products from "@/components/products/Products";

const HomeClient = () => {
  return (
    <div className="w-full">
      {/* <Hydrate state={dehydratedState}> */}
      <HealthierWay />
      {/* </Hydrate> */}
      <Features />
      <Category />
      <Products />
      <OfferBanner />
      <BestSells />
      <Offers />
      <CategoryList />
      <Testimonials />
      <PlayStoreLink />
      <LogosSection />
      <OurMission />
    </div>
  );
};

export default HomeClient;
