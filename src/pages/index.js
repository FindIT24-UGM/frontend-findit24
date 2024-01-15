import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import AutoSlider from "../components/AutoSlider";
import CompetitionsList from "../components/LandingPage/CompetitionsList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-background-skyblue">
        <div className="w-full h-full">
          <h1 className="text-xl text-success-500 font-GameOfSquid font-bold underline">
            Hello world!
          </h1>
          <AutoSlider />
          <CompetitionsList />
        </div>
      </main>
    </>
  );
}
