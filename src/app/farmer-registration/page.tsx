"use client";

import Button from "@/components/Button/Button";
import Leaf from "@/components/leaf/Leaf";
import SideMenuLogin from "@/components/sidemenulogin/SideMenulogin";
import { checkUserLogin } from "@/utils/databaseService";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { cookies } from "next/dist/client/components/headers";
import { auth, db } from "@/config/firebase-config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const FarmerRegistration = () => {
  const [isShowLoginMenu, setShowLoginMenu] = useState(false);
  // const cookie = cookies().get("uid");

  const handleLoginClick = () => {
    setShowLoginMenu(!isShowLoginMenu);
    document.body.classList.add("no-scroll");
  };

  const closeLoginMenu = () => {
    setShowLoginMenu(false);
    document.body.classList.remove("no-scroll");
  };

  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNo: "",
    address: "",
    fpo: "",
    aadharCard: "",
  });

  const handleChange = ({ name, value }: any) => {
    setState((val) => {
      return { ...val, [name]: value };
    });
  };

  const handleSubmit = async () => {
    if (!state.name || !state.email || !state.phoneNo || !state.address) {
      toast("Enter details", { type: "error" });
      return;
    }

    if (/^\+[1-9]{1}[0-9]{3,14}$/.test(state?.phoneNo) === false) {
      toast.error("Enter Country code with phone number");
      return;
    }

    const inAuth = await getDocs(
      query(
        collection(db, "auth"),
        where("phoneNo", "==", state.phoneNo.split(" ").join(""))
      )
    ).then((val) => {
      return val.docs.length;
    });
    const alreadyUser = await getDocs(
      query(
        collection(db, "users"),
        where("phoneNo", "==", state.phoneNo.split(" ").join(""))
      )
    ).then((val) => {
      return val.docs.length;
    });

    if (inAuth || alreadyUser) {
      toast.error("Phone number is already in use.");
      return;
    }

    const data = {
      createdAt: new Date(),
      email: state.email,
      phoneNo: state.phoneNo,
      address: state.address,
      fpo: state.fpo,
      aadharCard: state.aadharCard,
      name: state?.name,
    };

    try {
      await addDoc(collection(db, "farmerRegistration"), data);
      setState({
        name: "",
        email: "",
        phoneNo: "",
        address: "",
        fpo: "",
        aadharCard: "",
      });
      toast.success("Application Submitted");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div>
      <Leaf text="Farmer Registration" />
      <div className=" w-[80%] flex flex-col mx-auto mb-20 py-8  shadow-center rounded-lg">
        <div className="w-full px-4">
          <h2 className="text-2xl font-bold">Farmer Registration</h2>
        </div>
        <div className="flex flex-wrap w-full px-4  justify-between">
          <div className=" flex gap-1 flex-col w-full md:w-[49%] my-2 ">
            <p className="text-gray-400 text-sm">Your Name *</p>
            <input
              className="py-2 px-2 border border-gray-200 rounded-[5px] shadow-inner"
              type="text"
              name="name"
              id=""
              onChange={(e) => {
                handleChange({ name: e.target.name, value: e.target.value });
              }}
              value={state.name}
              required
            />
          </div>
          <div className=" flex gap-1 flex-col w-full md:w-[49%] my-2 ">
            <p className="text-gray-400 text-sm">Your Email *</p>
            <input
              className="py-2 px-2 border border-gray-200 rounded-[5px] shadow-inner"
              type="email"
              name="email"
              id=""
              onChange={(e) => {
                handleChange({ name: e.target.name, value: e.target.value });
              }}
              value={state.email}
              required
            />
          </div>
          <div className=" flex gap-1 flex-col w-full md:w-[49%] my-2 ">
            <p className="text-gray-400 text-sm">Phone Number *</p>
            <input
              className="py-2 px-2 border border-gray-200 rounded-[5px] shadow-inner"
              type="text"
              name="phoneNo"
              id=""
              onChange={(e) => {
                handleChange({ name: e.target.name, value: e.target.value });
              }}
              value={state.phoneNo}
              required
            />
          </div>
          <div className=" flex gap-1 flex-col w-full md:w-[49%] my-2 ">
            <p className="text-gray-400 text-sm">Address *</p>
            <input
              className="py-2 px-2 border border-gray-200 rounded-[5px] shadow-inner"
              type="text"
              name="address"
              id=""
              onChange={(e) => {
                handleChange({ name: e.target.name, value: e.target.value });
              }}
              value={state.address}
              required
            />
          </div>
          <div className=" flex gap-1 flex-col w-full md:w-[49%] my-2 ">
            <p className="text-gray-400 text-sm">Company FPO</p>
            <input
              className="py-2 px-2 border border-gray-200 rounded-[5px] shadow-inner"
              type="text"
              name="fpo"
              id=""
              onChange={(e) => {
                handleChange({ name: e.target.name, value: e.target.value });
              }}
              value={state.fpo}
            />
          </div>
          <div className=" flex gap-1 flex-col w-full md:w-[49%] my-2 ">
            <p className="text-gray-400 text-sm">Aadhar Card Number</p>
            <input
              className="py-2 px-2 border border-gray-200 rounded-[5px] shadow-inner"
              type="text"
              name="aadharCard"
              id=""
              onChange={(e) => {
                handleChange({ name: e.target.name, value: e.target.value });
              }}
              value={state.aadharCard}
            />
          </div>
        </div>
        <div className="px-4 mt-10">
          <Button
            onClickHandler={
              auth.currentUser?.uid ? handleSubmit : handleLoginClick
            }
            isLoading={false}
            text={"Submit"}
            className="px-[40px] py-[15px] cursor-pointer"
          />
        </div>
      </div>
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

export default FarmerRegistration;
