"use client";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BsClock } from "react-icons/bs";
import farmacyLogo from "../../images/Farmacylogo (1).svg";
import logo from "../../images/logo2.png";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
import FlatIcon from "../flatIcon/flatIcon";
import Link from "next/link";
import { toast } from "react-toastify";
import { auth } from "@/config/firebase-config";
const Footer = () => {
  const DUMMY_DATA = [
    {
      heading: "Account",
      subLinks: [
        { name: "My Interests", path: "/my-interests" },
        { name: "My Buy Requests", path: "/my-buy-requests" },
        { name: "My Orders", path: "/my-orders" },
        // { name: "Register as Buyer" },
        { name: "Farmer Login", path: "/farmer-registration" },
        { name: "Farmer Registration", path: "/farmer-registration" },
      ],
    },
    {
      heading: "Useful links",
      subLinks: [
        { name: "About Us", path: "/aboutUs" },
        { name: "Contact", path: "/contactUs" },
        // { name: "Hot Deals" },
        // { name: "Promotions" },
        // { name: "New Products" },
      ],
    },
    {
      heading: "Help Center",
      subLinks: [
        { name: "Privacy Policy" },
        { name: "Terms & Conditions", path: "/terms-&-conditions" },
      ],
    },
  ];
  const data2 = [
    {
      heading: "sfgfdgh",
      subLinks: [
        {
          icon: <CiLocationOn />,
          darkKey: "Address",
          name: "1752 School House Road",
        },
        { icon: <BsTelephone />, darkKey: "Call Us", name: "1733-5565-5465" },
        { icon: <CiMail />, darkKey: "Email", name: "farmacy@contact.com" },
        {
          icon: <BsClock />,
          darkKey: "Work Hours",
          name: "8:00-20:00,Sunday-Thursday",
        },
        // {icon:<CiLocationOn/>,darkKey:"Address",name:"1752 School House Road"}
      ],
    },
  ];

  const SOCIAL_MEDIA = [
    { icon: <FlatIcon icon={"flaticon-facebook"} /> },
    { icon: <RiLinkedinFill /> },
    { icon: <FaInstagram /> },
    { icon: <BsTwitter /> },
  ];
  return (
    <div className="  h-fit">
      <div className="flex lg:flex-row flex-wrap  sm:justify-center lg:justify-between md:gap-7 gap-3 py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-10 border-t-[0.1px] border-[#E1E1E1] ">
        <div className=" w-full md:w-[35%] flex flex-col  items-start  bg-primary bg-opacity-10 p-3 sm:p-4 md:p-5">
          <div className=" mb-[20px] flex justify-center items-center w-full">
            <Image
              src={logo}
              alt=""
              height={300}
              width={300}
              className=" md:w-[100px]  sm:w-[75px] w-[50px] "
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="flex items-center  gap-3  md:mb-[20px] mb-[10px] w-full">
            <div>
              <CiLocationOn className="text-xl text-primary" />
            </div>
            <div className="font-bold text-sm">
              Address :
              <span className="text-[#555555] text-sm font-semibold">
                {/* 1762 School House Road */}
                7th Floor, EA Chambers Tower II, 49/50L, Whites Rd, Express Estate, Royapettah,
                Chennai, Tamil Nadu 600014
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3  md:mb-[20px] mb-[10px]">
            <div>
              <FlatIcon classname="flaticon-calling text-[#588f27] text-xl" />
            </div>
            <div className="font-bold text-sm">
              Call Us :{" "}
              <span className="text-[#555555] text-sm font-semibold">
                +91 9790897308/9798912099
                {/* 1233-777-2615 */}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 md:mb-[20px] mb-[10px]">
            <div>
              <FlatIcon classname="flaticon-message text-[#588f27] text-xl" />
            </div>
            <div className="font-bold text-sm">
              Email :{" "}
              <span className="text-[#555555] text-sm font-semibold">
                admin@farmseasy.com
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 ">
            <div>
              <FlatIcon classname="flaticon-time-left text-[#588f27] text-xl" />
            </div>
            <div className="font-bold text-sm">
              Work Hours :{" "}
              <span className="text-[#555555] text-sm font-semibold">
                8:00-20:00,Sunday-Thursday
              </span>
            </div>
          </div>
        </div>
        {/* <div ></div> */}
        <div className="flex md:flex-row flex-col w-full justify-around md:w-auto md:flex-1 md:justify-center md:gap-10 lg:gap-32 gap-4 pt-4 sm:pt-6  md:pt-8  pb-1 sm:pb-2 md:pb-3">
          {DUMMY_DATA.map((item: any, idx: number) => {
            return (
              <div className="" key={idx}>
                <div className="font-semibold sm:text-xl text-base  md:mb-[20px] mb-[10px]">
                  {item.heading}
                </div>
                {item.subLinks.map((item: any, idx: number) => {
                  if (item.name === "Farmer Login") {
                    return (
                      <Link
                        href={"https://bwi-emb-farmacy-vendor.web.app/"}
                        target="_blank"
                        key={idx}
                      >
                        <div className="text-[#555555] text-sm font-semibold md:mb-[20px] mb-[10px]">
                          {item.name}
                        </div>
                      </Link>
                    );
                  }

                  return (
                    <Link
                      href={item?.path || "/#"}
                      key={idx}
                      onClick={(e) => {
                        if (
                          (item?.path === "/my-interests" ||
                            item?.path === "/my-buy-requests") &&
                          auth.currentUser?.uid === null
                        ) {
                          e.preventDefault();
                          toast.error("Please Login First");
                        }
                      }}
                    >
                      <div className="text-[#555555] text-sm font-semibold md:mb-[20px] mb-[10px]">
                        {item.name}
                      </div>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" border-b-[0.1px] border-[#E1E1E1] "></div>
      <div className="flex sm:justify-between justify-center gap-5 sm:gap-0 items-center py-[20px] px-[3.5%]">
        <div className="text-[#555555] md:text-sm text-xs font-semibold">
          &copy; 2023, All Rights reserved by{" "}
          <span className="text-[#588f27] font-semibold">
            Farmacy Farm Fresh
          </span>
        </div>
        <div className="flex sm:gap-3 gap-2">
          <div className="bg-[#588f27] md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full flex items-center justify-center">
            {/* <RiFacebookFill className="text-white md:h-[22px] md:w-[22px] w-[15px] h-[15px]" /> */}
            <FlatIcon icon={"flaticon-facebook text-white sm:text-xl text-lg"} />
          </div>
          <div className="bg-[#588f27] md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full flex items-center justify-center">
            <FlatIcon icon={"flaticon-linkedin text-white sm:text-xl text-lg"} />
          </div>
          <div className="bg-[#588f27] md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full flex items-center justify-center">
            <FlatIcon icon={"flaticon-insta text-white sm:text-xl text-lg"} />
          </div>
          <div className="bg-[#588f27] md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full flex items-center justify-center">
            <FlatIcon icon={"flaticon-twitter text-white sm:text-xl text-lg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
