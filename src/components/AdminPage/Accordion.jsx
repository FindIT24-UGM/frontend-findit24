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

  const handleClick = () => {
    if (institutionFile) {
      window.open(`${institutionFile}`, "_blank");
    } else {
      console.error("institutionFile is undefined");
    }
  };

  return (
    <div
      className={`bg-white p-2 rounded-lg my-4 text-black overflow-hidden cursor-default ${
        expand ? "h-fit" : "h-10"
      } duration-200`}
    >
      <div className="flex items-center justify-between text-[17px]">
        <h2 className="font-bold">{name}</h2>
        <div
          className={`cursor-pointer ${expand ? "rotate-90" : ""} duration-200`}
          onClick={() => setExpand(!expand)}
          aria-expanded={expand ? "true" : "false"}
        >
          <TiChevronRight />
        </div>
      </div>
      <div className="font-Montserrat text-[13px] py-5 md:flex md:justify-between cursor-text select-text">
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
                : null}
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
              onClick={handleClick}
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
