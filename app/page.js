"use client";

import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/libs/ThemeContext";
import "./globals.css";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import { BsArrowUpRight } from "react-icons/bs";
import avatar_light from "@/public/avatar_light.jpg";
import avatar_dark from "@/public/avatar_dark.jpg";
export default function Home() {
  const { isDark } = useTheme();

  return (
    <>
      <Head>
        <title>prateek ✦ developer, designer</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>

      <div className="relative lg:min-h-screen px-10 sm:px-20 md:px-32 lg:px-60 lg:mb-12 mx-auto max-w-300 land font-[Outfit]">
        {/* Top Section */}
        <div className="lg:h-screen 2xl:h-max max-w-360 mx-auto">
          <div className={`flex flex-row justify-start not-odd:items-center mt-20`}>
            <Image
              className={`rounded-full border-3 ${isDark ? "border-white" : "border-black"} border-2`}
              src={isDark ? avatar_dark : avatar_light}
              alt="avatar"
              width="80"
              height="80"
            />
            <div className="flex flex-col ml-4">
              <h2 className="flex items-center sm:text-2xl md:text-2xl lg:text-2xl font-semibold">
                <span className="mr-1">prateek srivastav</span>
              
              </h2>
              <h3>
                <Link
                  href="https://www.linkedin.com/in/prateek-kumar-srivastav/"
                  target="_blank"
                  className="text-[#717171bb] flex items-center"
                >
                  <p>@prateek</p>
                  <BsArrowUpRight className="ml-1 stroke-1 h-3" />
                </Link>
              </h3>
            </div>
          </div>

          {/* About Text */}
          <div className="mt-12 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
            <p className="sm:leading-6 md:leading-6 lg:leading-8">
              A wizard who loves design and code. I develop modern, reactive,
              and user-friendly web applications using the latest technologies.
              I believe the perfect blend of user interface architecture is one
              where goals and needs are met through elegant, efficient, and
              robust design.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto">
          <Contact />
        </div>
      </div>
    </>
  );
}
