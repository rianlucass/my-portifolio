import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pb-12 pt-16 flex justify-center relative z-10 px-6">
      <div className="w-full max-w-[1200px] flex flex-col items-center md:items-start">
        {/* Pill Container */}
        <div className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-full px-8 py-5 flex items-center justify-between transition-all hover:border-white/10">
          <span className="text-[#888888] font-medium text-sm md:text-base">
            Follow me
          </span>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/rianlucass" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#a87ffb] hover:text-[#d1bbfd] transition-transform hover:scale-110" 
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/rian-lucas-961129280" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#a87ffb] hover:text-[#d1bbfd] transition-transform hover:scale-110" 
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="mailto:contato@rianlucas.com" 
              className="text-[#a87ffb] hover:text-[#d1bbfd] transition-transform hover:scale-110" 
              aria-label="Email"
            >
              <Mail size={20} strokeWidth={2.5} />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <p className="mt-8 ml-2 md:ml-6 text-[#555555] text-xs font-medium tracking-wide">
          Rian Lucas © {currentYear}
        </p>
      </div>
    </footer>
  );
}
