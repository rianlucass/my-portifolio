"use client";

import Image from "next/image";
import { useRef, useState, MouseEvent } from "react";

const techs = [
  {
    label: "Spring Boot Framework",
    accentBg: "#cfd6a5", // Greenish yellow from the image
    icons: [{ src: "/icons/spring.svg", alt: "Spring Boot" }],
    textColor: "text-[#101010]",
  },
  {
    label: "React & React Native",
    accentBg: "#8da9b8", // Blueish grey from the image
    icons: [{ src: "/icons/react.svg", alt: "React" }],
    textColor: "text-[#101010]",
  },
  {
    label: "PostgreSQL & MySQL",
    accentBg: "#cecece", // Light grey from the image
    icons: [
      { src: "/icons/postgresql.svg", alt: "PostgreSQL" },
      { src: "/icons/mysql.svg", alt: "MySQL" },
    ],
    textColor: "text-[#101010]",
  },
  {
    label: "Docker",
    accentBg: "#9cb0be", // Soft blueish tone
    icons: [{ src: "/icons/docker.svg", alt: "Docker" }],
    textColor: "text-[#101010]",
  },
];

export default function TechStack() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDown(false);
  };

  const onDrag = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Velocidade do scroll no mouse
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-24 md:py-32 flex justify-center w-full">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-16 flex flex-col md:flex-row md:items-center gap-14 md:gap-20">

        {/* Left text */}
        <div className="md:w-[25%] shrink-0 flex flex-col">
          <h2 className="text-white text-7xl md:text-[6.5rem] font-bold leading-none mb-4 md:mb-5 tracking-tight">
            XP
          </h2>
          <p className="text-[#686868] text-base md:text-base leading-relaxed max-w-[200px]">
            Tecnologias que mais tenho experiência prática, seja em projetos pessoais ou profissionais
          </p>
        </div>

        {/* Cards Carousel */}
        <div className="md:w-[75%] flex flex-col relative w-full overflow-hidden">
          <div 
            ref={scrollRef}
            onMouseDown={startDragging}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={onDrag}
            className={`flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-8 items-center w-full transition-all select-none ${
              isDown ? "cursor-grabbing snap-none" : "cursor-grab snap-x snap-mandatory"
            }`}
          >
            {techs.map((tech) => (
              <div
                key={tech.label}
                className="shrink-0 w-[260px] md:w-[290px] h-[170px] md:h-[190px] rounded-4xl md:rounded-[2.5rem] p-7 md:p-8 flex flex-col justify-end snap-start transition-transform duration-300 pointer-events-none"
                style={{ backgroundColor: tech.accentBg }}
              >
                <div className="mb-4 flex items-center gap-4 h-11 pointer-events-none">
                  {tech.icons.map((ic) => (
                    <Image
                      key={ic.alt}
                      src={ic.src}
                      alt={ic.alt}
                      width={44}
                      height={44}
                      className="object-contain w-auto h-full max-h-[44px] pointer-events-none"
                      draggable={false}
                    />
                  ))}
                </div>
                <h3 className={`text-xl md:text-2xl font-bold tracking-tight pointer-events-none ${tech.textColor}`}>
                  {tech.label}
                </h3>
              </div>
            ))}
            {/* Space to allow scrolling past the last item */}
            <div className="shrink-0 w-8 md:w-12 pointer-events-none"></div>
          </div>

          {/* Fake Pagination dots - static visual representation matching the image */}
          <div className="flex items-center gap-2 pl-4 md:pl-8 -mt-2">
            <div className="w-8 h-2 rounded-full bg-white opacity-90 transition-all"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white opacity-30 hover:opacity-50 transition-all cursor-pointer"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white opacity-30 hover:opacity-50 transition-all cursor-pointer"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white opacity-30 hover:opacity-50 transition-all cursor-pointer"></div>
          </div>
        </div>

      </div>
    </section>
  );
}