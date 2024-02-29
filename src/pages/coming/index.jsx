import React from "react";
import Button from "../../components/Button.jsx";
import Motif from './motif.jsx';
import RootLayout from "../layout.jsx";
import Image from "next/image";
import accent from "../../assets/background/accent.png";
import Link  from "next/link";
import decor from "../../assets/background/decor.svg";


export default function coming() {
    return (
        <RootLayout>
            <main className="bg-background-skyblue">
                <div className=" absolute h-screen w-screen flex flex-col items-center justify-center">
                    <p className="font-GameOfSquid text-[#FCFCFC] text-[4.5vw] drop-shadow-[0px_0px_2px_rgba(255,255,255,1)] max-md:text-[9vw] "  style={{ zIndex: 999 }}>
                        coming soon
                    </p>
                    <p className= "font-CreatoDisplay text-[#FCFCFC] text-[1.1vw] max-md:text-[3.2vw]"  style={{ zIndex: 999 }}>
                        Oh, dear! it looks like the page is under maintenance.
                    </p>
                    <div className="mt-10 text-cyan-950" style={{ position: "relative", display: "flex", alignItems: "center",  zIndex: 999 }}>
                        <Link href="/">
                            <Button variant="primary" text="GO TO HOME PAGE -> " size="lg"  className="max-md:w-[38vw] max-md:text-[1.5vw] max-sm:w-[30vw] max-sm:text-[1vw] " />
                        </Link>
                    </div>
                    <div className="absolute flex z-0 gap-[18vw] translate-y-[5.5vw] max-md:gap-[20vw] max-md:translate-y-[12vw] max-sm:gap-[10vw] justify-center">
                        <Image
                            src={accent}
                            alt="accent"
                            className="w-[25vw] max-md:w-[50vw]"
                        />
                        <Image
                            src={accent}
                            alt="accent"
                            className="w-[25vw] max-md:w-[50vw]"
                        />
                    </div>
                </div>
                <Motif count={14} />
                <div className="relative h-screen max-md:opacity-[0%]">
                    <div className="absolute top-0 right-0">
                    <Image
                        src={decor}
                        alt="accent"
                        className="w-[10vw]"
                    />
                    </div>
                    <div className="absolute bottom-0 left-0 rotate-180 ">
                    <Image
                            src={decor}
                            alt="logo"
                            className="w-[10vw]"
                        />
                    </div>
                </div>
            </main>
        </RootLayout>
    );
}


