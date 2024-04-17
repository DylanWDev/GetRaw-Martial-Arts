"use client";
import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import {  } from "@heroicons/react/24/solid";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Defer initialization of currentPath until after component is mounted
    setCurrentPath(window.location.pathname);
  }, []);

  const isCurrentPage = (href) => currentPath === href;

  return (
    <>
      <div className="nav container text-white mx-auto flex items-center justify-between px-6 py-2 h-20 sticky top-0 z-50">
        <div className="flex items-center gap-5">
          <a href="/" className="size-20">
            <img src="/images/logo.webp" alt="Logo Image and Home Navigation" />
          </a>
        </div>

        <div className="hidden text-lg sm:flex items-center justify-end gap-5">
          <a href="/about">About</a>
          <a href="/schedule">Schedule</a>
          <a href="/contact">Contact</a>
          <button className="rounded-full bg-white p-1 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
