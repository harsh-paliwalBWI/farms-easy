"use client";

import validator from "validator";

import React, { useState } from "react";
import MapImg from "../../images/Rectangle 23991.svg";
import Image from "next/image";
import triangle from "../../images/Rectangle 23990.svg";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { addDoc } from "firebase/firestore";
import { handleContactUsSubmit } from "@/utils/databaseService";
// import useMediaQuery from '@mui/material/useMediaQuery';

const DropALine = () => {
  // const matches = useMediaQuery('(min-width:1096px)');
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    // website: "",
    message: "",
  });

  const [loading, setLoading]: any = useState(false);

  const handleChange = ({ name, value }: any) => {
    setState((val) => {
      return { ...val, [name]: value };
    });
  };

  const handleSubmit = async () => {
    if (!state.name || !state.email || !state.phone || !state.message) {
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

    const data = {
      createdAt: new Date(),
      email: state.email,
      message: state.message,
      name: state.name,
      phoneNo: state.phone,
      // website: state.website,
    };

    const res: boolean = await handleContactUsSubmit(data);
    if (res) {
      setState({
        email: "",
        message: "",
        name: "",
        // website: "",
        phone: "",
      });
      setLoading(false);
      toast("Thank you for contacting us", { type: "success" });
      return;
    } else {
      toast("Something went wrong.", { type: "error" });
      return;
    }
  };

  return (
    <div className="relative  z-0 ">
      <div className=" relative z-10">
        <Image
          src={MapImg}
          alt=""
          width={1000}
          height={1000}
          style={{
            width: "100vw",
            objectFit: "cover",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="absolute md:top-[-350px] sm:top-[-600px] top-[-600px]  w-[85%] mx-auto  sm:px-[50px] px-[20px] sm:py-[50px] py-[25px] shadow-2xl rounded-xl get-in-touch z-30 bg-white left-1/2 transform -translate-x-1/2 ">
        <div className="md:text-4xl text-2xl font-semibold mb-[30px] ">
          Drop us a Line
        </div>
        <div className="flex gap-5 md:flex-row flex-col mb-[30px]">
          <div className="md:w-[50%] w-[100%] border-[0.5px] border-[#E3E3E3]  rounded-sm ">
            <input
              type="text"
              placeholder="Your Name*"
              name="name"
              onChange={(e) => {
                handleChange({ name: e.target.name, value: e.target.value });
              }}
              value={state.name}
              className="outline-0 w-full py-[15px] px-[20px]"
            />
          </div>
          <div className="md:w-[50%] w-[100%] border-[0.5px] border-[#E3E3E3]  rounded-sm">
            <input
              type="email"
              name="email"
              onChange={(e) => {
                handleChange({ name: e.target.name, value: e.target.value });
              }}
              value={state.email}
              placeholder="Your Email*"
              className="outline-0 w-full py-[15px]   px-[20px]"
            />
          </div>
        </div>
        <div className="flex gap-5 md:flex-row flex-col mb-[30px]">
          <div className="md:w-[50%] w-[100%] border-[0.5px] border-[#E3E3E3] rounded-sm ">
            <input
              type="text"
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
              placeholder="Phone Number*"
              className="outline-0 w-full py-[15px]   px-[20px]"
            />
          </div>
          {/* <div className="md:w-[50%] w-[100%] border-[0.5px] border-[#E3E3E3]  rounded-sm">
            <input
              type="text"
              name="website"
              onChange={(e) => {
                handleChange({ name: e.target.name, value: e.target.value });
              }}
              value={state.website}
              placeholder="Website"
              className="outline-0 w-full py-[15px]   px-[20px]"
            />
          </div> */}
        </div>
        <div className="border-[0.5px] border-[#E3E3E3] rounded-sm mb-[35px] textarea-container">
          <textarea
            placeholder="Message..."
            rows={6}
            name="message"
            onChange={(e) => {
              handleChange({ name: e.target.name, value: e.target.value });
            }}
            value={state.message}
            className="outline-0 w-full py-[15px] px-[20px]"
          />
        </div>
        <Button
          onClickHandler={handleSubmit}
          isLoading={loading}
          text={"Get in Touch"}
          className="px-[40px] py-[15px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DropALine;
