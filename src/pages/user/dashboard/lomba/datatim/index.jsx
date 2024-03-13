import React, { useState, useRef, useEffect } from "react";
import RootLayout from "../../../../layout";
import { HiArrowLeft } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCalendar2PlusFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Router, useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const DaftarLombaDanHarga = ({
  lomba,
  selectedLomba,
  setSelectedLomba,
  doubleSlot,
  setDoubleSlot,
}) => {
  const [harga, setHarga] = useState("");
  const router = useRouter();
  useEffect(() => {
    const today = new Date();
    const earlyBird = new Date("2024-03-13");

    if (selectedLomba === process.env.NEXT_PUBLIC_COMPETITION_ID_CTF) {
      if (today <= earlyBird) {
        setHarga("95.000");
      } else {
        setHarga("125.000");
      }
      setDoubleSlot(false);
    } else if (selectedLomba === process.env.NEXT_PUBLIC_COMPETITION_ID_CP) {
      if (today <= earlyBird) {
        setHarga("90.000");
      } else {
        setHarga("120.000");
      }
      setDoubleSlot(false);
    } else if (selectedLomba === process.env.NEXT_PUBLIC_COMPETITION_ID_DAC) {
      if (today <= earlyBird) {
        setHarga("100.000");
      } else {
        setHarga("130.000");
      }
      setDoubleSlot(false);
    } else if (selectedLomba === process.env.NEXT_PUBLIC_COMPETITION_ID_IC) {
      if (today <= earlyBird) {
        setHarga("60.000");
      } else {
        setHarga("90.000");
      }
      setDoubleSlot(false);
    } else if (
      selectedLomba === process.env.NEXT_PUBLIC_COMPETITION_ID_UXCOMPE
    ) {
      router.push(
        `${process.env.NEXT_PUBLIC_FE_URL}/user/dashboard/lomba/datatim/datatimux`
      );
      setHarga("120.000");
      setDoubleSlot(false);
    } else if (
      selectedLomba === process.env.NEXT_PUBLIC_COMPETITION_ID_VALORANT
    ) {
      if (doubleSlot === true) {
        setHarga("150.000");
      } else if (doubleSlot === false) {
        setHarga("75.000");
      }
    } else if (selectedLomba === process.env.NEXT_PUBLIC_COMPETITION_ID_ML) {
      if (doubleSlot === true) {
        setHarga("150.000");
      } else if (doubleSlot === false) {
        setHarga("75.000");
      }
    } else if (
      selectedLomba === process.env.NEXT_PUBLIC_COMPETITION_ID_HACKATHON
    ) {
      router.push(
        `${process.env.NEXT_PUBLIC_FE_URL}/user/dashboard/lomba/datatim/datatimhackathon`
      );
      setHarga("150.000");
      setDoubleSlot(false);
    }
  }, [selectedLomba, doubleSlot]);

  return (
    <div className="w-5/6 flex flex-col lg:flex-row justify-between items-center max-md:items-start">
      <div className=" px-4 flex">
        <p className="font-CreatoDisplay font-bold text-3xl text-shade-white self-center">
          Buat Tim
        </p>
        <p className="font-CreatoDisplay font-bold text-3xl text-shade-white">
          {lomba}
        </p>
        <select
          aria-placeholder="Select Receiver"
          className="p-2 ml-8 max-sm:ml-5 rounded my-[2vw] bg-white text-black font-bold font-Montserrat max-sm:w-[50%] bg-border-none"
          value={selectedLomba}
          onChange={(e) => setSelectedLomba(e.currentTarget.value)}
        >
          <option value="">Pilih Lomba</option>
          <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_CTF}>
            Capture The Flag
          </option>
          <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_HACKATHON}>
            Hackathon
          </option>
          <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_ML}>
            Esport - Mobile Legends
          </option>
          <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_CP}>
            Competitive Programming
          </option>
          <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_DAC}>
            Data Analytics Competition
          </option>
          <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_VALORANT}>
            Esport - Valorant
          </option>
          <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_IC}>
            Informatics Competitions
          </option>
          <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_UXCOMPE}>
            UX Competition
          </option>
        </select>
      </div>

      <p className="font-CreatoDisplay font-bold text-xl text-shade-white max-md:justify-normal max-md:justify-items-start max-md:mt-[2vw] max-md:ml-[2vw] max-sm:ml-[3vw]">
        Total Fee: {harga}
      </p>
    </div>
  );
};

