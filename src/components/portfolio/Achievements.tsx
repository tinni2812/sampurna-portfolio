import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { Award, Code2, Cloud, BadgeCheck, Cpu, BrainCircuit, Layout, Sparkles } from "lucide-react";

const achievements = [
  { icon: Code2, title: "500+ DSA Problems", desc: "Solved on LeetCode across all difficulty levels." },
  { icon: Award, title: "5★ on HackerRank", desc: "In Java, SQL and Problem Solving." },
  { icon: Cloud, title: "AWS GenAI Certified", desc: "AWS Academy Generative AI Foundations." },
];

const certifications = [
  { icon: Cloud, title: "AWS Academy Generative AI Foundations", issuer: "Amazon Web Services" },
  { icon: BadgeCheck, title: "Oracle Java Foundation Associate", issuer: "Oracle" },
  { icon: BrainCircuit, title: "Machine Learning using Python", issuer: "Certification" },
  { icon: Layout, title: "Frontend Development", issuer: "Certification" },
  { icon: Sparkles, title: "Generative AI", issuer: "Certification" },
];

export function Achievements() {
  return (
    <>
      <Section id="achievements">
        <SectionHeading eyebrow="Achievements" title="Milestones worth celebrating." />
        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative glass glow-border rounded-2xl p-6 shadow-card hover:shadow-glow transition"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow mb-4">
                <a.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg">{a.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="certifications" className="!pt-0">
        <SectionHeading eyebrow="Certifications" title="Always learning." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
              className="glass rounded-2xl p-5 shadow-card hover:shadow-glow flex gap-4 items-start transition"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/30 grid place-items-center shrink-0">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm leading-snug">{c.title}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono">{c.issuer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
