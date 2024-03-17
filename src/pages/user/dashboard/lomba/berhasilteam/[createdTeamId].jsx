import React, { useState, useEffect } from "react";
import RootLayout from "../../layout.jsx";
import Button from "../../../../../components/Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import AlertNotif from "../../../../../components/AlertNotif.jsx";
import Image from "next/image";
import decor from "../../../../../assets/background/decor.svg";
import bg1 from "../../../../../assets/background/bg1.svg";
import { useRouter } from "next/router.js";
import axios from "axios";
import { toast } from "react-toastify";

export default function Berhasil() {
  const router = useRouter();
  const { createdTeamId } = router.query;
  const [invitationCode, setInvitationCode] = useState(null);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (createdTeamId) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/team/${createdTeamId}`, {
          withCredentials: true,
        })
        .then((res) => {
          setInvitationCode(res.data.info.teamCode);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [createdTeamId]);

  useEffect(() => {
    // const generateInvitationCode = () => {
    //   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    //   const numbers = "0123456789";

    //   let code = "";
    //   for (let i = 0; i < 8; i++) {
    //     if (i === 0 || i === 3 || i === 6) {
    //       code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    //     } else if (i === 1 || i === 2 || i === 4 || i === 5) {
    //       code += characters.charAt(
    //         Math.floor(Math.random() * characters.length)
    //       );
    //     } else if (i === 7) {
    //       code += "@";
    //     }
    //   }
    //   return code;
    // };
    setInvitationCode("-");
  }, []);

  const copyInvitationCode = () => {
    navigator.clipboard.writeText(invitationCode);
    toast.success("Invitation code telah disalin!");
  };

  const handleDirectDetailTim = () => {
    router.replace(`/user/dashboarad/profileteam/${createdTeamId}`);
  };

  return (
    <main className="relative bg-background-skyblue h-screen">
      {showAlert && (
        <div className="fixed inset-x-0 top-0 flex justify-center z-50 row-span-1">
          <div className="relative z-50">
            <AlertNotif variant="success" customClass="max-md:w-full" />{" "}
            {/*notif blm responsive*/}
          </div>
          <div className="fixed inset-0 bg-black opacity-20 z-40"></div>
        </div>
      )}
      <div className=" absolute w-screen flex justify-center mt-20 max-md:mt-30">
        <div className="relative flex justify-center">
          <div className="w-[45.5vw] bg-white border-4 border-black px-4 py-4 rounded-xl flex justify-center max-md:w-[70vw] max-sm:w-[85vw]">
            <div className="w-[43vw] bg-gradient-to-b from-primary-500 to-primary-300 px-8 py-6 rounded-xl flex flex-col justify-center max-md:w-[67vw] max-sm:w-[85vw]">
              <div className="text-[3vw] font-GameOfSquid text-[#FCFCFC] text-center max-md:text-[5vw] mt-8  ">
                <p>tim berhasil</p>
                <p> dibuat!</p>
              </div>
              <div className="text-[1.1vw] font-montserrat text-[#FCFCFC] text-center mt-4  max-md:text-[2vw]  max-sm:text-[3vw]">
                <p>gunakan invitation code di bawah ini untuk</p>
                <strong>mengundang anggota team</strong>
              </div>
              <div className="text-[1.3vw] font-montserrat text-[#FCFCFC] text-center mt-4  max-md:text-[2.1vw] max-sm:text-[3vw]">
                <strong>Invitation Code:</strong>
              </div>
              <div className="mx-auto mt-5" style={{ zIndex: 999 }}>
                <div className="w-[12vw] bg-white px-2 py-2 rounded-md flex justify-center items-center text-center max-md:w-[20vw] max-sm:w-[25vw]">
                  <div
                    className="text-[1.3vw] font-montserrat bg-gradient-to-b from-primary-500 to-primary-300 bg-clip-text text-transparent text-center max-md:text-[2.1vw] max-sm:text-[3vw]"
                    style={{ fontWeight: "bold" }}
                  >
                    {invitationCode}
                  </div>
                  <div className="size-10 max-sm:ml-2 max-sm:size-5 justify-center align-center items-center translate-y-2 max-md:translate-y-0">
                    <FontAwesomeIcon
                      icon={faCopy}
                      onClick={copyInvitationCode}
                      style={{
                        cursor: "pointer",
                        fontSize: "24px",
                        color: "F3A182",
                      }}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  router.push(`/user/dashboard/profileteam/${createdTeamId}`)
                }
                className="w-[14vw] mx-auto mt-4 max-md:w-[38vw] max-md:text-[1.8vw] max-sm:w-[34vw] max-sm:text-[1.5vw] text-black p-6 z-[999] font-GameOfSquid"
              >
                <p>Lihat tim</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-screen max-md:opacity-[0%]">
        <div className="absolute top-0 right-0">
          <Image src={decor} alt="accent" className="w-[10vw]" />
        </div>
        <div className="absolute bottom-0 left-0 rotate-180 ">
          <Image src={decor} alt="logo" className="w-[10vw]" />
        </div>
      </div>
    </main>
  );
}
