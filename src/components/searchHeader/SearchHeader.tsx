"use client";
import React, { Fragment, useEffect, useState } from "react";
import logo from "../../images/logo2.png";
import Image from "next/image";
import Link from "next/link";
import FlatIcon from "../flatIcon/flatIcon";
import { checkUserLogin, getUserData } from "@/utils/databaseService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { BsPersonFill } from "react-icons/bs";
import { auth } from "@/config/firebase-config";
import { signOut } from "firebase/auth";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import OutsideClickHandler from "@/utils/OutsideClickHandler";
import useDebounce from "@/utils/useDebounce";
import { handleTypesenseSearch } from "@/config/typesense";
import { currency } from "@/utils/constant";
import { CircularProgress } from "@mui/material";
import SearchTile from "./SrarchTile";
import SideMenuLogin from "../sidemenulogin/SideMenulogin";
import { Menu, Transition } from "@headlessui/react";

const SearchHeader = ({ cookie }: any) => {
  const [isShowLoginMenu, setShowLoginMenu] = useState(false);
  const queryClient = useQueryClient();

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const [isSearching, setIsSearching] = useState(false);

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

  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUserData(cookie),
    keepPreviousData: true,
  });

  // console.log(userData,"ooooooo")
  const router = useRouter();
  const pathname = usePathname();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  async function fetchSearchedProducts() {
    setIsSearching(true);
    const res = await handleTypesenseSearch(debouncedSearch);
    if (res) {
      setSearchedProducts(res);
    }
    setIsSearching(false);
  }

  useEffect(() => {
    if (searchQuery === "") {
      setSearchedProducts([]);
    }
    if (debouncedSearch) {
      fetchSearchedProducts();
      // fetch(`/api/search?q=${debouncedSearch}`);
    }
  }, [debouncedSearch]);

  const handleLogout = async () => {
    signOut(auth)
      .then(async () => {
        // Sign-out successful.
        setIsDropDownOpen(false);
        await axios.get("/api/logout");
        queryClient.invalidateQueries({ queryKey: ["userData"] });
        queryClient.refetchQueries({ queryKey: ["userData"] });
        router.replace("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-between px-[3.5%] py-[10px]">
      <Link href={"/"}>
        <div className="">
          <Image
            src={logo}
            alt=""
            width={180}
            height={180}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            className="w-[100px] scale-100"
          />
        </div>
      </Link>
      <div className="flex justify-between items-center gap-3 rounded-sm  w-[50%] bg-[#F9F9F9] relative">
        <input
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          className="rounded-sm  outline-0 px-[10px] w-full py-[12px] bg-[#F9F9F9] "
          placeholder="Search for items..."
        />
        <div className="bg-[#51150A] h-full py-[14px] px-[15px] text-white rounded-r-sm">
          <FlatIcon icon="flaticon-search text-lg" />
        </div>
        {searchQuery !== "" ? (
          <div className=" z-50 absolute top-full left-0 w-full h-auto max-h-[500px] flex flex-col shadow-lg bg-white border border-gray-200 rounded-lg px-2 py-2">
            {isSearching ? (
              <div className="flex justify-center items-center py-4">
                <CircularProgress size={25} className="!text-primary" />
              </div>
            ) : searchedProducts?.length === 0 ? (
              <div className="flex justify-center py-4">No Product Found</div>
            ) : (
              <div className="flex flex-col gap-2">
                {searchedProducts?.map((product: any) => {
                  return (
                    <div key={product?.id}>
                      <SearchTile
                        setSearchQuery={setSearchQuery}
                        product={product}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3 invisible">
          <div>
            <FlatIcon icon="flaticon-heart text-2xl" />
          </div>
          <div>Wishlist</div>
        </div>
        {checkUserLogin(cookie) ? (
          <>
            <Menu
              as="div"
              className="relative text-left flex justify-center items-center "
            >
              <div className="flex justify-center items-center">
                <Menu.Button className="">
                  <div className="flex items-center  gap-2">
                    {userData?.profilePic?.url ? (
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={userData?.profilePic?.url}
                          alt="user profileF"
                          width={100}
                          height={100}
                          layout="responsive"
                          className="w-full h-full"
                        />
                      </div>
                    ) : (
                      <BsPersonFill />
                    )}
                    <p>{(userData && userData?.name) || "User"}</p>
                    <FlatIcon className="flaticon-down-arrow !text-black"></FlatIcon>
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
                <Menu.Items className="z-50 absolute right-0 mt-2 top-full w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    {/* <Menu.Item>
                      {({ active }) => (
                        <Link href={"/profile"}>
                          <button
                            className={`${
                              active ? "bg-primary text-white" : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Profile
                          </button>
                        </Link>
                      )}
                    </Menu.Item> */}
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`${
                            active ? "bg-primary text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {/* {active ? "active" : "notActive"} */}
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                    {/* <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? "active" : "notActive"}
                    Edit
                  </button>
                )}
              </Menu.Item> */}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        ) : (
          // <div className="flex gap-2 items-center hover:cursor-pointer relative">
          //   <OutsideClickHandler
          //     onClick={() => {
          //       setIsDropDownOpen(false);
          //     }}
          //   >
          //     <div
          //       className="flex gap-2 items-center hover:cursor-pointer relative"
          //       onClick={() => {
          //         setIsDropDownOpen(!isDropDownOpen);
          //       }}
          //     >
          //       <div>
          //         {userData &&
          //         userData?.profilePic &&
          // userData?.profilePic?.url ? (
          //   <div className="w-10 h-10 rounded-full overflow-hidden">
          //     <Image
          //       src={userData?.profilePic?.url}
          //       alt="user profileF"
          //       width={100}
          //       height={100}
          //       layout="responsive"
          //       className="w-full h-full"
          //     />
          //   </div>
          // ) : (
          //   <BsPersonFill />
          // )}
          //       </div>
          //       <div>
          //         <p>{userData && userData?.name}</p>
          //       </div>
          //       <div>
          //         <FlatIcon
          //           icon="flaticon-down-arrow"
          //           classname={`text-primary`}
          //         />
          //       </div>
          //     </div>

          //     {/* {isDropDownOpen && (
          //       <div className="absolute min-w-[150px] flex flex-col gap-2 py-4 top-[50px] bg-white shadow-lg rounded-lg px-2 w-full">
          //         <Link href={"/"}>Profile</Link>
          //         <hr />
          //         <Link
          //           href={"/logout"}
          //           onClick={(e) => {
          //             e.preventDefault();
          //             handleLogout();
          //           }}
          //         >
          //           Logout
          //         </Link>
          //       </div>
          //     )} */}
          //   </OutsideClickHandler>
          // </div>
          // <Link href={"/login"}>Login</Link>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleLoginClick}
          >
            <FlatIcon icon={"flaticon-user text-xl"} />
            <h3> Buyer&apos;s Login</h3>
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
    </div>
  );
};

export default SearchHeader;
