import { motion } from "framer-motion";
import { Github, Star, GitFork, Activity } from "lucide-react";
import { Section } from "./Section";

const USER = "Aswinichimata18";

const repos = [
  { name: "home-automation", desc: "IoT-based home automation using Python & Flask.", lang: "Python" },
  { name: "online-learning-platform", desc: "Full-stack platform for courses & certifications.", lang: "Python" },
  { name: "car-price-prediction", desc: "ML model for estimating car resale value.", lang: "Jupyter" },
];

export function GitHubSection() {
  return (
    <Section
      id="github"
      eyebrow="GitHub"
      title="My open source corner"
      description="A glimpse into my coding activity and top repositories."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.a
          href={`https://github.com/${USER}`}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6 hover-lift bg-gradient-mesh"
        >
          <Github className="w-10 h-10 text-primary mb-4" />
          <div className="text-sm text-muted-foreground">@{USER}</div>
          <div className="text-2xl font-bold text-gradient mt-1">View Profile</div>
          <div className="grid grid-cols-3 gap-2 mt-6">
            {[
              { l: "Repos", v: "15+" },
              { l: "Stars", v: "20+" },
              { l: "Streak", v: "🔥" },
            ].map((s) => (
              <div key={s.l} className="text-center p-2 rounded-xl bg-secondary/60">
                <div className="font-bold">{s.v}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass rounded-3xl p-3 hover-lift overflow-hidden"
        >
          <img
            src={`https://ghchart.rshah.org/8B5CF6/${USER}`}
            alt="GitHub contribution graph"
            loading="lazy"
            className="w-full rounded-2xl"
          />
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-2">
            <Activity className="w-3 h-3" /> Contribution activity
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-6">
        {repos.map((r, i) => (
          <motion.a
            key={r.name}
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-5 hover-lift group"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-sm group-hover:text-gradient transition-smooth">📁 {r.name}</h3>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Star className="w-3 h-3" />0</span>
                <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />0</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-3">{r.desc}</p>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{r.lang}</span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
