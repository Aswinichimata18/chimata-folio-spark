import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    school: "SRM University AP",
    degree: "B.Tech in Computer Science",
    period: "2023 — 2027",
    detail: "CGPA: 7.77 · Active in hackathons & technical clubs.",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="My academic journey">
      <div className="relative max-w-3xl">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary-glow opacity-50" />
        {items.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pl-20 pb-8"
          >
            <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="glass rounded-2xl p-6 hover-lift">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="font-bold text-lg">{e.school}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">{e.period}</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">{e.degree}</p>
              <p className="text-sm text-foreground/80 mt-2">{e.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
