"use client";
import { Inter } from "@next/font/google";
import AutoSlider from "../components/AutoSlider";
import CompetitionsList from "../components/LandingPage/CompetitionsList";
import RootLayout from "./layout";
import Question from "../components/LandingPage/Question";
import OurPartnerComp from "../components/LandingPage/OurPartner/OurPartnerComp";
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
        <div className="w-full h-full bg-background-skuyblue">
          <HeroComp />
          <AutoSlider />
          <CompetitionComp />
          <CompetitionsList />
          <WebinarComp />
          <OurPartnerComp />
          <Question />
        </div>
      </main>
      <Footer />
    </RootLayout>
  );
}
