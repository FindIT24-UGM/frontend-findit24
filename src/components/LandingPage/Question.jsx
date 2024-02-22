import React from "react";
import Image from "next/image";
import Button from "../Button";
import hmm1 from "../../assets/background/hmm1.png";
import placeholder from "../../assets/background/placeholder.svg";
import rightPlanet from "../../assets/background/rightPlanet.png";
import placeholderHP from "../../assets/background/placeholderHP.svg";
import bg1 from "../../assets/background/bg1.svg";
import Link  from "next/link";


export default function Question() {
  const handleContactUsClick = () => {};

  return (
    <div className=" bg-background-skyblue flex justify-center">
        <div className="relative flex justify-center mt-24">
            <div className="bg-[url('../assets/background/placeholder.svg')] w-[55vw] bg-no-repeat bg-contain grid-cols-2 grid z-10 max-md:w-[90vw] max-sm:bg-[url('../assets/background/placeholderHP.svg')] max-sm:grid-cols-1" >
                    <div className=" scale-125 max-sm:scale-60 translate-y-[-8vw] translate-x-[-2vw] w-fit max-sm:flex max-sm:place-self-center max-sm:translate-x-[0vw] max-md:translate-y-[-15vw] max-sm:translate-y-[-65vw] max-sm:mt-[25vw] max-sm:mb-[15vw]">
                        <Image
                            src={hmm1}
                            alt="logo"
                            className="w-[80vw] max-sm:w-[50vw]"
                        />
                    </div>
                    <div className="flex flex-col mt-6 translate-y-[3vw] translate-x-[-5vw] max-sm:text-center max-sm:translate-y-[-80vw] max-sm:translate-x-[0vw]">
                        <div className="grid font-GameOfSquid text-[#FCFCFC] text-[3.7vw] leading-[4vw] max-md:text-[6vw] max-md:leading-9 max-sm:text-[9vw] max-sm:leading-10">
                            <p>HAVE ANY</p>
                            <p>QUESTIONS?</p>
                        </div>
                        <div className="mt-6 flex gap-x-4 w-100px max-sm:justify-center" > 
                        <a href="mailto:findit@gmail.com?subject=Subjek%20Email&body=Pesan%20Anda%20di%20sini">
                            <Button variant="primary" text="kontak kami" size="md" customClass="bg-[#000000] text-white max-md:w-[22vw] max-md:text-[1.8vw] max-sm:w-[40vw]" onClick={handleContactUsClick} />
                        </a>
                        <Link href="/faq">
                        <Button variant="secondary" text="lihat faq -> " size="md" customClass="border-[#000000] text-white px-[-20] max-md:w-[22vw] max-md:text-[1.8vw]  max-sm:w-[40vw] w-fit" />
                        </Link>
                        </div>
                    </div>
            </div>
            </div>
            <div className="absolute right-[14vw] translate-y-[-10vw]"> 
                <Image
                        src={rightPlanet}
                        alt="logo"
                        className="w-[5vw] max-md:opacity-0"
                    />
                </div>
        <div className="absolute translate-x-[-2vw] translate-y-[1vw] flex z-0 gap-[60vw] opacity-30 max-md:gap-[15vw] max-md:translate-y-[-25vw]">
            <Image
                src={bg1}
                alt="logo"
                className="w-[20vw] max-md:w-[30vw]"
            />
            <Image
                src={bg1}
                alt="logo"
                className="w-[20vw] max-md:w-[30vw] translate-y-[-8vw] "
            />
        </div>
    </div>
  );
}
