import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import Accordion from "../Accordion";
import { useRouter } from "next/router";
import axios from "axios";

const detail = () => {
  const router = useRouter();
  const { teamId } = router.query;
  const [dataTeam, setDataTeam] = useState([]);

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
  console.log(dataTeam);
  return (
    <div className="bg-background-skyblue min-h-screen lg:flex py-20 px-5 lg:px-12 md:px-8">
      <div className="bg-white rounded-lg border-2 border-black py-10 px-5 lg:flex w-full justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-12">
            <IoArrowBack className="text-[20px]" />
            <span className="font-GameOfSquid text-[16px]">
              TEAM INFORMATION
            </span>
          </div>
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
              <p>{dataTeam?.paymentDate}</p>
              <button className="text-[13px] text-center px-1 py-[5px] rounded-lg border-2 border-background-skyblue text-background-skyblue">
                Lihat
              </button>
            </div>
          </div>
          <div className="font-bold font-Montserrat text-[17px] text-black space-y-2 pb-8 mb-3">
            <div className="flex space-x-1 items-center">
              <input type="radio" name="verified" />
              <label for="verified">Verifikasi</label>
            </div>
            <div className="flex space-x-1 items-center">
              <input type="radio" name="verified" />
              <label for="verified">Tolak Verifikasi</label>
            </div>
          </div>
          <div>
            <textarea
              rows="8"
              className="p-2 w-full font-light border-2d"
            ></textarea>
          </div>
          <button className="font-GameOfSquid font-bold text-[16px] flex items-center py-2 justify-center w-full rounded bg-primary-300 space-x-2">
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
            {dataTeam?.teamMember?.map((member) => (
              <button>
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
};

export default detail;
