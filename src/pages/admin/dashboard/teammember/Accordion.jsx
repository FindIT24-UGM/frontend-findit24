import { format } from "date-fns";
import React, { useState } from "react";
import { TiChevronRight } from "react-icons/ti";

export default function Accordion({
  name,
  email,
  dateOfBirth,
  address,
  phone,
  status,
  institutionName,
  institutionNumber,
  institutionFile,
}) {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={`bg-white p-2 rounded-lg my-4 text-black overflow-hidden ${
        expand ? "h-fit" : "h-10"
      } duration-200`}
    >
      <div
        className="flex items-center justify-between text-[17px] cursor-pointer"
        onClick={() => setExpand(!expand)}
      >
        <h2 className="font-bold">{name}</h2>
        <div className={`${expand ? "rotate-90" : ""} duration-200`}>
          <TiChevronRight />
        </div>
      </div>
      <div className="font-Montserrat text-[13px] py-5 md:flex md:justify-between">
        {/* contain email, tanggal lahir, alamat, no.hp*/}
        <div className="md:w-1/2">
          <div className="py-2">
            <h2 className="font-bold">Email</h2>
            <p>{email}</p>
          </div>
          <div className="py-2">
            <h2 className="font-bold">Tanggal Lahir</h2>
            <p>
              {dateOfBirth
                ? format(new Date(dateOfBirth), "dd MMMM yyyy")
                : "-"}
            </p>
          </div>
          <div className="py-2">
            <h2 className="font-bold">Alamat</h2>
            <p>{address}</p>
          </div>
          <div className="py-2">
            <h2 className="font-bold">Nomor HP</h2>
            <p>{phone}</p>
          </div>
        </div>
        {/* contain status, institusi, no.institusi, kartu institusi */}
        <div className="md:w-1/2">
          <div className="py-2">
            <h2 className="font-bold">Status</h2>
            <p>{status}</p>
          </div>
          <div className="py-2">
            <h2 className="font-bold">Institusi</h2>
            <p>{institutionName}</p>
          </div>
          <div className="py-2">
            <h2 className="font-bold">Nomor Institusi</h2>
            <p>{institutionNumber}</p>
          </div>
          <div className="py-2">
            <h2 className="font-bold">Kartu Institusi</h2>
            <button
              onClick={() => window.open(`${institutionFile}`, "_blank")}
              className="text-[13px] text-center px-5 py-[2px] rounded-lg border-2 border-background-skyblue text-background-skyblue"
            >
              Lihat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
