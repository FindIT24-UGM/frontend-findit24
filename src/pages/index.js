"use client";
import { Inter } from "@next/font/google";
import AutoSlider from "../components/AutoSlider";
import CompetitionsList from "../components/LandingPage/CompetitionsList";
import RootLayout from "./layout";
import OurPartner from "../components/LandingPage/OurPartner";
import Question from "../components/LandingPage/Question";
import HeroComp from "../components/LandingPage/Hero/HeroComp";
import WebinarComp from "../components/LandingPage/Webinar/WebinarComp";
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
          <CompetitionsList />
          <WebinarComp />
          <OurPartner />
          <Question />
        </div>
      </main>
      <Footer />
    </RootLayout>
  );
}
