import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { GitHubSection } from "@/components/portfolio/GitHub";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chimata Aswini — Frontend Developer & AI Enthusiast" },
      { name: "description", content: "Portfolio of Chimata Aswini — building smart and beautiful web experiences with React, AI, and modern web tech." },
      { property: "og:title", content: "Chimata Aswini — Portfolio" },
      { property: "og:description", content: "Frontend Developer & AI Enthusiast — projects, skills, certifications, and contact." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <GitHubSection />
        <Education />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
}
