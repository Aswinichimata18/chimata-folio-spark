import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Chimata Aswini</span>. Crafted with React & Tailwind.
        </p>
        <div className="flex items-center gap-2">
          <a href="https://github.com/Aswinichimata18" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-secondary transition-smooth">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/aswini-chimata-9a145035b/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-secondary transition-smooth">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:aswinichimata07@gmail.com" aria-label="Email" className="p-2 rounded-lg hover:bg-secondary transition-smooth">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
