"use client";
import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isCurrentPage = (href) => currentPath === href;

  return (
    <Popover className="nav container text-black mx-auto flex items-center px-6 py-2 h-20 sticky top-0 z-50">
      <a href="/" className="size-20">
        <img src="/images/logo.png"/>
      </a>


      <div className="flex flex-row gap-5 ml-auto">
        <div className="hidden text-lg sm:flex items-center justify-end gap-5">
          <a href="/about">About</a>
        </div>

        <div className="hidden text-lg sm:flex items-center justify-end gap-5">
          <a href="/schedule">Schedule</a>
        </div>

        <div className="hidden text-lg sm:flex items-center justify-end gap-5">
          <a href="/contact">Contact</a>
        </div>
      </div>

      <Popover.Panel
        focus
        className="z-5 absolute right-0 left-auto top-0 origin-top-right transform transition md:hidden"
      >
        <div className=" rounded-lg p-5 bg-black shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div clas4sName="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <h1 className="font-bold mr-3">Close Menu</h1>
              <div className="mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-600">
                  <span className="sr-only">Close Menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2"
                >
                  About
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default Nav;
