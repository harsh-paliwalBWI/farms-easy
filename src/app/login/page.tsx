"use client";
import React from "react";
import Login from "@/components/login/Login";
// import { useRouter } from 'next/router'
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const handleCreateAccountClick = () => {
    console.log("fgdfghfdh");

    router.push("/signup"); // Replace 'signup' with your actual signup page route
  };

  return (
    <div>
      <Login createAccountClickHandler={handleCreateAccountClick} />
    </div>
  );
};

export default LoginPage;
