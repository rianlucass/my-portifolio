import Image from "next/image";
import {
  FileCode2,
  GitBranch,
  Server,
  Database,
  Store,
  Wrench,
  TerminalSquare
} from "lucide-react";

type SkillItem = {
  name: string;
  icon?: any;
  imgSrc?: string;
  color?: string;
};

type SkillCategory = {
  title: string;
  items: SkillItem[];
};

const skillCategories: SkillCategory[] = [

  {
    title: "Engenharia e Design Front-end",
    items: [
      { name: "React JS", imgSrc: "/icons/react-color.svg" },
      { name: "React Native", imgSrc: "/icons/react-color.svg" },
      { name: "Next.JS", imgSrc: "/icons/skills/nextjs_icon_dark.svg" },
      { name: "Vite", imgSrc: "/icons/skills/vite.svg" }
    ]
  },
  {
    title: "Linguagens",
    items: [
      { name: "Java", imgSrc: "/icons/skills/java.svg" },
      { name: "Javascript", imgSrc: "/icons/skills/javascript.svg" },
      { name: "Typescript", imgSrc: "/icons/skills/typescript.svg" },
      { name: "Python", imgSrc: "/icons/skills/python.svg" },
    ]
  },
  {
    title: "DevOps",
    items: [
      { name: "Github Actions", imgSrc: "/icons/skills/github_light.svg" },
      { name: "Docker", imgSrc: "/icons/docker-color.svg" },
    ]
  },
  {
    title: "Back-end",
    items: [
      { name: "Spring Boot", imgSrc: "/icons/skills/spring (1).svg" },
      { name: "Node.js", imgSrc: "/icons/skills/nodejs.svg" },
    ]
  }
];

export default function SkillsGrid() {
  return (
    <section className="py-24 md:py-32 flex justify-center w-full relative z-10">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-16 flex flex-col gap-16 md:gap-24">

        {/* Title */}
        <div className="max-w-2xl">
          <h2 className="text-[#a1a1aa] text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-tight tracking-tight">
            Estas são as tecnologias que já <span className="text-white mt-2">utilizei</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-start">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col bg-[#0a0a0a]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
            >
              <h3 className="text-[#888888] text-xs font-medium mb-6">
                {category.title}
              </h3>

              <div className="flex flex-col gap-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-4">

                    {/* Icon Renderer */}
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      {item.imgSrc ? (
                        <Image
                          src={item.imgSrc}
                          alt={item.name}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      ) : (
                        item.icon && <item.icon style={{ color: item.color }} size={18} strokeWidth={2} />
                      )}
                    </div>

                    <span className="text-[#d4d4d8] text-sm font-medium">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
