"use client";
import { getUserBuyNowRequests } from "@/utils/databaseService";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import moment from "moment";
import { currency } from "@/utils/constant";

const MyBuyNowRequests = ({ cookie }: any) => {
  const { data: interests }: any = useQuery({
    queryKey: ["my-buy-requests"],
    queryFn: () => getUserBuyNowRequests(cookie),
  });
  return (
    <div className="flex px-[3.5%] flex-col gap-3 py-7">
      <h1 className=" text-xl font-semibold">My Buy Requests </h1>
      <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {interests &&
          interests?.map((interest: any) => {
            return (
              <div
                className="border border-gray-300 shadow-md h-full py-2 px-2 md:px-3 rounded-md "
                key={interest?.id}
              >
                <div>
                  Created On:{" "}
                  <span className="text-primary font-medium">
                    {moment(interest?.createdAt).format("DD MMM, yyyy")}
                  </span>
                </div>
                <hr />
                <div className="flex flex-col gap-2 mt-2">
                  <p>
                    Name:{" "}
                    <span className="text-primary font-medium">
                      {interest?.user?.name}
                    </span>
                  </p>
                  <p>
                    Phone:{" "}
                    <span className="text-primary font-medium">
                      {interest?.user?.phoneNo}
                    </span>
                  </p>
                  <p>
                    Company:{" "}
                    <span className="text-primary font-medium">
                      {interest?.user?.companyName}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col mt-2">
                  <p>Products: </p>
                  <div className="pl-3 flex flex-col gap-2 mt-1">
                    {interest?.products?.map((product: any, idx: any) => {
                      return (
                        <div
                          key={product?.id}
                          className="border border-primary bg-green-600/10 px-2 py-1 rounded-md"
                        >
                          <p className="text-sm text-gray-500">
                            Name:{" "}
                            <span className="text-primary font-semibold">
                              {product?.name}
                            </span>{" "}
                          </p>
                          <p className="text-sm text-gray-500">
                            Qty:{" "}
                            <span className="text-primary font-semibold">
                              {product?.qty} {product?.variant?.unit}
                            </span>
                          </p>
                          <p className="text-sm text-gray-500">
                            Price:{" "}
                            <span className="text-primary font-semibold">
                              {currency}
                              {product?.variant?.price?.toString()}
                            </span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}

        {(!interests || (interests && interests?.length === 0)) && (
          <div className="text-black">No Requests generated till now</div>
        )}
      </div>
    </div>
  );
};

export default MyBuyNowRequests;
