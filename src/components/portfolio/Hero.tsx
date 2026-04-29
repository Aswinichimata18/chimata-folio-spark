import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, FolderGit2, Github, Linkedin } from "lucide-react";
import profile from "@/assets/profile.jpg";

const ROLES = [
  "Frontend Developer",
  "AI Enthusiast",
  "Full-Stack Learner",
  "Problem Solver",
];

function Typed() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = ROLES[i];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((i + 1) % ROLES.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle bg-primary ml-1 animate-blink" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* animated mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh -z-10" />
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-blob -z-10" />
      <div className="absolute top-40 -right-20 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-blob -z-10" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for internships
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <br />
            <span className="text-gradient">Chimata Aswini</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground min-h-[2.5rem]">
            I'm a <Typed />
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            Building smart and beautiful web experiences — blending thoughtful design with the power of AI.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover-lift"
            >
              <FolderGit2 className="w-4 h-4" /> View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium hover-lift"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium hover:bg-secondary transition-smooth"
            >
              <Mail className="w-4 h-4" /> Hire Me
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a href="https://github.com/Aswinichimata18" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-secondary transition-smooth" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/aswini-chimata-9a145035b/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-secondary transition-smooth" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:aswinichimata07@gmail.com" className="p-2 rounded-lg hover:bg-secondary transition-smooth" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-50 animate-blob" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glass shadow-elegant animate-float">
              <img
                src={profile}
                alt="Chimata Aswini"
                width={768}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-elegant hidden md:block">
              <div className="text-2xl font-bold text-gradient">​</div>
              <div className="text-xs text-muted-foreground">
</div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-elegant hidden md:block">
              <div className="text-2xl font-bold text-gradient">
</div>
              <div className="text-xs text-muted-foreground">
</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
