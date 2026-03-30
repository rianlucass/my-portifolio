import Image from "next/image";

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
  return (
    <section className="py-24 md:py-32 flex justify-center w-full">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-16 flex flex-col md:flex-row md:items-center gap-14 md:gap-20">

        {/* Left text */}
        <div className="md:w-[25%] shrink-0 flex flex-col">

          <h2 className="text-white text-7xl md:text-[6.5rem] font-bold leading-none mb-4 md:mb-5 tracking-tight">
            XP
          </h2>
          <p className="text-[#686868] text-base md:text-base leading-relaxed max-w-[200px]">
            tecnologias que tenho experiência prática, seja em projetos pessoais ou profissionais
          </p>
        </div>

        {/* Cards Carousel */}
        <div className="md:w-[75%] flex flex-col relative w-full overflow-hidden">
          <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory items-center w-full">
            {techs.map((tech) => (
              <div
                key={tech.label}
                className="shrink-0 w-[260px] md:w-[290px] h-[170px] md:h-[190px] rounded-4xl md:rounded-[2.5rem] p-7 md:p-8 flex flex-col justify-end snap-start cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: tech.accentBg }}
              >
                <div className="mb-4 flex items-center gap-4 h-11">
                  {tech.icons.map((ic) => (
                    <Image
                      key={ic.alt}
                      src={ic.src}
                      alt={ic.alt}
                      width={44}
                      height={44}
                      className="object-contain w-auto h-full max-h-[44px]"
                    />
                  ))}
                </div>
                <h3 className={`text-xl md:text-2xl font-bold tracking-tight ${tech.textColor}`}>
                  {tech.label}
                </h3>
              </div>
            ))}
            {/* Space to allow scrolling past the last item */}
            <div className="shrink-0 w-8 md:w-12"></div>
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