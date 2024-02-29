import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import Button from "../../../../../components/Button";

const openConfirmation = ({ competitionName }) => {
  return (
    <div className="fixed inset-0 w-full flex justify-center items-center bg-black/70 z-50">
      <div className="relative h-auto flex flex-col gap-[25px] lg:gap-11 items-center justify-center w-[330px] sm:w-[370px] lg:w-[570px] bg-text-placeholder-light rounded-lg lg:rounded-xl border-[3px] border-black py-8 px-[10px]">
        <IoCloseCircle
          className="absolute fill-text-placeholder-dark size-6 sm:size-8 lg:size-9 top-2 right-[10.5px] sm:top-[5px] sm:right-[7px] lg:top-[17px] lg:right-[21px]"
          onClick={() => setOpenConfirmation(false)}
        />
        <p className="w-full h-auto font-bold lg:mt-[17.5px] text-text-placeholder-dark font-Montserrat lg:font-CreatoDisplay text-xl lg:text-2xl lg:leading-6 text-center">
          {competitionName}
        </p>
        <p className="text-sm lg:text-base font-medium text-text-placeholder-dark font-Montserrat text-center text-balance">
          Anda dapat membuat
          <span className="font-bold text-nowrap"> Tim Baru </span>
          atau memasukkan
          <span className="font-bold text-nowrap"> Invitation Code </span>
          milik teman anda untuk bergabung tim
        </p>
        <div className="w-full h-auto flex justify-center items-center flex-col lg:flex-row gap-[10px] sm:gap-3 lg:gap-4">
          <div className="w-[212px]">
            <Button fullW customClass={"lg:py-1"} text="Buat Tim" />
          </div>
          <div className="w-[212px]">
            <Button
              fullW
              onClick={() => {
                setOpenConfirmation(false);
                setOpenInvitation(true);
              }}
              customClass={"lg:py-1"}
              text="Gabung Tim"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default openConfirmation;
