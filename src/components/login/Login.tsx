"use client";
import React, { useState, FC } from "react";
import whiteLogo from "../../images/Group 3.svg";
import Image from "next/image";
import smallLeaf from "../../images/Group 34147.svg";
import { FcGoogle } from "react-icons/fc";
import check from "../../images/Vector 28.svg";
import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../../config/firebase-config";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

interface Props {
  createAccountClickHandler?: any;
}
const Login: FC<Props> = ({ createAccountClickHandler }) => {
  const DUMMY_DATA = [
    { image: smallLeaf, text: "Includes Wide variety of Products." },
    { image: smallLeaf, text: "Fresh Groceries, Delivered to You." },
    { image: smallLeaf, text: "Helping you make Healthy choices." },
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const loginHandler = () => {
    if (email && password) {
      console.log("inside login");
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(userCredential.user.emailVerified, "verify");
          await setDoc(
            doc(db, "user", user.uid),
            { lastAccessAt: new Date() },
            { merge: true }
          );
          // if (userCredential.user.emailVerified) {
          //     (async () => {
          //     //   localStorage.setItem("@auth", user.uid);
          //       await setDoc(doc(db, "user", user.uid), { lastAccessAt: new Date() }, { merge: true });

          //     })()
          //   } else {
          //    console.log("please verify email");

          //   }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (error.code === "auth/wrong-password") {
            console.log("wrong password");
          } else if (error.code === "auth/user-not-found") {
            console.log("New user please signup.");
          } else {
            console.log(errorMessage);
          }
        });
    } else {
      console.log("fill details");
    }
  };
  return (
    <div className="bg-login-bg  bg-cover bg-no-repeat sm:px-[3.5%] px-[7%]">
      <div className="flex md:flex-row flex-wrap  md:justify-between justify-center md:gap-0 gap-5 py-[10%] w-[90%] mx-auto ">
        <div className="">
          <div className="md:mb-[15%] mb-[15%]">
            <Image
              src={whiteLogo}
              alt=""
              width={1000}
              height={1000}
              className=" sm:w-[350px] sm:h-[150px] h-[60px] w-[200px]"
            />
          </div>
          <div className="flex flex-col gap-5">
            {DUMMY_DATA.map((item: any, idx: number) => {
              console.log("fghgf");

              return (
                <div className="flex gap-5 items-center" key={idx}>
                  <div>
                    <Image src={item.image} alt="" width={20} height={20} />
                  </div>
                  <div className="text-white sm:text-xl text-base font-medium">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white  sm:px-[40px] px-[20px] sm:py-[50px] py-[20px]  rounded-xl relative  md:w-[45%] w-[100%] log-in">
          <div className="absolute sm:top-[-20px] sm:left-[-25px] top-[-10px] left-[-15px]">
            <Image
              src={smallLeaf}
              alt=""
              height={50}
              width={50}
              className="sm:h-[50px] sm:w-[50px] w-[30px] h-[30px]"
            />
          </div>

          <div className="font-bold sm:text-3xl text-xl mb-[30px]">Log In</div>
          <div className="text-[#777777] text-sm mb-[30px]">
            Please enter your details.
          </div>
          <div className=" mb-[20px]">
            <input
              type="Email"
              placeholder="Email"
              className=" w-full  px-[20px] py-[5px] outline-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="   mb-[20px]">
            <input
              type="text"
              placeholder="Password"
              className="  w-full px-[20px] py-[5px] outline-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex   flex-grow sm:flex-row flex-col sm:gap-0 gap-5 py-[5px]  justify-between  mb-[40px] items-center font-medium sm:text-base text-sm">
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 border-2 rounded-sm cursor-pointer flex justify-center items-center ${
                  isChecked
                    ? "bg-[#62A403] border-[#62A403]"
                    : "bg-white border-gray-400"
                }`}
                onClick={toggleCheckbox}
              >
                {isChecked && <Image src={check} alt="" />}
              </div>
              <div>Remember Me</div>
            </div>
            <div>Forgot Password?</div>
          </div>
          <div
            onClick={loginHandler}
            className=" text-center bg-[#62A403] py-[12px] rounded-2xl text-[white]"
          >
            Log in
          </div>
          <div className="flex items-center justify-center gap-10 my-[20px]">
            <div className="w-[25%] h-[0.2px] bg-[#dfdfdf]"></div>
            <span className="text-gray-600 sm:text-base text-sm">OR</span>
            <div className="w-[25%] h-px bg-[#dfdfdf]"></div>
          </div>

          <div className="flex border-[1px] border-text-[#777777] items-center justify-center gap-3  py-[12px] mb-[40px]">
            <div className="">
              <FcGoogle className="h-[25px] w-[25px]" />
            </div>
            <div className="font-semibold sm:text-lg text-sm">
              Log In with Google
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 font-medium sm:text-base text-sm">
            <div>Don&apos;t have an account? </div>
            <div
              onClick={createAccountClickHandler}
              className="text-[#51150A] cursor-pointer"
            >
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
