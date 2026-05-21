import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Education } from "@/components/portfolio/Education";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sampurna Das — Full Stack Developer & AI/ML Enthusiast" },
      { name: "description", content: "Portfolio of Sampurna Das, B.Tech CSE student at VIT. Full Stack Developer, AI/ML Enthusiast. 500+ DSA solved, AWS GenAI certified." },
      { property: "og:title", content: "Sampurna Das — Developer Portfolio" },
      { property: "og:description", content: "Computer Science student building AI, full-stack and IoT projects." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Loader />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
