"use client";
import React from "react";
import { useTheme } from "@/libs/ThemeContext";

const TimeLine = () => {
  const { isDark } = useTheme(); // ✅ using your ThemeContext

  const data = [
    {
      id: 0,
      title: "Web Developer",
      duration: "Jan 2025",
      org: "HackSlash",
      skills: ["JWT", "React.js", "TailwindCSS", "Next.js", "TypeScript"],
      color: isDark
        ? "bg-red-900 text-red-300"
        : "bg-red-100 text-red-800",
    },
    {
      id: 1,
      title: "Computer Science Student",
      duration: "Sep 2024",
      org: "National Institute of Technology Patna",
      skills: [
        "CGPA - 9.5",
        "JavaScript",
        "Java",
        "Node.js",
        "Express.js",
        "MongoDB",
        "C",
      ],
      color: isDark
        ? "bg-green-900 text-green-300"
        : "bg-green-100 text-green-800",
    },
    {
      id: 2,
      title: "Student",
      duration: "Apr 2009 - Apr 2023",
      org: "Guru Nanak English School",
      skills: ["X - 92%", "XII - 95%", "Communication"],
      color: isDark
        ? "bg-yellow-900 text-yellow-300"
        : "bg-yellow-100 text-yellow-800",
    },
  ];

  return (
    <div
      className={`transition-colors duration-500 ${
        isDark ? "text-gray-200" : "text-gray-800"
      }`}
    >
      <ol
        className={`relative border-s ${
          isDark ? "border-gray-700" : "border-gray-200"
        }`}
      >
        {data.map((item) => (
          <li className="mb-10 ms-6" key={item.id}>
            {/* timeline dot */}
            <span
              className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ${
                isDark
                  ? "bg-blue-900 ring-gray-900"
                  : "bg-blue-100 ring-white"
              }`}
            >
              <svg
                className={`w-2.5 h-2.5 ${
                  isDark ? "text-blue-300" : "text-blue-800"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>

            {/* title */}
            <h3
              className={`flex items-center mb-1 text-lg font-semibold ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {item.title}
              {item.id === 0 && (
                <span className="bg-red-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 border-sky-100 rounded ms-3">
                  Latest
                </span>
              )}
            </h3>

            {/* date */}
            <time
              className={`block mb-2 text-sm font-normal leading-none ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {item.duration}
            </time>

            {/* organization */}
            <p
              className={`${
                isDark ? "text-gray-300" : "text-gray-700"
              } font-medium`}
            >
              {item.org}
            </p>

            {/* skill tags */}
            <div className="flex flex-wrap mt-8">
              {item.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`${item.color} text-sm font-medium me-2 px-2.5 py-0.5 rounded`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;
