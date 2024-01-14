import { HiCheckCircle } from "react-icons/hi";
import { BsExclamationTriangle } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useMemo } from "react";

export default function AlertNotif(variant) {
  ///variant, head = success, failed, processing

  /* const notifBg = useMemo(() => {
    switch (variant) {
      case "success":
        return "bg-[#60CA97]";

      case "failed":
        return "bg-[#C70026]";

      case "processing":
        return "bg-[#E8C81B]";
    }
  }, [variant]);

  const notifVariant = useMemo(() => {
    switch (variant) {
      case "success":
        return " font-GameOfSquid text-[35px]";
    }
  }, [variant]); */

  const getNotif = (variant) => {
    switch (variant) {
      case "success":
        return (
          <div className="w-[26vw] bg-[#60CA97] p-6 rounded-lg border-4 border-black">
            <div className="flex flex-col">
              <div className="flex gap-x-[10px]">
                <HiCheckCircle size={30} />
                <p className="font-GameOfSquid text-[1.62vw]"> Success </p>
              </div>
              <div className="text-white font-medium font-Montserrat">
                Berhasil menyimpan data
              </div>
            </div>
          </div>
        );
      case "failed":
        return (
          <div className="w-[26vw] bg-[#60CA97] p-6 rounded-lg border-4 border-black">
            <div className="flex flex-col">
              <div className="flex gap-x-[10px]">
                <BsExclamationTriangle size={30} />
                <p className="font-GameOfSquid text-[1.62vw]"> Failed </p>
              </div>
              <div className="text-white font-medium font-Montserrat">
                Berhasil menyimpan data
              </div>
            </div>
          </div>
        );
    }
  };

  return <div>{getNotif(variant)}</div>;
}
