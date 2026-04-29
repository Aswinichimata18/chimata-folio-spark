import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Code2, Rocket } from "lucide-react";
import { Section } from "./Section";

const stats = [
  { icon: GraduationCap, label: "B.Tech Student", value: "SRM AP" },
  { icon: Code2, label: "Projects Built", value: "10+" },
  { icon: Sparkles, label: "Hackathons Won", value: "2" },
  { icon: Rocket, label: "Years Coding", value: "3+" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="A passionate learner & builder">
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 shadow-elegant"
        >
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            I'm a <span className="font-semibold text-gradient">B.Tech student at SRM University AP</span> with a strong passion for web development and artificial intelligence. I love turning ideas into real-world projects, continuously sharpening my technical skills along the way.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            I'm highly motivated to create impactful, user-friendly applications — combining clean design, solid engineering, and a touch of intelligence to deliver experiences that matter.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["React", "AI/ML", "Full-Stack", "Hackathons", "IoT"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 hover-lift"
            >
              <s.icon className="w-6 h-6 text-primary mb-3" />
              <div className="text-2xl font-bold text-gradient">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
