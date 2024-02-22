import { HiCheckCircle } from "react-icons/hi";
import { BsExclamationTriangle } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function AlertNotif({ variant = "success" }) {
  ///variant, head = success, failed, processing

  let icon, message, bgColor;

  switch (variant) {
    case "success":
      bgColor = "bg-[#60CA97]";
      icon = <HiCheckCircle size={30} />;
      message = "Berhasil menyimpan data";
      break;
    case "failed":
      bgColor = "bg-[#C70026] text-white";
      icon = <BsExclamationTriangle size={30} />;
      message = "Gagal menyimpan data";
      break;
    default:
      bgColor = "bg-[#E8C81B] text-[#E1820A]";
      icon = <AiOutlineLoading3Quarters size={30} />;
      message = "Sedang memproses data";
      break;
  }

  return (
    <div className={`w- md:w-[35vw] lg:w-[26vw] ${bgColor} p-6 rounded-lg border-4 border-black`}>
      <div className="flex flex-col">
        <div className="flex gap-x-[10px]">
          {icon}
          <p className="font-GameOfSquid text-[5vw] md:text-[3.5vw] lg:text-[1.62vw]">{variant}</p>
        </div>
        <div className="text-white font-medium font-Montserrat">{message}</div>
      </div>
    </div>
  );
}
