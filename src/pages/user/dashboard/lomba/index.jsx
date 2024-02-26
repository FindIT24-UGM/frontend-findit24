"use client";
import React, { useEffect } from "react";
import UserDashboardLayout from "../layout";
import { useState } from "react";
import { HiExclamationCircle } from "react-icons/hi";
import { IoCloseCircle } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useWindowSize from "./useWindowSize";
import Button from "../../../../components/Button";
import CtfLogo from "../../../../assets/Logo/DashboardLomba/CtfLogo.jsx";
import CpLogo from "../../../../assets/Logo/DashboardLomba/CpLogo.jsx";
import UXLogo from "../../../../assets/Logo/DashboardLomba/UXLogo.jsx";
import DataLogo from "../../../../assets/Logo/DashboardLomba/DataLogo.jsx";
import HackatonLogo from "../../../../assets/Logo/DashboardLomba/HackatonLogo.jsx";
import EsportLogo from "../../../../assets/Logo/DashboardLomba/EsportLogo.jsx";
import IcLogo from "../../../../assets/Logo/DashboardLomba/IcLogo.jsx";
import ArrowRight from "../../../../assets/Logo/DashboardLomba/ArrowRight.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getTeamsToSearch,
  getUserTeam,
} from "../../../../store/slices/userSlice.js";
import { loadingEnd } from "../../../../store/action.js";
import axios from "axios";
import Link from "next/link";

