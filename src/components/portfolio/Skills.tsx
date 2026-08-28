import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";

const groups = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "SQL", "Java", "Python", "C", "C++"],
  },
  {
    title: "Web Technologies",
    items: ["Next.js", "Node.js", "Express.js", "NextAuth", "HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Database & Tools",
    items: ["PostgreSQL", "Prisma", "AWS", "Version Control Workflow", "SQL", "MySQL", "Git", "GitHub"],
  },
  {
    title: "Core Concepts",
    items: ["Class & System Design", "Database Design", "Unit Testing", "DSA", "OOPs", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    title: "Technologies",
    items: ["Machine Learning", "AI/ML", "NLP", "IoT", "REST APIs"],
  },
  {
    title: "Soft Skills",
    items: ["Problem Solving", "Teamwork", "Communication", "Leadership", "Adaptability", "Quick Learning"],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="Tools I build with." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative glass rounded-2xl p-6 shadow-card hover:shadow-glow transition overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-20 blur-2xl transition" />
            <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-sm hover:border-primary hover:text-primary hover:-translate-y-0.5 transition"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
