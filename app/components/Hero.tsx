import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16 md:px-16 lg:px-24">
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between">
        {/* Text content */}
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left md:max-w-lg">
          <h1 className="text-5xl font-bold text-light-gray leading-tight md:text-6xl">
            Olá, sou Rian Lucas
          </h1>

          <p className="text-mid-gray text-base leading-relaxed max-w-sm md:max-w-none">
            Nestes <strong className="text-light-gray font-bold">3 anos</strong> como{" "}
            <strong className="text-light-gray font-bold">desenvolvedor Front-End freelancer</strong> e
            graduando em tecnólogo de análise e desenvolvimento de sistemas, meu papel foi além do desenvolvimento web: 
            desenvolvi projetos pessoais como aplicativos mobile e APIs, além de participar de ambientes de trabalho remoto,
            desenvolvendo comunicação eficaz com diferentes áreas e
            definição de novas funcionalidades.
          </p>

          <div className="flex flex-col items-center gap-4 w-full sm:flex-row sm:w-auto md:items-start">
            <a
              href="/cv.pdf"
              download
              className="w-full sm:w-auto px-7 py-3 rounded-full border border-light-gray text-light-gray text-sm font-semibold hover:bg-light-gray hover:text-black transition-colors text-center"
            >
              Baixar CV
            </a>
            <a
              href="#experience"
              className="text-purple text-sm font-medium hover:text-purple/70 transition-colors self-center"
            >
              Ver experiências
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="shrink-0">
          <div className="w-48 h-48 md:w-72 md:h-72 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] overflow-hidden bg-dark-gray">
            <Image
              src="https://placehold.co/400x400/272727/6f6f6f?text=Foto"
              alt="Foto de Rian Lucas"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
