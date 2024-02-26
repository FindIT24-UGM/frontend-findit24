import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const ModalVerification = ({onClose, quest, declare, confirm, cancel, submit}) => {

  return (
    <div>
      <h2 className="font-CreatoDisplay font-bold mb-5 mt-8 text-center text-[24px]">Apakah anda yakin?</h2>
      <div className="font-Montserrat text-center space-y-8 text-[14px] px-4">
        <p>
        {quest}
        </p>
        <p>{declare}</p>
      </div>
      <div className="font-GameOfSquid lg:flex lg:justify-evenly mt-8 mb-3 lg:px-5 lg:space-x-5 lg:space-y-0 md:px-16 md:space-y-7 px-10 space-y-5">
        <button onClick={submit} className="px-5 py-3 w-full font-bold text-[14px] rounded-md bg-primary-300">{confirm}</button>
        <button className="px-5 py-3 w-full font-bold text-[14px] rounded-md border-2 border-primary-300" onClick={onClose}>{cancel}</button>
      </div>
    </div>
  );
};

export default ModalVerification;
