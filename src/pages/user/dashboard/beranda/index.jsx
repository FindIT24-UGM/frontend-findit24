"use client";
import React, { useState, useLayoutEffect, useEffect } from "react";
import UserDashboardLayout, { useUser } from "../layout";
import { AiFillNotification } from "react-icons/ai";
import { IoWarningSharp } from "react-icons/io5";
import { HiUser } from "react-icons/hi";
import { AiFillEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  getTeamAnnouncements,
  getUserTeam,
} from "../../../../store/slices/userSlice";
import { loadingEnd, loadingStart } from "../../../../store/action";
import { format } from "date-fns";

const Index = () => {
  const { userTeam, announcementList } = useSelector((state) => state.user);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [date, setDate] = useState(null);
  const [eventIds, setEventIds] = useState([]);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
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

  const seeInstitutionFile = () => {
    window.open(`${user.institutionFile}`, "_blank");
  };

  function AnnouncementItem({ title, toEvent, content, createdAt }) {
    const formattedDate = format(new Date(`${createdAt}`), "dd MMMM y p");
    return (
      <div className="font-Montserrat text-black">
        <h1 className="text-[13px] 2xl:text-[0.868vw] font-bold">{title}</h1>
        <p className="text-[11.57px] font-bold leading-[200%]">
          To: Peserta {toEvent}
        </p>
        <p className="font-semibold text-justify text-[13.39px]">{content}</p>
        <p className="text-[12px] leading-[200%]">{formattedDate}</p>
        <div className="w-full h-[1px] bg-black bg-opacity-60 mt-3 mb-5"></div>
      </div>
    );
  }

  /*---------FETCH ANNOUNCEMENT DARI TEAM2 YG DIIKUTI USER----------- */
  useEffect(() => {
    if (isAuthenticated) {
      userTeam?.asMember?.forEach((team) => {
        setEventIds((prevEventIds) => [...prevEventIds, team.eventId._id]);
      });
      const formattedDateOfBirth = format(
        new Date(`${user?.dateOfBirth}`),
        "dd MMMM y"
      );
      setDate(formattedDateOfBirth);
    }
    if (userTeam && eventIds) {
      dispatch(getTeamAnnouncements(eventIds))
        .unwrap()
        .then((res) => {
          dispatch(loadingEnd());
        })
        .catch((err) => {});
    }
  }, [isAuthenticated, userTeam]);
  /*----------------END----------------- */

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
            {announcementList?.length > 0 ? (
              announcementList?.map((announcement) => (
                <AnnouncementItem
                  key={announcement._id}
                  title={announcement.title}
                  toEvent={announcement.toEvent.eventName}
                  content={announcement.content}
                  createdAt={announcement.createdAt}
                />
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
            {user && (
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
                      {user.dateOfBirth ? (
                        <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                          {date}
                        </p>
                      ) : (
                        <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                          -
                        </p>
                      )}
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
                      {user.status ? (
                        <p className="font-Montserrat font-medium text-shade-black text-sm lg:text-base">
                          {user.status}
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
                      {user.institutionFile != null ? (
                        <div
                          className="flex items-center gap-3"
                          onClickCapture={(e) => {
                            e.preventDefault;
                          }}
                        >
                          <a
                            target="_blank"
                            rel="norel noopener noreferrer"
                            className="hover:underline"
                            href={user.institutionFile.viewLink}
                          >
                            <button
                              rel="norel noopener noreferrer"
                              onClick={seeInstitutionFile}
                              className="border-2 border-background-skyblue rounded px-6 lg:px-8 py-0.5 lg:py-1 opacity-50"
                            >
                              <p className="font-Montserrat font-bold text-xs lg:text-sm text-background-skyblue text-center">
                                Lihat
                              </p>
                            </button>
                          </a>
                        </div>
                      ) : (
                        <button
                          onClick={seeInstitutionFile}
                          className="border-2 border-background-skyblue rounded px-6 lg:px-8 py-0.5 lg:py-1 opacity-50"
                        >
                          <p className="font-Montserrat font-bold text-xs lg:text-sm text-background-skyblue text-center">
                            Lihat
                          </p>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default Index;
