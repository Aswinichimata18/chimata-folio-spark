import { motion } from "framer-motion";
import { Trophy, Users, Rocket, Lightbulb, Zap, HeartHandshake } from "lucide-react";
import { Section } from "./Section";

const achievements = [
  { icon: Trophy, title: "2× Hackathon Winner", desc: "Won top placements in competitive hackathons." },
  { icon: Users, title: "4× Hackathon Participant", desc: "Collaborated with diverse teams under pressure." },
  { icon: Rocket, title: "Multiple real-world projects", desc: "Shipped IoT, ML, and full-stack apps end-to-end." },
];

const activities = [
  { icon: Lightbulb, title: "Hackathon enthusiast", desc: "Active participant in coding marathons." },
  { icon: HeartHandshake, title: "Team collaboration", desc: "Strong teamwork & cross-functional skills." },
  { icon: Zap, title: "Rapid prototyping", desc: "Comfortable iterating quickly on tough problems." },
];

export function Achievements() {
  return (
    <>
      <Section
        id="achievements"
        eyebrow="Achievements"
        title="Milestones I'm proud of"
      >
        <div className="grid md:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover-lift"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
                <a.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        id="activities"
        eyebrow="Activities & Leadership"
        title="How I show up"
      >
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary-glow opacity-40" />
          <div className="space-y-8">
            {activities.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex md:items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                <div className="ml-12 md:ml-0 md:w-1/2 glass rounded-2xl p-5 hover-lift">
                  <div className="flex items-center gap-3 mb-2">
                    <a.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-bold">{a.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
