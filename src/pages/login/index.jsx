"use client";

import React, { useEffect, useState } from "react";
import { signin } from "../../store/slices/authSlice";
import { loadingStart, loadingEnd } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router.js";
import { toast } from "react-toastify";

import RootLayout from "../layout.jsx";
import { MdEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import Button from "../../components/Button.jsx";
import Image from "next/image.js";
import Link from "next/link.js";
import axios from "axios";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({});
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [message, setMessage] = useState("");

  const loginHandler = async () => {
    try {
      if (!email) {
        return setMessage("Email field is missing!");
      }
      if (!password) {
        return setMessage("Password field is missing!");
      }

      // ? Fetch:  POST /auth/login
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      router.push("/");
    } catch (err) {
      if (err.response.data) {
        setMessage("Email not found or password incorrect");
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/user/dashboard");
    }
  }, [isAuthenticated, router]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loadingStart());

    const loginData = {
      ...user,
    };
    dispatch(signin(loginData))
      .unwrap()
      .then((res) => {
        // ! ERROR READING "CONTENT"
        dispatch(loadingEnd());
        router.push("/user/dashboard");
      })
      .catch((e) => {
        dispatch(loadingEnd());
        if (e.response?.status === 400 || e.response?.status === 422)
          toast.error("Wrong Email / password");
        else toast.error(e, "Something went wrong. Please Try again");
      });
  };

  const changeHandler = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setUser(() => {
      return {
        ...user,
        [name]: value,
      };
      console.log(user);
    });
  };

  const googleLoginHandler = async () => {
    try {
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`;
    } catch (err) {}
  };

  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center w-screen h-full px-5 py-20 overflow-auto bg-background-skyblue lg:px-12 md:px-8">
        <h1 className="text-4xl font-GameOfSquid">Sign in</h1>
        <h2>Log in with your data that you entered during your registration</h2>
        <div className="flex flex-col gap-y-3 w-[80%] lg:w-[37%] mt-10">
          {/* email input */}
          <label htmlFor="email">
            <div className="flex flex-row items-center gap-x-2">
              <MdEmail size={25} />
              <p className="font-bold text-md">E-mail</p>
            </div>
          </label>
          <input
            value={email}
            onChange={changeHandler}
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
              <IoMdEye size={25} className="absolute text-black right-4" />
            </button>
          </div>
          <div className="relative flex flex-row items-center justify-center my-5">
            <p className={"text-red-600 font-bold text-center absolute"}>
              {message}
            </p>
          </div>
          <Button
            fullW
            onClick={submitHandler}
            customClass={"font-Montserrat text-black font-semibold"}
            text="Sign in"
          />
          <button
            onClick={googleLoginHandler}
            className="relative flex flex-row items-center w-full px-3 py-2 text-black bg-white rounded-lg"
          >
            <Image
              src={"/assets/images/google.png"}
              width={20}
              height={20}
              className="absolute left-3"
            />
            <p className="mx-auto font-semibold">Sign In with Google</p>
          </button>
        </div>
        <div className="flex flex-row items-center my-2 mt-4 font-thin gap-x-1">
          <p className="">Don't have an account ?</p>
          <Link href={"/signup"} className="cursor-pointer text-primary-300">
            Create an account
          </Link>
        </div>
        <div className="flex flex-row font-thin gap-x-1">
          <p className="">Forgot Password ?</p>
          <Link
            href={"/login/resetPassword"}
            className="cursor-pointer text-primary-300"
          >
            Reset password
          </Link>
        </div>
      </div>
    </RootLayout>
  );
};

export default LoginPage;
