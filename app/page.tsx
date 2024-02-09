import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";
import pope from "@/public/pepe404crown.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-[#4C9440]">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-white/0 via-white to-white/0" />
      <Particles
        className="absolute inset-0 z-0 animate-fade-in"
        quantity={400}
      />

      <div className="z-10 duration-1000 cursor-default animate-expand flex justify-center items-center overflow-hidden">
        <div>
          <Image src={pope} alt="" className="size-32" />
        </div>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-white/0 via-white to-white/0" />

      <div className="text-center animate-fade-in max-w-4xl text-white mt-4 px-5">
        <p className="font-mono text-lg">
          PANDORA IS A COLLECTION OF 10,000 AVATARS OR "REPLICANTS", BOUND TO
          THE FIRST TOKENS BUILT ON ERC404, AN EXPERIMENTAL TOKEN STANDARD
          ENABLING PERSISTENT LIQUIDITY AND SEMI-FUNGIBILITY FOR ETHEREUM NFTS.
          OUR WEBSITE IS CURRENTLY RECEIVING UPDATES.
        </p>

        <div className="flex justify-center items-center gap-6 mt-5">
          <Link
            href=""
            target="_blank"
            className="uppercase text-[#f6fa02] hover:text-yellow-400 hover:underline underline-offset-3 font-display"
          >
            Twitter
          </Link>
          <Link
            href=""
            target="_blank"
            className="uppercase text-[#f6fa02] hover:text-yellow-400 hover:underline underline-offset-3 font-display"
          >
            Telegram
          </Link>
          <Link
            href=""
            target="_blank"
            className="uppercase text-[#f6fa02] hover:text-yellow-400 hover:underline underline-offset-3 font-display"
          >
            Chart
          </Link>
        </div>

        <p className="mt-2 text-xs text-gray-100 break-all">
          0X9E9FBDE7C7A83C43913BDDC8779158F1368F0413
        </p>
      </div>
    </div>
  );
}
