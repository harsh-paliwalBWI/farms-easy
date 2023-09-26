"use client";

import React, { FC, useState } from "react";
import { TiTimes } from "react-icons/ti";
import Button from "../Button/Button";
import validator from "validator";
import { toast } from "react-toastify";
import { getUserData, handleLeadSubmit } from "@/utils/databaseService";
import { auth } from "@/config/firebase-config";
import { useQuery } from "@tanstack/react-query";

interface Props {
  handleCloseModal: any;
  selectedProduct?: any;
  cookie?: any;
}

const Modal: FC<Props> = ({ handleCloseModal, selectedProduct, cookie }) => {
  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUserData(cookie),
    keepPreviousData: true,
  });
  
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    quotedPrice: "",
  });

  const [loading, setLoading]: any = useState(false);

  const handleChange = ({ name, value }: any) => {
    setState((val) => {
      return { ...val, [name]: value };
    });
  };

  const handleSubmit = async () => {
    if (
      !state.name ||
      !state.email ||
      !state.phone ||
      !state.quantity ||
      !state.quotedPrice
    ) {
      toast("Enter details correctly", { type: "error" });
      return;
    }

    if (!validator.isEmail(state.email)) {
      toast("Incorrect Email.", { type: "error" });
      return;
    }

    if (
      (state.phone.length < 10 || state.phone.length > 10) &&
      !state.phone.includes("+")
    ) {
      toast("Incorrect Phone Number", { type: "error" });
      return;
    }

    setLoading(true);

    let data: any = {
      createdAt: new Date(),
      name: state.name,
      phoneNo: state.phone,
      email: state.email,
      products: [
        {
          name: selectedProduct?.name,
          qty: parseFloat(state.quantity),
          quotedPrice: parseFloat(state.quotedPrice),
          id: selectedProduct?.id || "", // product id
          variant: {
            unit: selectedProduct?.unit || "",
            price: selectedProduct?.price || {},
            weight: selectedProduct?.weight || 0,
            sku: selectedProduct?.sku || "",
          },
          vendor: {
            id: selectedProduct?.vendor?.id || "",
          },
        },
      ],
    };

    if (auth.currentUser?.uid && userData) {
      data["user"] = {
        id: auth.currentUser?.uid,
        name: userData?.name || state.name,
        phoneNo: userData?.phoneNo || state.phone,
        // phoneNo: string,
      };
    }

    const res: boolean = await handleLeadSubmit(data);
    if (res) {
      setState({
        email: "",
        quantity: "",
        quotedPrice: "",
        name: "",
        phone: "",
      });
      setLoading(false);
      handleCloseModal();
      toast("Your interest has been captured.", { type: "success" });
      return;
    } else {
      toast("Something went wrong.", { type: "error" });
      return;
    }
  };

  console.log({selectedProduct});
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 top-0 left-0 w-[100vw] h-[100vh]">
      <div className="bg-white w-[38rem]  rounded-3xl p-12">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold">I&apos;M Interested</h2>
          <button
            onClick={handleCloseModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <TiTimes className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <input
            type="text"
            placeholder="Your Name*"
            name="name"
            onChange={(e) => {
              handleChange({ name: e.target.name, value: e.target.value });
            }}
            value={state.name}
            className="border-[0.5px] rounded-sm py-3 md:py-4 px-4 md:px-6"
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            name="phone"
            onChange={(e) => {
              if (
                validator.isNumeric(e.target.value) ||
                e.target.value === ""
              ) {
                handleChange({ name: e.target.name, value: e.target.value });
              }
            }}
            value={state.phone}
            className="border-[0.5px] rounded-sm py-3 md:py-4 px-4 md:px-6"
          />
          <input
            type="email"
            placeholder="Your Email*"
            name="email"
            onChange={(e) => {
              handleChange({ name: e.target.name, value: e.target.value });
            }}
            value={state.email}
            className="border-[0.5px] rounded-sm py-3 md:py-4 px-4 md:px-6"
          />
          <input
            type="number"
            name="quantity"
            onChange={(e) => {
              handleChange({ name: e.target.name, value: e.target.value });
            }}
            value={state.quantity}
            placeholder="Quantity"
            className="border-[0.5px] rounded-sm py-3 md:py-4 px-4 md:px-6"
          />
          <input
            type="number"
            name="quotedPrice"
            onChange={(e) => {
              handleChange({ name: e.target.name, value: e.target.value });
            }}
            value={state.quotedPrice}
            placeholder="Enter Quoted Price"
            className="border-[0.5px] rounded-sm py-3 md:py-4 px-4 md:px-6"
          />
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6">
            <Button
              onClickHandler={handleSubmit}
              isLoading={loading}
              text={"SUBMIT"}
              className="px-6 py-3 md:px-[60px] md:py-[15px] cursor-pointer"
            />
            <div className="text-sm md:text-base font-semibold mt-2 md:mt-0">
              Or You Can Call{" "}
              <span className="text-[#598f26] font-semibold">
                1800-234-4284
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
