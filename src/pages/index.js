import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <div className="w-full h-full">
          <h1 className="text-xl text-success-500 font-GameOfSquid font-bold underline">
            Hello world!
          </h1>
        </div>
        <div className="w-[150px]">
          <Button
            className="font-GameOfSquid font-bold underline"
            size="sm"
            text="Button"
            variant="primary"
            fullW={true}
          />
        </div>
      </main>
    </>
  );
}
