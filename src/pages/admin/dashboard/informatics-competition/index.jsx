import React, { useEffect, useState } from "react";
import AdminDashboadrLayout from "../layout";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";
import Accordion from "../../../../components/LandingPage/Dashboard/Accordion";

import { TiChevronRight } from "react-icons/ti";
import { GoSquareFill } from "react-icons/go";
import { differenceInSeconds, format } from "date-fns";

function Card({ name, date, endTime }) {
  const [score, setScore] = useState(null);
  const [benar, setBenar] = useState(null);
  const [salah, setSalah] = useState(null);
  const [isExpand, setIsExpand] = useState(false);
  /*Ini gue komen juga */
  // const [essayQuest, setEssayQuest] = useState([]);
  const [essayAnswer, setEssayAnswer] = useState([]);

  useEffect(() => {
    const getScore = () => {
      axios
        .post(`${process.env.NEXT_PUBLIC_IC_URL}/admin/score`, {
          teamName: name,
        })
        .then((response) => {
          // console.log(response.data);
          setScore(response.data.score);
          setBenar(response.data.benar);
          setSalah(response.data.salah);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getScore();
  }, [name, date, endTime]);

  /* GUE KOMEN DLU */

  useEffect(() => {
    const getEssayAnswer = () => {
      axios
        .post(`${process.env.NEXT_PUBLIC_IC_URL}/admin/essayanswer`, {
          teamName: name,
        })
        .then((response) => {

          const totalData = response.data.essayanswer;
          const ans = response.data.essayanswer.length; // Perbaiki penulisan
          const updatedQuest = [];
          const updatedAnswers = []; // Membuat array baru untuk menampung jawaban yang diperbarui
          setEssayAnswer(totalData)

          // for (let i = 0; i < ans; i++) {
          //   if (response.data.essayanswer[i].type == "essay") {
          //     updatedQuest.push(response.data.essayanswer[i].no);
          //     updatedAnswers.push(response.data.essayanswer[i].answer);
          //   } // Memasukkan jawaban ke dalam array
          // }
          // setEssayQuest(updatedQuest);
          // setEssayAnswer(updatedAnswers); // Memperbarui state dengan semua jawaban
          // console.log(
          //   `${name} Essay Quest ${updatedQuest} and Answer: ${updatedAnswers}`
          // ); // Menampilkan semua jawaban
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getEssayAnswer();
  }, [name]);
  // essayAnswer.map(answer => {
  //   console.log(answer);
  // })
  // console.log(`${name} : jawaban ${essayAnswer}`);
  // Memastikan bahwa nilai date tidak kosong dan merupakan tanggal yang valid
  const parsedDate =
    date !== undefined ? parseInt(date) : new Date("1999-01-01");
  const end = parseInt(endTime);
  const durationInSec = differenceInSeconds(end, parsedDate);
  const durasi = Math.floor(durationInSec / 60);
  // console.log(parsedDate);
  const formattedDate = format(parsedDate, "dd MMMM y p");
  return (
    <div className="flex flex-col gap-y-0">
      <div className="flex justify-between bg-white rounded-lg p-3 w-full my-2 cursor-pointer">
        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="font-bold text-[16px]">{name}</h2>
        </div>
        <div className="flex items-center lg:w-3/4 md:w-2/3 justify-between">
          <div className="hidden md:flex md:flex-col text-center text-[13px]">
            <h2 className="font-bold">skor</h2>
            {score !== null ? <p>{score}</p> : <p>-</p>}
          </div>
          <div className="hidden md:flex md:flex-col text-center text-[13px]">
            <h2 className="font-bold">benar</h2>
            {benar !== null ? <p>{benar}</p> : <p>-</p>}
          </div>
          <div className="hidden md:flex md:flex-col text-center text-[13px]">
            <h2 className="font-bold">salah</h2>
            {salah !== null ? <p>{salah}</p> : <p>-</p>}
          </div>
          <div className="hidden md:flex md:flex-col text-center text-[13px]">
            <h2 className="font-bold">durasi</h2>
            {date != undefined && endTime != undefined ? (
              <p>{durasi} menit</p>
            ) : (
              <p>-</p>
            )}
          </div>
          <div className="hidden md:flex md:flex-col text-center text-[13px]">
            <h2 className="font-bold">mulai</h2>
            {formattedDate ? (
              <p>{formattedDate}</p>
            ) : (
              <p>01 January 1999 00:00 AM</p>
            )}
          </div>
          <div
            className={`cursor-pointer ${isExpand ? "rotate-90" : ""} duration-200`}
            onClick={() => setIsExpand(!isExpand)}
            aria-expanded={isExpand ? "true" : "false"}
          >
            <TiChevronRight />
          </div>
        </div>
      </div>
      {isExpand ? (
        <>
          <div className="flex flex-col bg-white font-Montserrat text-[13px] py-5 md:flex md:justify-between select-text">
            {/* contain email, tanggal lahir, alamat, no.hp*/}

            <div className="md:w-1/2">
              <div className="py-2 cursor-text">
                <h2 className="font-bold ">Kerja Lembur Bagai Quda</h2>
                {essayAnswer && essayAnswer.map(essay => {
                  return (
                    <div key={essay.no}>
                      {essay.type === "essay" && (
                        <h2 className="font-bold">Soal : {essay.no} == jawaban : {essay.answer}</h2>
                      )}
                    </div>
                  );
                })}
                {/* <h2 className="font-bold ">{essayAnswer}</h2> */}
                {/* <p>{email}</p> */}
              </div>
            </div>
            {/* contain status, institusi, no.institusi, kartu institusi */}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

const Index = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [courseMember, setCourseMember] = useState([]);
  const [finished, setFinished] = useState(0);
  const [isNotDoing, setIsNotDoing] = useState(0);
  const [isDoing, setIsDoing] = useState(0);
  const [participants, setParticipants] = useState(0);

  useEffect(() => {
    const getParticipants = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_IC_URL}/admin/participants`
        );
        if (response.data) {
          setCourseMember(response.data.user);
          setParticipants(response.data.user.length);
          setFinished(response.data.finished);
          setIsNotDoing(response.data.isNotDoing);
          setIsDoing(response.data.isDoing);
          // console.log(response.data.user);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getParticipants();
  }, [isAuthenticated]);

  const detailIC = [
    {
      name: "selesai",
      total: finished,
    },
    {
      name: "belum dikerjakan",
      total: isNotDoing,
    },
    {
      name: "sedang dikerjakan",
      total: isDoing,
    },
    {
      name: "terdaftar",
      total: participants,
    },
  ];

  // const handleICTeamDetail = () => {

  // }

  return (
    <AdminDashboadrLayout>
      <div className="bg-primary-500 p-5 rounded-2xl border-2 border-black">
        <div className="flex justify-between">
          {detailIC &&
            detailIC.map((detail) => {
              return (
                <div key={Math.random()} className="my-2 w-1/4">
                  <div className="flex md:flex-col justify-between items-center px-3 py-2 bg-text-placeholder-light text-black rounded-xl m-2">
                    <p className="font-Montserrat text-[14px] md:order-2">
                      {detail.name}
                    </p>
                    <div className="text-[24px] font-GameOfSquid lg:order-1 md:text-[76px]">
                      {detail.total}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="text-black">
          {courseMember &&
            courseMember.map((participant, id) => (
              <div
                key={id}
                // href={`${process.env.NEXT_PUBLIC_FE_URL}/admin/dashboard/${participant._id}`}
              >
                {/* <Link
                  key={id}
                  href={`${process.env.NEXT_PUBLIC_FE_URL}/admin/dashboard/informatics-competition`}
                > */}
                <Card
                  key={participant._id}
                  name={participant?.teamName}
                  date={participant?.startedTime}
                  endTime={participant?.endTime}
                />
                {/* </Link> */}
              </div>
            ))}
        </div>
      </div>
    </AdminDashboadrLayout>
  );
};

export default Index;
