"use client";

import React, { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { PiListDashesLight } from "react-icons/pi";
import { RxGrid } from "react-icons/rx";
import Productgridversion from "../productcardgridversion/Productcardgridversion";
import Productcardrowversion from "@/components/productcardrowversion/Productcardrowversion";
import { BiChevronDown } from "react-icons/bi";
import FilterComponent from "../filtercomponent/Filtercomponent";
import { useQuery } from "@tanstack/react-query";
import { fetchCategoryProducts } from "@/utils/databaseService";

const options = ["Default Sorting", "Ascending Sorting", "Descending Sorting"];

const Productsidecomponent = ({ cookie, params, queryKey, queryFn }: any) => {
  const { data: pageData } = useQuery({
    queryKey,
    queryFn: () =>
      fetchCategoryProducts({
        slug: params?.slug,
        subCatSlug: params?.subCategorySlug || null,
      }),
  });
  const [viewMode, setViewMode] = useState("grid");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobileView = windowWidth < 768;

  useEffect(() => {
    if (isMobileView) {
      setViewMode("grid");
    }
  }, [isMobileView]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start px-[3.5%] md:gap-6 py-[1.5%]">
      <FilterComponent />
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between mt-3 mb-8">
          <div>
            <h2 className="font-medium">
              Found ({(pageData?.products&& pageData?.products?.length) ||0}) results
            </h2>
          </div>
          {!isMobileView && (
            <div className="flex gap-6 items-center">
              <div className="flex gap-2">
                <div
                  className={`rounded-xl h-[52px] flex items-center justify-center w-[52px] ${
                    viewMode === "grid" ? "bg-[#D8E3CF]" : ""
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <RxGrid className="h-[25px] w-[30px] text-[#588F27]" />
                </div>
                <div
                  className={`rounded-xl h-[52px] flex items-center justify-center w-[52px] ${
                    viewMode === "list" ? "bg-[#D8E3CF]" : ""
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <PiListDashesLight className="h-[30px] w-[35px] text-[#588F27]" />
                </div>
              </div>

              <Listbox>
                <div className="relative w-full h-[52px] ">
                  <Listbox.Button className="relative w-full h-full cursor-default rounded-md bg-[#F4F4F4]  pl-5 pr-36 text-left sm:text-sm">
                    <span className="block truncate">Default Sorting</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                      <BiChevronDown className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {options.map((option, keyid) => (
                      <Listbox.Option
                        key={keyid}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2  pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={option}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {option}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
          )}
        </div>

        {!pageData?.products || pageData?.products?.length === 0 ? (
          <div className=" w-full h-[25vh] flex justify-center items-center">
            <p className="font-medium text-lg">No Products available</p>
          </div>
        ) : (
          <div
            className={
              isMobileView ? "grid gap-6 justify-center" : "grid gap-6"
            }
          >
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {pageData?.products?.map((product: any, idx: number) => {
                  return (
                    <div className="" key={product?.id}>
                      <Productgridversion
                        params={params}
                        product={product}
                        cookie={cookie}
                      />
                    </div>
                  );
                })}

                {/* <Productgridversion
                product={{
                  name: "asnkcsa",
                  class: "ascsca",
                }}
                cookie={cookie}
              />
              <Productgridversion
                product={{
                  name: "asnkcsa",
                  class: "ascsca",
                }}
                cookie={cookie}
              />
              <Productgridversion
                product={{
                  name: "asnkcsa",
                  class: "ascsca",
                }}
                cookie={cookie}
              />
              <Productgridversion
                product={{
                  name: "asnkcsa",
                  class: "ascsca",
                }}
                cookie={cookie}
              /> */}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 mt-5">
                {pageData?.products?.map((product: any, idx: number) => {
                  return (
                    <div className="" key={product?.id}>
                      <Productcardrowversion
                        params={params}
                        product={product}
                        cookie={cookie}
                      />
                    </div>
                  );
                })}
                {/* <Productcardrowversion
                product={{
                  name: "asnkcsa",
                  class: "ascsca",
                }}
                cookie={cookie}
              />
              <Productcardrowversion
                product={{
                  name: "asnkcsa",
                  class: "ascsca",
                }}
                cookie={cookie}
              />
              <Productcardrowversion
                product={{
                  name: "asnkcsa",
                  class: "ascsca",
                }}
                cookie={cookie}
              />
              <Productcardrowversion
                product={{
                  name: "asnkcsa",
                  class: "ascsca",
                }}
                cookie={cookie}
              />
              <Productcardrowversion
                product={{
                  name: "asnkcsa",
                  class: "ascsca",
                }}
                cookie={cookie}
              /> */}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Productsidecomponent;
