import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import Accordion from "../../../../../components/AdminPage/Accordion";
import { useRouter } from "next/router";
import axios from "axios";
import { format } from "date-fns";
import { toast } from "react-toastify";

export default function Detail() {
  const router = useRouter();
  const { teamId } = router.query;
  const [dataTeam, setDataTeam] = useState([]);
  const [date, setDate] = useState(null);
  const [isVerified, setIsverified] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (teamId) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/team/${teamId}`, {
          withCredentials: true,
        })
        .then((res) => {
          setDataTeam(res.data.info);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [teamId]);

  useEffect(() => {
    if (dataTeam?.paymentDate) {
      const formattedDate = format(
        new Date(`${dataTeam?.paymentDate}`),
        "dd MMM y"
      );
      setDate(formattedDate);
    }
  }, [dataTeam]);

  const handleVerified = (isVerified) => {
    if (isVerified) {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/teams/accept-team/${teamId}`,
          { message },
          { withCredentials: true }
        )
        .then((res) => {
          toast.success("berhasil verified team");
        })
        .catch((err) => {
          toast.error("update verified gagal");
        });
    } else if (!isVerified) {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/teams/reject-team/${teamId}`,
          { message },
          { withCredentials: true }
        )
        .then((res) => {
          toast.success("berhasil unverified team");
        })
        .catch((err) => {
          toast.error("update unverified gagal");
        });
    }
  };

  return (
    <div className="bg-background-skyblue min-h-screen lg:flex py-20 px-5 lg:px-12 md:px-8">
      <div className="bg-white rounded-lg border-2 border-black py-10 px-5 lg:flex w-full justify-between">
        <div>
          <button
            onClick={() => {
              router.back();
            }}
          >
            <div className="flex items-center space-x-3 mb-12">
              <IoArrowBack className="text-[20px]" />
              <span className="font-GameOfSquid text-[16px]">
                TEAM INFORMATION
              </span>
            </div>
          </button>
          <div className="pb-8 border border-x-0 border-t-0 border-b-neutral-300 text-black mb-8">
            <h2 className="font-CreatoDisplay font-bold text-[42px]">
              {dataTeam?.teamName}
            </h2>
            <p className="font-Montserrat font-bold text-[16px]">
              {dataTeam?.event}
            </p>
          </div>
          <div className="flex space-x-10 font-Montserrat text-[17px] font-bold pb-8 border border-x-0 border-t-0 border-b-neutral-300 mb-8">
            <div className="flex flex-col space-y-2 text-black">
              <p>Team ID</p>
              <p>Code</p>
              <p>Leader</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-neutral-700">{dataTeam?._id}</p>
              <p className="text-background-skyblue">{dataTeam?.teamCode}</p>
              <p className="text-neutral-700">{dataTeam?.teamLeader}</p>
            </div>
          </div>
          <div className="flex space-x-10 font-Montserrat text-[17px] font-bold pb-8 text-black border border-x-0 border-t-0 border-b-neutral-300 mb-8">
            <div className="flex flex-col space-y-2">
              <p>Tanggal Pembayaran</p>
              <p>Bukti Pembayaran</p>
            </div>
            <div className="flex flex-col space-y-2">
              {/* for date */}
              <p>{date}</p>
              <button
                onClick={() =>
                  window.open(`${dataTeam?.paymentFile}`, "_blank")
                }
                className="text-[13px] text-center px-1 py-[5px] rounded-lg border-2 border-background-skyblue text-background-skyblue"
              >
                Lihat
              </button>
            </div>
          </div>
          <div className="font-bold font-Montserrat text-[17px] text-black space-y-2 pb-8 mb-3">
            <div className="flex space-x-1 items-center">
              <input
                onClick={() => setIsverified(true)}
                type="radio"
                name="verification"
              />
              <label htmlFor="verification">Verifikasi</label>
            </div>
            <div className="flex space-x-1 items-center">
              <input
                onClick={() => setIsverified(false)}
                type="radio"
                name="verification"
              />
              <label htmlFor="verification">Tolak Verifikasi</label>
            </div>
          </div>
          <div>
            <textarea
              rows="8"
              className="p-2 w-full font-light border-2 border-black"
              onChange={(e) => {
                setMessage(e.currentTarget.value);
              }}
            ></textarea>
          </div>
          <button
            onClick={() => handleVerified(isVerified)}
            className="font-GameOfSquid font-bold text-[16px] flex items-center py-2 justify-center w-full rounded bg-primary-300 space-x-2"
          >
            <IoIosSave />
            <span>SIMPAN</span>
          </button>
        </div>
        <div className="px-5 py-10 bg-primary-500 rounded-lg mt-14 lg:mt-0 lg:w-2/3">
          <h2 className="font-bold font-CreatoDisplay text-[34px] text-white">
            Anggota
          </h2>
          <div className="flex flex-col">
            {/* bikin parameter datanya nanti aja */}
            {dataTeam?.teamMember?.map((member, id) => (
              <button key={id}>
                <Accordion
                  name={member.userId.name}
                  email={member.userId.email}
                  dateOfBirth={member.userId.dateOfBirth}
                  address={member.userId.address}
                  phone={member.userId.phone}
                  status={member.userId.status}
                  institutionName={member.userId.institutionName}
                  institutionNumber={member.userId.institutionNumber}
                  institutionFile={member.userId.institutionFile}
                  key={member.userId.institutionNumber}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
