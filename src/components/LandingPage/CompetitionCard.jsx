import React from "react";
import Image from "next/image";
import CP_lalu from "../../assets/Logo/CPLalu.png";
import DAC_lalu from "../../assets/Logo/DACLalu.png";
import Esport_lalu from "../../assets/Logo/EsportLalu.png";
import Hackathon_lalu from "../../assets/Logo/HackatonLalu.png";
import Logic_Comp_lalu from "../../assets/Logo/Logic_Comp_Lalu.png";
import Ui_Ux_Lalu from "../../assets/Logo/Ui_Ux_Lalu.png";
import CTF_Lalu from "../../assets/Logo/CTF_Lalu.png";
import Button from "../Button";

export default function CompetitionCard(ownIndex, activeIndex) {
  let name, icon, link, desc;

  switch (activeIndex) {
    case 0:
      name = "UX Competition";
      icon = (
        <Image
          src={Ui_Ux_Lalu}
          sizes="(max-width: 50vw)"
          alt="logo"
          className="unselectable"
        />
      );
      desc =
        "UX Competition adalah kompetisi desain pengalaman pengguna sebuah produk aplikasi mobile. Peserta akan mengembangkan produk dalam bentuk prototipe sesuai dengan tema.";
      link = "/competition/ui-ux";
      break;
    case 1:
      name = "COMPETITIVE PROGRAMMING";
      icon = (
        <Image
          src={CP_Lalu}
          sizes="(max-width: 50vw)"
          alt="logo"
          className="unselectable"
        />
      );
      desc =
        "Competitive Programming adalah kompetisi yang menguji kemampuan berpikir logis demi menyelesaikan masalah dengan suatu program komputer.";
      link = "/competition/competitive-programming";
      break;
    case 2:
      name = "DATA ANALYTICS";
      icon = (
        <Image
          src={DAC_Lalu}
          sizes="(max-width: 50vw)"
          alt="logo"
          className="unselectable"
        />
      );
      desc =
        "Data Analytics Competition merupakan kompetisi menganalisis data khususnya big data guna memberi solusi dari sebuah permasalahan yang telah disediakan.";
      link = "/competition/data-analytics";
      break;
    case 3:
      name = "HACKATHON";
      icon = (
        <Image
          src={Hackathon_Lalu}
          sizes="(max-width: 50vw)"
          alt="logo"
          className="unselectable"
        />
      );
      desc =
        "Hackathon adalah kompetisi pembuatan inovasi berupa produk teknologi informasi dalam jangka waktu tertentu dan sesuai tema yang sudah ditentukan.";
      link = "/competition/hackathon";
      break;
    case 4:
      name = "CAPTURE THE FLAG";
      icon = (
        <Image
          src={CTF_Lalu}
          sizes="(max-width: 50vw)"
          alt="logo"
          className="unselectable"
        />
      );
      desc =
        "Capture the Flag adalah kompetisi cyber security yang menguji peserta dalam berpikir terstruktur dan kreatif dalam mencari sebuah informasi tersembunyi yang disebut flag.";
      link = "/competition/capture-the-flag";
      break;
    case 5:
      name = "ESPORTS";
      icon = (
        <Image
          src={Esport_lalu}
          sizes="(max-width: 50vw)"
          alt="logo"
          className="unselectable"
        />
      );
      desc =
        "Sebuah kompetisi yang menguji kemampuan peserta dalam bermain game kompetitif secara online. Terdapat dua pilihan game yaitu Mobile Legends dan Valorant.";
      link = "/competition/esports";
      break;
    case 6:
      name = "INFORMATICS COMPETITION";
      icon = (
        <Image
          src={Logic_Comp_lalu}
          sizes="(max-width: 50vw)"
          alt="logo"
          className="unselectable"
        />
      );
      desc =
        "Informatics Competition merupakan kompetisi yang bertujuan untuk menguji kecerdasan dan pemahaman logika matematika melalui pengerjaan soal matematika dan problem solving.";
      link = "/competition/informatics-competition";
      break;
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[100%] bg-primary-500 border-4 border-black px-8 py-6 rounded-xl grid grid-cols-3">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col">
            <div className="font-GameOfSquid text-white">
              <p>"Stratigize. Conquer.</p>
              <p>Capture the flag!"</p>
            </div>
          </div>
          <p className="font-Montserrat text-white text-[1.05vw]">
            Kompetisi cyber security yang menguji peserta dalam berpikir
            terstruktur dan kreatif dalam mencari sebuah informasi tersembunyi
            yang disebut flag.
          </p>
        </div>
        <Image
          src={CP_lalu}
          sizes="(max-width: 50vw) "
          alt="logo"
          className="unselectable"
        />
        <div className="flex flex-col justify-center font-Montserrat text-white">
          <p>Tertarik mendaftar</p>
          <p>Capture The Flag</p>
          <p className="font-bold">Hackers? </p>
          <div className="mt-4">
            <Button variant="primary" text="See More ->" />
          </div>
        </div>
      </div>
    </div>
  );
}
