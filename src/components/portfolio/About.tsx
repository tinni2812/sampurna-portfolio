import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { GraduationCap, Code2, Brain, Trophy } from "lucide-react";

const stats = [
  { label: "CGPA", value: "8.96", icon: GraduationCap },
  { label: "LeetCode Solved", value: "500+", icon: Code2 },
  { label: "Projects Built", value: "5+", icon: Brain },
  { label: "HackerRank ★", value: "5★", icon: Trophy },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About Me" title="A builder, learner, and problem solver." />
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass glow-border rounded-2xl p-8 shadow-card"
        >
          <p className="text-foreground/90 leading-relaxed">
            I'm a <span className="text-gradient font-semibold">B.Tech CSE student at Vellore Institute of Technology</span> (Batch 2023–2027),
            currently holding a CGPA of <span className="text-foreground font-semibold">8.96</span>. I love turning ideas into shipped
            software — from AI-driven resume screeners and face recognition systems to IoT irrigation rigs and full-stack web apps.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            My foundations are strong in <span className="text-foreground">Data Structures & Algorithms</span>,{" "}
            <span className="text-foreground">OOPs</span>, <span className="text-foreground">DBMS</span>,{" "}
            <span className="text-foreground">Operating Systems</span>, and <span className="text-foreground">Computer Networks</span>.
            I've solved <span className="text-foreground font-semibold">500+ DSA problems</span> on LeetCode and earned 5★ on HackerRank
            in Java, SQL and Problem Solving.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I'm actively looking for internships and full-time SDE / AI roles where I can ship real impact.
          </p>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 shadow-card hover:shadow-glow transition"
            >
              <s.icon className="h-6 w-6 text-primary mb-3" />
              <div className="text-3xl font-bold font-display text-gradient">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
