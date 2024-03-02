import { useState, useEffect } from "react";
import Button from "../Button";
import Countdown from "./Countdown";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Title({
  competitionTitle = "Competitive Programming",
  linkGuidebook,
}) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const router = useRouter();

  const handleDaftarClick = () => {
    if (isAuthenticated) {
      router.replace("/user/dashboard/lomba");
    } else {
      router.replace("/login");
    }
  };

  if (competitionTitle === "Capture the Flag") {
    linkGuidebook =
      "https://drive.google.com/drive/folders/1NryalDe7l-71Gu_judgdVUx7-R6ZNZ7E?usp=sharing";
  }
  const handleGuidebookClick = () => {
    return <Link href={`${linkGuidebook}`}></Link>;
  };

  return (
    <div className="px-[27px] md:px-0">
      <div className="flex flex-col gap-y-12">
        <h1 className="text-[8.889vw] md:text-[6.25vw] lg:text-[4.167vw] font-GameOfSquid bg-gradient-to-b from-[#FF8C5A] to-[#F95949] bg-clip-text text-transparent leading-normal md:leading-tight uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
          {competitionTitle}
        </h1>
        <Countdown deadline="24 Mar 2024" />
        <div className="flex gap-x-2 mt-8">
          <Button
            text="Daftar"
            fullW={true}
            onClick={handleDaftarClick}
            customClass="flex justify-center items-center bg-gradient-to-t from-[#ED7C80] to-[#F9C883] text-[4vw] md:text-[16px] lg:text-[1.117vw] 2xl:text-[16px] w-[105px] md:w-[13.6vw] lg:w-[9.96vw] 2xl:w-[5.5vw] z-[100]"
          />
          <Link href={linkGuidebook}>
            <Button
              text="Guidebook"
              variant="secondary"
              fullW={true}
              onClick={handleGuidebookClick}
              customClass="flex justify-center border-[#000] text-white text-[4vw] md:text-[16px] lg:text-[1.117vw] 2xl:text-[16px] w-[38vw] md:w-[18.88vw] lg:w-[10.62vw] 2xl:w-[7.7vw]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
