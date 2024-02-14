"use client";

import {
  fetchCategories,
  fetchSubCategories,
  fetchSubSubCategories,
  fetchSubSubSubCategories,
} from "@/utils/databaseService";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryClient = ({ params }: any) => {
  const pathName = usePathname();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
  const { data: subCategories } = useQuery({
    queryKey: ["subCategories"],
    queryFn: () => fetchSubCategories(),
  });
  const { data: subSubCategories } = useQuery({
    queryKey: ["subSubCategories"],
    queryFn: () => fetchSubSubCategories(),
  });
  const { data: subSubSubCategories } = useQuery({
    queryKey: ["subSubSubCategories"],
    queryFn: () => fetchSubSubSubCategories(),
  });

  function filterCategoriesByparams() {
    if (params?.subSubCategorySlug) {
      // console.log("3");
      let subSubCatId = subSubCategories?.filter(
        (subSubCat: any) => subSubCat?.slug === params?.subSubCategorySlug
      )[0]?.id;
      return subSubSubCategories?.filter((subSubSubCat: any) =>
        subSubSubCat?.categories?.includes(subSubCatId)
      );
    }
    if (params?.subCategorySlug) {
      // console.log("2");
      let subCatId = subCategories?.filter(
        (subCat: any) => subCat?.slug === params?.subCategorySlug
      )[0]?.id;
      return subSubCategories?.filter((subSubCat: any) =>
        subSubCat?.categories?.includes(subCatId)
      );
    }

    if (params?.slug) {
      // console.log("1");
      let catId = categories?.filter(
        (cat: any) => cat?.slug === params?.slug
      )[0]?.id;
      return subCategories?.filter((subCat: any) =>
        subCat?.categories?.includes(catId)
      );
    }

    if (!params || !Object.entries(params).length) return categories;
  }

  return (
    <div className="flex flex-col px-[3.5%] py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 h-full">
        {filterCategoriesByparams()?.map((item: any) => {
          return (
            <Link
              href={
                item?.isSubCategory
                  ? `${pathName}/${item?.slug}`
                  : `/shop${pathName}/${item?.slug}`
              }
              key={item?.id}
              className="h-full"
            >
              <div className="lg:h-[300px]">
                <Image
                  src={item.image?.url}
                  width={500}
                  height={500}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full flex justify-center">
                <button className=" w-[60%] py-[15px] bg-[#E0EAD3] font-bold rounded-md -translate-y-6 drop-shadow-xl md:text-lg sm:text-base text-sm">
                  {item?.name}
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryClient;
