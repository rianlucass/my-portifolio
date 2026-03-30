import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen overflow-hidden">
      {/* Global Cohesive Decorative Backgrounds */}
      {/* Top blob (Hero area) */}
      <div className="absolute top-[-5%] left-[-10%] w-[50vw] max-w-[600px] aspect-square bg-[#6104D6] rounded-full mix-blend-screen opacity-40 md:opacity-30 blur-[130px] md:blur-[220px] pointer-events-none"></div>
      
      {/* Middle right blob (Connecting Hero and TechStack) */}
      <div className="absolute top-[25%] right-[-10%] w-[60vw] max-w-[700px] aspect-square bg-[#A606B3] rounded-full mix-blend-screen opacity-40 md:opacity-30 blur-[130px] md:blur-[250px] pointer-events-none"></div>
      
      {/* Bottom left blob (TechStack area) */}
      <div className="absolute top-[65%] left-[-10%] w-[50vw] max-w-[650px] aspect-square bg-[#5B039B] rounded-full mix-blend-screen opacity-40 md:opacity-30 blur-[130px] md:blur-[200px] pointer-events-none"></div>

      <div className="relative z-10 w-full">
        <Hero />
        <TechStack />
      </div>
    </main>
  );
}
