import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-center shadow-elegant"
        >
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground tracking-tight">
              Open to internships<br className="md:hidden" /> & opportunities
            </h2>
            <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">
              Let's collaborate on something meaningful. I'm ready to bring energy, ideas, and code.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-background text-foreground font-semibold hover-lift"
            >
              Hire Me <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
