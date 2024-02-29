import React, { useReducer, useState } from "react";
import RootLayout from "../../../layout";
import ElectricPattern from "../../../../components/ElectricPattern";
import { HiArrowLeft } from "react-icons/hi";
import { BsCalendar2PlusFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";

import ModalParent from "../../../../components/modal/modalparent";
import ModalVerification from "../../../../components/modal/modalverif";
import axios from "axios";

//INITIALIZE FOR useReducer
const initialState = {
  eventId: process.env.NEXT_PUBLIC_COMPETITION_ID_WORKSHOP,
  paymentDate: undefined,
  paymentFile: undefined,
  paymentSender: undefined,
  bankAccountId: undefined,
  bankName: undefined,
  twibbonLinks: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const DaftarWorkshop = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [date, setDate] = useState(undefined);
  const [namaPengirim, setNamaPengirim] = useState(undefined);
  const [noRekening, setNoRekening] = useState(undefined);
  const [bank, setBank] = useState(undefined);

  const CustomInput = ({ value, onClick }) => {
    return (
      <div className="w-full">
        <div className="w-full h-5 relative flex justify-end items-center my-2">
          <input
            className="w-full h-full text-sm font-Montserrat font-medium text-[#B6B7BA] rounded-lg p-5 bg-text-placeholder-light cursor-pointer"
            type="text"
            placeholder="DD/MM/YYYY"
            onChange={() => {
              setDate(e.target.value);
            }}
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

  const router = useRouter();

  const handleBackWorkshop = () => {
    router.push("/user/dashboard/webinar");
  };

  const uploadPaymentFile = (e) => {
    const formData = new FormData();
    const file = e.target.files[0];

    formData.append("institutionFile", file);

    const regex = /\.(jpg|jpeg|png)$/i;
    // if (regex.test(file.name)) {
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     setImagePreview(e.target.result);
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleDateChange = (date) => {
    dispatch({ type: "UPDATE_FIELD", field: "paymentDate", value: date });
  };

  const handleFileChange = (e) => {
    // uploadPaymentFile(e);
    const formData = new FormData();
    const file = e.target.files[0];

    formData.append("paymentFile", file);
    dispatch({ type: "UPDATE_FIELD", field: "paymentFile", value: formData });
  };
  console.log(state);
  const handleJoinWorkshop = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/course/join`,
        {
          state,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [showModalVerification, setShowModalVerification] = useState(0);

  return (
    <RootLayout>
      <ElectricPattern>
        <div className="w-full min-h-screen flex flex-col items-center">
          <div className="w-[90%] mt-[10vh] flex justify-start items-center mx-auto">
            <button
              className="flex justify-start items-center gap-2"
              onClick={handleBackWorkshop}
            >
              <HiArrowLeft size={20} color="white" />
              <p className="font-GameOfSquid text-text-placeholder-light">
                Kembali
              </p>
            </button>
          </div>
          <div className="w-[90%] sm:w-4/5 lg:w-1/2 bg-text-placeholder-light border-4 border-shade-black rounded-lg p-4 my-10">
            <div className="w-full rounded-lg bg-primary-500 py-6 sm:py-12 px-6 sm:px-12">
              <div className="w-full flex flex-col items-center justify-center gap-8">
                <div className="w-full flex flex-col gap-8">
                  <p className="font-Montserrat font-bold text-text-placeholder-light text-base sm:text-lg lg:text-xl">
                    Daftar Workshop
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-Montserrat font-bold text-text-placeholder-light text-base sm:text-lg lg:text-xl">
                      Pembayaran
                    </p>
                    <p className="font-Montserrat sm:font-bold text-text-placeholder-light text-right text-sm lg:text-base">
                      Total Fee: Rp30.000,00
                    </p>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                      <p className="font-Montserrat font-bold text-text-placeholder-light text-sm sm:text-base">
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
                        className="text-black font-Montserrat font-bold"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <p className="font-Montserrat font-bold text-text-placeholder-light text-sm sm:text-base">
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
                      <p className="font-Montserrat font-bold text-text-placeholder-light text-sm sm:text-base">
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
                      <p className="font-Montserrat font-bold text-text-placeholder-light text-sm sm:text-base">
                        Link Twibbon
                      </p>
                      <input
                        className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-black font-Montserrat font-bold text-sm relative"
                        placeholder="Bank BCA"
                        required
                        type="text"
                        id="twibbonLinks"
                        name="twibbonLinks"
                        value={state.twibbonLinks}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <p className="font-Montserrat font-bold text-text-placeholder-light text-sm sm:text-base">
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
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col justify-between items-start">
                      <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                        Upload Bukti Pembayaran
                      </p>
                      {/*                                     
                                                <p className='font-Montserrat font-bold text-xs text-black font-Montserrat font-bold'>anda belum upload</p>
                                            */}
                    </div>
                    <label className="rounded border-2 border-text-placeholder-light px-6 py-1">
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
                </div>
                <button
                  className="w-full bg-background-skyblue rounded-md py-2"
                  onClick={() => {
                    setShowModalVerification(1);
                  }}
                >
                  <p className="font-GameOfSquid text-shade-black">
                    Daftar Workshop
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ElectricPattern>
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
          submit={handleJoinWorkshop}
          quest="Simpan perubahan sebelum keluar?"
          declare="Anda dapat mengeditnya lagi nanti"
          confirm="Daftar"
          cancel="Batal"
        />
      </ModalParent>
    </RootLayout>
  );
};

export default DaftarWorkshop;
