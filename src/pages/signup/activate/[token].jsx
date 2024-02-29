import React, { useEffect, useState } from "react";
import RootLayout from "../../layout";
import Button from "../../../components/Button";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { activate } from "../../../store/slices/authSlice";
import { loadingEnd } from "../../../store/action";

const Success = () => {
    const linkLogin = `${process.env.NEXT_PUBLIC_FE_URL}/login`;
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const { token } = router.query;

    useEffect(() => {

        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/activation`, {
            token,
          })
          .then((res) => {
            setSuccess(true)
          })
          .catch((err) => {
            console.log(err)
          })
      })

  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-background-skyblue">
        <div className="text-center w-2/3">
          <h1 className="font-GameOfSquid text-text-placeholder-light drop-shadow-competitions text-4xl lg:text-6xl">
            E-MAIL VERIFIED!
          </h1>
        </div>
        <div className="my-12 w-1/3 flex justify-center">
          <img
            src="/assets/images/check.svg"
            alt="check"
            className="min-w-[150px] min-h-[150px]"
          />
        </div>
        <div className="w-2/3 lg:w-1/3 flex flex-col justify-center items-center gap-5">
          <p className="font-Montserrat font-medium text-base lg:text-xl text-center mx-5">
            Your account has been verified. You may now proceed to Sign In to
            Your Account
          </p>
          <Link href={linkLogin}>
            <Button
                customClass={"font-Montserrat font-bold w-full"}
                text="Sign In"
            />
          </Link>
        </div>
      </div>
    </RootLayout>
  );
};

export default Success;
