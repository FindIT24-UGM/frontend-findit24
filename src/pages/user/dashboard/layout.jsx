"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HiHome } from "react-icons/hi";
import { AiFillTrophy } from "react-icons/ai";
import { BsTvFill } from "react-icons/bs";
import RootLayout from "../../layout";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../store/slices/authSlice";
import { loadingEnd, loadingStart } from "../../../store/action";
import { toast } from "react-toastify";

import ElectricPattern from "../../../components/ElectricPattern";
import { getUserTeam } from "../../../store/slices/userSlice";

const UserDashboardLayout = ({ children }) => {
  const router = useRouter();
  const path = router.asPath;
  const dispatch = useDispatch();
  const { isAuthenticated, isError, user } = useSelector((state) => state.auth);
  const [initialized, setInitialized] = useState(false);

  // useEffect(() => {
  //   const verify = async () => {
  //     await axios
  //       .get(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify`, {
  //         withCredentials: true,
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((err) => {
  //         if (err) {
  //           router.push("/login");
  //         }
  //       });
  //   };
  //   verify();
  // }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      console.log(`isAuth : ${isAuthenticated}`);
      router.push("/login");
      return;
    }
    if (router.asPath === "/user/dashboard") {
      router.replace("/user/dashboard/beranda");
    }
    dispatch(loadingStart());
    dispatch(getUserTeam())
      .unwrap()
      .then((res) => {
        dispatch(loadingEnd());
      });
  }, [isAuthenticated, router]);

  // console.log(isAuthenticated);

  const menuItems = [
    {
      path: "/user/dashboard/beranda",
      icon: <HiHome size={20} color="black" />,
      label: "Beranda",
    },
    {
      path: "/user/dashboard/lomba",
      icon: <AiFillTrophy size={20} color="black" />,
      label: "Lomba",
    },
    {
      path: "/user/dashboard/webinar",
      icon: <BsTvFill size={20} color="black" />,
      label: "Workshop",
    },
  ];

  return (
    <RootLayout>
      <ElectricPattern>
        <div className="bg-background-skyblue min-h-screen lg:flex lg:p-10 md:p-8">
          <div className="lg:w-1/5 px-5 pb-5">
            {isAuthenticated && user ? (
              <h2 className="font-CreatoDisplay font-bold text-text-placeholder-light text-4xl pt-5 py-8">
                Hai, {user?.name}
              </h2>
            ) : (
              <h2 className="font-CreatoDisplay font-bold text-text-placeholder-light text-4xl pt-5 py-8">
                Hai,
              </h2>
            )}
            <div className="flex flex-row lg:flex-col gap-2 lg:gap-4 overflow-auto scrollbar-none">
              {menuItems.map((item) => (
                <div
                  key={item.path}
                  className={`py-3 px-5 rounded-md font-GameOfSquid ${
                    path === item.path
                      ? "bg-primary-500 border-4 border-shade-black"
                      : "bg-primary-300"
                  } w-full cursor-pointer min-h-5 flex items-center gap-2`}
                  onClick={() => router.push(item.path)}
                >
                  {item.icon}
                  <p className="text-shade-black text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <main className="lg:w-4/5 px-5 py-5 w-full">{children}</main>
        </div>
      </ElectricPattern>
    </RootLayout>
  );
};

export default UserDashboardLayout;
