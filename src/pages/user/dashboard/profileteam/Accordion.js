import { format, isValid, parseISO } from "date-fns";
import React from "react";
import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";

export default function Accordion({
  name,
  email,
  dateOfBirth,
  province,
  address,
  phone,
  id,
  status,
  institutionName,
  institutionNumber,
  institutionFile,
}) {
  // Parsing dateOfBirth menjadi objek Date yang valid
  const parsedDateOfBirth = isValid(parseISO(dateOfBirth))
    ? parseISO(dateOfBirth)
    : null;
  // Format tanggal jika valid, jika tidak, beri string kosong
  const formattedDateOfBirth = parsedDateOfBirth
    ? format(parsedDateOfBirth, "dd MMMM y")
    : "";
  const array = [1, 2, 3, 4, 5];

  const [isExpand, setIsExpand] = useState(0);
  const clickAccordion = () => {
    setIsExpand(!isExpand);
  };
  const unggahOnclick = () => {
    window.open(`${institutionFile}`, "_blank");
  };
  return (
    <div
      className={`bg-shade-white rounded-md my-2 ${
        isExpand ? "border-2 border-black" : ""
      }`}
    >
      <div
        className={`flex items-center justify-between font-bold font-Montserrat p-2 cursor-pointer rounded-md ${
          isExpand ? "border-black" : ""
        }`}
        onClick={() => {
          clickAccordion();
        }}
      >
        <div className="flex items-center space-x-4">
          {array.map((idx) => {
            <div key={idx}>{array[idx]}</div>;
          })}
          <p>{name}</p>
        </div>
        <MdPlayArrow
          className={`text-xl delay-100 ${
            isExpand ? "transition rotate-90" : ""
          } delay-100`}
        />
      </div>
      <div className={`${isExpand ? "" : "hidden"}`}>
        <div className="px-4 pt-3">
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Email</h2>
            <p>{email}</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Tanggal Lahir</h2>
            <p>{formattedDateOfBirth}</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Asal Provinsi</h2>
            <p>{province}</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Alamat Lengkap</h2>
            <p>{address}</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Nomor HP</h2>
            <p>{phone}</p>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">ID Peserta</h2>
            <p>{id}</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Status</h2>
            <p>{status}</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Institusi</h2>
            <p>{institutionName}</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Nomor Institusi</h2>
            <p>{institutionNumber}</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Kartu Institusi</h2>
            <button
              className="w-[100px] border-2 border-background-skyblue rounded-md text-background-skyblue font-bold mt-1"
              onClick={() => {
                unggahOnclick();
              }}
            >
              Lihat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
