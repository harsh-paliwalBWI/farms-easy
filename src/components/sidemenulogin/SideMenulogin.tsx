"use client";
import React, { useState, useEffect, FC } from "react";
import { auth, db } from "../../config/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";
import logo from "../../images/logo.png";
import { useRouter, usePathname } from "next/navigation";
import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import Image from "next/image";
// import { useDispatch } from "react-redux";
// import { closeLoginModal } from "../../redux/slices/loginModalSlice";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserData } from "../../utils/databaseService";
import FlatIcon from "../flatIcon/flatIcon";
import { TiTimes } from "react-icons/ti";

function SideMenuLogin({
  isOpen,
  onClose,
  setShowLogin,
}: {
  isOpen: any;
  onClose: any;
  setShowLogin: any;
}) {
  const [email, setEmail] = useState<any>("");
  //   const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const queryClient = useQueryClient();
  const [time, setTime] = useState(60);
  const [OTP, setOTP] = useState("");
  const [timerStarted, setTimerStarted] = useState(false);
  const [otpSent, setOTPSent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(true);
  const pathName = usePathname();
  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUserData(null),
  });

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (timerStarted) {
        if (time === 1) {
          setTimerStarted(false);
          confirmOTP();
        }
        setTime((t) => t - 1);
      }
    }, 1000);
  }, [time]);
  const startTimer = () => {
    setTimerStarted(true);
    setTime((t) => t - 1);
  };

  const signInUserWithPhoneNumber = async () => {
    try {
      if (phoneNumber) {
        setLoading(true);
        const recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response: any) => {},
          }
        );

        const formattedPhoneNumber = `+91${phoneNumber}`;
        await signInWithPhoneNumber(
          auth,
          formattedPhoneNumber,
          recaptchaVerifier
        )
          .then((confirmationResult) => {
            setOTPSent(confirmationResult);

            setLoading(false);
            startTimer();
          })
          .catch((error) => {
            console.log(error + "...please reload");
            setLoading(false);
          });
      } else {
        if (!phoneNumber)
          console.log("Please enter both name and phone number");
        setLoading(false);
      }
    } catch (error) {
      console.log("CATCH ERROR ", error);
    }
  };

  const confirmOTP = () => {
    try {
      setTimerStarted(false);
      setVerifying(true);
      otpSent
        .confirm(OTP)
        .then(async (res: any) => {
          console.log(res, "User");
          localStorage.setItem("auth", JSON.stringify(res.user.uid));
          if (res._tokenResponse.isNewUser) {
            let user = {
              name: "user",
              phoneNo: `+91${phoneNumber}`,
              createdAt: new Date(),
              profilePic: {
                url: "",
              },
              wishlistIds: [],
            };
            console.log(user, "user info");
            await setDoc(doc(db, `users/${res.user.uid}`), user, {
              merge: true,
            });
          } else {
            console.log("user already exist");
          }

          await axios.get(`/api/login?uid=${res.user.uid}`);
          setVerifying(false);
          queryClient.invalidateQueries({ queryKey: ["userData"] });
          queryClient.refetchQueries({ queryKey: ["userData"] });
          router.replace(pathName);
          onClose();
          document.body.classList.remove("no-scroll");
          setTime(60);
          setOTP("");
          setTimerStarted(false);
          setOTPSent(null);
          setLoading(false);
        })
        .catch((err: any) => {
          console.log("Incorrect OTP! Sign in failed!");
        });
    } catch (err) {
      console.log("error ", err);
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-10">
      <div
        className={`fixed right-0 top-0 h-[100vh] z-20 sm:w-[67vh] w-full bg-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in-out duration-700`}
      >
        <div className="flex items-center justify-end p-4">
          <div
            className="mt-4 mr-6 bg-[#F6F3FA] rounded-full p-3"
            onClick={onClose}
          >
            <TiTimes className="text-gray-600 cursor-pointer flaticon-close" />
          </div>
        </div>
        <div className="p-4 flex flex-col items-center justify-center h-[85%] ">
          <Image
            src={logo}
            alt=""
            width={250}
            height={250}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />

          <div className="text-[#777777] text-xl my-[30px]">
            Login with your Phone Number.
          </div>

          {showPhoneNumberInput && (
            <div className="mb-[20px] w-[90%]">
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full px-[20px] py-[15px] mb-[15px] outline-0 border border-gray-300 "
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />

              <div
                onClick={async () => {
                  await signInUserWithPhoneNumber();
                  setShowPhoneNumberInput(false);
                }}
                className="text-center bg-primary w-full py-[15px]  text-[white] cursor-pointer"
              >
                {loading ? "Sending Otp..." : "Log in"}
              </div>
              <div id="recaptcha-container"></div>
            </div>
          )}

          {!showPhoneNumberInput && (
            <div className="mb-[20px] w-[90%]">
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full px-[20px] py-[15px] mb-[15px] outline-0 border border-gray-300 "
                id="otp"
                value={OTP}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  setOTP(inputValue);
                }}
              />
              <div
                onClick={() => confirmOTP()}
                className="text-center bg-primary w-full py-[15px] text-[white] cursor-pointer"
              >
                {verifying ? "Verifying Otp" : "Proceed"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SideMenuLogin;
