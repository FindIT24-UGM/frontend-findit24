import { useContext } from "react";
import TeamModalContext from "../utilities/TeamModalContext";
import Button from "./Button";

// function TeamFound()

export default function TeamModal() {
  /* const {
    show,
    setShow,
    title,
    setTitle,
    isFound,
    styleContext,
    confirmText,
    setConfirmText,
    positive,
    setPositive,
    onConfirm,
  } = useContext(TeamModalContext);

  const reset = () => {
    setTitle("");
    setConfirmText("");
    setPositive(false);
    setShow(false);
  }; */

  // if(show) {
  // if(!isFound) {
  return (
    <div className="w-[93.056vw] md:w-[54.297vw] lg:w-[31vw] bg-[#EE8478] flex justify-center items-center border-8 border-whited rounded-2xl py-12">
      <div className="w-[86.389vw] md:w-[54.297vw] lg:w-[23.125vw] bg-transparent text-center flex flex-col gap-y-4">
        <div className="text-[5.556vw] md:text-[2.604vw] lg:text-[1.25vw] font-CreatoDisplay text-white">
          Masukkan Invitation Code
        </div>
        <div className="font-Montserrat lg:text-[0.868vw] text-white">
          Masukan Invitation Code Tim yang dibuat oleh teman anda
        </div>
        <input
          type="text"
          className="rounded-lg h-fit text-center font-Montserrat text-[0.868vw] p-4"
          placeholder="Masukan disini"
        ></input>
        <div className="flex items-center justify-center mt-8">
          <Button text="cek tim" customClass="bg-[#2A93C2]" fullW={true} />
        </div>
      </div>
    </div>
  );
  // }
  // }
}
