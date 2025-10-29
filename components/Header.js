"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/libs/ThemeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import pranjal_header_black from "@/public/prateek-header-dark.png";
import pranjal_header_white from "@/public/prateek-header-white.png";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const touchRef = useRef();

  const Links = [
    { name: "timeline", link: "/timeline" },
    { name: "work", link: "/work" },
    { name: "about", link: "/about" },
    { name: "tech", link: "/tech" },
  ];

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (touchRef.current && !touchRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };
    setMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      ref={touchRef}
      className={`font-medium duration-500 transition-all z-40 sticky top-4 w-[75%] sm:w-[75%] md:w-[70%] lg:w-[55%] xl:w-[50%] max-w-6xl mx-auto rounded-2xl backdrop-blur-md border-b shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
      ${
        isScrolled
          ? "bg-opacity-[0.5] shadow-md drop-shadow-lg"
          : "bg-opacity-50"
      }
      ${
        isDark
          ? "text-white bg-white/10 border-white/10"
          : "text-black bg-black/10 border-black/10"
      }
      ${open && (isDark ? "bg-black" : "bg-white bg-opacity-100")}
      `}
    >
      <div className="flex justify-between md:space-x-10 lg:space-x-12 xl:space-x-16 md:flex items-center place-items-center md:justify-center py-3 md:px-10 px-8">
        {/* Logo */}
        <div className="select-none order-2 md:order-1 cursor-pointer flex items-center text-gray-800">
          <Link href={"/"}>
            {isDark ? (
              <Image src={pranjal_header_white} alt="header" width="100" />
            ) : (
              <Image src={pranjal_header_black} alt="header" width="100" />
            )}
          </Link>
        </div>

        {/* Theme Toggle */}
        {isDark ? (
          <button
            onClick={toggleTheme}
            className="w-max md:order-8 ml-3 fill-purple-600"
          >
            <MdOutlineLightMode className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={toggleTheme}
            className="w-max md:order-8 ml-3 fill-purple-600"
          >
            <MdOutlineDarkMode className="w-5 h-5" />
          </button>
        )}

        {/* Hamburger Menu */}
        <div
          onClick={() => setOpen(!open)}
          className="transition-all duration-500 ease-in order-3 text-lg flex flex-col space-y-[0.2rem] cursor-pointer items-center font-semibold md:hidden"
        >
          <div
            className={`${
              open && "rotate-45 translate-y-[5px]"
            } rounded-xl transition-all duration-500 w-4 h-[0.1125rem] ${
              isDark ? "bg-white/70" : "bg-black"
            }`}
          ></div>
          <div
            className={`${
              open && "opacity-0 translate-x-20"
            } rounded-xl transition-all duration-1000 w-4 h-[0.1rem] ${
              isDark ? "bg-white/70" : "bg-black"
            }`}
          ></div>
          <div
            className={`${
              open && "-rotate-45 -translate-y-[5px]"
            } rounded-xl transition-all duration-500 w-4 h-[0.1125rem] ${
              isDark ? "bg-white/70" : "bg-black"
            }`}
          ></div>
        </div>

        {/* Navigation Links */}
        <ul
          className={`rounded-3xl md:rounded-none ${
            open ? (isDark ? "bg-black" : "bg-white") : "bg-transparent"
          } py-4 md:py-0 md:bg-inherit font-semibold order-4 md:flex md:items-center md:pb-0 pb-8 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-14" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base md:my-0 my-7">
              <Link
                href={link.link}
                onClick={() => setTimeout(() => setOpen(false), 700)}
                className={`${
                  pathname === link.link
                    ? "text-purple-400 font-out"
                    : `${isDark ? "text-white" : "text-gray-700"} font-out`
                } hover:text-purple-500 duration-500`}
              >
                <span>
                  {link.name}
                  {link.name === "timeline" && (
                    <sup className="font-semibold text-[8px] border-sky-100 rounded bg-red-600 px-1 text-white">
                      1
                    </sup>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
