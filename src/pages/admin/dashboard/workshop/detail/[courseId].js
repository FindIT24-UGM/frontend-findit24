import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import Accordion from "../../../../../components/AdminPage/Accordion";
import { useRouter } from "next/router";
import axios from "axios";
import { format } from "date-fns";
import { toast } from "react-toastify";

export default function DetailWorkshop() {
  const router = useRouter();
  const { courseId } = router.query;
  const [dataUserCourse, setdataUserCourse] = useState([]);
  const [date, setDate] = useState(null);
  const [isVerified, setIsverified] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (courseId) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/course/get/${courseId}`, {
          withCredentials: true,
        })
        .then((res) => {
          setdataUserCourse(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [courseId]);

  useEffect(() => {
    if (dataUserCourse?.paymentDate) {
      const formattedDate = format(
        new Date(`${dataUserCourse?.paymentDate}`),
        "dd MMM y"
      );
      setDate(formattedDate);
    }
  }, [dataUserCourse]);

  const handleVerified = (isVerified) => {
    if (isVerified) {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/course/accept-course/${courseId}`,
          { message },
          { withCredentials: true }
        )
        .then((res) => {
          toast.success("berhasil verified course participant");
        })
        .catch((err) => {
          toast.error("update verified gagal");
        });
    } else if (!isVerified) {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/course/reject-course/${courseId}`,
          { message },
          { withCredentials: true }
        )
        .then((res) => {
          toast.success("berhasil unverified course participant");
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
            <div className="flex text-black items-center space-x-3 mb-12">
              <IoArrowBack className="text-[20px]" />
              <span className="font-GameOfSquid text-[16px]">
                COURSE MEMBER INFORMATION
              </span>
            </div>
          </button>
          <div className="pb-8 border border-x-0 border-t-0 border-b-neutral-300 text-black mb-8">
            <h2 className="font-CreatoDisplay font-bold text-[42px]">
              {dataUserCourse?.name}
            </h2>
            <p className="font-Montserrat font-bold text-[16px]">
              {dataUserCourse?.email}
            </p>
          </div>
          <div className="flex space-x-10 font-Montserrat text-[17px] font-bold pb-8 border border-x-0 border-t-0 border-b-neutral-300 mb-8">
            <div className="flex flex-col space-y-2 text-black">
              <p>Tanggal Pembayaran</p>
              <p>Nama Pengirim</p>
              <p>No. Rek</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-neutral-700">{date}</p>
              <p className="text-background-skyblue">{dataUserCourse?.paymentSender}</p>
              <p className="text-neutral-700">{dataUserCourse?.bankAccountId}</p>
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
                  window.open(`${dataUserCourse?.paymentFile}`, "_blank")
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
              className="p-2 w-full font-light border-2 border-black font-Montserrat rounded-md"
              onChange={(e) => {
                setMessage(e.currentTarget.value);
              }}
              placeholder="Write here..."
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
            Data Peserta
          </h2>
          <div className="flex flex-col">
            <Accordion 
              name={dataUserCourse?.userId?.name}
              email={dataUserCourse?.userId?.email}
              dateOfBirth={dataUserCourse?.userId?.dateOfBirth}
              address={dataUserCourse?.userId?.address}
              phone={dataUserCourse?.userId?.phone}
              status={dataUserCourse?.userId?.status}
              institutionName={dataUserCourse?.userId?.institutionName}
              institutionNumber={dataUserCourse?.userId?.institutionNumber}
              institutionFile={dataUserCourse?.userId?.institutionFile}
              key={dataUserCourse?.userId?.institutionNumber}            />
          </div>
        </div>
      </div>
    </div>
  );
}
