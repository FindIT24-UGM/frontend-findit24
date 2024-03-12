import React from "react";
import Prize from "../../../components/competitionpage/Prize";
import Timeline from "../../../components/competitionpage/Timeline";
import RootLayout from "../../layout";
import Second from "../../../components/competitionpage/Second";
import Title from "../../../components/competitionpage/Title";
import CP from "../../../assets/Logo/CP.png";
import Image from "next/image";
import Pattern_Kiri from "../../../assets/compepage/bghero/Pattern_Kiri.png";
import Awan_Kiri from "../../../assets/compepage/bghero/awan_kiri.png";
import Awan_Kanan from "../../../assets/compepage/bghero/awan_kanan.png";
import Bintang_Group from "../../../assets/compepage/bghero/bintang.png";
import Micro_Pattern from "../../../assets/compepage/bghero/Micro_Pattern.png";
import Micro_Atas from "../../../assets/compepage/bghero/Micro_Atas.png";
import Link from "next/link";
import Footer from "../../../components/footer";

function CompetitiveProgramming() {
  const CPInformation = [
    {
      title: "Kategori Peserta",
      items: ["Tim (Maksimal 3 orang)"],
    },
    {
      title: "Biaya Pendaftaran",
      items: ["Early Bird: Rp90.000", "Regular: Rp120.000"],
    },
    {
      title: "Informasi Tambahan",
      items: ["Whasapp: 0895 3785 64468", "Line: krytongo24"],
    },
  ];

  const firstPlacePrize = "3.500.000";
  const secondPlacePrize = "2.500.000";
  const thirdPlacePrize = "1.000.000";

  const dummyData = [
    { name: "Pendaftaran", date: "1 Maret 2024" },
    { name: "Penutupan Pendaftaran", date: "24 Maret 2024" },
    { name: "Babak Warm Up dan Technical Meeting", date: "26 April 2024" },
    { name: "Babak Penyisihan", date: "27 April 2024" },
    { name: "Pengumuman Finalis", date: "4 Mei 2024" },
    { name: "Babak Final", date: "25 Mei 2024" },
    { name: "Awarding", date: "25 Mei 2024" },
    {
      name: "Penetapan dan Pengumuman Juara CTF FindIT! 2024",
      date: "25 Mei 2024",
    },
  ];

  return (
    <div className="overflow-hidden min-h-screen bg-background-skyblue">
      <RootLayout>
        <div className="min-h-screen relative">
          <div className="min-h-screen relative flex items-center mx-auto justify-around md:px-[50px] lg:px-[74px] pt-[20%] md:pt-[100px]">
            {/* Background Assets Layout Desktop */}
            <p className="hidden sm:block absolute font-Ava text-white text-[8.889vw] md:text-[5vw] lg:text-[3.33vw] rotate-90 font-normal -right-36 sm:-right-56 md:-right-24 bottom-16 lg:bottom-48 lg:-right-36 leading-[4vw] drop-shadow-[0_4px_12px_rgba(255,255,255,1)] opacity-50">
              {"//Beyond The Sky"}
            </p>
            <div className="absolute left-0 hidden lg:flex">
              <Image src={Pattern_Kiri} alt="Pattern_Kiri.png" />
            </div>
            <div className="absolute -left-2 md:-left-4 lg:left-0 top-12">
              <Image
                src={Awan_Kiri}
                className="w-[28vw] md:w-[15.3vw] lg:w-[6.25vw]"
                alt="Awan_Kiri.png"
              />
            </div>
            <div className="absolute -right-2 lg:right-0 top-16">
              <Image
                src={Awan_Kanan}
                className="w-[28vw] md:w-[15.3vw] lg:w-[6.25vw]"
                alt="Awan.png"
              />
            </div>
            {/* <div className="absolute md:-top-20 2xl:-top-52 md:-right-12 2xl:-right-16 opacity-60">
              <Image
                src={Micro_Atas}
                className="w-[28vw] md:w-[102vw] lg:w-[64vw] 2xl:w-[60vw]"
                alt="Asset BG.png"
              />
            </div>
            <div className="absolute -right-20 2xl:right-48 2xl:top-1/3 opacity-60">
              <Image
                src={Micro_Pattern}
                className="w-[28vw] md:w-[102vw] lg:w-[64vw] 2xl:w-[45vw]"
                alt="Asset BG.png"
              />
            </div> */}
            {/* Belum Responsive cik */}
            <div className="absolute -top-12 lg:-top-28 right-1 lg:-right-24 -rotate-[15deg] lg:rotate-0 lg:flex">
              <Image
                src={Bintang_Group}
                className="w-[101vw] 2xl:w-[93vw]"
                alt="Asset BG.png"
              />
            </div>
            {/* <div className="absolute -right-20 2xl:right-48 2xl:top-1/3 opacity-60">
              <Image
                src={Micro_Pattern}
                className="w-[28vw] md:w-[102vw] 2xl:w-[45vw]"
                alt="Bg"
              />
            </div> */}
            {/* Belum Responsive cik */}
            <div className="absolute -top-12 lg:-top-28 right-1 lg:-right-24 -rotate-[15deg] lg:rotate-0 lg:flex ">
              <Image
                src={Bintang_Group}
                className="w-[101vw] 2xl:w-[93vw]"
                alt="Bintang"
              />
            </div>
            {/* Belum Responsive cik*/}
            {/* <div className="absolute bottom-0 flex font-Montserrat 2xl:text-[0.72vw] text-white">
              <Link href="#!">Gulir Ke Bawah</Link>
            </div> */}
            {/* Konten */}
            <div className="w-full flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between md:justify-around gap-y-8 md:gap-y-12 lg:gap-y-20 gap-x-12 container max-w-[1500px] py-20 lg:py-0 -mt-28 lg:-mt-40">
              <div data-aos="zoom-out-down">
                <Title
                  competitionTitle="Competitive Programming"
                  linkGuidebook={
                    "https://drive.google.com/drive/folders/1qXhWmwuugneeKKUM103--NJhPV-Ewmyb?usp=sharing"
                  }
                />
              </div>
              <div className="mx-10 md:mx-0 relative">
                <Image
                  src={CP}
                  alt="Logo"
                  width={545}
                  height={532}
                  className="relative z-40 w-[50vw] md:w-[35.5vw] xl:w-[600px] mx-auto"
                  data-aos="zoom-out-up"
                  priority
                />
              </div>
            </div>
          </div>
          <Second
            cabangLomba="Competitive Programming"
            competitionDescription="Competitive Programming merupakan kompetisi yang menguji kemampuan berpikir logis untuk menyelesaikan masalah menggunakan sebuah program komputer yang ditulis menggunakan bahasa C, C++, Python, atau Java dalam batasan waktu dan memori yang ditentukan"
            cardAllItems={CPInformation}
          />
          <Prize
            firstPlacePrize={firstPlacePrize}
            secondPlacePrize={secondPlacePrize}
            thirdPlacePrize={thirdPlacePrize}
          />
          <Timeline data={dummyData} />
        </div>
      </RootLayout>
      <Footer />
    </div>
  );
}

export default CompetitiveProgramming;
