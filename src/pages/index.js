"use client";
import { Inter } from "@next/font/google";
import AutoSlider from "../components/AutoSlider";
import CompetitionsList from "../components/LandingPage/CompetitionsList";
import RootLayout from "./layout";
import OurPartner from "../components/LandingPage/OurPartner";
import HeroComp from "../components/LandingPage/Hero/HeroComp";
import WebinarComp from "../components/LandingPage/Webinar/WebinarComp";
import CompetitionComp from "../components/LandingPage/Competition/CompetitionComp";
import Footer from "../components/footer";
import { useSession } from "../session/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RootLayout>
      <main>
        <div className="w-full h-full">
          <HeroComp />
          <AutoSlider />
          <CompetitionComp />
          {/* <CompetitionsList /> */}
          <WebinarComp />
          <OurPartner />
        </div>
      </main>
      <Footer />
    </RootLayout>
  );
}
