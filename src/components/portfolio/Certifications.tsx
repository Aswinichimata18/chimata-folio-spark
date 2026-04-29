import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";

const certs = [
  {
    name: "Oracle Certification",
    issuer: "Oracle",
    desc: "Certified in core Oracle technologies — validating database & cloud fundamentals.",
    badge: "🏛️",
    link: "https://www.oracle.com/education/certification/",
  },
  {
    name: "Google Skill Boost",
    issuer: "Google Cloud",
    desc: "Hands-on labs and quests covering cloud, AI, and modern web development.",
    badge: "☁️",
    link: "https://www.cloudskillsboost.google/",
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Credentials & badges"
      description="Continuous learning through industry-recognized certifications."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass rounded-3xl p-7 hover-lift flex gap-5 items-start"
          >
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-primary flex items-center justify-center text-3xl shadow-glow">
              {c.badge}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-lg group-hover:text-gradient transition-smooth">{c.name}</h3>
                  <p className="text-xs text-muted-foreground font-medium">{c.issuer}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary font-medium">
                <Award className="w-3 h-3" /> Verified credential
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
