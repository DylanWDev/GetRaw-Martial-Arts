"use client";
import React from "react";
import Nav from "./components/Nav/Nav";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 w-full z-50">
          <Nav />
        </div>

        <div id="landing" className="relative" style={{ marginTop: "-.1rem" }}> {/* Adjust the negative margin to match the height of your nav */}
          <div className="text-white gap-5 flex flex-col h-screen justify-center items-center mx-24 text-center">
            <h1 className="font-bold text-4xl text-center ">Welcome GetRaw Martial Arts!</h1>
            <p className="text-lg">Welcome to Get Ready and Win Martial Arts! We specialize in using martial arts to develop essential life skills, aiming to equip you with the tools for success in every aspect of life. Rooted in Christian values, our academy emphasizes family, respect, and self-defense. Join us to unlock your full potential through martial arts discipline.</p>
          </div>
        </div>
      </div>
    </>
  );
}