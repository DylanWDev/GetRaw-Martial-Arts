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

        <div id="landing" className="relative" style={{ marginTop: "-.1rem" }}> 
          <div className="text-white gap-5 flex flex-col h-screen justify-center items-center mx-4 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-48 text-center">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Welcome GetRaw Martial Arts!</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl w-full lg:w-9/12">Welcome to Get Ready and Win Martial Arts, where we specialize in utilizing the principles of martial arts to cultivate essential life skills. Our goal is to equip you with the physical, mental, and spiritual tools necessary for success in all aspects of life. Rooted in Christian values, our academy emphasizes family, respect, and practical self-defense. We are committed to fostering an environment of growth and empowerment, where individuals can reach their full potential through the discipline of martial arts. Join us on this journey of self-discovery and mastery!</p>
          </div>
        </div>
      </div>
    </>
  );
}
