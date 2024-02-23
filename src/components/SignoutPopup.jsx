import { useContext } from "react";
import ConfirmationPopupContext from "../utilities/ConfirmationPopupContext";
import { RxCross2 } from "react-icons/rx";

export default function ConfirmationPopup() {
  const {
    show,
    setShow,
    title,
    setTitle,
    confirmText,
    setConfirmText,
    positive,
    setPositive,
    onConfirm,
  } = useContext(ConfirmationPopupContext);

  const reset = () => {
    setTitle("");
    setConfirmText("");
    setPositive(false);
    setShow(false);
  };

  if (show)
    // return (
    //   <div className="fixed flex items-center justify-center top-0 left-0 z-[9999] w-screen h-screen bg-[rgba(255,255,255,.05)] backdrop-blur-[8px]">
    //     <div className="relative font-Montserrat text-white border-[3px] border-blue-100 bg-gradient-to-br from-[rgba(9,134,218,0.34)] to-[rgba(202,47,200,0.21)] backdrop-blur-[8px] z-[99999] px-24 py-10 rounded-[24px]">
    //       {/* //? Title */}
    //       <h1 className="mt-5 text-[24px] font-semibold max-w-[450px]">
    //         {title}
    //       </h1>
    //       {/* //? Close Button */}
    //       <RxCross2
    //         className="bg-[#252B33AD] rounded-full p-[2px] text-[18px] absolute top-0 right-0 m-6 cursor-pointer"
    //         onClick={() => reset()}
    //       />
    //       {/* //? Buttons */}
    //       <div className="flex mt-9 gap-4 justify-center">
    //         <div
    //           className="cursor-pointer transition duration-[300ms] px-[30px] py-2 border-2 border-white rounded-full hover:bg-white hover:text-neutral-100"
    //           onClick={() => reset()}
    //         >
    //           Cancel
    //         </div>
    //         <div
    //           className={
    //             "cursor-pointer transition duration-[300ms] px-[30px] py-2 rounded-full border-2 " +
    //             (positive
    //               ? "bg-blue-100 border-blue-100 hover:bg-opacity-80 hover:shadow-[0_0_10px_#0986DA]"
    //               : "bg-[#DB3A31] border-[#DB3A31] hover:bg-[#b32e27] hover:border-[#b32e27]")
    //           }
    //           onClick={() => {
    //             onConfirm();
    //             reset();
    //           }}
    //         >
    //           {confirmText}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );

    return (
      <div>
        <div className="flex justify-end">
          <IoCloseCircleSharp
            className="text-2xl cursor-pointer"
            onClick={onClose}
          />
        </div>
        <h2 className="font-CreatoDisplay font-bold text-center text-[24px] mt-2 mb-10">
          Mendaftar {competitionName}
        </h2>
        <p className="text-center">
          Anda dapat membuat <span className="font-bold">Tim Baru</span> atau
          memasukkan <span className="font-bold">Invitation Code</span> milik
          teman anda untuk bergabung tim
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
}
