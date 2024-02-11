import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import AutoSlider from "../components/AutoSlider";
import CompetitionsList from "../components/LandingPage/CompetitionsList";
import RootLayout from "./layout";
import OurPartner from "../components/LandingPage/OurPartner";
import WebinarComp from "../components/LandingPage/WebinarComp";
import HeroComp from "../components/LandingPage/HeroComp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RootLayout>
      <main>
        <div className="w-full h-full">
          <HeroComp />
          <div className=" bg-background-skyblue">
            <AutoSlider />
            <CompetitionsList />
          </div>
          <div>
            <WebinarComp />
          </div>
          <div className="bg-background-skyblue">
            <OurPartner />
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
