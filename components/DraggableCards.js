import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Naruto Uzumaki",
      image:
        "https://i.pinimg.com/736x/f6/ad/7e/f6ad7e41beb3a890a57b395cca219203.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
        title: "Anya Forger",
        image:
        "https://i.pinimg.com/1200x/39/2e/4d/392e4d25ec37ab4cdf8d8a4428e04949.jpg",
        className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Otakun",
      image:
        "https://i.pinimg.com/736x/39/66/35/396635089f4aeb80239f3831c6f14e26.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Jiraiya",
      image:
        "https://i.pinimg.com/1200x/33/29/9f/33299fa56af8052a8d8ec22ce5cd6805.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Loid Forger",
      image:
        "https://i.pinimg.com/1200x/2d/4b/10/2d4b10e096307b4c244ae7f57af3e755.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Ash Ketchum",
      image:
        "https://i.pinimg.com/1200x/62/e7/13/62e71368b711f43dc3ab967c1c6a17bb.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Kakashi Hatake",
      image:
        "https://i.pinimg.com/736x/6b/4b/cc/6b4bcc4bc8b66fc466310c29c2c99eeb.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer
      className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p
        className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
       A place where someone still thinks about you is a place you can call home.
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover" />
          <h3
            className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
