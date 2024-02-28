import { useState, useEffect } from "react";
import Button from "../Button";

export default function Title({
  competitionTitle = "Competitive Programming",
  registrationCountdown,
  serverTime, // Tambahkan props serverTime
}) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    // Sinkronkan waktu klien dengan waktu server saat komponen dimuat
    setTimeRemaining(calculateTimeRemaining(serverTime));

    // Setup interval untuk update waktu setiap detik
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(serverTime));
    }, 1000);

    // Membersihkan interval pada unmount
    return () => clearInterval(interval);
  }, [serverTime]); // Gunakan serverTime sebagai dependensi

  function calculateTimeRemaining(serverTime) {
    const changingDate = new Date(registrationCountdown); // Menggunakan waktu target dari props
    const currentDate = serverTime || new Date(); // Gunakan waktu server jika tersedia, jika tidak, gunakan waktu klien
    const totalSeconds = Math.max((changingDate - currentDate) / 1000, 0);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="px-[27px] md:px-0">
      <div className="flex flex-col gap-y-12">
        <h1 className="text-[8.889vw] md:text-[6.25vw] lg:text-[4.167vw] font-GameOfSquid bg-gradient-to-b from-[#FF8C5A] to-[#F95949] bg-clip-text text-transparent leading-normal md:leading-tight uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
          {competitionTitle}
        </h1>
        <div className="flex flex-col">
          <div className="w-[78.85vw] md:w-[35.9vw] lg:w-[18.25vw]">
            <h4 className="font-Montserrat text-[3.858vw] md:text-[1.783vw] lg:text-[1.25vw] text-white font-bold">
              Sisa waktu pendaftaran
            </h4>
            <div className="flex text-white ">
              <h4 className="font-GameOfSquid text-[4.44vw] md:text-[3.125vw] lg:text-[1.25vw]">
                {timeRemaining.days}
              </h4>
              <h4 className="font-Montserrat flex items-center text-[3.214vw] lg:text-[0.72vw]">
                &nbsp;hari
              </h4>
              <h4 className="font-GameOfSquid text-[4.44vw] md:text-[3.125vw] lg:text-[1.25vw]">
                &nbsp;|&nbsp;{timeRemaining.hours}
              </h4>
              <h4 className="font-Montserrat flex items-center text-[3.214vw] lg:text-[0.72vw]">
                &nbsp;jam
              </h4>
              <h4 className="font-GameOfSquid text-[4.44vw] md:text-[3.125vw] lg:text-[1.25vw]">
                &nbsp;|&nbsp;{timeRemaining.minutes}
              </h4>
              <h4 className="font-Montserrat flex items-center text-[3.214vw] lg:text-[0.72vw]">
                &nbsp;menit
              </h4>
              <h4 className="font-GameOfSquid text-[4.44vw] md:text-[3.125vw] lg:text-[1.25vw]">
                &nbsp;|&nbsp;{timeRemaining.seconds}
              </h4>
              <h4 className="font-Montserrat flex items-center text-[3.214vw] lg:text-[0.72vw]">
                &nbsp;detik
              </h4>
            </div>
            <div className="flex gap-x-2 mt-8">
              <Button
                text="Daftar"
                fullW={true}
                customClass="flex justify-center items-center bg-gradient-to-t from-[#ED7C80] to-[#F9C883] text-[4vw] md:text-[16px] lg:text-[1.117vw] 2xl:text-[16px] w-[26.994vw] md:w-[13.6vw] lg:w-[9.96vw] 2xl:w-[5.5vw]"
              />
              <Button
                text="Guidebook"
                variant="secondary"
                fullW={true}
                customClass="flex justify-center border-[#000] text-white text-[4vw] md:text-[16px] lg:text-[1.117vw] 2xl:text-[16px] w-[38vw] md:w-[18.88vw] lg:w-[10.62vw] 2xl:w-[7.7vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
