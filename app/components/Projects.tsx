import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  demo?: string;
  highlight?: boolean;
};

const projects: Project[] = [
  {
    title: "Meu Portfólio",
    description:
      "Este portfólio desenvolvido com Next.js 15 e Tailwind CSS, apresentando cores suaves, design responsivo e animações sutis, afim de proporcionar uma experiência agradável ao usuário.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/rianlucascs/my-portfolio",
    demo: "#",
    highlight: true,
  },
  {
    title: "CaronaApp",
    description:
      "CaronaApp é um aplicativo que desenvolvi para o TCC do meu curso, um aplicativo completo com GoogleMaps integrado, chat entre usuarios e gerenciamento de caronas com notificações a cada atualização de carona.",
    techs: ["Spring Boot", "React Native", "PostgreSQL", "Docker"],
    demo: "https://expo.dev/accounts/rianlcs/projects/viacarona/builds/16cc9e10-4c1b-4b9b-85be-145b789a0b75"
  },
  {
    title: "Projeto em breve",
    description:
      "Novo projeto chegando em breve. Fique de olho no meu GitHub para novidades.",
    techs: [],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 flex justify-center w-full relative z-10"
    >
      <div className="w-full max-w-300 mx-auto px-6 md:px-16 flex flex-col gap-16 md:gap-24">
        {/* Title */}
        <div className="max-w-2xl">
          <h2 className="text-[#a1a1aa] text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-tight tracking-tight">
            Projetos que já{" "}
            <span className="text-white">desenvolvi</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-start">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between gap-6 rounded-2xl p-6 border transition-colors h-full ${
                project.highlight
                  ? "bg-[#0d0a14] border-purple/20 hover:border-purple/40"
                  : "bg-[#0a0a0a]/50 backdrop-blur-sm border-white/5 hover:border-white/10"
              }`}
            >
              {/* Top content */}
              <div className="flex flex-col gap-4">
                <h3 className="text-light-gray text-lg font-semibold leading-snug">
                  {project.title}
                </h3>
                <p className="text-mid-gray text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                {project.techs.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 text-[#888] bg-white/3"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Links */}
              {(project.github || project.demo) && (
                <div className="flex items-center gap-4 mt-auto pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Repositório no GitHub"
                      className="flex items-center gap-1.5 text-xs text-mid-gray hover:text-light-gray transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      GitHub
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver demo ao vivo"
                      className="flex items-center gap-1.5 text-xs text-purple hover:text-purple/70 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
