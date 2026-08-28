import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SocietyPulse",
    tag: "Full-Stack Community Management Platform",
    desc: "A role-based society management platform for resident complaints and admin operations, featuring SLA tracking, notifications, complaint analytics, recurring-issue detection, location hotspots, and a Maintenance Health Score.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL (Neon)", "NextAuth", "Vercel"],
    gradient: "from-fuchsia-500/40 to-rose-500/40",
    github: "https://github.com/tinni2812/societypulse",
    demo: "https://societypulse.vercel.app/login",
  },
  {
    title: "HireDesk",
    tag: "AI-Driven Resume Screening",
    desc: "AI-powered resume screening platform using NLP, BERT embeddings, and cosine similarity for candidate ranking. Reduced manual screening time by 60% with 85% matching accuracy.",
    stack: ["Python", "Flask", "NLP", "BERT"],
    gradient: "from-violet-500/40 to-blue-500/40",
    github: "https://github.com/tinni2812",
    demo: null,
  },
  {
    title: "StayEase",
    tag: "Full-Stack Hotel Management",
    desc: "Full-stack hotel management application with room booking and customer management. Responsive UI with a centralized booking workflow.",
    stack: ["React", "JavaScript", "MySQL"],
    gradient: "from-pink-500/40 to-violet-500/40",
    github: "https://github.com/tinni2812",
    demo: null,
  },
  {
    title: "VeriFace",
    tag: "AI Face Recognition",
    desc: "Real-time facial detection and identification system using computer vision techniques for improved authentication accuracy.",
    stack: ["Python", "Machine Learning", "OpenCV"],
    gradient: "from-blue-500/40 to-cyan-500/40",
    github: "https://github.com/tinni2812",
    demo: null,
  },
  {
    title: "TripWise",
    tag: "Travel Planning Website",
    desc: "Responsive travel planning website with interactive trip and destination management. Focused on intuitive UI/UX design.",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    gradient: "from-emerald-500/40 to-blue-500/40",
    github: "https://github.com/tinni2812",
    demo: null,
  },
  {
    title: "Smart Irrigation",
    tag: "IoT-Based Automatic Watering",
    desc: "Smart irrigation system using ESP32, soil moisture sensor and relay module for automated water control. Reduces water wastage through real-time monitoring.",
    stack: ["ESP32", "IoT", "Embedded C", "Blynk", "Arduino"],
    gradient: "from-amber-500/40 to-pink-500/40",
    github: "https://github.com/tinni2812/IoT-Based-Automatic-Irrigation-System",
    demo: null,
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Projects" title="Things I've created." subtitle="A selection of recent work across AI, full-stack, and IoT." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col glass rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition"
          >
            <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(1_0_0/0.15),transparent_60%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-display font-bold text-5xl tracking-tight text-white/90 group-hover:scale-110 transition duration-500">
                  {p.title}
                </div>
              </div>
              <div className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-white/70">{p.tag}</div>
            </div>

            <div className="flex-1 p-6 flex flex-col">
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="text-[11px] font-mono px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                <a
                  href={p.github}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs hover:border-primary hover:text-primary transition"
                >
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs hover:border-primary hover:text-primary transition"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-3 py-1.5 text-xs text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Demo Soon
                  </button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
