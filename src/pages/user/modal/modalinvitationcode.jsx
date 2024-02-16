import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const ModalInvitationCode = () => {
  return (
    <div>
      <div className="bg-primary-500 pb-5 pt-2 px-2">
        <div className="flex justify-end">
          <IoCloseCircleSharp className="text-2xl cursor-pointer text-white" />
        </div>
        <div className="px-8 text-white">
          <h2 className="font-CreatoDisplay font-bold text-center text-[24px] mt-2 mb-10">
            Masukan Invitation Code
          </h2>
          <p className="text-center font-Montserrat mb-5">
            Masukan Invitation Code Tim yang dibuat oleh teman anda
          </p>
          <div className="space-y-5">
            <input className="px-5 py-3 w-full font-light text-center text-[14px] rounded-md bg-white font-Montserrat text-shade-black" placeholder="Masukan Disini" />
            <button className="px-5 py-3 w-full font-bold text-[14px] rounded-md bg-background-circuitblue font-GameOfSquid text-black">
              Gabung Tim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInvitationCode;
