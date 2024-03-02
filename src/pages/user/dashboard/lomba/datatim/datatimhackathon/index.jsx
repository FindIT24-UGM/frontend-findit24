import React, { useState, useRef, useEffect, useLayoutEffect, useReducer } from "react";
import RootLayout from "../../../../../layout";
import { HiArrowLeft } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const DataTimHackathon = () => {

  const [state, dispatch] = useReducer(reducer, {
    eventId: process.env.NEXT_PUBLIC_COMPETITION_ID_HACKATHON,
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

  const handleCreateTeam = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/team/new`,
          state,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Jika name adalah 'teamContact', maka kita perlu memeriksa id input
    if (name === 'teamContact') {
      const id = e.target.id; // Ambil id input
  
      // Jika id adalah 'teamContactPrimary', simpan nilai ke indeks 0
      if (id === 'teamContactPrimary') {
        dispatch({ type: "UPDATE_FIELD", field: name, value: [value, state.teamContact[1]] });
      } 
      // Jika id adalah 'teamContactSecondary', simpan nilai ke indeks 1
      else if (id === 'teamContactSecondary') {
        dispatch({ type: "UPDATE_FIELD", field: name, value: [state.teamContact[0], value] });
      }
    } else {
      dispatch({ type: "UPDATE_FIELD", field: name, value });
    }
  };
  

  const [institusi, setinstitusi] = useState(undefined);
  const [namaTim, setNamaTim] = useState(undefined);
  const [openStatus, setOpenStatus] = useState(false);
  const [statusSelected, setStatusSelected] = useState(undefined);
  const [isWideScreen, setIsWideScreen] = useState(false);

  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);

  const dropdownStatusRef = useRef();

  useEffect(() => {
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

  const router = useRouter();

  const handleBackLomba = () => {
    router.push("/user/dashboard/lomba");
  };

  useLayoutEffect(() => {
    function updateSize() {
      setIsWideScreen(window.innerWidth > 1024);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const showModal = () => {
    {
      /* Tampilkan modal buat tim */
    }
  };
console.log(state);
  return (
    <RootLayout>
      <div className="bg-background-skyblue w-screen min-h-screen flex flex-col justify-center items-center gap-5 px-5 sm:px-0">
        <div className="w-full sm:w-5/6 max-h-[10vh] mt-8">
          <button className="flex items-center gap-4" onClick={handleBackLomba}>
            <HiArrowLeft size={isWideScreen ? 20 : 18} color="white" />
            <p className="font-GameOfSquid text-center text-text-placeholder-white">
              Kembali
            </p>
          </button>
        </div>
        <div className="w-full sm:w-3/4 lg:w-2/5 p-2 sm:p-4 border-[3px] border-shade-black rounded-xl bg-text-placeholder-light mb-8">
          <div className="w-full flex flex-col justify-center items-center gap-8 bg-primary-500 rounded-xl py-8">
            <div className="w-5/6 flex items-center justify-start">
              <p className="font-CreatoDisplay font-bold text-xl lg:text-3xl text-shade-white">
                Buat Tim Hackathon
              </p>
            </div>
            <div className="w-5/6 lg:w-3/4 flex flex-col justify-center items-center gap-4">
              {/* <div className="w-full flex flex-col gap-2">
                <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                  Status
                </p>
                <div
                  className="w-full text-sm font-medium font-Montserrat text-[#B6B7BA] relative"
                  ref={dropdownStatusRef}
                >
                  <div
                    className="w-full relative flex items-center justify-end"
                    onClick={() => setOpenStatus(!openStatus)}
                  >
                    <input
                      className={`w-full bg-white p-5 h-5 cursor-pointer text-sm text-black font-Montserrat font-bold ${
                        openStatus ? "rounded-t-lg" : "rounded-lg"
                      }`}
                      placeholder="Pilih Status"
                      value={statusSelected}
                      onChange={(e) => setStatusSelected(e.currentTarget.value)}
                    />
                    <IoMdArrowDropdown
                      size={30}
                      className={`fill-text-placeholder-dark cursor-pointer mr-2.5 absolute ${
                        openStatus && "rotate-180"
                      }`}
                    />
                  </div>
                  <ul
                    className={`w-full bg-[#F1A56A] overflow-y-auto absolute z-10 ${
                      openStatus
                        ? "max-h-[222px] rounded-b-lg scrollbar scrollbar-w-[10px] scrollbar-thumb-black scrollbar-thumb-rounded-md"
                        : "max-h-0 rounded-none"
                    }`}
                  >
                    {statuses?.map((status) => (
                      <li
                        key={status?.name}
                        className={`bg-primary-300 relative text-sm text-text-placeholder-light py-[15px] pl-8 cursor-pointer before:h-[1px] before:w-auto before:bg-white before:absolute before:left-[10px] before:right-[10px] before:bottom-0 `}
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
              </div> */}
              <div className="w-full flex flex-col gap-2">
                <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
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
                <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                  Nomor Utama
                </p>
                <input
                  className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                  placeholder="nomor utama"
                  required
                  type="text"
                  id="teamContactPrimary"
                  name="teamContact"
                  value={state.teamContact[0]}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                  Nomor Cadangan
                </p>
                <input
                  className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                  placeholder="nomor cadangan"
                  required
                  type="text"
                  id="teamContactSecondary"
                  name="teamContact"
                  value={state.teamContact[1]}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
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
              <div className="w-full border border-text-placeholder-light my-4" />
              <div className="w-full flex justify-between items-center">
              </div>
              <button
                className="w-full bg-background-skyblue py-4 rounded-md mt-4"
                onClick={() => {
                  showModal();
                  handleCreateTeam();
                }}
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

export default DataTimHackathon;
