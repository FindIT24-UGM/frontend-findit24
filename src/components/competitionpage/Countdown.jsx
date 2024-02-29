import React, { useState, useEffect } from "react";

function Countdown({ deadline }) {
  const [hari, setHari] = useState(999);
  const [jam, setJam] = useState(24);
  const [menit, setMenit] = useState(60);
  const [detik, setDetik] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const targetDate = new Date(deadline); // Next year's New Year's Eve
      const timeRemaining = targetDate - now;

      setHari(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
      setJam(
        Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMenit(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
      setDetik(Math.floor((timeRemaining % (1000 * 60)) / 1000));

      if (timeRemaining < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-[78.85vw] md:w-[35.9vw] lg:w-[18.25vw]">
        <h4 className="font-Montserrat text-[3.858vw] md:text-[1.783vw] lg:text-[1.25vw] text-white font-bold">
          Sisa waktu pendaftaran
        </h4>
        <div className="flex text-white ">
          <h4 className="font-GameOfSquid text-[4.44vw] md:text-[3.125vw] lg:text-[1.25vw]">
            {hari}
          </h4>
          <h4 className="font-Montserrat flex items-center text-[3.214vw] lg:text-[0.72vw]">
            &nbsp;hari
          </h4>
          <h4 className="font-GameOfSquid text-[4.44vw] md:text-[3.125vw] lg:text-[1.25vw]">
            &nbsp;|&nbsp;{jam}
          </h4>
          <h4 className="font-Montserrat flex items-center text-[3.214vw] lg:text-[0.72vw]">
            &nbsp;jam
          </h4>
          <h4 className="font-GameOfSquid text-[4.44vw] md:text-[3.125vw] lg:text-[1.25vw]">
            &nbsp;|&nbsp;{menit}
          </h4>
          <h4 className="font-Montserrat flex items-center text-[3.214vw] lg:text-[0.72vw]">
            &nbsp;menit
          </h4>
          <h4 className="font-GameOfSquid text-[4.44vw] md:text-[3.125vw] lg:text-[1.25vw]">
            &nbsp;|&nbsp;{detik}
          </h4>
          <h4 className="font-Montserrat flex items-center text-[3.214vw] lg:text-[0.72vw]">
            &nbsp;detik
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
