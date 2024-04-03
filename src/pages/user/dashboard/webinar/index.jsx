import React, { useEffect, useState } from "react";
import UserDashboardLayout from "../layout";
import { HiExclamationCircle, HiArrowRight } from "react-icons/hi";
import { BsChatSquareTextFill, BsQuestionOctagonFill } from "react-icons/bs";
// import Comment from '../profileteam/Comment';
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Link from "next/link";

const Index = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const router = useRouter();
  const [isJoinWorkshop, setIsJoinWorkshop] = useState(false);
  const [courseUser, setCourseUser] = useState(null);
  const now = new Date();
  const deadlineDate = new Date("1 Apr 2024");

  const whatsappNumber = "+6289510754671";

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/course/get`, {
        withCredentials: true,
      })
      .then((result) => {
        if (Array.isArray(result.data.user) && result.data.user.length === 0) {
          setIsJoinWorkshop(false);
        } else {
          setIsJoinWorkshop(true);
          setCourseUser(...result.data.user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isAuthenticated]);

  const handleDaftarWorkshop = () => {
    router.push("/user/dashboard/webinar/daftarWorkshop");
  };
  console.log(courseUser);
  const uploadPaymentCourse = (e) => {
    const formData = new FormData();
    const file = e.target.files[0];

    formData.append("paymentFile", file);
    if (formData) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/course/upload-payment/${courseUser._id}`,
          formData,
          { withCredentials: true }
        )
        .then((result) => {
          toast.success("berhasil upload pembayaran workshop");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleFileChange = (e) => {
    uploadPaymentCourse(e);
  };

  return (
    <UserDashboardLayout>
      <div className="w-full flex lg:flex-row flex-col gap-4 h-full">
        <div className="w-full lg:w-2/3 bg-text-placeholder-light border-[3px] border-shade-black rounded-xl p-4 flex flex-col items-center gap-6">
          <div className="w-full bg-primary-500 min-h-[45vh] lg:min-h-0 lg:h-3/4 rounded-xl p-8">
            {!isJoinWorkshop ? (
              <div className="w-full bg-text-placeholder-light p-6 flex items-center gap-4 rounded-lg">
                <HiExclamationCircle
                  size={38}
                  color="#233E51"
                  className="min-w-[32px]"
                />
                <p className="font-Montserrat font-bold text-text-placeholder-dark text-xs sm:text-sm lg:text-base">
                  Belum mendaftar workshop FIND IT! 2024. Klik pada tombol
                  Daftar di bawah.
                </p>
              </div>
            ) : (
              <div className="w-full bg-text-placeholder-light p-6 flex items-center gap-4 rounded-lg">
                <HiExclamationCircle
                  size={38}
                  color="#233E51"
                  className="min-w-[32px]"
                />
                <p className="font-Montserrat font-bold text-text-placeholder-dark text-xs sm:text-sm lg:text-base">
                  Silakan unggah bukti pembayaran dan tunggu admin melakukan
                  verifikasi.
                </p>
              </div>
            )}
          </div>
          {now <= deadlineDate ? (
            <div className="w-5/6 flex flex-col justify-center items-center gap-4">
              <p className="font-Montserrat font-medium text-text-placeholder-dark text-center text-xs sm:text-sm lg:text-base">
                Daftarkan dirimu di Workshop FIND IT! untuk mengeksplorasi
                teknologi Blockchain bersama pembicara berpengalaman pada bidang
                tersebut.
              </p>
              {isJoinWorkshop && courseUser?.paymentFile === "" ? (
                <label className="text-center text-[16px] text-black font-bold py-2 bg-background-skyblue w-full font-GameOfSquid rounded-md">
                  Upload Pembayaran
                  <input
                    className="hidden"
                    type="file"
                    id="paymentFile"
                    name="paymentFile"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
              ) : (
                <div className="w-full"></div>
              )}
              {courseUser && courseUser?.paymentFile !== "" ? (
                <div className="w-full">
                  <button
                    onClick={() =>
                      window.open(`${courseUser?.paymentFile}`, "_blank")
                    }
                    className="text-center text-[16px] text-black font-bold py-2 bg-background-skyblue w-full font-GameOfSquid rounded-md"
                  >
                    {" "}
                    Lihat
                  </button>
                </div>
              ) : (
                <div></div>
              )}
              {isAuthenticated ? (
                isJoinWorkshop === false ? (
                  <button
                    className="bg-primary-300 w-full rounded-md py-2 flex gap-3 justify-center items-center"
                    onClick={handleDaftarWorkshop}
                  >
                    <p className="font-GameOfSquid text-shade-black">
                      Daftar Workshop
                    </p>
                    <HiArrowRight size={20} color="black" />
                  </button>
                ) : (
                  <div></div>
                )
              ) : (
                <div>Please Sign In</div>
              )}
            </div>
          ) : (
            <div className="w-5/6 flex flex-col justify-center items-center gap-4">
              <p className="font-Montserrat font-medium text-red-600 text-center text-xs sm:text-sm lg:text-base">
                Mohon Maaf, pendaftaran workshop FindIT! 2024 telah ditutup.
              </p>
            </div>
          )}
        </div>
        ) )
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
            <Link
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              className="hover:opacity-80 2xl:text-lg"
            >
              <button className="text-center text-[16px] text-black font-bold py-2 bg-background-skyblue w-full font-GameOfSquid rounded-md">
                Hubungi kami
              </button>
            </Link>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default Index;
