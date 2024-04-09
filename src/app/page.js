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
          <main className="flex h-screen justify-center items-center">
            <h1 className="text-center text-white">Welcome GetRaw Martial Arts!</h1>
          </main>
        </div>
      </div>
    </>
  );
}
