"use client";

import ProductCard from "@/components/productCard/ProductCard";
import { fetchSingleProduct } from "@/utils/databaseService";
import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";
import FlatIcon from "@/components/flatIcon/flatIcon";
import Modal from "@/components/modal/Modal";

const SameProductByOtherVendors = ({ slug }: any) => {
  const { data: productInfo }: any = useQuery({
    queryKey: ["product", slug],
    queryFn: () => fetchSingleProduct({ slug }),
  });

  const matches2 = useMediaQuery("(max-width:480px)");
  const matches833 = useMediaQuery("(max-width:833px)");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const slider = useRef<any>(null);
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          // dots: true
        },
      },
      {
        breakpoint: 1515,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          // dots: true
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // dots: true
        },
      },
      {
        breakpoint: 833,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (!productInfo?.otherVendors || productInfo?.otherVendors?.length === 0 || productInfo?.otherVendors?.filter((prod: any) => prod?.slug !== slug)?.length===0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-4 pt-4 py-8 ">
      <h6 className="px-[3.5%] font-semibold text-xl md:text-2xl ">
        Also Sold By:{" "}
      </h6>
      <div className=" flex justify-center items-center">
        {!matches2 && !matches833 && (
          <button
            onClick={() => slider.current?.slickPrev()}
            className="bg-[#F2F3F4] p-2 rounded-full  "
          >
            <FlatIcon icon={`flaticon-left-arrow text-2xl rotate-180 `} />

            {/* <MdArrowBack className="h-[25px] w-[25px]" /> */}
          </button>
        )}
        {productInfo?.otherVendors &&
          productInfo?.otherVendors?.length !== 0 && (
            <div className="back ">
              <div className="w-[85vw]  lg:w-[90vw] h-auto ">
                <Slider
                  ref={slider}
                  {...settings}
                  className=""
                  dotsClass={`slick-dots `}
                  arrows={true}
                  nextArrow={<></>}
                  prevArrow={<></>}
                  draggable={true}
                  infinite={false}
                >
                  {productInfo?.otherVendors
                    ?.filter((prod: any) => prod?.slug !== slug)
                    .map((product: any) => {
                      return (
                        <div key={product?.id} className="">
                          <ProductCard
                            product={product}
                            setSelectedProduct={setSelectedProduct}
                            handleOpenModal={handleOpenModal}
                          />
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </div>
          )}
        {!matches2 && !matches833 && (
          <button
            onClick={() => slider.current.slickNext()}
            className="bg-[#F2F3F4] p-2 rounded-full  "
          >
            <FlatIcon icon={`flaticon-left-arrow text-2xl  `} />
          </button>
        )}
        {modalOpen && (
          <Modal
            handleCloseModal={handleCloseModal}
            selectedProduct={selectedProduct}
            cookie={""}
          />
        )}
      </div>
    </div>
  );
};

export default SameProductByOtherVendors;
