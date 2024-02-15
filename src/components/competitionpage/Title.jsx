import { useState, useEffect } from "react";
import Button from "../Button";

export default function Title({
  competitionTitle = "Competitive Programming",
  registrationCountdown,
}) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const changingDate = new Date("4 Mar 2024");
    const currentDate = new Date();
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
        <h1 className="text-[8.889vw] md:text-[6.25vw] lg:text-[4.167vw] sm:text-[50px] lg:text-[72px] font-GameOfSquid bg-gradient-to-b from-[#FF8C5A] to-[#F95949] bg-clip-text text-transparent leading-normal md:leading-tight uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
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
            <div className="flex justify-between grid grid-cols-2 gap-x-4 mt-8">
              <Button
                text="Daftar"
                fullW={true}
                customClass="bg-gradient-to-b from-[#F1A56A] to-[#EE8478]"
              />
              <Button
                text="Guidebook"
                variant="secondary"
                fullW={true}
                customClass="border-[#000000] text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
