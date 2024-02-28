import React from "react";
import UserDashboardLayout from "../layout";
import { HiExclamationCircle, HiArrowRight } from "react-icons/hi";
import { BsChatSquareTextFill, BsQuestionOctagonFill } from "react-icons/bs";
// import Comment from '../profileteam/Comment';
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const handleDaftarWorkshop = () => {
    router.push("/user/dashboard/webinar/daftarWorkshop");
  };

  return (
    <UserDashboardLayout>
      <div className="w-full flex lg:flex-row flex-col gap-4 h-full">
        <div className="w-full lg:w-2/3 bg-text-placeholder-light border-[3px] border-shade-black rounded-xl p-4 flex flex-col items-center gap-6">
          <div className="w-full bg-primary-500 min-h-[45vh] lg:min-h-0 lg:h-3/4 rounded-xl p-8">
            <div className="w-full bg-text-placeholder-light p-6 flex items-center gap-4 rounded-lg">
              <HiExclamationCircle
                size={38}
                color="#233E51"
                className="min-w-[32px]"
              />
              <p className="font-Montserrat font-bold text-text-placeholder-dark text-xs sm:text-sm lg:text-base">
                Belum mendaftar workshop FIND IT! 2024. Klik pada tombol Daftar
                di bawah.
              </p>
            </div>
          </div>
          <div className="w-5/6 flex flex-col justify-center items-center gap-4">
            <p className="font-Montserrat font-medium text-text-placeholder-dark text-center text-xs sm:text-sm lg:text-base">
              Daftarkan dirimu di Workshop FIND IT! untuk mengeksplorasi
              teknologi Blockchain bersama pembicara berpengalaman pada bidang
              tersebut.
            </p>
            <button
              className="bg-primary-300 w-full rounded-md py-2 flex gap-3 justify-center items-center"
              onClick={handleDaftarWorkshop}
            >
              <p className="font-GameOfSquid text-shade-black">
                Daftar Workshop
              </p>
              <HiArrowRight size={20} color="black" />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-6 relative">
          <div className="h-2/3 bg-text-placeholder-light border-[3px] border-shade-black rounded-xl flex flex-col gap-4 p-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <BsChatSquareTextFill size={24} color="black" />
                <p className="font-Montserrat font-bold text-black">
                  Komentar Admin
                </p>
              </div>
            </div>
            <div className="max-h-72 md:max-h-56 lg:max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-white text-shade-black text-sm sm:text-base">
              {/* <Comment
                                title={"Pembayaran Berhasil"}
                                destination={"Samsan Tech"}
                                content={
                                    "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet."
                                }
                                date={"12 Januari 2024, 13:56:02"}
                            />
                            <Comment
                                title={"Pembayaran Berhasil"}
                                destination={"Samsan Tech"}
                                content={
                                    "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet."
                                }
                                date={"12 Januari 2024, 13:56:02"}
                            />
                            <Comment
                                title={"Pembayaran Berhasil"}
                                destination={"Samsan Tech"}
                                content={
                                    "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet."
                                }
                                date={"12 Januari 2024, 13:56:02"}
                            /> */}
            </div>
          </div>
          <div className="bg-primary-500 px-5 py-5 text-white rounded-xl border-[3px] border-black space-y-5 text-sm sm:text-base">
            <div className="font-bold flex items-center space-x-2 font-Montserrat">
              <BsQuestionOctagonFill />
              <h2>Butuh Bantuan?</h2>
            </div>
            <div className="font-Montserrat">
              Apabila anda memiliki{" "}
              <span className="font-bold">pertanyaan</span> atau membutuhkan
              bantuan{" "}
              <span className="font-bold">dalam proses pendaftaran</span>,
              silakan mengubungi Contact Person Workshop
            </div>
            <button className="text-center text-[16px] text-black font-bold py-2 bg-background-skyblue w-full font-GameOfSquid rounded-md">
              Hubungi kami
            </button>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default Index;
