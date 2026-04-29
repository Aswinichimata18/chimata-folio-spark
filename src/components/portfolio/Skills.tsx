import { motion } from "framer-motion";
import { Code, Layout, Server, Database } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    icon: Code,
    title: "Languages",
    skills: [
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "C++", level: 78 },
      { name: "C", level: 75 },
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 75 },
      { name: "PHP", level: 65 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="My toolbox"
      description="Languages, frameworks, and tools I use to bring ideas to life."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass rounded-2xl p-6 hover-lift"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <g.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <ul className="space-y-3">
              {g.skills.map((s) => (
                <li key={s.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
