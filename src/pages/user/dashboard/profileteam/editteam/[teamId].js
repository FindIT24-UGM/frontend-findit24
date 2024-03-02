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
import ModalParent from "../../../../../components/modal/modalparent";
import ModalVerification from "../../../../../components/modal/modalverif";

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
  });
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
    } else {
      dispatch({ type: "UPDATE_FIELD", field: name, value });
    }
  };

  const handleDateChange = (date) => {
    dispatch({ type: "UPDATE_FIELD", field: "paymentDate", value: date });
  };

  const [statusSelected, setStatusSelected] = useState(undefined);

  const [selectedLomba, setSelectedLomba] = useState(null);

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
        <div className="w-2/3 bg-text-placeholder-light p-4 rounded-xl border-[3px] border-shade-black">
          <div className="w-full flex flex-col justify-center items-center gap-8 bg-primary-500 py-8 rounded-xl">
            <div className="w-3/4 flex gap-8">
              <div className="w-[45%] flex flex-col gap-2">
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
              </div>
              <div className="min-h-full border border-text-placeholder-light" />
              <div className="w-[45%] flex flex-col gap-2">
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
                {selectedLomba !== process.env.NEXT_PUBLIC_COMPETITION_ID_CTF &&
                selectedLomba !==
                  process.env.NEXT_PUBLIC_COMPETITION_ID_VALORANT &&
                selectedLomba !== process.env.NEXT_PUBLIC_COMPETITION_ID_ML ? (
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

                {selectedLomba ===
                  process.env.NEXT_PUBLIC_COMPETITION_ID_VALORANT ||
                selectedLomba === process.env.NEXT_PUBLIC_COMPETITION_ID_ML ? (
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
