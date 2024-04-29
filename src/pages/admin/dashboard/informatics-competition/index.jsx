import React, { useEffect, useState } from "react";
import AdminDashboadrLayout from "../layout";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";
import Accordion from "../../../../components/LandingPage/Dashboard/Accordion";

import { TiChevronRight } from "react-icons/ti";
import { GoSquareFill } from "react-icons/go";
import { differenceInMinutes, format } from "date-fns";

function Card({ name, date, endTime }) {
  const [score, setScore] = useState(0)
  const [benar, setBenar] = useState(0)
  const [salah, setSalah] = useState(0)

  useEffect(() => {
    const getScore = () => {
      axios.post(`${process.env.NEXT_PUBLIC_IC_URL}/admin/score`, 
    {username: name})
      .then(response => {
        // console.log(response.data);
        setScore(response.data.score)
        setBenar(response.data.benar)
        setSalah(response.data.salah)
      })
      .catch(err => {
        console.log(err);
      })
    }
    getScore()
  }, [name, date, endTime])

  // Memastikan bahwa nilai date tidak kosong dan merupakan tanggal yang valid
  const parsedDate = date !== undefined ? new Date(parseInt(date)) : new Date("1999-01-01");
  const end = new Date(parseInt(endTime))
  const durationMinutes = differenceInMinutes(end, parsedDate);
  const durasi = Math.floor(durationMinutes / 60)

  const formattedDate = format(parsedDate, "dd MMMM y p")
  return (
    <div className="flex justify-between bg-white rounded-lg p-3 w-full my-2 cursor-pointer">
      <div className="flex flex-col justify-center md:w-1/2">
        <h2 className="font-bold text-[16px]">{name}</h2>
        <p className="text-[13px]">dummy</p>
      </div>
      <div className="flex items-center lg:w-3/4 md:w-2/3 justify-between">
        <div className="hidden md:flex md:flex-col text-center text-[13px]">
          <h2 className="font-bold">skor</h2>
          {score ? (<p>{score}</p>) : (<p>-</p>)}
        </div>
        <div className="hidden md:flex md:flex-col text-center text-[13px]">
          <h2 className="font-bold">benar</h2>
          {benar ? (<p>{benar}</p>) : (<p>-</p>)}
        </div>
        <div className="hidden md:flex md:flex-col text-center text-[13px]">
          <h2 className="font-bold">salah</h2>
          {salah ? (<p>{salah}</p>) : (<p>-</p>)}
        </div>
        <div className="hidden md:flex md:flex-col text-center text-[13px]">
          <h2 className="font-bold">durasi</h2>
          {durasi ? (<p>{durasi} jam</p>) : (<p>-</p>)}
        </div>
        <div className="hidden md:flex md:flex-col text-center text-[13px]">
          <h2 className="font-bold">mulai</h2>
          {formattedDate ? (<p>{formattedDate}</p>) : (<p>01 January 1999 00:00 AM</p>)}
        </div>
        <TiChevronRight />
      </div>
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
          `${process.env.NEXT_PUBLIC_IC_URL}/admin/participants`,
        );
        if (response.data) {
          setCourseMember(response.data.user);
          setParticipants(response.data.user.length);
          setFinished(response.data.finished)
          setIsNotDoing(response.data.isNotDoing)
          setIsDoing(response.data.isDoing)
          console.log(response.data.user);
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
        total: finished
    },
    { 
        name: "belum dikerjakan",
        total: isNotDoing
    },
    { 
        name: "sedang dikerjakan",
        total: isDoing
    },
    { 
        name: "terdaftar",
        total: participants
    }
  ]

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
                <Link
                  key={id}
                  href={`${process.env.NEXT_PUBLIC_FE_URL}/admin/dashboard/informatics-competition`}
                >
                  <Card
                    key={participant._id}
                    name={participant?.username}
                    date={participant?.startedTime}
                    endTime={participant?.endTime}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </AdminDashboadrLayout>
  );
};

export default Index;
