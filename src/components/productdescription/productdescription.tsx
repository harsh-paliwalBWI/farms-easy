"use client";
import React, { useState } from "react";
import { TiLocation } from "react-icons/ti";
import Modal from "@/components/modal/Modal";

import Image from "next/image";
import { checkUserLogin } from "@/utils/databaseService";
import brocli1 from "../../images/brocli1.svg";
import brocli2 from "../../images/brocli2.svg";
import brocli3 from "../../images/brocli3.svg";
import brocli4 from "../../images/brocli4.svg";
import brocli5 from "../../images/brocli5.svg";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useQuery } from "@tanstack/react-query";
import {
  fetchSingleProduct,
  getUserData,
  handleBuyNowRequestSubmit,
} from "@/utils/databaseService";
import { auth } from "@/config/firebase-config";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-toastify";
import { currency } from "@/utils/constant";
import SideMenuLogin from "../sidemenulogin/SideMenulogin";

const DUMMY_DATA = {
  id: 6,
  productname: "Broccoli 10kg",
  price: 2000,
  orignalprice: 2500,
  image1: brocli1,
  image2: brocli2,
  image3: brocli3,
  image4: brocli4,
  image5: brocli5,
  discount: "15",
  category: "vegetables",
  vendor: "Organic Nature",
  vendorlocation: "Devanahalli, Karnataka",
  para1:
    "Rhoncus est pellentesque elit ullamcorper. Consequat ac felis donec et odio pellentesque diam. Elementum nibh tellus molestie nunc non blandit massa enim nec. Ipsum consequat nisl vel pretium.",
  Sku: "Variable Product-10",
};

