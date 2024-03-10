import React, { useState, useEffect, useRef, useReducer } from "react";
import { useRouter } from "next/router";
import RootLayout from "../../../../layout";
import { HiArrowLeft } from "react-icons/hi";
import { BsCalendar2PlusFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useSelector } from "react-redux";
import Image from "next/image";
import ModalParent from "../../../../../components/modal/modalparent";
import ModalVerification from "../../../../../components/modal/modalverif";
import Link from "next/link";
import { toast } from "react-toastify";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

export default function Index() {
  const router = useRouter();
  const { teamId } = router.query;
  const [dataTeam, setDataTeam] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [date, setDate] = useState(null);

  const [showModalVerification, setShowModalVerification] = useState(0);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/team/${teamId}`, {
          withCredentials: true,
        })
        .then((res) => {
          setDataTeam(res.data.info);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isAuthenticated]);

  const [state, dispatch] = useReducer(reducer, {
    teamName: undefined,
    teamInstitution: undefined,
    teamContact: [undefined, undefined],
    discordID: undefined,
    inGameID: undefined,
    paymentDate: undefined,
    paymentSender: undefined,
    bankAccountId: undefined,
    bankName: undefined,
    doubleSlot: false
  });

  {
    /* Handler untuk nulis form */
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Jika name adalah 'teamContact', maka kita perlu memeriksa id input
    if (name === "teamContact") {
      const id = e.target.id; // Ambil id input

      // Jika id adalah 'teamContactPrimary', simpan nilai ke indeks 0
      if (id === "teamContactPrimary") {
        dispatch({
          type: "UPDATE_FIELD",
          field: name,
          value: [value, state.teamContact[1]],
        });
      }
      // Jika id adalah 'teamContactSecondary', simpan nilai ke indeks 1
      else if (id === "teamContactSecondary") {
        dispatch({
          type: "UPDATE_FIELD",
          field: name,
          value: [state.teamContact[0], value],
        });
      }
    }
    if (name === "doubleSlot") {
      let isDoubleSlot = value;
      value === 'true' ? isDoubleSlot = true : isDoubleSlot = false
      dispatch({ type: "UPDATE_FIELD", field: "doubleSlot", value: isDoubleSlot });
    } else {
      dispatch({ type: "UPDATE_FIELD", field: name, value });
    }
  };

  {
    /* Handler untuk tanggal */
  }
  const handleDateChange = (date) => {
    dispatch({ type: "UPDATE_FIELD", field: "paymentDate", value: date });
  };

  const [statusSelected, setStatusSelected] = useState(undefined);

  // const [phone, setPhone] = useState([]);

  const [discordID, setDiscordID] = useState(null);
  const [inGameID, setInGameID] = useState(null);

  const dropdownStatusRef = useRef();

  const statuses = [
    {
      name: "Mahasiswa",
    },
    {
      name: "Pelajar",
    },
    {
      name: "Umum",
    },
  ];

  {
    /* Handler untuk upload pembayaran */
  }

  const [imagePreview, setImagePreview] = useState("");
  const uploadPembayaranFile = (e) => {
    const formData = new FormData();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      formData.append("paymentFile", file);

      const regex = /\.(jpg|jpeg|png)$/i;
      if (regex.test(file.name)) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
    if (formData) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/team/verification/${teamId}`,
          formData,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          toast.success("Berhasil upload file");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // End Handler Pembayaran

  {
    /* Handler upload file */
  }
  const handleFileChange = (e) => {
    uploadPembayaranFile(e);
  };
  // End Handler File

  {
    /* Handler untuk upload Twibbon */
  }
  const [imagePreviewTwibbon, setImagePreviewTwibbon] = useState("");
  const handleUploadTwibbon = (e) => {
    const formTwibbon = new FormData();
    const file = e.target.files[0];

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      formTwibbon.append("twibbonTeam", file);

      const regex = /\.(jpg|jpeg|png)$/i;
      if (regex.test(file.name)) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreviewTwibbon(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }

    const regex = /\.(pdf)$/i;

    if (formTwibbon) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/team/upload-twibbon/${teamId}`,
          formTwibbon,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          toast.success("berhasil upload twibbon");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleTwibbonChange = (e) => {
    handleUploadTwibbon(e);
  };
  // End

  const CustomInput = ({ value, onClick }) => {
    return (
      <div className="w-full">
        <div className="w-full h-5 relative flex justify-end items-center my-2">
          <input
            className="w-full h-full text-sm font-Montserrat font-medium text-[#B6B7BA] rounded-lg p-5 bg-text-placeholder-light cursor-pointer"
            type="text"
            placeholder="DD/MM/YYYY"
            value={value}
            onClick={onClick}
          ></input>
          <BsCalendar2PlusFill
            onClick={onClick}
            size={19}
            className="fill-text-placeholder-dark absolute mr-5 cursor-pointer"
          />
        </div>
      </div>
    );
  };

  const handleBackLomba = () => {
    router.push("/user/dashboard/lomba");
  };

  const showModal = () => {
    {
      /* Tampilkan modal buat tim */
    }
  };

  const handleCreateTeam = () => {
    axios
      .patch(`${process.env.NEXT_PUBLIC_API_URL}/team/${teamId}`, state, {
        withCredentials: true,
      })
      .then((res) => {
        router.push(
          `${process.env.NEXT_PUBLIC_FE_URL}/user/dashboard/profileteam/${teamId}`
        );
        return res.data.data;
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <RootLayout>
      <div className="bg-background-skyblue w-screen min-h-screen flex flex-col justify-center items-center gap-5">
        <button
          className="w-5/6 max-h-[10vh] flex items-center gap-4 mt-6"
          onClick={handleBackLomba}
        >
          <HiArrowLeft size={20} color="white" />
          <p className="font-GameOfSquid text-text-placeholder-light">
            Kembali
          </p>
        </button>
        <div className="w-[85%] md:w-3/4 lg:w-2/3 bg-text-placeholder-light p-4 rounded-xl border-[3px] border-shade-black">
          <div className="w-full flex flex-col justify-center items-center gap-8 bg-primary-500 py-8 rounded-xl">
            <div className="w-3/4 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-[45%] flex flex-col gap-2">
                <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light">
                    Nomor Utama
                  </p>
                  <input
                    className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                    placeholder="0812345678"
                    required
                    type="text"
                    id="teamContactPrimary"
                    name="teamContact"
                    value={state.teamContact[0]}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light">
                    Nomor cadangan
                  </p>
                  <input
                    className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                    placeholder="0812345678"
                    required
                    type="text"
                    id="teamContactSecondary"
                    name="teamContact"
                    value={state.teamContact[1]}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light">
                    Institusi
                  </p>
                  <input
                    className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                    placeholder="Universitas Diponegoro"
                    required
                    type="text"
                    id="teamInstitution"
                    name="teamInstitution"
                    value={state.teamInstitution}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light">
                    Nama Tim
                  </p>
                  <input
                    className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                    placeholder="Samsan Tech"
                    required
                    type="text"
                    id="teamName"
                    name="teamName"
                    value={state.teamName}
                    onChange={handleChange}
                  />
                </div>
                {dataTeam?.eventId ===
                  process.env.NEXT_PUBLIC_COMPETITION_ID_VALORANT ||
                dataTeam?.eventId === process.env.NEXT_PUBLIC_COMPETITION_ID_ML ? (
                  <div className="font-bold font-Montserrat text-[17px] space-y-2 pb-8 mb-3">
                    Double Slot?
                  <div className="flex space-x-1 items-center">
                    <input
                      onClick={handleChange}
                      type="radio"
                      name="doubleSlot"
                      value={true}
                      // checked={state.doubleSlot === true}
                    />
                    <label htmlFor="doubleSlot">Ya</label>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <input
                      onClick={handleChange}
                      type="radio"
                      name="doubleSlot"
                      value={false}
                      // checked={state.doubleSlot === false}
                    />
                    <label htmlFor="doubleSlot">Tidak</label>
                  </div>
                  </div>
                  ) : (
                  <div></div>
                )}
                <div className="w-full flex flex-col gap-y-4">
                  <p className="font-Montserrat font-bold text-text-placeholder-light flex flex-col gap-y-4 md:gap-y-2">
                    <p>Nomor rekening pembayaran :</p>
                    <p className="text-[12px]">
                      1212134197 (BNI ) a.n. Nadia Khairunnisa Agma
                    </p>
                    <p className="text-[12px]">
                      3200925130 (BCA ) a.n. Lisa Olivia Putri Maharani
                    </p>
                  </p>
                </div>
              </div>
              <div className="min-h-full border border-text-placeholder-light" />
              <div className="w-full md:w-[45%] flex flex-col gap-2">
                <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light">
                    Tanggal Pembayaran
                  </p>
                  <DatePicker
                    selected={state.paymentDate}
                    onChange={handleDateChange}
                    customInput={<CustomInput />}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="MM/DD/YYYY"
                    showMonthDropdown
                    showYearDropdown
                    yearDropdownItemNumber={50}
                    scrollableYearDropdown
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light">
                    Nama Pengirim
                  </p>
                  <input
                    className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                    placeholder="John Doe"
                    required
                    type="text"
                    id="paymentSender"
                    name="paymentSender"
                    value={state.paymentSender}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light">
                    Nomor Rekening
                  </p>
                  <input
                    className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                    placeholder="0123456789"
                    required
                    type="text"
                    id="bankAccountId"
                    name="bankAccountId"
                    value={state.bankAccountId}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light">
                    Bank
                  </p>
                  <input
                    className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                    placeholder="Bank BCA"
                    required
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={state.bankName}
                    onChange={handleChange}
                  />
                </div>
                {dataTeam?.eventId !== process.env.NEXT_PUBLIC_COMPETITION_ID_CTF &&
                dataTeam?.eventId !==
                  process.env.NEXT_PUBLIC_COMPETITION_ID_VALORANT &&
                dataTeam?.eventId !== process.env.NEXT_PUBLIC_COMPETITION_ID_ML ? (
                  <div></div>
                ) : (
                  <div className="w-full flex flex-col gap-2">
                    <p className="font-Montserrat font-bold text-text-placeholder-light">
                      ID Discord
                    </p>
                    <input
                      className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                      placeholder="Samsan Tech"
                      required
                      type="text"
                      id="discordID"
                      name="discordID"
                      value={discordID}
                      onChange={(e) => setDiscordID(e.currentTarget.value)}
                    />
                  </div>
                )}
                {dataTeam?.eventId ===
                  process.env.NEXT_PUBLIC_COMPETITION_ID_VALORANT ||
                dataTeam?.eventId === process.env.NEXT_PUBLIC_COMPETITION_ID_ML ? (
                  <div className="w-full flex flex-col gap-2">
                    <p className="font-Montserrat font-bold text-text-placeholder-light">
                      ID Game
                    </p>
                    <input
                      className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                      placeholder="Samsan Tech"
                      required
                      type="text"
                      id="inGameID"
                      name="inGameID"
                      value={inGameID}
                      onChange={(e) => setInGameID(e.currentTarget.value)}
                    />
                  </div>
                ) : (
                  <div></div>
                )} 
                <div>
                  <div className="flex justify-between items-center w-full">
                    <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                      Upload Bukti Pembayaran
                    </p>
                    <label className="rounded border-2 border-text-placeholder-light px-6 py-1">
                      {imagePreview && (
                        <Image
                          width={200}
                          height={200}
                          src={imagePreview}
                          alt="kartu identitas"
                          className="mb-4"
                        />
                      )}
                      <input
                        className="hidden"
                        type="file"
                        id="paymentFile"
                        name="paymentFile"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <p className="font-Montserrat font-medium text-xs lg:text-sm text-text-placeholder-light">
                        Unggah
                      </p>
                    </label>
                  </div>
                  <div>
                    <div className="flex justify-between items-center w-full">
                      <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                        Upload Bukti Twibbon
                      </p>
                      <label className="rounded border-2 border-text-placeholder-light px-6 py-1">
                        {imagePreviewTwibbon && (
                          <Image
                            width={200}
                            height={200}
                            src={imagePreviewTwibbon}
                            alt="kartu identitas"
                            className="mb-4"
                          />
                        )}
                        <input
                          className="hidden"
                          type="file"
                          id="twibbonTeam"
                          name="twibbonTeam"
                          accept="application/*"
                          onChange={handleTwibbonChange}
                        />
                        <p className="font-Montserrat font-medium text-xs lg:text-sm text-text-placeholder-light">
                          Unggah
                        </p>
                      </label>
                    </div>
                    <a
                      href="https://bit.ly/TwibbonFindIT2024"
                      className="flex flex-col text-blue-600 text-[16px] underline font-Montserrat font-medium"
                    >
                      Klik disini untuk link twibbon
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                className="w-2/5 bg-background-skyblue py-4 rounded-md mt-4"
                onClick={() => {
                  setShowModalVerification(1);
                }}
              >
                <p className="font-GameOfSquid text-center text-shade-black m-auto">
                  Selesai
                </p>
              </button>
            </div>
            <ModalParent
              isVisible={showModalVerification}
              onClose={() => {
                setShowModalVerification(0);
              }}
            >
              <ModalVerification
                isVisible={showModalVerification}
                onClose={() => {
                  setShowModalVerification(0);
                }}
                submit={handleCreateTeam}
                quest="Simpan perubahan sebelum keluar?"
                declare="Anda dapat mengeditnya lagi nanti"
                confirm="Simpan"
                cancel="Batal"
              />
            </ModalParent>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
