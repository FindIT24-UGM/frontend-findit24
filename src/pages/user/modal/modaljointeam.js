import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const ModalJoinTeam = ({content, onClose}) => {
  return (
    <div>
      <div className="flex justify-end">
        <IoCloseCircleSharp className="text-2xl cursor-pointer" onClick={onClose} />
      </div>
      <h2 className="font-CreatoDisplay font-bold text-center text-[24px] mt-2 mb-10">
        {content}
      </h2>
      <p className="text-center">
        Anda dapat membuat <span className="font-bold">Tim Baru</span> atau memasukkan <span className="font-bold">Invitation Code</span> milik teman
        anda untuk bergabung tim
      </p>
      <div className="font-GameOfSquid lg:flex lg:justify-evenly mt-8 mb-3 lg:px-5 lg:space-x-5 lg:space-y-0 md:px-16 md:space-y-7 px-10 space-y-5">
        <button className="px-5 py-3 w-full font-bold text-[14px] rounded-md bg-primary-300">
          Buat Tim
        </button>
        <button className="px-5 py-3 w-full font-bold text-[14px] rounded-md bg-primary-300">
          Gabung Tim
        </button>
      </div>
    </div>
  );
};

export default ModalJoinTeam;
