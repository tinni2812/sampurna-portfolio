import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { GraduationCap } from "lucide-react";

const items = [
  {
    school: "Vellore Institute of Technology",
    degree: "B.Tech, Computer Science Engineering",
    period: "2023 – 2027",
    score: "CGPA: 8.96",
  },
  {
    school: "Asansol North Point School",
    degree: "Class XII (PCM)",
    period: "2022",
    score: "91.2%",
  },
  {
    school: "India International School",
    degree: "Class X",
    period: "2020",
    score: "96.33%",
  },
];

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Academic journey." />
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex md:items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-10">
                <div className="glass glow-border rounded-2xl p-6 shadow-card hover:shadow-glow transition">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <div className="font-display font-semibold text-lg">{it.school}</div>
                      <div className="text-sm text-muted-foreground">{it.degree}</div>
                      <div className="mt-3 flex items-center justify-between text-xs font-mono">
                        <span className="text-muted-foreground">{it.period}</span>
                        <span className="text-gradient font-semibold">{it.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
