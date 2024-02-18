"use client"
import React, { useState, useLayoutEffect, useEffect } from "react";
import UserDashboardLayout, {useUser} from "../layout";
import { AiFillNotification } from "react-icons/ai";
import { IoWarningSharp } from "react-icons/io5";
import { HiUser } from "react-icons/hi";
import { AiFillEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import getLocaleDate from "../../../../components/HelperFunctions/getLocalDate";
import axios from "axios";
import { useSelector } from "react-redux";

const Index = () => {

  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [announcementListReverse, setAnnouncementListReverse] = useState([
    {
      title: "Announcement Title",
      announcedTo: "Peserta Hackathon",
      content:
        "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet.  ",
    },
    {
      title: "test",
      content: "bang",
    },
    {
      title: "Announcement Title",
      announcedTo: "Peserta Hackathon",
      content:
        "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet.  ",
    },
    {
      title: "Announcement Title",
      announcedTo: "Peserta Hackathon",
      content:
        "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet.  ",
    },
    {
      title: "Announcement Title",
      announcedTo: "Peserta Hackathon",
      content:
        "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet.  ",
    },
  ]);

  const user = useSelector((state) => state.auth.user);
  
  const router = useRouter();

  const handleEditProfile = () => {
    router.push("/user/dashboard/beranda/profilDiri");
  };

  useLayoutEffect(() => {
    function updateSize() {
      setIsWideScreen(window.innerWidth > 640);
      setIsSmallScreen(window.innerWidth < 640);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  function AnnouncementItem({ title, announcedTo, content, createdAt }) {
    return (
      <div className="font-Montserrat">
        <h1 className="text-[13px] 2xl:text-[0.868vw] font-bold">{title}</h1>
        <p className="text-[11.57px] font-bold leading-[200%]">
          To: {announcedTo}
        </p>
        <p className="font-semibold text-justify text-[13.39px]">{content}</p>
        <p className="text-[12px] leading-[200%]">{getLocaleDate(createdAt)}</p>
        <div className="w-full h-[1px] bg-black bg-opacity-60 mt-3 mb-5"></div>
      </div>
    );
  }

  return (
    <UserDashboardLayout>
      <div className="w-full h-full flex sm:flex-row flex-col gap-2 relative">
        {isSmallScreen && (
          <div className="w-full flex items-center gap-2 bg-primary-500 border-[3px] border-shade-black rounded-xl px-4 lg:px-8 py-4">
            <IoWarningSharp size={18} />
            <p className="font-Montserrat text-sm font-bold text-text-placeholder-light">
              Tolong segera melengkapi data diri sebelum mendaftar lomba
            </p>
          </div>
        )}
        <div className="w-full sm:w-1/3 sm:min-h-full min-h-[30vh] bg-text-placeholder-light border-[3px] border-shade-black rounded-xl p-6 flex flex-col gap-4">
          <div className="w-full flex justify-between max-h-[10vh]">
            <div className="flex justify-between items-center gap-2">
              <AiFillNotification size={18} color="black" />
              <p className="font-Montserrat font-bold text-center text-shade-black">
                Pengumuman
              </p>
            </div>
            {/* 
                        <div className='bg-warning-300 px-4 py-2 rounded'>
                            <p className='font-Montserrat font-bold text-sm text-center text-warning-500'>2 Baru</p>
                        </div>
                        */}
          </div>
          <div className="overflow-y-scroll mb-10 mt-[22px]">
            {announcementListReverse?.length > 0 ? (
              announcementListReverse?.map((announcement) => (
                <AnnouncementItem key={announcement._id} {...announcement} />
              ))
            ) : (
              <div className="flex-1 flex justify-center items-center">
                <p className="font-Montserrat text-sm lg:text-base lg:font-bold text-shade-black text-center">
                  Belum ada pengumuman
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-2">
          {isWideScreen && (
            <div className="w-full flex items-center gap-3 bg-primary-500 border-[3px] border-shade-black rounded-xl px-4 lg:px-8 py-4">
              <IoWarningSharp size={24} className="min-w-6" />
              <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                Tolong segera melengkapi data diri sebelum mendaftar lomba
              </p>
            </div>
          )}
          <div className="flex-1 h-full border-[3px] border-shade-black rounded-xl bg-text-placeholder-light p-6 lg:p-8 flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="flex justify-between gap-2">
                <HiUser size={21} color="black" />
                <p className="font-Montserrat font-bold text-center text-shade-black">
                  Profil diri
                </p>
              </div>
              <div className="bg-error-100 px-3 py-2 rounded">
                <p className="font-Montserrat font-bold text-xs lg:text-sm text-center text-error-500">
                  Lengkapi Data
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p className="font-CreatoDisplay font-bold text-2xl lg:text-5xl text-shade-black">
                    {user.name}
                  </p>
                  <p className="font-Montserrat font-bold text-sm text-shade-black">
                    {user.email}
                  </p>
                </div>
                <div>
                  <button
                    className="border-2 border-background-skyblue flex items-center gap-2 px-5 py-1 rounded"
                    onClick={handleEditProfile}
                  >
                    <AiFillEdit size={16} color="#2A93C2" />
                    <p className="font-Montserrat font-bold text-xs lg:text-sm text-background-skyblue">
                      Edit
                    </p>
                  </button>
                </div>
              </div>
              <div className="my-4 border border-neutral-300" />
              <div className="flex flex-col gap-2">
                <div className="w-full flex gap-4 xl:gap-0">
                  <div className="w-1/4">
                    <p className="font-Montserrat font-bold text-shade-black text-sm lg:text-base">
                      ID Peserta
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                      {user._id}
                    </p>
                  </div>
                </div>
                <div className="w-full flex gap-4 xl:gap-0">
                  <div className="w-1/4">
                    <p className="font-Montserrat font-bold text-shade-black text-sm lg:text-base">
                      Asal Provinsi
                    </p>
                  </div>
                  <div className="flex-1">
                    {user.province ? (
                      <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                        {user.province}
                      </p>
                    ) : (
                      <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                      kosong
                    </p>
                    )}
                  </div>
                </div>
                <div className="w-full flex gap-4 xl:gap-0">
                  <div className="w-1/4">
                    <p className="font-Montserrat font-bold text-shade-black text-sm lg:text-base">
                      Alamat Lengkap
                    </p>
                  </div>
                  <div className="flex-1">
                  {user.address ? (
                    <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                    {user.address}
                  </p>
                    ) : (
                      <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                      belum diisi
                    </p>
                    )}
                  </div>
                </div>
                <div className="w-full flex gap-4 xl:gap-0">
                  <div className="w-1/4">
                    <p className="font-Montserrat font-bold text-shade-black text-sm lg:text-base">
                      Tanggal Lahir
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                      -
                    </p>
                  </div>
                </div>
                <div className="w-full flex gap-4 xl:gap-0">
                  <div className="w-1/4">
                    <p className="font-Montserrat font-bold text-shade-black text-sm lg:text-base">
                      Nomor HP
                    </p>
                  </div>
                  <div className="flex-1">
                  {user.phone ? (
                    <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                    {user.phone}
                  </p>
                    ) : (
                      <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                      belum diisi
                    </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="my-4 border border-neutral-300" />
              <div className="flex flex-col gap-2">
                <div className="w-full flex gap-4 xl:gap-0">
                  <div className="w-1/4">
                    <p className="font-Montserrat font-bold text-shade-black text-sm lg:text-base">
                      Status
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                      {user.status}
                    </p>
                  </div>
                </div>
                <div className="w-full flex gap-4 xl:gap-0">
                  <div className="w-1/4">
                    <p className="font-Montserrat font-bold text-shade-black text-sm lg:text-base">
                      Institusi
                    </p>
                  </div>
                  <div className="flex-1">
                    {user.institutionName ? (
                    <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                    {user.institutionName}
                  </p>
                    ) : (
                      <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                      belum diisi
                    </p>
                    )}
                  </div>
                </div>
                <div className="w-full flex gap-4 xl:gap-0">
                  <div className="w-1/4">
                    <p className="font-Montserrat font-bold text-shade-black text-sm lg:text-base">
                      Nomor Institusi
                    </p>
                  </div>
                  <div className="flex-1">
                  {user.institutionNumber ? (
                    <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                    {user.institutionNumber}
                  </p>
                    ) : (
                      <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                      belum diisi
                    </p>
                    )}
                  </div>
                </div>
                <div className="w-full flex gap-4 xl:gap-0">
                  <div className="w-1/4">
                    <p className="font-Montserrat font-bold text-shade-black text-sm lg:text-base">
                      Kartu Institusi
                    </p>
                  </div>
                  <div className="flex-1">
                    <button className="border-2 border-background-skyblue rounded px-6 lg:px-8 py-0.5 lg:py-1 opacity-50">
                      <p className="font-Montserrat font-bold text-xs lg:text-sm text-background-skyblue text-center">
                        Lihat
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default Index;