const Index = (nameAbr) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { userTeam } = useSelector((state) => state.user);

  const [countLomba, setCountLomba] = useState(0);
  const [titleLomba, setTitleLomba] = useState("");
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [openInvitation, setOpenInvitation] = useState(false);
  const [inputCode, setInputCode] = useState(undefined);

  //discover team untk mencocokan code team (true = cocok dg code invitation || false = tdak cocok dg code invitation)
  const [discoverTeam, setDiscoverTeam] = useState([]);
  const [openTimDitemukan, setOpenTimDitemukan] = useState(false);
  const [openTimTdkKetemu, setOpenTimTdkKetemu] = useState(false);
  const haveJoined = countLomba !== 0;

  const dispatch = useDispatch();
  useEffect(() => {
    if (userTeam) {
      setCountLomba(userTeam?.asMember?.length);
    }
    // dispatch(getTeamsToSearch(process.env.NEXT_PUBLIC_COMPETITION_ID_CTF))
    //   .unwrap()
    //   .then((res) => {
    //     dispatch(loadingEnd());
    // console.log(res);
    // setCountLomba(res.asMember.length)
    // });
  }, [isAuthenticated]);

  const searchTeam = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/team/join/search?teamCode=${inputCode}`,
        { withCredentials: true }
      )
      .then((response) => {
        setDiscoverTeam(response.data);
        setOpenInvitation(false);
        setOpenTimDitemukan(true);
      })
      .catch((err) => {
        setOpenTimDitemukan(false);
        // setOpenInvitation(true);
        setOpenTimTdkKetemu(true);
        setDiscoverTeam([]);
      });
  };

  // const createNewTeam = (eventId, teamCode) => {
  //   axios
  //     .post(
  //       `${process.env.NEXT_PUBLIC_API_URL}/team/new`,
  //       {
  //         eventId,
  //         teamCode,
  //       },
  //       {
  //         withCredentials: true,
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data.message);
  //       setOpenConfirmation(true);
  //       setOpenInvitation(false);
  //     });
  // };

  const joinTeam = (eventId, teamId, teamLeaderId) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/team/join/`,
        {
          eventId,
          teamId,
          teamLeaderId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log(res.data.message);
        setOpenInvitation(false);
        setOpenTimDitemukan(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { width } = useWindowSize();
  function TeamCard({ id, competition, teamName, verify }) {
    return (
      <Link href={`/user/dashboard/profileteam/${id}`}>
        <div className="bg-white w-full rounded-lg py-4 px-3 lg:px-8 lg:py-4 flex justify-between items-center gap-[17px] mt-[14px]">
          <div className="basis-1/2">
            <p className="font-bold font-Montserrat text-sm lg:text-base text-shade-black">
              {competition}
            </p>
            <p className="font-medium font-Montserrat text-xs lg:text-sm text-neutral-700 ">
              {teamName}
            </p>
          </div>
          <div className="basis-1/2 flex items-center justify-end gap-4 lg:gap-12">
            {width < 640 ? (
              <>
                {verify === "VERIFIED" ? (
                  <div className="w-[100px] lg:w-[148px] h-8 lg:h-9 bg-success-100 rounded px-8 flex items-center justify-center gap-2">
                    <div className="p-[6px] bg-success-900 rounded" />
                    <p className="font-bold font-Montserrat text-xs text-success-900">
                      Verified
                    </p>
                  </div>
                ) : (
                  <div className="w-[100px] lg:w-[148px] h-8 lg:h-9 bg-error-100 rounded px-8 flex items-center justify-center gap-2">
                    <div className="p-[6px] bg-warning-900 rounded" />
                    <p className="font-bold font-Montserrat text-xs text-error-900">
                      Unverified
                    </p>
                  </div>
                )}
                <ArrowRight />
              </>
            ) : (
              <>
                <div>
                  <p className="font-bold font-Montserrat text-xs lg:text-sm text-neutral-900">
                    Registered
                  </p>
                  <p className="font-medium text-xs lg:text-sm font-Montserrat text-neutral-700">
                    16 Feb 2024
                  </p>
                </div>
                {verify === "VERIFIED" ? (
                  <div className="w-[100px] lg:w-[148px] h-8 lg:h-9 bg-success-100 rounded px-8 flex items-center justify-center gap-2">
                    <div className="p-[6px] bg-success-900 rounded" />
                    <p className="font-bold font-Montserrat text-xs text-success-900">
                      Verified
                    </p>
                  </div>
                ) : (
                  <div className="w-[100px] lg:w-[148px] h-8 lg:h-9 bg-error-100 rounded px-8 flex items-center justify-center gap-2">
                    <div className="p-[6px] bg-warning-900 rounded" />
                    <p className="font-bold font-Montserrat text-xs text-error-900">
                      Unverified
                    </p>
                  </div>
                )}
                <ArrowRight />
              </>
            )}
          </div>
        </div>
      </Link>
    );
  }

  const CardLomba = ({ name, clickStatus }) => {
    const Logo = ({ NameLogo }) => {
      return (
        <>
          {NameLogo === "Capture The Flag" ? (
            <CtfLogo />
          ) : NameLogo === "Competitive Programming" ? (
            <CpLogo />
          ) : NameLogo === "UX Competition" ? (
            <UXLogo />
          ) : NameLogo === "Data analytics" ? (
            <DataLogo />
          ) : NameLogo === "Hackaton" ? (
            <HackatonLogo />
          ) : NameLogo === "E-Sports" ? (
            <EsportLogo />
          ) : NameLogo === "Informatics comp." ? (
            <IcLogo />
          ) : (
            <div></div>
          )}
        </>
      );
    };

    /* */
    const openConfirmation = ({ competitionName, nameAbr }) => {
      return (
        <div className="fixed inset-0 w-full flex justify-center items-center bg-black/70 z-50">
          <div className="relative h-auto flex flex-col gap-[25px] lg:gap-11 items-center justify-center w-[330px] sm:w-[370px] lg:w-[570px] bg-text-placeholder-light rounded-lg lg:rounded-xl border-[3px] border-black py-8 px-[10px]">
            <IoCloseCircle
              className="absolute fill-text-placeholder-dark size-6 sm:size-8 lg:size-9 top-2 right-[10.5px] sm:top-[5px] sm:right-[7px] lg:top-[17px] lg:right-[21px]"
              onClick={() => setOpenConfirmation(false)}
            />
            <p className="w-full h-auto font-bold lg:mt-[17.5px] text-text-placeholder-dark font-Montserrat lg:font-CreatoDisplay text-xl lg:text-2xl lg:leading-6 text-center">
              {competitionName}
            </p>
            <p className="text-sm lg:text-base font-medium text-text-placeholder-dark font-Montserrat text-center text-balance">
              Anda dapat membuat
              <span className="font-bold text-nowrap"> Tim Baru </span>
              atau memasukkan
              <span className="font-bold text-nowrap"> Invitation Code </span>
              milik teman anda untuk bergabung tim
            </p>
            <div className="w-full h-auto flex justify-center items-center flex-col lg:flex-row gap-[10px] sm:gap-3 lg:gap-4">
              <div className="w-[212px]">
                <Link
                  href={
                    isAuthenticated ? "/competition/register/ctf" : "auth/login"
                  }
                >
                  <Button
                    fullW
                    onClick={() => {
                      setOpenConfirmation(false);
                      setOpenInvitation(true);
                    }}
                    customClass={"lg:py-1"}
                    text="Buat Tim"
                  />
                </Link>
              </div>
              <div className="w-[212px]">
                <Button
                  fullW
                  onClick={() => {
                    setOpenConfirmation(false);
                    setOpenInvitation(true);
                  }}
                  customClass={"lg:py-1"}
                  text="Gabung Tim"
                />
              </div>
            </div>
          </div>
        </div>
      );
    };
    /* */

    return (
      <>
        {width < 1024 ? (
          <div
            className="group w-[115px] h-[160px]  px-[7px] my-3 bg-primary-500 rounded-md flex flex-col justify-around items-center hover:scale-110 hover:border-[3px] hover:border-text-placeholder-dark transition duration-500 hover:bg-white"
            onClick={clickStatus}
          >
            <Logo NameLogo={name} />
            <p className="text-center text-white font-Montserrat font-bold transition-all text-xs duration-500 group-hover:text-text-placeholder-dark group-hover:text-sm">
              {name}
            </p>
          </div>
        ) : (
          <div
            className="group w-[156px] h-[220px] px-[12px] py-8 bg-primary-500 rounded-lg flex flex-col justify-around items-center hover:scale-110 hover:border-[3px] hover:border-text-placeholder-dark transition duration-500 hover:bg-white hover:transition hover:duration-500 group-hover:transition-all group-hover:duration-500"
            onClick={clickStatus}
          >
            <Logo NameLogo={name} />
            <p className="text-center text-white font-Montserrat text-[0.833vw] leading-[1.25vw] font-bold transition-all duration-500 group-hover:text-[0.938vw] hover:leading-[1.354vw] group-hover:text-text-placeholder-dark group-hover:transition-all group-hover:duration-500 ">
              {name}
            </p>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <UserDashboardLayout>
        <div className="w-full min-h-screen flex justify-center relative">
          <div className="bg-white w-[91.389vw] sm:w-[88.672vw] lg:w-[73vw] h-fit lg:rounded-[14px] rounded-xl border-[3px] border-black lg:p-6 p-3">
            <div className=" w-full bg-primary-500 lg:p-10 p-3 rounded-[13px] h-64 lg:h-[400px]">
              <p className="w-auto text-white font-CreatoDisplay sm:text-left text-center font-bold text-base lg:text-[28px] lg:leading-8 py-[9px] lg:py-0">
                Lomba diikuti
              </p>
              <div className="w-full h-[180px] lg:h-[260px] mt-3 lg:mt-[30px] overflow-y-scroll scrollbar scrollbar-w-[6px] scrollbar-thumb-black scrollbar-thumb-rounded-md">
                <p className="text-white font-Montserrat text-xs lg:text-base font-bold">
                  Anda mengikuti {countLomba} kompetisi
                </p>
                {!haveJoined && (
                  <div className="bg-white w-full rounded-[9px] p-4 flex items-center gap-[17px] mt-[14px]">
                    <HiExclamationCircle className="size-[19px] sm:size-7 lg:size-[37px] fill-[#233E51]" />
                    <p className="text-[#233E51] font-Montserrat text-xs sm:text-[13px] sm:leading-5 lg:text-base font-bold">
                      Belum mendaftar lomba di FIND IT! 2024. Pilih pada Daftar
                      Lomba di bawah.
                    </p>
                  </div>
                )}
                {haveJoined && (
                  <div className="w-full h-auto">
                    {userTeam &&
                      userTeam?.asMember?.map((team) => {
                        if (team.teamId) {
                          return (
                            <TeamCard
                              id={team.teamId._id}
                              competition={team.eventId.eventName}
                              teamName={team.teamId.teamName}
                              verify={team.teamId.status}
                              key={team}
                            />
                          );
                        }
                      })}
                  </div>
                )}
              </div>
            </div>
            <div className="w-full h-auto overflow-x-visible lg:px-[34px] mt-[51px] sm:mt-[37px] lg:mt-[46px]">
              <h1 className="text-neutral-700 font-CreatoDisplay text-base lg:text-[28px] lg:leading-8 font-bold text-center sm:text-left">
                Daftar Lomba
              </h1>
              {width < 640 ? (
                <div className="pl-[5.7vw] flex items-center justify-center">
                  <Swiper centeredSlides={true} slidesPerView={3}>
                    <SwiperSlide>
                      <CardLomba
                        name="Capture The Flag"
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("CTF");
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CardLomba
                        name="Competitive Programming"
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("CP");
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CardLomba
                        name="UX Competition"
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("UX Competition");
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CardLomba
                        name="Data analytics"
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("Data analytics");
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CardLomba
                        name="Hackaton"
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("Hackaton");
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CardLomba
                        name="E-Sports"
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("E-Sports");
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CardLomba
                        name="Informatics comp."
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("Informatics comp.");
                        }}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              ) : width < 1024 ? (
                <div className="w-full py-[7px]">
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={27}
                    centeredSlides={true}
                  >
                    <SwiperSlide>
                      <CardLomba
                        name="Capture The Flag"
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("CTF");
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CardLomba
                        name="Competitive Programming"
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("CP");
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CardLomba
                        name="UX Competition"
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("UX Competition");
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CardLomba
                        name="Data analytics"
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("Data analytics");
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CardLomba
                        name="Hackaton"
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("Hackaton");
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CardLomba
                        name="E-Sports"
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("E-Sports");
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CardLomba
                        name="Informatics comp."
                        clickStatus={() => {
                          setOpenConfirmation(true);
                          setTitleLomba("Informatics comp.");
                        }}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              ) : (
                <div className="w-full h-[240px] flex justify-center items-start gap-[31px] mt-6">
                  <CardLomba
                    name="Capture The Flag"
                    clickStatus={() => {
                      setOpenConfirmation(true);
                      setTitleLomba("CTF");
                    }}
                  />
                  <CardLomba
                    name="Competitive Programming"
                    clickStatus={() => {
                      setOpenConfirmation(true);
                      setTitleLomba("CP");
                    }}
                  />
                  <CardLomba
                    name="UX Competition"
                    clickStatus={() => {
                      setOpenConfirmation(true);
                      setTitleLomba("UX Competition");
                    }}
                  />
                  <CardLomba
                    name="Data analytics"
                    clickStatus={() => {
                      setOpenConfirmation(true);
                      setTitleLomba("Data analytics");
                    }}
                  />
                  <CardLomba
                    name="Hackaton"
                    clickStatus={() => {
                      setOpenConfirmation(true);
                      setTitleLomba("Hackaton");
                    }}
                  />
                  <CardLomba
                    name="E-Sports"
                    clickStatus={() => {
                      setOpenConfirmation(true);
                      setTitleLomba("E-Sports");
                    }}
                  />
                  <CardLomba
                    name="Informatics comp."
                    clickStatus={() => {
                      setOpenConfirmation(true);
                      setTitleLomba("Informatics comp.");
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </UserDashboardLayout>
      {openConfirmation && (
        <div className="fixed inset-0 w-full flex justify-center items-center bg-black/70 z-50">
          <div className="relative h-auto flex flex-col gap-[25px] lg:gap-11 items-center justify-center w-[330px] sm:w-[370px] lg:w-[570px] bg-text-placeholder-light rounded-lg lg:rounded-xl border-[3px] border-black py-8 px-[10px]">
            <IoCloseCircle
              className="absolute fill-text-placeholder-dark size-6 sm:size-8 lg:size-9 top-2 right-[10.5px] sm:top-[5px] sm:right-[7px] lg:top-[17px] lg:right-[21px]"
              onClick={() => setOpenConfirmation(false)}
            />
            <p className="w-full h-auto font-bold lg:mt-[17.5px] text-text-placeholder-dark font-Montserrat lg:font-CreatoDisplay text-xl lg:text-2xl lg:leading-6 text-center">
              Mendaftar {titleLomba}
            </p>
            <p className="text-sm lg:text-base font-medium text-text-placeholder-dark font-Montserrat text-center text-balance">
              Anda dapat membuat
              <span className="font-bold text-nowrap"> Tim Baru </span>
              atau memasukkan
              <span className="font-bold text-nowrap"> Invitation Code </span>
              milik teman anda untuk bergabung tim
            </p>
            <div className="w-full h-auto flex justify-center items-center flex-col lg:flex-row gap-[10px] sm:gap-3 lg:gap-4">
              <div className="w-[212px]">
                <Link
                  href={
                    isAuthenticated
                      ? "/user/dashboard/lomba/datatim"
                      : "/auth/login"
                  }
                >
                  <Button fullW customClass={"lg:py-1"} text="Buat Tim" />
                </Link>
              </div>
              <div className="w-[212px]">
                <Button
                  fullW
                  onClick={() => {
                    setOpenConfirmation(false);
                    setOpenInvitation(true);
                  }}
                  customClass={"lg:py-1"}
                  text="Gabung Tim"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {openInvitation && (
        <div className="fixed inset-0 w-full flex justify-center items-center bg-black/70 z-50">
          <div className="flex justify-center items-center p-3 lg:p-2 rounded-lg lg:rounded-[15px] border-[3px] lg:border-none border-black bg-text-placeholder-light">
            <div className="relative h-auto flex flex-col gap-[25px] lg:gap-11 items-center justify-center w-[310px] sm:w-[370px] lg:w-[570px] bg-primary-500 rounded-[9px] lg:rounded-xl py-8 lg:py-11 px-4 lg:px-[10px]">
              <IoCloseCircle
                className="absolute fill-text-placeholder-light size-6 sm:size-8 lg:size-9 top-[3px] right-[5px] sm:top-[6px] sm:right-[7px] lg:top-[14px] lg:right-[18px]"
                onClick={() => setOpenInvitation(false)}
              />
              <div className="w-full sm:w-[361px] lg:w-[444px] flex flex-col justify-center items-center gap-[17px] lg:gap-[26px]">
                <p className="font-Montserrat lg:font-CreatoDisplay text-xl lg:text-2xl lg:leading-6 font-bold text-text-placeholder-light text-center">
                  Masukkan Invitation Code
                </p>
                <p className="font-Montserrat text-sm lg:text-base font-medium text-text-placeholder-light text-center">
                  Masukkan Invitation Code Tim yang dibuat oleh teman anda
                </p>
                <input
                  type="text"
                  className="w-[251px] sm:w-[289px] lg:w-[404px] rounded sm:rounded-md lg:rounded-lg py-[10px] px-4 text-center font-Montserrat text-sm font-medium"
                  placeholder="Masukkan di sini"
                  onChange={(e) => setInputCode(e.currentTarget.value)}
                />
              </div>
              <div className="w-[251px] h-10 lg:h-14 sm:w-[289px] lg:w-[404px] flex justify-center items-center">
                <Button
                  fullW
                  text="Cek Tim"
                  customClass={
                    "px-4 lg:px-[23px] lg:py-[3px] rounded-md bg-[#2A93C2] border border-[#F1A56A] lg:border-none"
                  }
                  onClick={searchTeam}
                  //   {
                  //   setOpenInvitation(false);
                  //   setOpenTimDitemukan(true);
                  //   setOpenTimTdkKetemu(true);
                  // }
                  // }
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {discoverTeam && openTimDitemukan && (
        <div className="fixed inset-0 w-full flex justify-center items-center bg-black/70 z-50">
          <div className="h-auto flex flex-col gap-6 lg:gap-11 items-center justify-center w-[330px] sm:w-[330px] lg:w-[570px] bg-text-placeholder-light rounded-lg lg:rounded-xl border-[3px] border-black py-8 px-4 lg:py-[51px]">
            <p className="w-full h-auto font-bold lg:mt-[17.5px] text-text-placeholder-dark font-Montserrat lg:font-CreatoDisplay text-xl lg:text-2xl lg:leading-6 text-center">
              Tim Ditemukan!
            </p>
            <p className="text-sm lg:text-base font-bold text-text-placeholder-dark font-Montserrat text-center text-balance">
              Nama Tim: {discoverTeam.team.teamName} <br />
              Ketua Tim: {discoverTeam.team.teamLeader}
            </p>
            <p className="w-[269px] lg:w-[480px] font-Montserrat text-sm lg:text-base font-medium text-center text-text-placeholder-dark">
              Apabila anda yakin ini adalah tim yang benar, silakan klik Gabung
              Tim
            </p>
            <div className="w-full h-[90px] lg:h-14 flex justify-center items-center flex-col lg:flex-row gap-[10px] sm:gap-3 lg:gap-4">
              <div className="w-[253px] lg:w-[212px]">
                <Button
                  fullW
                  customClass={"lg:py-1"}
                  onClick={() =>
                    joinTeam(
                      discoverTeam.team.eventId,
                      discoverTeam.team._id,
                      discoverTeam.team.teamLeaderId
                    )
                  }
                  text="Gabung tim"
                />
              </div>
              <div className="w-[253px] lg:w-[212px]">
                <Button
                  fullW
                  variant="secondary"
                  onClick={() => setOpenTimDitemukan(false)}
                  customClass={"lg:py-1"}
                  text="Batal"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Anjay udha disolve koor kelas */}
      {discoverTeam !== "" && openTimTdkKetemu && (
        <div className="fixed inset-0 w-full flex justify-center items-center bg-black/70 z-50">
          <div className="flex justify-center items-center p-3 lg:p-2 rounded-lg lg:rounded-[15px] border-[3px] lg:border-none border-black bg-text-placeholder-light">
            <div className="relative h-auto flex flex-col gap-[25px] lg:gap-11 items-center justify-center w-[310px] sm:w-[370px] lg:w-[570px] bg-primary-500 rounded-[9px] lg:rounded-xl py-8 lg:py-11 px-4 lg:px-[10px]">
              <IoCloseCircle
                className="absolute fill-text-placeholder-light size-6 sm:size-8 lg:size-9 top-[3px] right-[5px] sm:top-[6px] sm:right-[7px] lg:top-[14px] lg:right-[18px]"
                onClick={() => setOpenTimTdkKetemu(false)}
              />
              <div className="w-full sm:w-[361px] lg:w-[444px] flex flex-col justify-center items-center gap-[17px] lg:gap-[26px]">
                <p className="font-Montserrat lg:font-CreatoDisplay text-xl lg:text-2xl lg:leading-6 font-bold text-text-placeholder-light text-center">
                  Tim Tidak Ketemu
                </p>
                <p className="font-Montserrat text-sm lg:text-base font-medium text-text-placeholder-light text-center">
                  Pastikan Invitation Code yang anda masukkan sudah benar
                </p>
                <input
                  type="text"
                  className="w-[251px] sm:w-[289px] lg:w-[404px] rounded sm:rounded-md lg:rounded-lg py-[10px] px-4 text-center font-Montserrat text-sm font-medium"
                  placeholder="Masukkan di sini"
                  onChange={(e) => setInputCode(e.currentTarget.value)}
                />
              </div>
              <div className="w-[251px] h-10 lg:h-14 sm:w-[289px] lg:w-[404px] flex justify-center items-center">
                <Button
                  fullW
                  text="Cek Tim"
                  customClass={
                    "px-4 lg:px-[23px] lg:py-[3px] rounded-md bg-[#2A93C2] border border-[#F1A56A] lg:border-none"
                  }
                  onClick={() => {
                    setOpenTimDitemukan(true);
                    setOpenTimTdkKetemu(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
