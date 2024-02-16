import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import AutoSlider from "../components/AutoSlider";
import CompetitionsList from "../components/LandingPage/CompetitionsList";
import RootLayout from "./layout";
import OurPartner from "../components/LandingPage/OurPartner";
import HeroComp from "../components/LandingPage/Hero/HeroComp";
import WebinarComp from "../components/LandingPage/Webinar/WebinarComp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RootLayout>
      <main>
        <div className="w-full h-full">
          <HeroComp />
          <AutoSlider />
          <CompetitionsList />
          <WebinarComp />
          <OurPartner />
        </div>
      </main>
    </RootLayout>
  );
}
