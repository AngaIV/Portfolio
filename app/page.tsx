// app/page.tsx
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import SkillsStrip from "./components/sections/SkillsStrip";
import ProjectsAndCerts from "./components/sections/ProjectsAndCerts";
import ExperienceAndContact from "./components/sections/ExperienceAndContact";

export default function Home() {
  return (
    <main className="min-h-screen pb-16 bg-[#F5F3EE]">
      <Navbar />
      <Hero />
      <SkillsStrip />
      <ProjectsAndCerts />
      <ExperienceAndContact />
      
      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4">
        <div className="brutal-card-lime px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-bold uppercase">
          <p>© {new Date().getFullYear()} Anga Peter. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/AngaIV" target="_blank" className="hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/AngaIV" target="_blank" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}