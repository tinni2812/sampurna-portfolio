import { motion } from "framer-motion";
import { useState } from "react";
import { Section, SectionHeading } from "./Section";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: FaGithub, href: "https://github.com/tinni2812", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/", label: "LeetCode" },
  { icon: Mail, href: "mailto:sampurna282003@gmail.com", label: "Email" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title="Let's build something together." subtitle="Open to internships, full-time SDE / AI roles, and interesting collaborations." />
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <a href="mailto:sampurna282003@gmail.com" className="glass rounded-2xl p-5 shadow-card hover:shadow-glow flex items-center gap-4 transition group">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow"><Mail className="h-5 w-5 text-primary-foreground" /></div>
            <div>
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Email</div>
              <div className="font-medium group-hover:text-gradient transition">sampurna282003@gmail.com</div>
            </div>
          </a>
          <a href="tel:+917811088648" className="glass rounded-2xl p-5 shadow-card hover:shadow-glow flex items-center gap-4 transition group">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow"><Phone className="h-5 w-5 text-primary-foreground" /></div>
            <div>
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Phone</div>
              <div className="font-medium group-hover:text-gradient transition">+91 78110 88648</div>
            </div>
          </a>
          <div className="glass rounded-2xl p-5 shadow-card flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow"><MapPin className="h-5 w-5 text-primary-foreground" /></div>
            <div>
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Location</div>
              <div className="font-medium">Asansol, West Bengal, India</div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank" rel="noreferrer"
                aria-label={s.label}
                className="h-12 w-12 grid place-items-center glass rounded-xl hover:shadow-glow hover:-translate-y-1 hover:text-primary transition"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}
          className="glass glow-border rounded-2xl p-6 shadow-card space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Name</label>
              <input required className="mt-1.5 w-full bg-input/40 rounded-lg border border-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition" />
            </div>
            <div>
              <label className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Email</label>
              <input required type="email" className="mt-1.5 w-full bg-input/40 rounded-lg border border-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition" />
            </div>
          </div>
          <div>
            <label className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Subject</label>
            <input className="mt-1.5 w-full bg-input/40 rounded-lg border border-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition" />
          </div>
          <div>
            <label className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Message</label>
            <textarea required rows={5} className="mt-1.5 w-full bg-input/40 rounded-lg border border-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none" />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            <Send className="h-4 w-4" /> {sent ? "Message Sent ✓" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-8 px-6 text-center text-xs text-muted-foreground font-mono">
      © {new Date().getFullYear()} Sampurna Das · Crafted with React & Framer Motion
    </footer>
  );
}
