"use client";

import React, { useState } from "react";
import RootLayout from "../layout.jsx";
import { MdEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Button from "../../components/Button.jsx";
import Image from "next/image.js";
import Link from "next/link.js";
import axios from "axios";
import { useRouter } from "next/router.js";
import ElectricPattern from "../../components/ElectricPattern.jsx";

const SignUpPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [message, setMessage] = useState("");

  const signupHandler = async () => {
    try {
      if (!email) {
        return setMessage("Email field is missing!");
      }
      if (!password) {
        return setMessage("Password field is missing!");
      }
      if (!confirmPassword) {
        return setMessage("Confirm Password field is missing!");
      }
      if (confirmPassword !== password) {
        return setMessage("Both password should match");
      }
      /*  ? Fetch:  POST /auth/register 
          ? Desc: register account -> email verification  */
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        { email, password, confirmPassword },
        { withCredentials: true }
      );
      router.push("/signup/check");
    } catch (err) {
      //LOGIC IF ERROR (EMAIL IS TAKEN / PASSWORD KRG BAIK)
      if (err.response.data.errors) {
        setMessage(err.response.data.errors);
      }
    }
  };

  const googleSignupHandler = async () => {
    try {
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`;
    } catch (err) {}
  };

  return (
    <RootLayout>
      <ElectricPattern>
        <div className="flex flex-col items-center justify-center w-screen h-full px-5 py-20 overflow-auto bg-background-skyblue lg:px-12 md:px-8">
          <h1 className="text-4xl font-GameOfSquid">Sign up</h1>
          <h2>Create your Account</h2>
          <div className="flex flex-col gap-y-3 w-[80%] lg:w-[37%] mt-10">
            {/* email input */}
            <div className="flex flex-row items-center gap-x-2">
              <MdEmail size={25} />
              <p className="font-bold text-md">E-mail</p>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="johndoe@email.com"
              className="flex items-center justify-center w-full px-4 py-3 text-sm text-black bg-white rounded-lg font-Montserrat h-fit"
            />
            {/* password input */}
            <div className="flex flex-row items-center gap-x-2">
              <IoKey size={25} />
              <p className="font-bold text-md">Password</p>
            </div>
            <div className="relative flex items-center justify-center w-full">
              <input
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder="at least 8 characters"
                type={isPasswordVisible ? "text" : "password"}
                className="w-full px-4 py-3 text-black bg-white rounded-lg font-Montserrat text-md"
              />
              <button
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="flex items-center justify-center"
              >
                {isPasswordVisible ? (
                  <IoMdEye size={25} className="absolute text-black right-4" />
                ) : (
                  <IoMdEyeOff
                    size={25}
                    className="absolute text-black right-4"
                  />
                )}
              </button>
            </div>
            {/* password confirmation input */}
            <div className="flex flex-row items-center gap-x-2">
              <IoKey size={25} />
              <p className="font-bold text-md">Confirm Password</p>
            </div>
            <div className="relative flex items-center justify-center w-full">
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                placeholder="at least 8 characters"
                type={isConfirmPasswordVisible ? "text" : "password"}
                className="w-full px-4 py-3 text-black bg-white rounded-lg font-Montserrat text-md"
              />
              <button
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
                className="flex items-center justify-center"
              >
                {isConfirmPasswordVisible ? (
                  <IoMdEye size={25} className="absolute text-black right-4" />
                ) : (
                  <IoMdEyeOff
                    size={25}
                    className="absolute text-black right-4"
                  />
                )}{" "}
              </button>
            </div>
            <div className="relative flex flex-row items-center justify-center my-5">
              <p className={"text-red-600 font-bold text-center absolute"}>
                {message}
              </p>
            </div>
            <Button
              fullW
              onClick={signupHandler}
              customClass={"font-Montserrat text-black font-semibold"}
              text="Sign Up"
            />
            {/* <button
              onClick={googleSignupHandler}
              className="relative flex flex-row items-center w-full px-3 py-2 text-black bg-white rounded-lg"
            >
              <Image
                src={"/assets/images/google.png"}
                width={20}
                height={20}
                className="absolute left-3"
                alt="Google"
              />
              <p className="mx-auto font-semibold">Sign Up with Google</p>
            </button> */}
          </div>
          <div className="flex flex-row items-center my-2 mt-4 font-thin gap-x-1">
            <p className="">Already have an account ?</p>
            <Link href={"/login"} className="cursor-pointer text-primary-300">
              Sign In
            </Link>
          </div>
        </div>
      </ElectricPattern>
    </RootLayout>
  );
};

export default SignUpPage;
