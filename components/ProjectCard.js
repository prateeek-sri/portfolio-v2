import Image from "next/image";
import Link from "next/link";

import nova from "@/public/work/nova.jpg";
import agri from "@/public/work/agrinova.jpg";
import dice from "@/public/work/dice.jpg";
import bunk from "@/public/work/bunk.jpg";
import keepr from "@/public/work/keepr.jpg";
import portfolio from "@/public/work/portfolio.jpg";
import { useTheme } from "@/libs/ThemeContext";
import toast from "react-hot-toast";

const ProjectCard = () => {
    const { isDark } = useTheme();
  const data = [
    {
      id: 1,
      image: nova,
      title: "Nova",
      description: "Nova is a RAG AI chatbot.",
      link: "https://nova-weld-sigma.vercel.app/",
      target: "_blank",
    },
    {
      id: 2,
      image: agri,
      title: "AgriNova",
      description: "AI based crop recommendation system for farmers",
      link: "https://sih-agro-prototype.vercel.app/",
      target: "_blank",
    },
    {
      id: 3,
      image: dice,
      title: "Dice Game",
      description: "Roll the dice and guess what number you get!",
      link: "https://dice-game-eight-mocha.vercel.app/",
      target: "_blank",
    },
    {
      id: 4,
      image: bunk,
      title: "Should I Bunk",
      description: "A tool to keep tracks of your bunks.",
      link: "https://should-i-bunk-eight.vercel.app/",
      target: "_blank",
    },
    {
      id: 5,
      image: keepr,
      title: "Keepr",
      description: "A note-taking app that keeps your thoughts organized.",
      link: "https://keepr-zeta.vercel.app/",
      target: "_blank",
    },
    {
      id: 6,
      image: portfolio,
      title: "Portfolio",
      description: "Portfolio made using Next.js and Tailwind CSS",
      link: "",
      target: "",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? toast.success("You are already on this site! 🤩")
                    : null;
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                className="rounded-lg drop-shadow-2xl hover:scale-110"
                priority
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className={`font-semibold text-[1.5rem] mt-3 ${isDark?"text-white":"text-gray700"}`}>
                {project.title}
              </h1>
              <p className={`max-w-[90%] font-light text-center text-sm ${isDark?"text-gray-400":"text-gray-600"}`}>
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;