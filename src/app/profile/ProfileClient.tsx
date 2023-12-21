"use client";
import { auth, db } from "@/config/firebase-config";
import { getUserData } from "@/utils/databaseService";
import { CircularProgress } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProfileClient = ({ cookie }: any) => {
  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUserData(cookie),
    keepPreviousData: true,
  });

  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    name: "",
    email: "",
    company: "",
    phoneNo: "",
  });

  const handleChange = ({ name, value }: any) => {
    setState((val) => {
      return { ...val, [name]: value };
    });
  };

  useEffect(() => {
    setState({
      company: userData?.company,
      email: userData?.email,
      name: userData?.name,
      phoneNo: userData?.phoneNo,
    });
  }, [userData]);

  async function saveChanges() {
    const { name, email, company, phoneNo } = state;
    if (!name) {
      toast.error("Name cannot be empty");
      return;
    }

    let uid: any = auth.currentUser?.uid || userData?.id;

    try {
      setIsLoading(true);
      await setDoc(
        doc(db, "users", uid),
        {
          name,
          email,
          company,
        },
        { merge: true }
      );
      await queryClient.invalidateQueries({ queryKey: ["userData"] });
      toast.success("Changes Saved.")
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("ERROR", error);
    }
  }

  return (
    <div className="sm:px-[3.5%] px-[7%] flex flex-col py-8">
      <h1 className="font-semibold text-lg md:text-2xl text-center">Profile</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="flex-col flex gap-1">
          <label htmlFor="Name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={(e) => {
              handleChange({ name: e.target.name, value: e.target.value });
            }}
            value={state.name}
            className="border-[0.5px] outline-none w-full rounded-sm py-3 md:py-4 px-4 md:px-6"
          />
        </div>
        <div className="flex-col flex gap-1">
          <label htmlFor="Name" className="font-semibold">
            Email
          </label>

          <input
            type="text"
            placeholder="Your Email"
            name="email"
            onChange={(e) => {
              handleChange({ name: e.target.name, value: e.target.value });
            }}
            value={state.email}
            className="border-[0.5px] outline-none w-full rounded-sm py-3 md:py-4 px-4 md:px-6"
          />
        </div>
        <div className="flex-col flex gap-1">
          <label htmlFor="Name" className="font-semibold">
            Phone
          </label>

          <input
            type="text"
            disabled
            placeholder="Your Phone"
            name="phoneNo"
            onChange={(e) => {
              handleChange({ name: e.target.name, value: e.target.value });
            }}
            value={state.phoneNo}
            className="border-[0.5px] outline-none w-full rounded-sm py-3 md:py-4 px-4 md:px-6"
          />
        </div>
        <div className="flex-col flex gap-1">
          <label htmlFor="Name" className="font-semibold">
            Company
          </label>

          <input
            type="text"
            placeholder="Company/Brand Name"
            name="company"
            onChange={(e) => {
              handleChange({ name: e.target.name, value: e.target.value });
            }}
            value={state.company}
            className="border-[0.5px] outline-none w-full rounded-sm py-3 md:py-4 px-4 md:px-6"
          />
        </div>
      </div>

      <div className="flex justify-start mt-6">
        <button
          onClick={isLoading ? () => {} : saveChanges}
          className="bg-primary md:min-w-[100px] flex justify-center items-center text-white py-2 px-3 rounded-lg"
        >
          {isLoading ? (
            <CircularProgress size={25} className="!text-white" />
          ) : (
            "Save Changes"
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileClient;
