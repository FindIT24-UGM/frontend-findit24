import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import AutoSlider from "../components/AutoSlider";
import CompetitionsList from "../components/LandingPage/CompetitionsList";
import RootLayout from "./layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RootLayout>
      <main className="bg-background-skyblue">
        <div className="w-full h-full">
          <h1 className="text-xl font-bold underline text-success-500 font-GameOfSquid">
            Hello world!
          </h1>
          <AutoSlider />
          <CompetitionsList />
        </div>
      </main>
    </RootLayout>
  );
}
