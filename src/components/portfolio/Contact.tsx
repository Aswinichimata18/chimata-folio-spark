import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Section } from "./Section";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  message: z.string().trim().min(10, "Message is too short").max(800),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:aswinichimata07@gmail.com?subject=${subject}&body=${body}`;
      toast.success("Opening your email client…");
      setLoading(false);
    }, 600);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great"
      description="Got an idea, an internship, or just want to say hi? Drop me a message."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-3"
        >
          {[
            { icon: Mail, label: "Email", value: "aswinichimata07@gmail.com", href: "mailto:aswinichimata07@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 81258 23207", href: "tel:+918125823207" },
            { icon: Github, label: "GitHub", value: "Aswinichimata18", href: "https://github.com/Aswinichimata18" },
            { icon: Linkedin, label: "LinkedIn", value: "aswini-chimata", href: "https://linkedin.com/in/aswini-chimata-9a145035b/" },
          ].map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="glass rounded-2xl p-4 flex items-center gap-4 hover-lift">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
                <c.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{c.label}</div>
                <div className="font-medium text-sm truncate">{c.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-4 shadow-elegant"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ch. Aswini"
                maxLength={80}
                className="mt-1 w-full bg-input/40 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                maxLength={160}
                className="mt-1 w-full bg-input/40 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project or opportunity…"
              rows={5}
              maxLength={800}
              className="mt-1 w-full bg-input/40 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover-lift disabled:opacity-60"
          >
            <Send className="w-4 h-4" />
            {loading ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