const DataTimGeneral = () => {
  const [institusi, setinstitusi] = useState(undefined);
  const [namaTim, setNamaTim] = useState(undefined);
  const [openStatus, setOpenStatus] = useState(false);
  const [statusSelected, setStatusSelected] = useState(undefined);
  const [date, setDate] = useState(undefined);
  const [namaPengirim, setNamaPengirim] = useState(undefined);
  const [noRekening, setNoRekening] = useState(undefined);
  const [bank, setBank] = useState(undefined);
  const [selectedLomba, setSelectedLomba] = useState(null);
  const [doubleSlot, setDoubleSlot] = useState(false);

  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  // const [phone, setPhone] = useState([]);

  const [discordID, setDiscordID] = useState(null);
  const [inGameID, setInGameID] = useState(null);

  const dropdownStatusRef = useRef();

  const router = useRouter();

  const competitionIds = ["cp", "ctf", "da", "uix", "hck", "esp", "ic"];
  const { competitionId } = router.query;

  useEffect(() => {
    if (competitionId != undefined && !competitionIds.includes(competitionId)) {
      toast.error("Competition not found");
      router.push("/competition");
    }
    const handler = (e) => {
      if (
        dropdownStatusRef.current &&
        !dropdownStatusRef.current.contains(e.target)
      ) {
        setOpenStatus(false);
      }
    };
    document.body.addEventListener("click", handler);
    return () => document.body.removeEventListener("click", handler);
  }, []);

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
            onChange={() => {
              setDate(e.target.value);
            }}
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
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/team/new`,
        {
          eventId: selectedLomba,
          teamName: namaTim,
          teamInstitution: institusi,
          teamContact: [number1, number2],
          discordID,
          inGameID,
          paymentSender: namaPengirim,
          bankAccountId: noRekening,
          bankName: bank,
          doubleSlot,
        },
        { withCredentials: true }
      )
      .then((res) => {
        router.push(
          `${process.env.NEXT_PUBLIC_FE_URL}/user/dashboard/lomba/berhasilteam/${res.data.request.teamId}`
        );
        return res.data.data;
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        // return err.response.data;
      });
  };

  // const uploadAbstractFile = (e) => {
  //   const formData = new FormData();
  //   const file = e.target.files[0];

  //   formData.append("abstractFile", file);

  //   const regex = /\.(pdf)$/i;
  //   // if (regex.test(file.name)) {
  //   //   const reader = new FileReader();
  //   //   reader.onload = (e) => {
  //   //     setImagePreview(e.target.result);
  //   //   };
  //   //   reader.readAsDataURL(file);
  //   // }
  //   if (formData) {
  //     axios
  //       .post(process.env.NEXT_PUBLIC_API_URL + "/user/upload-file", formData, {
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         console.log(formData);
  //       });
  //   }
  // };

  // const registerTeamHandler = () => {
  //   if (localStorage.getItem("token") == null) {
  //     toast.error("Please login first!");
  //     return;
  //   }
  //   const { _id } = JSON.parse(localStorage.getItem());
  //   const token = JSON.parse(localStorage.getItem("token"));
  //   let evenId;

  //   if (namaTim == "") {
  //     toast.error("Team name can't be empty!");
  //   }
  //   if (institusi == "") {
  //     toast.error("Team institution can't be empty!");
  //   }
  //   if (namaTim.length() > 0 && institusi.length() > 0) {
  //     if (competitionId != "esp") {
  //       handleCreateTeam(competitionId, namaTim, _id, institution, token);
  //     }
  //   }
  // };

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
        <div className="w-[91vw] md:w-[70.7vw] lg:w-2/3 bg-text-placeholder-light p-4 rounded-xl border-[3px] border-shade-black">
          <div className="w-full flex flex-col justify-center items-center gap-8 bg-primary-500 py-8 rounded-xl">
            <DaftarLombaDanHarga
              selectedLomba={selectedLomba}
              setSelectedLomba={setSelectedLomba}
              doubleSlot={doubleSlot}
              setDoubleSlot={setDoubleSlot}
            />
            <div className="w-3/4 flex gap-8 max-md:flex-col max-sm:flex-col">
              <div className="w-[45%] flex flex-col gap-2 max-md:w-[100%] max-sm:w-[100%]">
                <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                    Status
                  </p>
                  <div
                    className="w-full text-sm text-black font-Montserrat font-bold relative"
                    ref={dropdownStatusRef}
                  >
                    <div
                      className="w-full relative flex items-center justify-end"
                      onClick={() => setOpenStatus(!openStatus)}
                    >
                      <input
                        className={`w-full bg-white p-5 h-5 cursor-pointer ${
                          openStatus ? "rounded-t-lg" : "rounded-lg"
                        }`}
                        placeholder="Pilih Status"
                        value={statusSelected}
                        onChange={(e) =>
                          setStatusSelected(e.currentTarget.value)
                        }
                      />
                      <IoMdArrowDropdown
                        size={30}
                        className={`fill-text-placeholder-dark cursor-pointer mr-2.5 absolute ${
                          openStatus && "rotate-180"
                        }`}
                      />
                    </div>
                    <ul
                      className={`w-full bg-primary-300 overflow-y-auto absolute z-10 ${
                        openStatus
                          ? "max-h-[222px] rounded-b-lg scrollbar scrollbar-w-[10px] scrollbar-thumb-black scrollbar-thumb-rounded-md"
                          : "max-h-0 rounded-none"
                      }`}
                    >
                      {statuses?.map((status) => (
                        <li
                          key={status?.name}
                          className={`bg-primary-300 relative text-text-placeholder-light py-[15px] pl-8 cursor-pointer before:h-[1px] before:w-auto before:bg-white before:absolute before:left-[10px] before:right-[10px] before:bottom-0 `}
                          onClick={() => {
                            setStatusSelected(status?.name);
                            setOpenStatus(false);
                          }}
                        >
                          {status?.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light">
                    Nomor
                  </p>
                  <input
                    className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                    placeholder="0812345678"
                    required
                    type="text"
                    id="number1"
                    name="number1"
                    value={number1}
                    onChange={(e) => setNumber1(e.target.value)}
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
                    id="number2"
                    name="number2"
                    value={number2}
                    onChange={(e) => setNumber2(e.currentTarget.value)}
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
                    id="institusi"
                    name="institusi"
                    value={institusi}
                    onChange={(e) => setinstitusi(e.currentTarget.value)}
                  />
                </div>
                {selectedLomba ===
                  process.env.NEXT_PUBLIC_COMPETITION_ID_VALORANT ||
                selectedLomba === process.env.NEXT_PUBLIC_COMPETITION_ID_ML ? (
                  <div className="font-bold font-Montserrat text-[17px] space-y-2 pb-8 mb-3">
                    Double Slot?
                    <div className="flex space-x-1 items-center">
                      <input
                        onClick={() => setDoubleSlot(true)}
                        type="radio"
                        name="doubleSlot"
                      />
                      <label htmlFor="doubleSlot">Ya</label>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <input
                        onClick={() => setDoubleSlot(false)}
                        type="radio"
                        name="doubleSlot"
                      />
                      <label htmlFor="doubleSlot">Tidak</label>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="min-h-full border border-text-placeholder-light" />
              <div className="w-[45%] flex flex-col gap-2 max-md:w-[100%] max-sm:w-[100%]">
                <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light">
                    Nama Tim
                  </p>
                  <input
                    className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                    placeholder="Samsan Tech"
                    required
                    type="text"
                    id="namaTim"
                    name="namaTim"
                    value={namaTim}
                    onChange={(e) => setNamaTim(e.currentTarget.value)}
                  />
                </div>
                {/* <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light">
                    Tanggal Pembayaran
                  </p>
                  <DatePicker
                    selected={date}
                    onChange={(e) => setDate(e)}
                    customInput={<CustomInput />}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="MM/DD/YYYY"
                    showMonthDropdown
                    showYearDropdown
                    yearDropdownItemNumber={50}
                    scrollableYearDropdown
                  />
                </div> */}
                <div className="w-full flex flex-col gap-2">
                  <p className="font-Montserrat font-bold text-text-placeholder-light">
                    Nama Pengirim
                  </p>
                  <input
                    className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                    placeholder="John Doe"
                    required
                    type="text"
                    id="namaPengirim"
                    name="namaPengirim"
                    value={namaPengirim}
                    onChange={(e) => setNamaPengirim(e.currentTarget.value)}
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
                    id="noRekening"
                    name="noRekening"
                    value={noRekening}
                    onChange={(e) => setNoRekening(e.currentTarget.value)}
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
                    id="bank"
                    name="bank"
                    value={bank}
                    onChange={(e) => setBank(e.currentTarget.value)}
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
                onClick={handleCreateTeam}
              >
                <p className="font-GameOfSquid text-center text-shade-black m-auto">
                  Buat Tim
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default DataTimGeneral;
