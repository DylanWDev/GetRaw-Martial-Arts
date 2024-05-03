"use client"
import { useEffect, useState } from "react";

const Nav = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <>
      <div className="nav container text-white mx-auto flex items-center justify-between px-6 py-2 h-20 sticky top-0 z-50">
        <div className="flex items-center gap-5">
          <a href="/" className="size-20">
            <img src="/images/logo.webp" alt="Logo Image and Home Navigation" />
          </a>
        </div>

        <div className="hidden text-lg sm:flex items-center justify-end gap-6">
          <a href="/about">ABOUT</a>
          <a href="/schedule">SCHEDULE</a>
          <a href="/contact">CONTACT</a>
          <a href="tel:+8596843949"> {/* Change the phone number to the school's phone number */}
            <button className="rounded-full bg-white p-1 shadow-2xl transform transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
