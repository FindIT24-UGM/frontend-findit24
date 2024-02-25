import React, { useState } from "react";
import RootLayout from "../../../layout";
import ElectricPattern from "../../../../components/ElectricPattern";
import { HiArrowLeft } from "react-icons/hi";
import { BsCalendar2PlusFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";

import ModalParent from "../../../../components/modal/modalparent";
import ModalVerification from "../../../../components/modal/modalverif";

const DaftarWorkshop = () => {
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

  const [showModalVerification, setShowModalVerification] = useState(0)

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
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <p className="font-Montserrat font-bold text-text-placeholder-light text-sm sm:text-base">
                        Nama Pengirim
                      </p>
                      <input
                        className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm relative"
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
                      <p className="font-Montserrat font-bold text-text-placeholder-light text-sm sm:text-base">
                        Nomor Rekening
                      </p>
                      <input
                        className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm relative"
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
                      <p className="font-Montserrat font-bold text-text-placeholder-light text-sm sm:text-base">
                        Bank
                      </p>
                      <input
                        className="h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm relative"
                        placeholder="Bank BCA"
                        required
                        type="text"
                        id="bank"
                        name="bank"
                        value={bank}
                        onChange={(e) => setBank(e.currentTarget.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col justify-between items-start">
                      <p className="font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base">
                        Upload Bukti Pembayaran
                      </p>
                      {/*                                     
                                                <p className='font-Montserrat font-bold text-xs text-neutral-300'>anda belum upload</p>
                                            */}
                    </div>
                    <button className="rounded border-2 border-text-placeholder-light px-6 py-1">
                      <input
                        className="hidden"
                        type="file"
                        onChange={(e) => {
                          /* Upload image ke database */
                        }}
                      />
                      <p className="font-Montserrat font-medium text-xs lg:text-sm text-text-placeholder-light">
                        Unggah
                      </p>
                    </button>
                  </div>
                </div>
                <button
                  className="w-full bg-background-skyblue rounded-md py-2"
                  onClick={() => {setShowModalVerification(1)}}
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
