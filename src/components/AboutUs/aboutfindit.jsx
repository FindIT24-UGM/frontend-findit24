import React from "react";
import Link from "next/link";
import RootLayout from "../../pages/layout.jsx";
import Image from "next/image";
import Unionkanan from "../../assets/about/Unionkanan.png";
import Unionkiri from "../../assets/about/Unionkiri.svg";
import UnionHP from "../../assets/about/unionHP.png";
import Top from "../../assets/about/topmotif.svg";
import Circuitkiri1 from "../../assets/about/Circuitkiri1.png";
import Circuitkanan1 from "../../assets/about/Circuitkanan1.png";
import Circuitkiri2 from "../../assets/about/Circuitkiri2.png";
import Circuitkanan2 from "../../assets/about/Circuitkanan2.png";
import Awankiri1 from "../../assets/about/awankiri.png";
import Planekiri from "../../assets/about/planekiri.png";
import Awankanan1 from "../../assets/about/awankananatas.png";
import Awantengah1 from "../../assets/about/AWAN MIDDLE1.png";
import Awantengah2 from "../../assets/about/AWAN MIDDLE2.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function AboutFindIT() {
  useEffect(()=>{
    AOS.init({
      disable: false,
      duration: 1300,
    })
  },[])

  return (
    <div className="w-screen h-[50vw] max-md:mb-[35vw] max-sm:mb-[6vw] max-sm:h-[300vw] flex justify-center items-center">
      <div className="absolute w-[56vw] max-md:w-[100vw] top-0 mx-auto max-sm:opacity-0"
      data-aos="fade-down">
        <Image src={Top} alt="Top.png" />
      </div>
      <div className="absolute w-[22vw] max-md:opacity-0 translate-y-[-20vw] left-0 max-sm:opacity-0">
        <Image src={Circuitkiri1} alt="Circuit" data-aos="fade-right"/>
      </div>
      <div className="absolute w-[22vw] max-md:opacity-0 translate-y-[-20vw] right-0 max-sm:opacity-0">
        <Image src={Circuitkanan1} alt="Circuit" data-aos="fade-left"/>
      </div>
      <div className="absolute w-[18vw] max-md:w-[30vw] translate-y-[-17vw] max-md:translate-y-[-8vw] left-[4vw] max-sm:opacity-0">
          <Image src={Awankiri1} alt="Awan" data-aos="fade-right"/>
      </div>
      <div className="absolute w-[10vw] max-md:w-[20vw] translate-y-[-17vw] max-md:translate-y-[-8vw] right-[4vw] max-sm:opacity-0">
        <Image src={Awankanan1} alt="Awan" data-aos="fade-left"/>
      </div>
      <div className="absolute w-[10vw] max-md:w-[20vw] translate-y-[-17.5vw] max-md:translate-y-[-9vw] left-[10vw] max-sm:opacity-0">
        <Image src={Planekiri} alt="Plane"/>
      </div>
      <div className="absolute w-[32vw] max-md:w-[45vw] translate-y-[5.5vw] max-md:translate-y-[32vw] left-0 max-sm:opacity-0">
        <Image src={Circuitkiri2} alt="Circuit"/>
      </div>
      <div className="absolute w-[32vw] max-md:w-[45vw] max-sm:w-[150vw] translate-y-[5.5vw] max-sm:translate-y-[94vw] max-sm:translate-x-[63vw] max-md:translate-y-[32vw] right-[0vw]">
        <Image src={Circuitkanan2} alt="Circuit" />
      </div>
      <div className="absolute w-[28vw] right-0 top-[8vw] sm:opacity-0 max-sm:opacity-100">
        <Image src={Awantengah1} alt="Awan" />
      </div>
      <div className="absolute w-[35vw] top-12 right-[-10vw] sm:opacity-0 max-sm:opacity-100">
        <Image src={Awantengah2} alt="Awan" />
      </div>

      <div className="relative flex max-sm:flex-col w-full justify-between" data-aos="fade-up" >
        <div className="relative w-[36.2vw] max-md:w-[150vw] max-sm:w-[150vw] max-md:translate-y-[25vw] flex flex-col justify-center items-center">
          <Image
            src={Unionkiri}
            alt="BG_Card.svg"
            className="max-md:translate-x-[-12vw] max-sm:translate-x-[-40vw] max-md:scale-150 max-sm:w-[100vw]"
          />
          <div className="absolute flex w-[80%] max-sm:w-[55%] justify-center text-left items-center font-Montserrat mb-[1vw] text-[#233E51] text-[1vw] max-md:translate-x-[-1.5vw]  max-md:text-[1.85vw] max-sm:text-[3.2vw] max-sm:text-left font-medium max-sm:translate-x-[-25vw]" >
            <p>
              <span className="font-bold">FIND IT</span> atau kependekan dari
              Future Innovation and Discovery Information and Technology
              merupakan sebuah acara/event tahunan yang diselenggarakan oleh{" "}
              <span className="font-bold">DTETI FT UGM.</span> Pada event ini
              terdapat beberapa acara, diantaranya{" "}
              <span className="font-bold">webinar</span> dengan nama IT Academy
              dan <span className="font-bold">lomba-lomba</span> seperti
              Competitive Programming, Data Analytics Competition, dan Hackaton.{" "}
            </p>
          </div>
        </div>
        <div className="relative w-[36.2vw] max-md:w-[150vw] max-md:translate-y-[25vw] flex flex-col justify-center items-center max-sm:opacity-0"
        >
          <Image
            src={Unionkiri}
            alt="BG_Card.svg"
            className="max-md:scale-150 scale-x-[-1] max-md:scale-x-[-1.3] max-md:translate-x-[8vw]"
          />
          <div className="absolute flex w-[80%] max-sm:w-[65%] text-[#233E51] text-right justify-center items-center font-Montserrat mb-[1vw] text-[1vw] max-md:translate-x-[1vw] font-medium max-md:text-[1.85vw] max-sm:text-[3.6vw] max-sm:text-left max-sm:translate-x-[-12vw]">
            <p>
              Event ini bertujuan untuk mengembangkan dan memberi wadah bagi
              masyarakat yang tertarik ke{" "}
              <span className="font-bold">dunia TI</span> serta menarik minat
              sekaligus memperkenalkan TI ke masyarakat luas; apalagi di tengah{" "}
              <span className="font-bold">era revolusi 5.0</span> di mana
              teknologi berkembang sangat pesar
            </p>
          </div>
        </div>
        <div className="absolute w-[36.2vw]  max-sm:w-[150vw] flex flex-col justify-center items-center self-center translate-y-[90vw] sm:opacity-0">
          <Image src={UnionHP} alt="BG_Card.svg" className="w-[100vw]" />
          <div className="absolute flex w-[80%] max-sm:w-[55%] justify-center text-center items-center font-Montserrat mb-[1vw] max-sm:text-[3vw] max-sm:text-left max-sm:text-white">
            <p>
              Event ini bertujuan untuk mengembangkan dan memberi wadah bagi
              masyarakat yang tertarik ke{" "}
              <span class="font-bold">dunia TI</span> serta menarik minat
              sekaligus memperkenalkan TI ke masyarakat luas; apalagi di tengah{" "}
              <span class="font-bold">era revolusi 5.0</span> di mana teknologi
              berkembang sangat pesar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
