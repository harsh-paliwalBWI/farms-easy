import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BsClock } from "react-icons/bs";
import farmacyLogo from "../../images/Farmacylogo (1).svg";
import logo from "../../images/logo.jpeg";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
import FlatIcon from "../flatIcon/flatIcon";
import Link from "next/link";
const Footer = async () => {
  const DUMMY_DATA = [
    {
      heading: "Account",
      subLinks: [
        { name: "My Enquiry" },
        { name: "Register as Buyer" },
        { name: "Farmer Login" },
        { name: "Farmer Registration", path: "/farmer-registration" },
      ],
    },
    {
      heading: "Useful links",
      subLinks: [
        { name: "About Us", path: "/aboutUs" },
        { name: "Contact", path: "/contactUs" },
        { name: "Hot Deals" },
        { name: "Promotions" },
        { name: "New Products" },
      ],
    },
    {
      heading: "Help Center",
      subLinks: [{ name: "Privacy Policy" }, { name: "Terms & Conditions" }],
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
      <div className="flex lg:flex-row flex-wrap  sm:justify-center lg:justify-between gap-10  md:py-[50px] py-[20px]  px-[3.5%] border-t-[0.1px] border-[#E1E1E1] ">
        <div className=" w-full md:w-auto flex flex-col items-center md:items-start">
          <div className=" mb-[20px]">
            <Image
              src={logo}
              alt=""
              height={300}
              width={300}
              className=" sm:w-[260px] sm:h-[80px] h-[60px] w-[200px] "
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "150px",
              }}
            />
          </div>
          <div className="flex items-center gap-3  mb-[20px]">
            <div>
              <CiLocationOn className="text-xl text-primary" />
            </div>
            <div className="font-bold text-sm">
              Address :
              <span className="text-[#555555] text-sm font-semibold">
                1762 School House Road
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3  mb-[20px]">
            <div>
              <FlatIcon classname="flaticon-calling text-[#588f27] text-xl" />
            </div>
            <div className="font-bold text-sm">
              Call Us :{" "}
              <span className="text-[#555555] text-sm font-semibold">
                1233-777-2615
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-[20px]">
            <div>
              <FlatIcon classname="flaticon-message text-[#588f27] text-xl" />
            </div>
            <div className="font-bold text-sm">
              Email :{" "}
              <span className="text-[#555555] text-sm font-semibold">
                farmacy@contact.com
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
        <div className="flex w-full justify-around md:w-auto md:flex-1 md:justify-center md:gap-10 lg:gap-32">
          {DUMMY_DATA.map((item: any, idx: number) => {
            return (
              <div className="" key={idx}>
                <div className="font-semibold sm:text-xl text-base mb-[20px]">
                  {item.heading}
                </div>
                {item.subLinks.map((item: any, idx: number) => {
                  return (
                    <Link href={item?.path || "/#"} key={idx}>
                      <div className="text-[#555555] text-sm font-semibold mb-[20px]">
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
            <FlatIcon icon={"flaticon-facebook text-white text-xl"} />
          </div>
          <div className="bg-[#588f27] md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full flex items-center justify-center">
            <FlatIcon icon={"flaticon-linkedin text-white text-xl"} />
          </div>
          <div className="bg-[#588f27] md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full flex items-center justify-center">
            <FlatIcon icon={"flaticon-insta text-white text-xl"} />
          </div>
          <div className="bg-[#588f27] md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full flex items-center justify-center">
            <FlatIcon icon={"flaticon-twitter text-white text-xl"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
