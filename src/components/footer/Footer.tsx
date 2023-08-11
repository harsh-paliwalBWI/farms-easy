import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BsClock } from "react-icons/bs";
import farmacyLogo from "../../images/Farmacylogo (1).svg";
import logo from "../../images/logo (2).png";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
const Footer = async () => {
  const DUMMY_DATA = [
    {
      heading: "Account",
      subLinks: [{ name: "Wishlist" }, { name: "Track Order" }],
    },
    {
      heading: "Useful links",
      subLinks: [{ name: "About Us" }, { name: "Contact" }],
    },
    {
      heading: "Help Center",
      subLinks: [
        { name: "Payments" },
        { name: "Refund" },
        { name: "Checkout" },
        { name: "Shipping" },
        { name: "Privacy Policy" },
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
    { icon: <RiFacebookFill /> },
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
                height: "auto"
              }} />
          </div>
          <div className="flex items-center gap-3  mb-[20px]">
            <div>
              <CiLocationOn className="text-[#588f27] h-[25px] w-[25px]" />
            </div>
            <div className="font-bold text-sm">
              Address :{" "}
              <span className="text-[#555555] text-sm font-semibold">
                1762 school house road
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3  mb-[20px]">
            <div>
              <BsTelephone className="text-[#588f27] h-[20px] w-[20px]" />
            </div>
            <div className="font-bold text-sm">
              Call Us :{" "}
              <span className="text-[#555555] text-sm font-semibold">
                1733-5565-5465
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-[20px]">
            <div>
              <CiMail className="text-[#588f27] h-[20px] w-[20px]" />
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
              <BsClock className="text-[#588f27] h-[20px] w-[20px]" />
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
                    <div
                      key={idx}
                      className="text-[#555555] text-sm font-semibold mb-[20px]"
                    >
                      {item.name}
                    </div>
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
            <RiFacebookFill className="text-white md:h-[22px] md:w-[22px] w-[15px] h-[15px]" />
          </div>
          <div className="bg-[#588f27] md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full flex items-center justify-center">
            <RiLinkedinFill className="text-white md:h-[22px] md:w-[22px] w-[15px] h-[15px]" />
          </div>
          <div className="bg-[#588f27] md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full flex items-center justify-center">
            <FaInstagram className="text-white md:h-[22px] md:w-[22px] w-[15px] h-[15px]" />
          </div>
          <div className="bg-[#588f27] md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full flex items-center justify-center">
            <BsTwitter className="text-white md:h-[22px] md:w-[22px] w-[15px] h-[15px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
