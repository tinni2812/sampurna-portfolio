import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const titles = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Problem Solver",
  "B.Tech CSE Student",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1200);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient font-display font-semibold">
      {text}
      <span className="inline-block w-0.5 h-[1em] align-middle ml-1 bg-primary animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 px-6">
      <div className="mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6"
        >
          <span className="glass rounded-full px-4 py-1.5 text-xs font-mono text-muted-foreground inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_oklch(0.8_0.2_145)]" />
            Available for internships & placements
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
            Hi, I'm <br className="sm:hidden" />
            <span className="text-gradient">Sampurna Das</span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl text-foreground/90 font-display min-h-[1.5em]">
            <Typewriter />
          </div>

          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Passionate Computer Science student skilled in <span className="text-foreground">Java</span>,{" "}
            <span className="text-foreground">AI/ML</span>, full-stack development, and problem solving.
            Building AI-powered, IoT, and web-based applications with a strong DSA foundation —{" "}
            <span className="text-gradient font-semibold">500+ LeetCode problems solved</span>.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] active:scale-100 transition"
            >
              <Download className="h-4 w-4 group-hover:-translate-y-0.5 transition" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="glass glow-border inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="https://github.com/tinni2812"
              target="_blank" rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium hover:bg-white/5 transition"
            >
              <FaGithub className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://leetcode.com/"
              target="_blank" rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium hover:bg-white/5 transition"
            >
              <SiLeetcode className="h-4 w-4 text-[#FFA116]" /> LeetCode
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground mt-6 font-mono">
            <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" /> Asansol, West Bengal</span>
            <a href="mailto:sampurna282003@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground transition"><Mail className="h-3.5 w-3.5 text-primary" /> sampurna282003@gmail.com</a>
            <a href="tel:+917811088648" className="inline-flex items-center gap-2 hover:text-foreground transition"><Phone className="h-3.5 w-3.5 text-primary" /> +91 78110 88648</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
