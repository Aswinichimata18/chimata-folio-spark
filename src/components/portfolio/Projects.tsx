import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Cpu, GraduationCap, LineChart } from "lucide-react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

const projects = [
  {
    icon: Cpu,
    name: "Home Automation using Python & IoT",
    category: "AI",
    tags: ["IoT", "Full Stack", "AI"],
    problem: "Need for remote control of home appliances.",
    solution: "Built an IoT-based automation system using Python.",
    features: ["Device control", "Automation scheduling", "Real-time monitoring"],
    stack: { Frontend: "HTML, CSS, JS", Backend: "Python (Flask)", Database: "SQLite/MySQL", APIs: "Weather API" },
    learnings: "IoT integration, REST APIs, real-time systems",
  },
  {
    icon: GraduationCap,
    name: "Online Learning Platform",
    category: "Full Stack",
    tags: ["Full Stack"],
    problem: "Difficulty accessing structured learning resources.",
    solution: "Created a platform for courses and certifications.",
    features: ["User login", "Course management", "Certification system"],
    stack: { Frontend: "HTML, CSS, JS", Backend: "Python (Django)", Database: "MySQL" },
    learnings: "Authentication systems, database management",
  },
  {
    icon: LineChart,
    name: "Car Price Prediction",
    category: "AI",
    tags: ["AI", "ML"],
    problem: "Uncertainty in estimating car resale value.",
    solution: "Machine learning model for accurate price prediction.",
    features: ["Data analysis", "Prediction model", "User input interface"],
    stack: { Frontend: "HTML, CSS, JS", Backend: "Python (Flask)", ML: "Scikit-learn, Pandas, NumPy" },
    learnings: "ML model building, data preprocessing",
  },
];

const filters = ["All", "React", "Full Stack", "AI"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = projects.filter((p) =>
    filter === "All" ? true : p.tags.includes(filter)
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="A selection of projects spanning AI, full-stack apps, and IoT."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-smooth",
              filter === f
                ? "bg-gradient-primary text-primary-foreground shadow-glow"
                : "glass hover:bg-secondary"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group glass rounded-3xl p-6 hover-lift flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex gap-1">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition-smooth">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-3"><span className="font-semibold text-foreground/80">Problem:</span> {p.problem}</p>
              <p className="text-sm text-muted-foreground mb-4"><span className="font-semibold text-foreground/80">Solution:</span> {p.solution}</p>

              <div className="space-y-2 mb-4">
                <div className="text-xs font-semibold text-foreground/80">Features</div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><span className="text-primary">▸</span>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1 mb-4 text-xs">
                {Object.entries(p.stack).map(([k, v]) => (
                  <div key={k} className="flex gap-2">
                    <span className="font-semibold text-foreground/80 min-w-16">{k}:</span>
                    <span className="text-muted-foreground">{v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground italic">📚 {p.learnings}</span>
                <div className="flex gap-2">
                  <a href="https://github.com/Aswinichimata18" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-secondary transition-smooth" aria-label="Code">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://github.com/Aswinichimata18" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-secondary transition-smooth" aria-label="Link">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
