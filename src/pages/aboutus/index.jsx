import React from "react";
import RootLayout from "../layout";
import Image from "next/image";
import Link from "next/link";
import AboutFindIT from "../../components/AboutUs/aboutfindit";
import Theme from "../../components/AboutUs/theme";
import Youtube from "../../components/AboutUs/youtube";
import Footer from "../../components/footer.js";
import Circuitkiri1 from "../../assets/about/Circuitkiri1.png";
import Circuitkanan1 from "../../assets/about/Circuitkanan1.png";
import Circuitkiri2 from "../../assets/about/Circuitkiri2.png";
import Circuitkanan2 from "../../assets/about/Circuitkanan2.png";
import Awankiri1 from "../../assets/about/awankiri.png";
import Planekiri from "../../assets/about/planekiri.png";
import Awankanan1 from "../../assets/about/awankananatas.png";
import Linetengah from "../../assets/about/linetengah.png";
import Awankiri2 from "../../assets/about/awankiri2.png";
import Awankiri3 from "../../assets/about/awankiri3.png";
import Bottomcircuit from "../../assets/about/botomCircuit.png";
import Bintang from "../../assets/about/bintangbawah.png";
import Logo from "../../assets/about/LOGO FINDIT.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      disable: false,
      duration: 1300,
    });
  }, []);

  return (
    <div className="w-screen min-h-screen bg-background-skyblue overflow-hidden">
      <RootLayout>
        <div className="w-full min-h-screen ">
          <div className="w-full min-h-screen flex justify-center z-0">
            {/* Background Assets Layout Desktop */}

            <div
              className="absolute w-[100%] bottom-[0vw] mx-auto"
              data-aos="fade-up">
              <Image src={Bintang} alt="Bintang" />
            </div>
            <div
              className="absolute w-[100%] bottom-[50vw] mx-auto"
              data-aos="zoom-out-up">
              <Image src={Bintang} alt="Bintang" />
            </div>
            <div className="absolute w-[100%] bottom-[100vw] mx-auto max-sm:translate-y-[-50vw] max-sm:w-[100vw] max-sm:translate-x-[-50vw]">
              <Image src={Bintang} alt="Bintang" />
            </div>
            <div className="absolute w-[100%] bottom-[100vw] translate-y-[20vw] translate-x-[40vw]">
              <Image src={Bintang} alt="Bintang" />
            </div>
            <div className="absolute w-[100%] bottom-[100vw] translate-y-[0vw] translate-x-[40vw]">
              <Image src={Bintang} alt="Bintang" />
            </div>
            <div className="absolute w-[100%] bottom-[100vw] left-[100vw]">
              <Image src={Bintang} alt="Bintang" />
            </div>
            <div className="absolute w-[100%] translate-y-[10vw] max-md:translate-y-[10vw] mx-auto">
              <Image src={Bintang} alt="Bintang" />
            </div>
            <div className="absolute w-[100%] max-md:translate-y-[-50vw] opacity-0 max-md:opacity-100 mx-auto">
              <Image src={Bintang} alt="Bintang" />
            </div>
            <div className="absolute top-0 flex font-Montserrat 2xl:text-[0.72vw] text-white">
              <Link href="#!">Gulir Ke Bawah</Link>
            </div>
            {/* Konten */}
            <div className="relative w-screen flex flex-col items-center justify-center z-10">
              {/* <div className="absolute w-[0vw] max-md:translate-y-[-50vw] max-md:opacity-100 mx-auto right-0">
                <Image src={Roketawan} alt="Roket" />
              </div> */}
              <div className="absolute w-[20vw] max-sm:w-[80vw] flex flex-col justify-center max-sm:justify-normal max-sm:left-[-6vw] z-20 top-0 max-sm:top-[4vw] translate-y-[6vw]">
                <Image
                  src={Logo}
                  className="w-[12.08vw] max-md:w-[10.08vw] max-sm:w-[30vw] mx-auto mb-[5vw]"
                  alt="logo"
                  data-aos="zoom-out-up"
                />
                <div
                  className="w-[full] justify-center text-center leading-3"
                  data-aos="zoom-out-up">
                  <div className="font-GameOfSquid text-[#FCFCFC] drop-shadow-[0_0vw_2vw_rgba(255,255,255,1)] max-md:drop-shadow-[0_0vw_0vw_rgba(255,255,255,1)] text-[3vw] max-md:text-[2.8vw] max-sm:text-[8vw] mx-auto">
                    ABOUT
                  </div>
                  <div className="font-GameOfSquid bg-gradient-to-b from-[#F95949] to-[#FF8C5A] bg-clip-text text-transparent leading-normal text-[3.8vw] max-md:text-[3.5vw] max-sm:text-[10vw]  mx-auto">
                    fIND It!
                  </div>
                </div>
              </div>
              <AboutFindIT />
              <Theme />
              <Youtube />
              <Footer />
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default AboutUs;