const Productdescription = ({ cookie, slug }: any) => {
  const { data: productInfo }: any = useQuery({
    queryKey: ["product", slug],
    queryFn: () => fetchSingleProduct({ slug }),
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [isShowLoginMenu, setShowLoginMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUserData(cookie),
    keepPreviousData: true,
  });
  const [selectedImage, setSelectedImage] = useState(
    productInfo?.coverImage || 0
  );
  const [selectedVariant, setSelectedVariant] = useState(0);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLoginClick = () => {
    setShowLoginMenu(!isShowLoginMenu);
    document.body.classList.add("no-scroll");
  };

  const closeLoginMenu = () => {
    setShowLoginMenu(false);
    document.body.classList.remove("no-scroll");
  };

  const handleBuyNowRequest = async () => {
    let data: any = {
      createdAt: new Date(),
      products: [
        {
          name: productInfo?.name,
          qty: 1,
          quotedPrice: 0,
          id: productInfo?.id || "", // productInfo id
          variant: {
            unit: productInfo?.variants[selectedVariant]?.unit || "",
            price:
              productInfo?.variants[selectedVariant]?.price?.discountedPrice ||
              productInfo?.variants[selectedVariant]?.price?.mrp ||
              "",
            weight: productInfo?.variants[selectedVariant]?.weight || 0,
            sku: productInfo?.variants[selectedVariant]?.sku || "",
          },
          vendor: {
            id: productInfo?.vendor?.id || "",
          },
        },
      ],
      productIds: [productInfo?.id || ""], // for where clause to check user has raised the buy now req or not
    };

    if (auth.currentUser?.uid && userData) {
      data["user"] = {
        id: auth.currentUser?.uid,
        name: userData?.name || "",
        phoneNo: userData?.phoneNo || "",
        // phoneNo: string,
      };
    }

    setLoading(true);
    const res: boolean = await handleBuyNowRequestSubmit(data);
    if (res) {
      setLoading(false);
      toast("Your buy request has been sent.", { type: "success" });
      return;
    } else {
      toast("Something went wrong.", { type: "error" });
      return;
    }
  };

  return (
    <div className="px-[3.5%] py-[5.5%]">
      <div className="flex flex-col md:flex-row justify-center gap-[60px]">
        <div className="md:w-[50%]">
          <div className="flex flex-col gap-[1rem]">
            <Image
              src={productInfo && productInfo?.images[selectedImage]?.url}
              alt=""
              className="w-full"
              width={1000}
              height={1000}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div className="flex gap-[1rem]">
              {productInfo &&
                productInfo?.images?.map((image: any, index: number) => {
                  return (
                    <div className="" key={image?.url}>
                      <Image
                        key={image?.url}
                        src={image?.url}
                        onClick={() => setSelectedImage(index)}
                        alt=""
                        className={`w-[25%] ${
                          selectedImage === index ? "shadow-lg" : ""
                        }`}
                        width={1000}
                        height={1000}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[.5rem] md:w-[44%]">
          <div className="font-semibold text-2xl ">{productInfo.name}</div>
          <div className="flex justify-between">
            <div className=" text-base font-medium  text-[#b4b5b5]">
              By{" "}
              <span className="text-[#598f26]">
                {productInfo?.vendor?.name}
              </span>
            </div>

            {productInfo && productInfo?.vendor?.location?.address?.trim() && (
              <div className="flex gap-1 items-center">
                <TiLocation className="h-[120%] w-[auto] text-[#598f26]"></TiLocation>
                <p className="font-medium  text-base ">
                  {productInfo?.vendor?.location?.address}
                </p>
              </div>
            )}
          </div>
          {/* {productInfo?.otherVendors?.length > 0 && (
            <div className="flex flex-col mt-3">
              <span className="text-[#598f26] font-medium">
                Also Sold by:{" "}
                <span className="font-normal">
                  {productInfo?.otherVendors
                    ?.map((vend: any) => vend?.name)
                    .join(", ")}
                </span>
              </span>
            </div>
          )} */}

          {/* <div className="flex gap-2  items-center mt-[1rem] mb-[.5rem]">
            <div className=" text-3xl font-semibold text-[#598f26] ">
              {currency}{" "}
              {(productInfo &&
                productInfo?.variants[selectedVariant]?.price?.discounted) ||
                productInfo?.variants[selectedVariant]?.price?.mrp}
            </div>
            {productInfo &&
              productInfo?.variants[selectedVariant]?.price?.discounted &&
              productInfo?.variants[selectedVariant]?.price?.discounted !==
                productInfo?.variants[selectedVariant]?.price?.mrp && (
                <div className=" text-2xl line-through font-medium  text-[#b4b5b5] ">
                  {currency}{" "}
                  {productInfo?.variants[selectedVariant]?.price?.mrp}
                </div>
              )}
          </div> */}

          <hr></hr>

          <div className="my-2 flex flex-wrap gap-2">
            {productInfo &&
              productInfo?.variants?.map((variant: any, index: number) => {
                return (
                  <div
                    key={variant?.weight}
                    onClick={() => {
                      setSelectedVariant(index);
                    }}
                    className={`${
                      selectedVariant === index && "bg-primary "
                    } border p-2 border-gray-200 shadow-sm rounded-md cursor-pointer`}
                  >
                    <p
                      className={`${selectedVariant === index && "text-white"}`}
                    >
                      {variant?.weight} {variant?.unit}
                    </p>
                  </div>
                );
              })}
          </div>

          {/* <div
            className=" text-base text-[#8a8b8a] font-medium  leading-8"
            dangerouslySetInnerHTML={{ __html: productInfo?.desc }}
          >
          </div> */}
          {/* <div className=" text-base font-semibold  my-[1rem]">
            SKU: <span className="text-[#5b5b5a]">{productInfo.Sku}</span>
          </div> */}
          <div className="flex">
            <button
              type="button"
              className=" text-white bg-[#598f26] w-[45%] font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2"
              onClick={
                auth.currentUser?.uid ? handleOpenModal : handleLoginClick
              }
            >
              I&apos;M INTERESTED
            </button>
            <div
              className="bg-[#51150A] gap-2 w-[45%] flex items-center justify-center font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2 cursor-pointer"
              onClick={
                auth.currentUser?.uid ? handleBuyNowRequest : handleLoginClick
              }
            >
              {loading ? (
                <RotatingLines
                  strokeColor="#fff"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="25"
                  visible={true}
                />
              ) : (
                <>
                  <p className="text-white">Buy now</p>
                  <HiOutlineArrowRight className="text-white" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal
          handleCloseModal={handleCloseModal}
          selectedProduct={productInfo}
          cookie={cookie}
        />
      )}
      {isShowLoginMenu && (
        <SideMenuLogin
          isOpen={isShowLoginMenu}
          setShowLogin={setShowLoginMenu}
          onClose={closeLoginMenu}
        />
      )}
    </div>
  );
};

export default Productdescription;
