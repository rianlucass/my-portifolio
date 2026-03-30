import { Video, Mail } from "lucide-react";

const navLinks = [
  { label: "projetos", href: "#experience" },
  { label: "trabalhos", href: "#work" },
];

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.814 1.103.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 0 1-1.98-1.98c0-1.093.887-1.98 1.98-1.98s1.98.887 1.98 1.98a1.98 1.98 0 0 1-1.98 1.98zm1.992 13.019H3.345V9h3.984v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-6 px-5 py-3 rounded-full bg-dark-gray border border-white/5 shadow-lg">
        <a href="#" className="text-light-gray font-semibold text-sm tracking-wide">
          rianlucas
        </a>

        <div className="flex items-center gap-5">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-purple text-sm hover:text-purple/80 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 ml-4">
          <a
            href="https://github.com/rianlucass"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple hover:text-purple/70 transition-colors"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/rian-lucas-961129280"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple hover:text-purple/70 transition-colors"
          >
            <LinkedInIcon />
          </a>

          <a
            href="mailto:rianlucas1636@gmail.com"
            aria-label="Email"
            className="text-purple hover:text-purple/70 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
