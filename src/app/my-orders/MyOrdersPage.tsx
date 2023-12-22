"use client";
import { getUserOrders } from "@/utils/databaseService";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Link from "next/link";
import React from "react";

const MyOrdersPage = ({ cookie }: any) => {
  const { data: orders }: any = useQuery({
    queryKey: ["my-orders"],
    queryFn: () => getUserOrders(cookie),
  });

  const handleClick = async (downloadUrl: any, orderId: any) => {
    const response = await fetch(downloadUrl);

    if (response.status !== 200) {
      console.error(response.status, response.statusText);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${orderId}.pdf`;
    link.click();
  };

  return (
    <div className="flex flex-col px-[3.5%] py-8">
      <h1 className=" text-xl font-semibold">My Orders </h1>

      <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 my-6">
        {orders &&
          orders?.length !== 0 &&
          orders?.map((interest: any) => {
            let date = new Date(interest.createdAt.seconds * 1000);
            return (
              <div
                className="border border-gray-300 shadow-md h-full py-2 px-2 md:px-3 rounded-md "
                key={interest?.id}
              >
                <div>
                  Created On:{" "}
                  <span className="text-primary font-medium">
                    {moment(date).format("DD MMM, yyyy")}
                  </span>
                </div>
                <hr />
                <div className="flex flex-col gap-2 mt-2">
                  <p>
                    Order Id:{" "}
                    <span className="text-primary font-medium">
                      {interest?.orderId}
                    </span>
                  </p>
                  <p>
                    Name:{" "}
                    <span className="text-primary font-medium">
                      {interest?.username}
                    </span>
                  </p>
                  <p>
                    Order Status:{" "}
                    <span className="text-primary font-medium">
                      {interest?.orderstatus}
                    </span>
                  </p>
                  {interest?.attachment && (
                    <button
                      onClick={() => {
                        handleClick(interest?.attachment, interest?.orderId);
                      }}
                      // href={
                      //   "https://firebasestorage.googleapis.com/v0/b/bwi-emb-farmacy.appspot.com/o/Offer1.png?alt=media&token=7aef680f-e2be-4935-bcec-fc31fad0be55"
                      // }
                      className="bg-primary flex justify-center items-center text-white rounded-md mt-2 py-2"
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
            );
          })}

        {(!orders || (orders && orders?.length === 0)) && (
          <div className="text-black">No Orders Made.</div>
        )}
      </div>
    </div>
  );
};

export default MyOrdersPage;
