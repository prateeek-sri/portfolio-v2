"use client";
import { useTheme } from "@/libs/ThemeContext";
const CategoryCard = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`flex select-none max-w-lg text-md md:text-sm lg:text-lg xl:text-base items-center font-semibold justify-between w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto mt-6 mb-8 transition-colors duration-700 ease-in-out ${
        isDark ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div
        className={`rounded-[0.89rem] px-2 md:px-3 md:py-1 ${
          isDark
            ? "bg-linear-to-r from-[#2a0f0f] to-[#3b0e0e] text-[#ff8c66]"
            : "bg-linear-to-r from-[#ffe4e4] to-[#ffe2d4] text-[#cf3903]"
        }`}
      >
        Develop
      </div>
      <div
        className={`rounded-[0.89rem] px-2 md:px-3 md:py-1 ${
          isDark
            ? "bg-linear-to-l from-[#0e2d1f] to-[#123a2c] text-[#72f5d5]"
            : "bg-linear-to-l from-[#e7ffdc] to-[#ddfff8] text-[#097360]"
        }`}
      >
        Code
      </div>
      <div
        className={`rounded-[0.89rem] px-2 md:px-3 md:py-1 ${
          isDark
            ? "bg-linear-to-l from-[#1c1740] to-[#2b1741] text-[#c49fff]"
            : "bg-linear-to-l from-[#cde1ff] to-[#f9d2ff] text-[#4e0aa2]"
        }`}
      >
        Discover
      </div>
      <div
        className={`rounded-[0.89rem] px-2 md:px-3 md:py-1 ${
          isDark
            ? "bg-linear-to-l from-[#2b1027] to-[#3d0c2b] text-[#ff8ae2]"
            : "bg-linear-to-l from-[#ffdaf9] to-[#ffdcdc] text-[#690c58]"
        }`}
      >
        Anime
      </div>
    </div>
  );
};

export default CategoryCard;
