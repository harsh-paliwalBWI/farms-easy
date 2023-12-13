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
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";

const FarmerRegistration = () => {
  const [isShowLoginMenu, setShowLoginMenu] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
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

  // const handleSubmit = async () => {
  //   if (!state.name || !state.email || !state.phoneNo || !state.address) {
  //     toast("Enter details", { type: "error" });
  //     return;
  //   }

  //   if (/^\+[1-9]{1}[0-9]{3,14}$/.test(state?.phoneNo) === false) {
  //     toast.error("Enter Country code with phone number");
  //     return;
  //   }

  //   const inAuth = await getDocs(
  //     query(
  //       collection(db, "auth"),
  //       where("phoneNo", "==", state.phoneNo.split(" ").join(""))
  //     )
  //   ).then((val) => {
  //     return val.docs.length;
  //   });
  //   const alreadyUser = await getDocs(
  //     query(
  //       collection(db, "users"),
  //       where("phoneNo", "==", state.phoneNo.split(" ").join(""))
  //     )
  //   ).then((val) => {
  //     return val.docs.length;
  //   });

  //   if (inAuth || alreadyUser) {
  //     toast.error("Phone number is already in use.");
  //     return;
  //   }

  //   const data = {
  //     createdAt: new Date(),
  //     email: state.email,
  //     phoneNo: state.phoneNo,
  //     address: state.address,
  //     fpo: state.fpo,
  //     aadharCard: state.aadharCard,
  //     name: state?.name,
  //   };

  //   try {
  //     await addDoc(collection(db, "farmerRegistration"), data);
  //     setState({
  //       name: "",
  //       email: "",
  //       phoneNo: "",
  //       address: "",
  //       fpo: "",
  //       aadharCard: "",
  //     });
  //     toast.success("Application Submitted");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong.");
  //   }
  // };

  const handleSubmit = async () => {
    if (!state.name || !state.email || !state.phoneNo || !state.address) {
      toast("Enter details", { type: "error" });
      return;
    }

    if (/^\+[1-9]{1}[0-9]{3,14}$/.test(state?.phoneNo) === false) {
      toast.error("Enter Country code with phone number");
      return;
    }

    const farmerRegistrationQuery = query(
      collection(db, "farmerRegistration"),
      where("phoneNo", "==", state.phoneNo.split(" ").join(""))
    );
    const farmerRegistrationSnapshot = await getDocs(farmerRegistrationQuery);

    if (farmerRegistrationSnapshot.docs.length > 0) {
      toast.error("Farmer request already registered");
      return;
    }

    const inAuth = await getDocs(
      query(
        collection(db, "auth"),
        where("phoneNo", "==", state.phoneNo.split(" ").join(""))
      )
    );
    // .then((val) => {
    //   return val.docs.length;
    // });

    const alreadyUser = await getDocs(
      query(
        collection(db, "users"),
        where("phoneNo", "==", state.phoneNo.split(" ").join(""))
      )
    ).then((val) => {
      return val.docs.length;
    });

    if (inAuth.docs.length > 0 || alreadyUser) {
      const userDoc = inAuth.docs[0];
      const userData = userDoc.data();

      if (userData.role === "admin") {
        toast.info("You are an admin.");
        return;
      } else if (userData.role === "vendor") {
        toast.info("You are already a verified vendor.");
        return;
      } else {
        setIsChanged(true);
        document.body.classList.add("no-scroll");
        return;
      }
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

  const handleConfirmation = async () => {
    // const authQuery = query(
    //   collection(db, "auth"),
    //   where("phoneNo", "==", state.phoneNo.split(" ").join(""))
    // );

    // const authSnapshot = await getDocs(authQuery);
    // authSnapshot.forEach(async (authDoc) => {
    //   const authDocRef = doc(db, "auth", authDoc.id);
    //   await updateDoc(authDocRef, { role: "vendor" });
    // });

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
      setIsChanged(false);
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
      {isChanged && (
        <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.3)] fixed top-0 left-0  flex justify-center items-center z-30">
          <div className="w-[80%] s:w-[55%] md:w-[30%]  bg-[white] rounded-md md:px-5 px-5 md:py-5 py-5">
            <div className="flex flex-col md:gap-7 gap-5">
              <div className="text-gray-600 sm:text-base text-sm text-center font-medium">
                <h2>
                  Are you sure you want to register as a vendor? As you are
                  already registered with us as a customer & this process cannot
                  revert.
                </h2>
              </div>
              <div className="flex w-full gap-5 sm:text-sm text-xs">
                <div
                  onClick={async () => {
                    setIsChanged(false);
                    document.body.classList.remove("no-scroll");
                    await handleConfirmation();
                  }}
                  className="w-[50%] bg-primary text-white py-2.5 rounded-md cursor-pointer flex items-center justify-center "
                >
                  <button
                    style={{
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    Yes
                  </button>
                </div>
                <div
                  onClick={() => setIsChanged(false)}
                  className="w-[50%] bg-black text-white rounded-md flex items-center py-2.5 justify-center cursor-pointer"
                >
                  <button>No</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default FarmerRegistration;
