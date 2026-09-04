// app/components/sections/Navbar.tsx
import ThemeToggle from '@/components/ThemeToggle';
export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 mb-8">
      <div className="brutal-card px-6 py-4 flex items-center justify-between">
        {/*Brand Logo*/}
        <a href="/" className="flex items-center gap-2 font-mono font-bold text-xl uppercase tracking-tighter">
          <span className="bg-[#C6F135] px-2 py-0.5 border-2 border-black">&lt;/&gt;</span>
          <span>Anga.dev</span>
        </a>

        {/*Center Links*/}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase font-bold tracking-wider">
          <a href="#skills" className="hover:underline hover:text-[#7B5FE8]">Skills</a>
          <a href="/#projects" className="hover:underline hover:text-[#7B5FE8]">Projects</a>
          <a href="/#experience" className="hover:underline hover:text-[#7B5FE8]">Experience</a>
          <a href="/certifications" className="hover:underline hover:text-[#7B5FE8]">Certifications</a>
        </nav>

        {/*Action Button*/}
        <a
          href="/#contact"
          className="brutal-btn bg-[#7B5FE8] text-white px-5 py-2 text-sm font-mono uppercase tracking-wider"
        >
          Contact Me
        </a>
        
      </div>
    </header>
  );
}