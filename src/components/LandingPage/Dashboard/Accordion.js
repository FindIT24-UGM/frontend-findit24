import { format, isValid, parseISO } from "date-fns";
import React from "react";
import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/router";
import axios from "axios";

import ModalParent from "../../../components/modal/modalparent";
import ModalVerification from "../../../components/modal/modalverif";

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
  idLeader,
  idTeam,
  idMember,
  isLeader,
}) {
  const parsedDateOfBirth = isValid(parseISO(dateOfBirth))
    ? parseISO(dateOfBirth)
    : null;
  const formattedDateOfBirth = parsedDateOfBirth
    ? format(parsedDateOfBirth, "dd MMMM y")
    : "";
  const array = [1, 2, 3, 4, 5];
  const router = useRouter();

  const [isExpand, setIsExpand] = useState(0);
  const [showModalVerification, setShowModalVerification] = useState(0);

  const modalVerifHandler = () => {
    setShowModalVerification(1);
  };

  const clickAccordion = () => {
    setIsExpand(!isExpand);
  };
  const unggahOnclick = () => {
    window.open(`${institutionFile}`, "_blank");
  };

  /*------handle kick member------ */
  const handleKickMember = () => {
    if (idMember !== undefined) {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API_URL}/team/kick-member/`,
          { teamId: idTeam, memberId: idMember },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          // router.reload();
          router.reload();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  /*----------END------------ */

  // console.log(`idMember: ${idMember}`);
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
          {array.map((value, idx) => {
            <div key={idx}>{value}</div>;
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

          {id !== idLeader && isLeader ? (
            <button
              className="relative bottom-0 left-44 md:left-56 lg:left-80"
              onClick={modalVerifHandler}
            >
              <FaTrash className=" w-[15px] z-100" />
            </button>
          ) : (
            <></>
          )}
          <ModalParent
            isVisible={showModalVerification}
            onClose={() => {
              setShowModalVerification(0);
            }}
          >
            <ModalVerification
              isVisible={showModalVerification}
              onClose={() => {
                setShowModalVerification(0);
              }}
              submit={handleKickMember}
              quest="Yakin ingin menghapus member ini?"
              declare="Anda tidak dapat memulihkan kembali jika sudah terhapus"
              confirm="Kick"
              cancel="Batal"
            />
          </ModalParent>
        </div>
      </div>
    </div>
  );
}
