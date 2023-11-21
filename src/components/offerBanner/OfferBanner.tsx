"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SideMenuLogin from "../sidemenulogin/SideMenulogin";

const OfferBanner = () => {
  const [isShowLoginMenu, setShowLoginMenu] = useState(false);

  const handleLoginClick = () => {
    // setShowLogin(true);
    setShowLoginMenu(!isShowLoginMenu);
    document.body.classList.add("no-scroll");
  };

  const closeLoginMenu = () => {
    // dispatch(closeLoginModal());
    setShowLoginMenu(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="sm:px-[3.5%] px-[7%]  py-[100px]">
      <div className="flex flex-wrap gap-5  justify-center items-center ">
        <div
          style={{ position: "relative" }}
          className="relative min-w-[90vw] md:min-w-[45vw] md:flex-1 "
        >
          <Image
            src={require("../../images/Buyers.png")}
            width={100}
            height={100}
            onClick={handleLoginClick}
            layout="responsive"
            className="w-full h-full hover:cursor-pointer"
            alt="banner"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div
          style={{ position: "relative" }}
          className="relative min-w-[90vw] md:min-w-[45vw] md:flex-1 "
        >
          <Link
            href={"https://bwi-emb-farmacy-vendor.web.app/"}
            target="_blank"
          >
            <Image
              src={require("../../images/Farmers.png")}
              width={100}
              height={100}
              layout="responsive"
              className="w-full h-full"
              alt="banner"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
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

export default OfferBanner;
