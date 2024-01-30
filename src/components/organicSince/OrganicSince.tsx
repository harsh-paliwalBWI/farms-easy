"use client";
import React from "react";
import farmerImg from "../../images/Rectangle 24011.svg";
import organicLogo from "../../images/Frame (1).svg";
import vegetableImg from "../../images/blink-img-1.svg";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
const DUMMY_DATA = [
  { count: "30+", text: "Store Tie-Up" },
  { count: "20K", text: "Land Acres" },
  { count: "100+", text: "Organic Products" },
];

const about=`<p style="margin-left:8px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">ABOUT US</span></span></span></p>

<p>&nbsp;</p>

<p style="margin-left:8px; margin-right:5px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">Farms Easy is a digital marketplace for Agriculture produces and commodities. We help farmers to connect with buyers in an attempt to increase profitability to rural farmers , and providing deals to buyers from India or around the world from the farms across India.</span></span></span></p>

<p>&nbsp;</p>

<p style="margin-left:8px; margin-right:9px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">Using our E commerce platform such as Website and Android and iOS applications farmers will be able to showcase their produce with absolute precision handled by us and buyers across the world will be able to access the various farm produces like organic agri produces and conventional agri produces.</span></span></span></p>

<p>&nbsp;</p>

<p style="margin-left:8px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">We are more than happy to help the buyers find best product from the farmers in such a way that buyers will be guided by our team in handling deals with farmers.</span></span></span></p>

<p>&nbsp;</p>

<p style="margin-left:8px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">MISSION</span></span></span></p>

<p>&nbsp;</p>

<p style="margin-left:8px; margin-right:5px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">We at Farms Easy strive to provide relationships between farmers and agri produce buyers to drive the businesses with innovation and technology.</span></span></span></p>

<p>&nbsp;</p>

<p style="margin-left:8px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">To give insignts to farmers about current trends and technology and innovation to create a proactive environment to farmers to produce high quality produce with better yields .</span></span></span></p>

<p>&nbsp;</p>

<p style="margin-left:8px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">VISION</span></span></span></p>

<p>&nbsp;</p>

<p style="margin-left:8px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">We Aspire to create a sustainable world with nature and greenery and nutrition for human society and a world with less hunger and poverty .</span></span></span></p>

<p>&nbsp;</p>

<p style="margin-left:8px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">We Apire to create sustainable market place and fetch good prices for farmers to keep them self suﬃcient and to create more profits for farmers.</span></span></span></p>

<p>&nbsp;</p>

<p style="margin-left:8px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">We Aspire to create a market place for buyers to avoid facing bottlenecks or supply shortages to constantly supply farm produce to the end consumers.</span></span></span></p>

<p style="margin-left:8px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">CONTACT US</span></span></span></p>

<p style="margin-left:8px; margin-right:416px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">EMAIL : </span></span></span><a href="mailto:admin@farmseasy.com" style="text-decoration:none"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000"><u>admin@farmseasy.com</u></span></span></span></a><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000"> Call Us : +91 9790897308</span></span></span></p>

<p style="margin-left:8px"><span style="font-size:11pt"><span style="font-family:'Trebuchet MS',sans-serif"><span style="color:#000000">ADDRESS : 7th Floor, EA Chambers Tower II, 49/50L, Whites Rd, Express Estate, Royapettah, Chennai, Tamil Nadu 600014</span></span></span></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

`
const OrganicSince = () => {
  const matches = useMediaQuery("(max-width:1113px)");
  const matches2 = useMediaQuery("(max-width:480px)");
  return (
    <div className=" sm:px-[3.5%] px-[7%]   md:pt-[20px]  w-full ">
      <div className="flex justify-center items-start  gap-[80px]  ">
        {!matches && (
          <div className="flex flex-col   w-fit   relative ">
            <div className="h-[550px] w-[550px] ">
              <Image
                src={farmerImg}
                alt=""
                height={1000}
                width={1000}
                className=""
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
            <div className="absolute bottom-[-20px]">
              <Image
                src={vegetableImg}
                alt=""
                width={1000}
                height={1000}
                className="h-[180px] w-[180px]"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>
        )}
        <div className=" flex flex-col justify-center  w-full  ">
          <div className="font-bold sm:text-4xl text-2xl sm:mb-[25px] ">
            {/* Organic Since 2015 */}
            Farms Easy Farm Fresh
          </div>
          {/* <div className="text-[#6a6a6a] text-xs font-medium sm:mb-[40px] mb-[20px] text-center">
            A one-stop shop full of all the right choices, NativeFarm is a
            health food haven with organic fruit & vegetables, organic bread
            from bakeries, only organic meat and sustainable fish from British
            waters. Our over-flowing groceries range is full of gluten-free,
            dairy-free, raw food and healthy options, while our Health &
            Bodycare department.
          </div> */}
          {/* <div className="flex gap-x-[100px] sm:gap-y-[50px] gap-y-[30px] flex-wrap sm:mb-[70px] mb-[20px] ">
            {DUMMY_DATA.map((item: any, idx: number) => {
              return (
                <div key={idx}>
                  <div className="text-[#588f27] md:text-4xl sm:text-2xl text-xl font-bold mb-[5px]">
                    {item.count}
                  </div>
                  <div className="font-semibold sm:text-base text-sm">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-5 ">
            <div
              className={`w-[150px] h-[150px]  flex items-center justify-center ${
                matches2 ? "w-[100px] h-[100px]" : "w-[150px] h-[150px]"
              }`}
            >
              <Image
                src={organicLogo}
                alt=""
                width={1000}
                height={1000}
                className=""
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
            <div className="">
              <div className="text-[#51150A] font-bold mb-[5px] sm:text-lg text-base">
                Amit Malviya
              </div>
              <div className="text-[#555555] sm:text-sm text-xs font-semibold">
                Founder of the Company
              </div>
            </div>
          </div> */}
          <div className="" dangerouslySetInnerHTML={{ __html: about }}></div>
        </div>
      </div>
    </div>
  );
};

export default OrganicSince;
