"use client";
import React, { useEffect, useState } from "react";
import TeamProfileLayout from "./layout";

import { FaArrowLeft } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { BsChatSquareTextFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosCopy } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { HiCheckCircle } from "react-icons/hi";
import { BsQuestionOctagonFill } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi";

import Comment from "./Comment";
import Status from "./Status";
import Accordion from "../../../../components/LandingPage/Dashboard/Accordion";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { format } from "date-fns";
import { toast } from "react-toastify";

export default function Index() {
  const router = useRouter();
  const { teamId } = router.query;
  const [dataTeam, setDataTeam] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [date, setDate] = useState(null);
  const [twibMessage, setTwibMessage] = useState("");
  const [abstractMessage, setAbstractMessage] = useState("");
  const [payMessage, setPayMessage] = useState("");

  useEffect(() => {
    if (teamId) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/team/${teamId}`, {
          withCredentials: true,
        })
        .then((res) => {
          setDataTeam(res.data.info);
          axios
            .get(
              `${process.env.NEXT_PUBLIC_API_URL}/team/get-announcements/${teamId}`,
              {
                withCredentials: true,
              }
            )
            .then((announ) => {
              setAnnouncements(announ.data.announcements);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [teamId]);

  useEffect(() => {
    if (dataTeam.paymentDate) {
      const formattedDate = format(
        new Date(`${dataTeam.paymentDate}`),
        "dd MMMM y"
      );
      setDate(formattedDate);
    }
  }, [dataTeam.paymentDate]);

  /*---------handle upload twibbon (pdf) ss twibbon smua anggota jadiin satu pdf------- */

  const handleUploadTwibbon = (e) => {
    const formTwibbon = new FormData();
    const file = e.target.files[0];

    formTwibbon.append("twibbonTeam", file);

    const regex = /\.(pdf)$/i;

    if (formTwibbon) {
      setTwibMessage(
        "Proses ini membutuhkan beberapa waktu, mohon tunggu sampai file berhasil terupload!"
      );
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/team/upload-twibbon/${teamId}`,
          formTwibbon,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setTwibMessage("Twibbon telah berhasil diupload!");
          toast.success("berhasil upload twibbon");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  /*----------END--------------- */

  /*------handle upload payment (png/jpg/jpeg)------ */
  const handleUploadPaymentFile = (e) => {
    const formPayment = new FormData();
    const file = e.target.files[0];

    formPayment.append("paymentFile", file);

    const regex = /\.(jpg|jpeg|png)$/i;

    if (formPayment) {
      setPayMessage(
        "Proses ini membutuhkan beberapa waktu, mohon tunggu sampai file berhasil terupload!"
      );
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/team/verification/${teamId}`,
          formPayment,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setPayMessage("Bukti Pembayaran telah berhasil diupload!");
          toast.success("berhasil upload bukti pembayaran");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  /*----------END------------ */

  /*------handle upload abstract (pdf)------ */
  const handleUploadAbstract = (e) => {
    const formAbstract = new FormData();
    const file = e.target.files[0];

    formAbstract.append("abstractFile", file);

    const regex = /\.(pdf)$/i;

    if (formAbstract) {
      setAbstractMessage(
        "Proses ini membutuhkan beberapa waktu, mohon tunggu sampai file berhasil terupload!"
      );
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/team/upload-abstract/${teamId}`,
          formAbstract,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setAbstractMessage("Abstrak telah berhasil diupload!");
          toast.success("berhasil upload abstrak");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  /*----------END------------ */

  const copyOnclick = () => {};
  const editOnclick = () => {};

  const calculateTimeLeft = () => {
    const deadline = new Date("2024-03-23");
    const difference = +deadline - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearTimeout(timer);
  });

  console.log(dataTeam?.verified);

  return (
    <TeamProfileLayout>
      {/* header */}
      <div className="flex items-center space-x-5 text-white text-xl lg:hidden">
        <FaArrowLeft />
        <button
          onClick={() => {
            router.push(`/user/dashboard/lomba`);
          }}
        >
          <h2 className="font-GameOfSquid bg-black font-bold">
            DASHBOARD LOMBA
          </h2>
        </button>
      </div>
      <button
        className="absolute left-12 w-1/6 max-h-[10vh] flex items-center gap-4 mt-6"
        onClick={() => {
          router.push(`/user/dashboard/lomba`);
        }}
      >
        <HiArrowLeft size={20} color="white" />
        <p className="font-GameOfSquid text-text-placeholder-light">Kembali</p>
      </button>
      <div className="space-y-5 text-black md:space-y-0 md:flex md:flex-row md:justify-between md:gap-x-5 lg:flex-col lg:gap-y-5 lg:order-2">
        {/* deadline verif box */}
        <div className="bg-text-placeholder-light px-5 py-5 rounded-2xl border-4 border-black md:order-2 lg:order-1 md:w-[40%] lg:w-full">
          <div className="flex items-center space-x-2">
            <IoTime />
            <h2 className="font-Montserrat font-bold">Deadline Verifikasi</h2>
          </div>
          <div className="flex justify-between my-5 md:flex md:flex-col lg:flex-row">
            <div className="bg-gradient-to-b from-orange-400 to-red-400 rounded p-2 w-1/3 mx-2 md:mx-[2px] text-white space-y-2 md:w-full md:flex md:items-center md:justify-between md:my-1 lg:w-1/3">
              <h2 className="font-GameOfSquid text-[16px] md:text-[26px]">
                {timeLeft.days}
              </h2>
              <p className="font-Montserrat font-bold text-[10px] md:text-[16px]">
                Hari
              </p>
            </div>
            <div className="bg-gradient-to-b from-orange-400 to-red-400 rounded p-2 w-1/3 mx-2 md:mx-[2px] text-white space-y-2 md:w-full md:flex md:items-center md:justify-between md:my-1 lg:w-1/3">
              <h2 className="font-GameOfSquid text-[16px] md:text-[26px]">
                {timeLeft.hours}
              </h2>
              <p className="font-Montserrat font-bold text-[10px] md:text-[16px]">
                Jam
              </p>
            </div>
            <div className="bg-gradient-to-b from-orange-400 to-red-400 rounded p-2 w-1/3 mx-2 md:mx-[2px] text-white space-y-2 md:w-full md:flex md:items-center md:justify-between md:my-1 lg:w-1/3">
              <h2 className="font-GameOfSquid text-[16px] md:text-[26px]">
                {timeLeft.minutes}
              </h2>
              <p className="font-Montserrat font-bold text-[10px] md:text-[16px]">
                Menit
              </p>
            </div>
          </div>
        </div>
        {/* komentar admn box */}
        <div className="bg-text-placeholder-light px-5 py-5 rounded-2xl border-4 border-black space-y-4 md:order-1 lg:order-2 md:w-[60%] lg:w-full lg:h-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BsChatSquareTextFill />
              <h2 className="font-Montserrat font-bold">Komentar Admin</h2>
            </div>
            {/* <div className="w-fit text-[#E1820A] bg-[#E8C81B] p-1 rounded-md font-Montserrat font-bold">
              1 BARU
            </div> */}
          </div>
          <div className="max-h-72 md:max-h-56 lg:max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-white">
            <Comment
              key={dataTeam._id}
              title={dataTeam.title}
              toTeam={dataTeam.teamName}
              content={dataTeam.rejectionMessage}
            />
            {/* {announcements &&
              announcements.map((announcement) => (
              ))} */}
          </div>
        </div>
      </div>

      {/* team info box */}
      <div className="bg-text-placeholder-light text-black px-5 py-5 rounded-2xl border-4 border-black space-y-8 md:flex md:gap-x-5 lg:order-1 lg:row-span-2 lg:col-span-2">
        <div className="space-y-4 text-left md:w-1/2 text-black">
          <div className="flex items-center space-x-2">
            <BsPeopleFill />
            <h2 className="font-Montserrat font-bold">Team information</h2>
          </div>
          <div className="border-b-[1px] pb-5 border-slate-600">
            <div className="flex items-center justify-between">
              <h2 className="flex flex-col">
                <p className=" font-CreatoDisplay font-bold text-[24px]">
                  {dataTeam?.teamName}
                </p>
                <p className="font-CreatoDisplay font-medium text-[16px]">
                  {dataTeam?.event}
                </p>
              </h2>
              <Status isVerified={dataTeam?.verified} />
            </div>
            <p className="font-Montserrat font-bold text-[13.89px]">
              {dataTeam?.eventId?.eventName}
            </p>
          </div>
          <div className="space-y-4 border-b-[1px] pb-5 border-slate-600">
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Team ID</h2>
              <p className="h-full overflow-auto">{dataTeam?._id}</p>
            </div>
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Code</h2>
              <p className="h-full font-bold text-background-skyblue">
                {dataTeam?.teamCode}
              </p>
            </div>
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Leader</h2>
              <p className="h-full">{dataTeam?.teamLeader}</p>
            </div>
            <div className="font-Montserrat flex items-center">
              <div className="font-bold w-[200px]">
                <p>Invitation</p>
                <p>Code</p>
              </div>
              <div className="h-full flex items-center space-x-2 text-black">
                <p>{dataTeam?.teamCode}</p>
                <IoIosCopy
                  className="cursor-pointer"
                  onClick={() => copyOnclick()}
                />
              </div>
            </div>
          </div>
          <div className="space-y-3 border-b-[1px] pb-5 border-slate-600">
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Status</h2>
              <p className="h-full text-left text-black">
                {dataTeam?.teamLeaderStatus}
              </p>
            </div>
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Asal Instansi</h2>
              <p className="h-full text-left">{dataTeam?.teamInstitution}</p>
            </div>
          </div>
          <div className="space-y-4 border-b-[1px] pb-5 border-slate-600">
            {dataTeam?.eventId ===
              process.env.NEXT_PUBLIC_COMPETITION_ID_HACKATHON ||
            dataTeam?.eventId ===
              process.env.NEXT_PUBLIC_COMPETITION_ID_UXCOMPE ? (
              <div className="font-Montserrat flex items-center">
                {abstractMessage === "Twibbon telah berhasil diupload!" ? (
                  <p className="font-Montserrat font-bold text-green-600 text-sm">
                    {abstractMessage}
                  </p>
                ) : (
                  <p className="font-Montserrat font-bold text-red-900 text-sm">
                    {abstractMessage}
                  </p>
                )}
                <div className="w-[200px]">
                  <p>Informasi</p>
                  <p>Proposal</p>
                </div>
                {dataTeam?.abstractFile === undefined ? (
                  <label className="flex items-center hover:cursor-pointer w-[160px] justify-center border-4 border-background-skyblue rounded-md text-background-skyblue font-bold space-x-1">
                    <input
                      className="hidden"
                      type="file"
                      id="abstractFile"
                      name="abstractFile"
                      accept="application/*"
                      onChange={handleUploadAbstract}
                    />
                    <p>Unggah</p>
                  </label>
                ) : (
                  <button
                    onClick={() => router.push(`${dataTeam?.abstractFile}`)}
                    className="flex items-center w-[160px] justify-center border-4 border-background-skyblue rounded-md text-background-skyblue font-bold space-x-1"
                  >
                    <p>Lihat</p>
                  </button>
                )}
              </div>
            ) : (
              <div></div>
            )}
            {dataTeam?.eventId ===
              process.env.NEXT_PUBLIC_COMPETITION_ID_HACKATHON ||
            dataTeam?.eventId ===
              process.env.NEXT_PUBLIC_COMPETITION_ID_UXCOMPE ? (
              <></>
            ) : (
              <>
                <div className="font-Montserrat flex items-center">
                  <h2 className="font-bold w-[200px]">Tanggal Pembayaran</h2>
                  {date ? <p>{date}</p> : <p>-</p>}
                </div>
                <div className="font-Montserrat flex items-center">
                  <h2 className="font-bold w-[200px]">Nama Pengirim</h2>
                  <p>{dataTeam?.paymentSender}</p>
                </div>
                <div className="font-Montserrat flex items-center">
                  <h2 className="font-bold w-[200px]">No. Rek</h2>
                  <p>{dataTeam?.bankAccountId}</p>
                </div>
                <div className="font-Montserrat flex items-center">
                  <h2 className="font-bold w-[200px]">Bank</h2>
                  <p>{dataTeam?.bankName}</p>
                </div>

                {payMessage === "Twibbon telah berhasil diupload!" ? (
                  <p className="font-Montserrat font-bold text-green-600 text-sm">
                    {payMessage}
                  </p>
                ) : (
                  <p className="font-Montserrat font-bold text-red-900 text-sm">
                    {payMessage}
                  </p>
                )}
                <div className="font-Montserrat flex items-center">
                  <div className="w-[200px]">
                    <p className="font-bold">Bukti Pembayaran</p>
                  </div>
                  {dataTeam?.paymentFile === "" ? (
                    <label className="w-[160px] flex justify-center hover:cursor-pointer border-4 border-background-skyblue rounded-md text-background-skyblue font-bold space-x-1">
                      <input
                        className="hidden"
                        type="file"
                        id="paymentFile"
                        name="paymentFile"
                        accept="image/*"
                        onChange={handleUploadPaymentFile}
                      />
                      <p>Unggah</p>
                    </label>
                  ) : (
                    <button
                      onClick={() => router.push(`${dataTeam?.paymentFile}`)}
                      className="w-[160px] hover:cursor-pointer border-4 border-background-skyblue rounded-md text-background-skyblue font-bold space-x-1"
                    >
                      <p>Lihat</p>
                    </button>
                  )}
                </div>

                <div className="flex flex-col text-black font-Montserrat">
                  <p className="text-[16px] text-black font-Montserrat">
                    Silahkan transfer ke rekening di bawah ini:
                  </p>
                  <p className="text-[12px]">
                    1212134197 (BNI ) a.n. Nadia Khairunnisa Agma
                  </p>
                  <p className="text-[12px]">
                    3200925130 (BCA ) a.n. Lisa Olivia Putri Maharani
                  </p>
                </div>
              </>
            )}
            <a
              className="flex flex-col text-blue-400 underline font-Montserrat text-[16px]"
              href="https://bit.ly/TwibbonFindIT2024"
            >
              Klik disini untuk link twibbon
            </a>
            <div className="font-Montserrat flex items-center">
              {twibMessage === "Twibbon telah berhasil diupload!" ? (
                <p className="font-Montserrat font-bold text-green-600 text-sm">
                  {twibMessage}
                </p>
              ) : (
                <p className="font-Montserrat font-bold text-red-900 text-sm">
                  {twibMessage}
                </p>
              )}
              <div className="w-[200px]">
                <p className="font-bold">Bukti Twibbon</p>
              </div>
              {dataTeam?.twibbonTeam === undefined ? (
                <label className="w-[160px] flex justify-center border-4 hover:cursor-pointer border-background-skyblue rounded-md text-background-skyblue font-bold space-x-1">
                  <input
                    className="hidden"
                    type="file"
                    id="twibbonTeam"
                    name="twibbonTeam"
                    accept="application/*"
                    onChange={handleUploadTwibbon}
                  />
                  <p>Upload</p>
                </label>
              ) : (
                <button
                  onClick={() => router.push(`${dataTeam?.twibbonTeam}`)}
                  className="w-[160px] border-4 hover:cursor-pointer border-background-skyblue rounded-md text-background-skyblue font-bold space-x-1"
                >
                  <p>Lihat</p>
                </button>
              )}
            </div>
          </div>
          {dataTeam?.paymentDate === undefined &&
          dataTeam?.teamPayment === undefined &&
          dataTeam?.paymentSender === undefined &&
          dataTeam?.bankAccountId === undefined &&
          dataTeam?.bankName === undefined &&
          dataTeam?.paymentFile === undefined &&
          dataTeam?.twibbonTeam === undefined ? (
            <button
              onClick={() =>
                router.replace(`/user/dashboard/profileteam/editteam/${teamId}`)
              }
              className="w-full py-3 rounded-sm flex items-center justify-center space-x-3 font-GameOfSquid bg-primary-300"
            >
              <HiCheckCircle />
              <p className="text-[16px] font-bold">Lengkapi Pembayaran</p>
            </button>
          ) : (
            <>
              <button
                onClick={() =>
                  router.replace(
                    `/user/dashboard/profileteam/editteam/${teamId}`
                  )
                }
                className="w-full py-3 rounded-sm flex items-center justify-center space-x-3 font-GameOfSquid bg-primary-300"
              >
                <HiCheckCircle />
                <p className="text-[16px] font-bold">Edit Profil Tim</p>
              </button>
              <p className="font-Montserrat text-[8px] lg:text-[12px] text-center">
                Admin sedang memverifikasi. Silahkan menunggu!
              </p>
            </>
          )}
        </div>
        <div className="px-3 py-5 bg-primary-500 rounded-md md:w-1/2">
          <h2 className="text-2xl font-Montserrat text-white font-bold">
            Anggota
          </h2>
          {dataTeam?.teamMember &&
            dataTeam?.teamMember.map((member, id) => (
              <div
                key={id}
                className="mt-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-primary-500 scroll-m-2 max-h-[720px]"
              >
                {/* name, email, dateOfBirth, province, address, phone, id, status, institutionName, institutionNumber, institutionFile */}
                <Accordion
                  name={member.userId.name}
                  email={member.userId.email}
                  dateOfBirth={member.userId.dateOfBirth}
                  province={member.userId.province}
                  address={member.userId.address}
                  phone={member.userId.phone}
                  id={member.userId._id}
                  status={member.userId.status}
                  institutionName={member.userId.institutionName}
                  institutionNumber={member.userId.institutionNumber}
                  institutionFile={member.userId.institutionFile}
                  key={member}
                />
                {/* <Accordion />
              <Accordion />
              <Accordion /> */}
              </div>
            ))}
        </div>
      </div>

      {/* pertanyaan box */}
      <div className="lg:order-3">
        <div className="bg-primary-500 px-5 py-5 text-white rounded-2xl border-4 border-black space-y-5">
          <div className="font-bold flex items-center space-x-2 font-Montserrat">
            <BsQuestionOctagonFill />
            <h2>Butuh Bantuan?</h2>
          </div>
          <div className="font-Montserrat">
            Apabila anda memiliki <span className="font-bold">pertanyaan</span>{" "}
            atau membutuhkan bantuan{" "}
            <span className="font-bold">dalam proses verifikasi</span>, silakan
            mengubungi Contact Person Lomba
          </div>
          <button className="text-center text-[16px] text-black font-bold py-2 bg-background-skyblue w-full font-GameOfSquid rounded-md">
            Hubungi kami
          </button>
        </div>
      </div>
    </TeamProfileLayout>
  );
}
