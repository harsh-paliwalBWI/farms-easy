"use client";
import axios from "axios";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { Fragment, useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { auth, db } from "../../config/firebase-config";

// import logo from "../../images/logo.png";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../images/logo2.png";
// import { useDispatch } from "react-redux";
// import { closeLoginModal } from "../../redux/slices/loginModalSlice";
import { allCountries } from "@/utils/constant";
import { Menu, Transition } from "@headlessui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { TiTimes } from "react-icons/ti";
import { toast } from "react-toastify";
import { getUserData } from "../../utils/databaseService";
import FlatIcon from "../flatIcon/flatIcon";
import { CircularProgress } from "@mui/material";

function SideMenuLogin({
  isOpen,
  onClose,
  setShowLogin,
}: {
  isOpen: any;
  onClose: any;
  setShowLogin: any;
}) {
  const [dialcountry, setdialcountry] = useState<any>(
    allCountries?.filter((item) => item?.curr === "INR")[0]
  );

  const [userInput, setUserInput] = useState({
    email: "",
    name: "",
    company: "",
  });
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  //   const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const queryClient = useQueryClient();
  const [time, setTime] = useState(60);
  const [OTP, setOTP] = useState("");
  const [timerStarted, setTimerStarted] = useState(false);
  const [otpSent, setOTPSent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [userInputLoading, setUserInputLoading] = useState(false);
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
        const formattedPhoneNumber = `${dialcountry.code}${phoneNumber}`;

        const inAuth = await getDocs(
          query(
            collection(db, "auth"),
            where("phoneNo", "==", formattedPhoneNumber.split(" ").join(""))
          )
        );

        const alreadyUser = await getDocs(
          query(
            collection(db, "users"),
            where("phoneNo", "==", formattedPhoneNumber.split(" ").join(""))
          )
        ).then((val) => {
          return val.docs.length;
        });

        if (inAuth.docs.length > 0 || alreadyUser) {
          const userDoc = inAuth.docs[0];
          const userData = userDoc.data();

          if (userData.role === "vendor") {
            toast.info(
              "You are a verified vendor. Please Login through Farmer Login"
            );
            onClose();
            return;
          }
        }

        setLoading(true);
        const recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response: any) => {},
          }
        );

        // const formattedPhoneNumber = `+91${phoneNumber}`;
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
          setUserId(res.user.uid);
          if (res._tokenResponse.isNewUser) {
            let user = {
              name: "user",
              phoneNo: `${dialcountry.code}${phoneNumber}`,
              createdAt: new Date(),
              profilePic: {
                url: "",
              },
              wishlistIds: [],
            };
            console.log(user, "user info");
            await addDoc(collection(db, `auth`), {
              createdAt: new Date(),
              loginMode: "otp",
              name: "user",
              phoneNo: `${dialcountry.code}${phoneNumber}`,
              role: "user",
            });
            await setDoc(doc(db, `users/${res.user.uid}`), user, {
              merge: true,
            });

            setVerifying(false);

            await axios.post(`/api/login?uid=${res.user.uid}`);
            setIsNewUserModalOpen(true);
          } else {
            setVerifying(false);
            await queryClient.invalidateQueries({ queryKey: ["userData"] });
            await queryClient.refetchQueries({ queryKey: ["userData"] });
            router.replace(pathName);
            onClose();
            document.body.classList.remove("no-scroll");
            setTime(60);
            setOTP("");
            setTimerStarted(false);
            setOTPSent(null);
            setLoading(false);
          }
        })
        .catch((err: any) => {
          console.log("Incorrect OTP! Sign in failed!");
        });
    } catch (err) {
      console.log("error ", err);
    }
  };

  const handleChange = ({ name, value }: any) => {
    setUserInput((val) => {
      return { ...val, [name]: value };
    });
  };

  async function handleUserInputSubmit() {
    if (!userInput.name) {
      toast.error("Enter Name");
      return;
    }
    try {
      let uid: any = auth.currentUser?.uid || userId;
      setUserInputLoading(true);

      await setDoc(
        doc(db, "users", uid),
        {
          name: userInput.name,
          email: userInput.email,
          company: userInput.company,
        },
        { merge: true }
      );

      await queryClient.invalidateQueries({ queryKey: ["userData"] });
      await queryClient.refetchQueries({ queryKey: ["userData"] });
      router.replace(pathName);
      onClose();
      document.body.classList.remove("no-scroll");
      setTime(60);
      setOTP("");
      setTimerStarted(false);
      setOTPSent(null);
      setLoading(false);
    } catch (error) {
      setUserInputLoading(false);
      console.log("ERR", error);
    }
  }

  return (
    <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] flex justify-center items-center fixed top-0 left-0 z-10">
      {isNewUserModalOpen ? (
        <div className="bg-white rounded-lg max-h-[85vh] overflow-auto py-4 px-4 flex flex-col min-w-[80vw] md:min-w-[35vw]">
          <h1 className="font-semibold text-xl">Enter your details</h1>

          <div className="w-full mt-3 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name*"
              name="name"
              onChange={(e) => {
                handleChange({ name: e.target.name, value: e.target.value });
              }}
              value={userInput.name}
              className="border-[0.5px] rounded-sm py-2 md:py-2 px-2 md:px-3  outline-none w-full"
            />
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              onChange={(e) => {
                handleChange({ name: e.target.name, value: e.target.value });
              }}
              value={userInput.email}
              className="border-[0.5px] rounded-sm py-2 md:py-2 px-2 md:px-3  outline-none w-full"
            />
            <input
              type="text"
              placeholder="Company/Brand Name"
              name="company"
              onChange={(e) => {
                handleChange({ name: e.target.name, value: e.target.value });
              }}
              value={userInput.company}
              className="border-[0.5px] rounded-sm py-2 md:py-2 px-2 md:px-3  outline-none w-full"
            />

            <button
              onClick={userInputLoading ? () => {} : handleUserInputSubmit}
              className="w-full rounded-lg bg-primary text-white py-2 flex justify-center items-center"
            >
              {userInputLoading ? (
                <CircularProgress className="!text-white" size={25} />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      ) : (
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
              width={160}
              height={160}
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
                <div className="flex">
                  <Menu
                    as="div"
                    className="w-[28%] relative text-left flex justify-center items-center  "
                  >
                    <div className="flex justify-center items-center w-full">
                      <Menu.Button className="w-full px-[4px] sm:px-[6px] md:px-[8px] lg:px-[10px] py-[9px] sm:py-[11px] md:py-[13px] lg:py-[15px]   mb-[15px]  bg-gray-100 border  border-gray-100  ">
                        <div className="flex items-center gap-1 md:gap-2">
                          <ReactCountryFlag
                            countryCode={dialcountry?.icon}
                            svg
                          />
                          <h4 className="lg:text-base md:text-sm text-xs">
                            {dialcountry?.code}
                          </h4>
                          <FlatIcon className="flaticon-arrow-down-2 text-xs md:text-sm" />
                        </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="z-50 absolute left-0  top-full w-52 sm:w-48 lg:w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[25vh] overflow-y-auto">
                        {allCountries
                          ?.sort((a, b) => a.name.localeCompare(b.name))
                          ?.map((country, id) => {
                            return (
                              <div className="px-1 py-1 " key={id}>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={() => {
                                        setdialcountry(country);
                                      }}
                                      className={`${
                                        active
                                          ? "bg-primary text-white"
                                          : "text-gray-900"
                                      } group flex gap-4 w-full items-center rounded-md px-1 py-1 lg:px-2 lg:py-2 text-sm`}
                                    >
                                      <ReactCountryFlag
                                        countryCode={country?.icon}
                                        svg
                                      />
                                      {/* {active ? "active" : "notActive"} */}
                                      {country?.code}

                                      <h1 className=" line-clamp-1 text-left">
                                        {country?.name}
                                      </h1>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            );
                          })}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full px-[20px] py-[15px] mb-[15px] outline-0 border border-gray-300 "
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>

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
      )}
    </div>
  );
}

export default SideMenuLogin;
