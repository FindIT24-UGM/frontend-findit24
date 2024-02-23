import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  Fragment,
  useReducer,
} from "react";
import RootLayout from "../../../layout";
import { useRouter } from "next/router";
import { HiArrowLeft } from "react-icons/hi";
import { BsCalendar2PlusFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSaveSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ModalParent from "../../modal/modalparent";
import ModalVerification from "../../modal/modalverif";
import ModalJoinTeam from "../../modal/modaljointeam";
import ModalInvitationCode from "../../modal/modalinvitationcode";
import axios from "axios";
import Image from "next/image";

//INITIALIZE FOR useReducer
const initialState = {
  name: undefined,
  dateOfBirth: undefined,
  phone: undefined,
  province: undefined,
  address: undefined,
  status: undefined,
  institutionFile: undefined,
  institutionName: undefined,
  institutionNumber: undefined
};
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};  


const ProfilDiri = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [openProvinsi, setOpenProvinsi] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const router = useRouter();

  const handleBackHome = () => {
    router.push("/user/dashboard/beranda");
  };

  const handleResetPassword = () => {
    router.push("/login/resetPassword/reset");
  };

  const dropdownProvinsiRef = useRef();
  const dropdownStatusRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (
        dropdownProvinsiRef.current &&
        !dropdownProvinsiRef.current.contains(e.target)
      ) {
        setOpenProvinsi(false);
      }
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

  const provinsies = [
    {
      name: "Nanggroe Aceh Darussalam",
    },
    {
      name: "Sumatera Utara",
    },
    {
      name: "Sumatera Selatan",
    },
    {
      name: "Sumatera Barat",
    },
    {
      name: "Bengkulu",
    },
    {
      name: "Riau",
    },
    {
      name: "Kepulauan Riau",
    },
    {
      name: "Jambi",
    },
    {
      name: "Lampung",
    },
    {
      name: "Bangka Belitung",
    },
    {
      name: "Kalimantan Barat",
    },
    {
      name: "Kalimantan Timur",
    },
    {
      name: "Kalimantan Selatan",
    },
    {
      name: "Kalimantan Tengah",
    },
    {
      name: "Kalimantan Utara",
    },
    {
      name: "Banten",
    },
    {
      name: "DKI Jakarta",
    },
    {
      name: "Jawa Barat",
    },
    {
      name: "Jawa Tengah",
    },
    {
      name: "Daerah Istimewa Yogyakarta",
    },
    {
      name: "Jawa Timur",
    },
    {
      name: "Bali",
    },
    {
      name: "Nusa Tenggara Timur",
    },
    {
      name: "Nusa Tenggara Barat",
    },
    {
      name: "Gorontalo",
    },
    {
      name: "Sulawesi Barat",
    },
    {
      name: "Sulawesi Tengah",
    },
    {
      name: "Sulawesi Utara",
    },
    {
      name: "Sulawesi Tenggara",
    },
    {
      name: "Sulawesi Selatan",
    },
    {
      name: "Maluku Utara",
    },
    {
      name: "Maluku",
    },
    {
      name: "Papua Barat",
    },
    {
      name: "Papua",
    },
    {
      name: "Papua Tengah",
    },
    {
      name: "Papua Pegunungan",
    },
    {
      name: "Papua Selatan",
    },
    {
      name: "Papua Barat Daya",
    },
  ];

  const statuses = [
    {
      name: "Universitas/Institut",
    },
    {
      name: "SMA",
    },
    {
      name: "Umum",
    },
  ];

  /*----------BLM WORK BUAT UPLOAD INSTITUTION FILE---------- */
  const [imagePreview, setImagePreview] = useState("");
  const uploadInstitutionFile = (e) => {
    const formData = new FormData();
    const file = e.target.files[0]; 
  
    formData.append("institutionFile", file); 
  
    const regex = /\.(jpg|jpeg|png)$/i;
    if (regex.test(file.name)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    if(formData){
      axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/user/upload-file",
        formData,
        {
          withCredentials: true
        }
      ).then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          console.log(formData);
        })

    }
  }
  /*----------------END------------------- */


  const CustomInput = ({ value, onClick }) => {
    return (
      <div className="w-full">
        <div className="w-full h-auto relative flex justify-end items-center">
          <input
            className="w-full h-5 text-sm font-Montserrat font-medium text-neutral-300 p-5 rounded-lg bg-text-placeholder-light cursor-pointer"
            type="text"
            placeholder="10/10/2002"
            value={value}
            onClick={onClick}
          />
          <BsCalendar2PlusFill
            onClick={onClick}
            size={19}
            className="fill-text-placeholder-dark absolute mr-5 cursor-pointer"
          />
        </div>
      </div>
    );
  };

  useLayoutEffect(() => {
    function updateSize() {
      setIsWideScreen(window.innerWidth > 1024);
      setIsSmallScreen(window.innerWidth < 1024);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const showModal = () => {
    {
      /* Tampilkan modal simpan */
      <ModalParent>
      <ModalVerification
        quest="Simpan perubahan sebelum keluar?"
        declare="Anda dapat mengeditnya lagi nanti"
        confirm="Keluar & Simpan"
        cancel="Batal"
      />
    </ModalParent>
    }
  };
/*---------HANDLE INPUT DATA (pake useReducer)------------ */
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleDateChange = (date) => {
    dispatch({ type: "UPDATE_FIELD", field: "dateOfBirth", value: date });
  };

  const handleFileChange = (e) => {
    uploadInstitutionFile(e)
  };

  const submitHandler = () => {
    axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/user`, state, { withCredentials: true })
    .then(res => {
      //bisa diganti message atau apalah
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
/*----------------END------------------ */

  return (
    <RootLayout>
      <div className="bg-background-skyblue w-screen min-h-screen flex flex-col justify-center items-center gap-8 lg:py-[5vh]">
        <div className="w-5/6 mt-[10vh] lg:mt-0">
          <button className="flex gap-4 items-center" onClick={handleBackHome}>
            <HiArrowLeft size={isSmallScreen ? 18 : 20} />
            <p className="font-GameOfSquid text-center text-text-placeholder-light">
              Beranda
            </p>
          </button>
        </div>
        <div className="w-5/6 md:w-3/4 lg:min-w-[855px] bg-text-placeholder-light rounded-xl border-[3px] border-shade-black p-3 mb-[10vh] lg:mb-0">
          <div className="w-full h-full bg-primary-500 rounded-xl p-5 md:p-8 lg:p-12 flex flex-col gap-8 lg:gap-12">
            <div className="w-full flex justify-between items-center">
              <p className="font-CreatoDisplay font-bold text-base lg:text-2xl text-shade-white">
                Edit Profil Diri
              </p>
              {isWideScreen && (
                <div className="flex justify-end items-center w-[30%] gap-5">
                  <p className="flex-1 font-Montserrat font-bold text-text-placeholder-light">
                    Ganti Password?
                  </p>
                  <button
                    className="rounded border-2 border-text-placeholder-light px-4 py-1"
                    onClick={handleResetPassword}
                  >
                    <p className="font-Montserrat font-medium text-sm text-text-placeholder-light">
                      Ganti Password
                    </p>
                  </button>
                </div>
              )}
            </div>
            <div className="flex-1 flex flex-col items-center gap-10">
              <div className="w-full flex lg:flex-row flex-col lg:gap-8 gap-5">
                <div className="w-full lg:w-[30%] flex flex-col justify-start gap-5">
                  <div className="flex flex-col gap-2 relative">
                    <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                      Nama Lengkap
                    </p>
                    <input
                      className="h-5 w-full p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm"
                      placeholder="John Doe"
                      required
                      type="text"
                      value={state.name}
                      onChange={handleChange}
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                      Tanggal Lahir
                    </p>
                    <DatePicker
                      selected={state.dateOfBirth}
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
                  <div className="flex flex-col gap-2 relative">
                    <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                      No. HP
                    </p>
                    <input
                      className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm"
                      placeholder="0123456789"
                      required
                      type="text"
                      inputMode="numeric"
                      value={state.phone}
                      onChange={handleChange}
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="min-h-full border border-text-placeholder-light" />
                <div className="w-full lg:w-[30%] flex flex-col justify-start gap-5">
                  <div className="flex flex-col gap-2 relative">
                    <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                      Asal Provinsi
                    </p>
                    <div
                      className="w-full text-base font-medium font-Montserrat text-neutral-300 relative"
                      ref={dropdownProvinsiRef}
                    >
                      <div
                        className="w-full relative flex items-center justify-end"
                        onClick={() => setOpenProvinsi(!openProvinsi)}
                      >
                        <input
                          className={`w-full h-5 bg-white text-sm cursor-pointer p-5 ${
                            openProvinsi ? "rounded-t-lg" : "rounded-lg"
                          }`}
                          placeholder="Pilih Provinsi"
                          value={state.province}
                          onChange={handleChange}
                        />
                        <IoMdArrowDropdown
                          size={30}
                          className={`fill-text-placeholder-dark cursor-pointer mr-2.5 absolute ${
                            openProvinsi && "rotate-180"
                          }`}
                        />
                      </div>
                      <ul
                        className={`w-full bg-[#F1A56A] overflow-y-auto absolute z-10 ${
                          openProvinsi
                            ? "max-h-[222px] rounded-b-lg scrollbar scrollbar-w-[10px] scrollbar-thumb-black scrollbar-thumb-rounded-md"
                            : "max-h-0 rounded-none"
                        }`}
                      >
                        <div className="w-full h-auto relative">
                          {provinsies?.map((provinsi) => (
                            <li
                              key={provinsi?.name}
                              className={`bg-primary-300 relative text-text-placeholder-light py-[15px] pl-8 cursor-pointer before:h-[1px] before:w-auto before:bg-white before:absolute before:left-[10px] before:right-0 before:bottom-0 `}
                              onClick={() => {
                                dispatch({ type: "UPDATE_FIELD", field: "province", value: provinsi.name })
                                setOpenProvinsi(false)}}
                            >
                              {provinsi?.name}
                            </li>
                          ))}
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                      Alamat Lengkap
                    </p>
                    <textarea
                      id="address"
                      name="address"
                      className="min-h-[132px] p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm resize-none"
                      placeholder="Jl. Grafika No.2, Sendowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, D.I Yogyakarta 55281"
                      maxLength={100}
                      value={state.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="min-h-full border border-text-placeholder-light" />
                <div className="w-full lg:w-[30%] flex flex-col justify-start gap-5">
                  <div className="flex flex-col gap-2">
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
                          className={`w-full bg-white p-5 h-5 cursor-pointer ${
                            openStatus ? "rounded-t-lg" : "rounded-lg"
                          }`}
                          placeholder="Pilih Status"
                          value={state.status}
                          onChange={handleChange}
                        />
                        <IoMdArrowDropdown
                          size={30}
                          className={`fill-text-placeholder-dark cursor-pointer mr-2.5 absolute ${
                            openProvinsi && "rotate-180"
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
                            className={`bg-primary-300 relative text-text-placeholder-light py-[15px] pl-8 cursor-pointer before:h-[1px] before:w-auto before:bg-white before:absolute before:left-[10px] before:right-[10px] before:bottom-0 `}
                            onClick={() => {
                              dispatch({ type: "UPDATE_FIELD", field: "status", value: status.name })
                              setOpenStatus(false);
                            }}
                          >
                            {status?.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                      Institusi
                    </p>
                    <input
                      className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm"
                      placeholder="Universitas Diponegoro"
                      required
                      type="text"
                      id="institutionName"
                      name="institutionName"
                      value={state.institutionName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                      No. Institusi
                    </p>
                    <input
                      className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm"
                      placeholder="20/25425/TK/23541"
                      required
                      type="text"
                      id="institutionNumber"
                      name="institutionNumber"
                      value={state.institutionNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                      Kartu Institusi
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
                        id="institutionFile"
                        name="institutionFile"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <p className="font-Montserrat font-medium text-xs lg:text-sm text-text-placeholder-light">
                        Unggah
                      </p>
                    </label>
                  </div>
                </div>
                {isSmallScreen && (
                  <div className="flex flex-col gap-5">
                    <div className="h-full border border-text-placeholder-light" />
                    <div className="flex justify-between items-center w-full">
                      <p className="flex-1 font-Montserrat font-bold text-text-placeholder-light text-sm">
                        Ganti Password?
                      </p>
                      <button
                        className="rounded border-2 border-text-placeholder-light py-1 px-4"
                        onClick={handleResetPassword}
                      >
                        <p className="font-Montserrat font-medium text-xs lg:text-sm text-text-placeholder-light">
                          Ganti Password
                        </p>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                className="flex items-center justify-center gap-2 w-full lg:w-1/3 bg-background-skyblue py-2 lg:py-3 rounded-lg"
                onClick={submitHandler}
              >
                <IoSaveSharp size={17.5} color="black" />
                <p className="font-GameOfSquid text-shade-black">Simpan</p>
              </button>
            </div>
          </div>
        </div>
        <ModalParent>
          <ModalVerification
            quest="Simpan perubahan sebelum keluar?"
            declare="Anda dapat mengeditnya lagi nanti"
            confirm="Keluar & Simpan"
            cancel="Batal"
          />
        </ModalParent>
      </div>
    </RootLayout>
  );
};

export default ProfilDiri;

// contoh make modal
{
  /* <ModalParent customStyle={"p-1"}>
  <ModalInvitationCode />
</ModalParent>; */
}
