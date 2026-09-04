// app/components/sections/Hero.tsx
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  const PROFILE_IMAGE_PATH = "/other_images/Anga.jpg";

  return (
    <section className="max-w-6xl mx-auto px-4 my-8">
      {/* Outer Card Container with bg-graph-paper Restored */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-3 border-black bg-white bg-graph-paper shadow-[8px_8px_0px_0px_#000] overflow-hidden mb-12">
        
        {/* Left Column */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b-3 lg:border-b-0 lg:border-r-3 border-black">
          <div className="space-y-5">
            <div className="inline-block brutal-btn bg-[#C6F135] px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest border-2 border-black">
              Hey, I&apos;m Anga Peter
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight leading-none text-black">
              SOFTWARE DEVELOPER <br />
              <span className="bg-[#FF6B9D] px-2 border-2 border-black text-white inline-block mt-2">
                &amp; SECURITY 
              </span>
            </h1>

            <p className="text-base font-medium text-black max-w-lg leading-relaxed">
              Building robust applications, active defense SIEM tools, and high-performance web systems with clean architecture.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="brutal-btn bg-[#C6F135] text-black font-mono text-sm font-bold uppercase px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                VIEW MY WORK ↗
              </a>
              <a
                href="https://drive.google.com/file/d/1Zs5QuL_Et6UwYxmgWwExphj3EtWGcYOT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-white text-black font-mono text-sm font-bold uppercase px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                DOWNLOAD RESUME ↓
              </a>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="pt-8 space-y-3">
            <span className="font-mono text-xs font-bold uppercase text-black tracking-wider block">
              CONNECT WITH ME
            </span>
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/AngaIV"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center font-bold text-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#C6F135] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/AngaIV"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center font-bold text-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#7B5FE8] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Data Analytics Portfolio */}
              <a
                href="https://sites.google.com/view/anga-peter-portfolio?usp=sharing"
                aria-label="Data Analytics Portfolio"
                className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center font-bold text-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FF6B9D] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M4 21h16v-2H4v2zM7 17h2v-7H7v7zm4 0h2V4h-2v13zm4 0h2v-4h-2v4z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:angapeter@outlook.com"
                aria-label="Send Email"
                className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center font-bold text-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#C6F135] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column*/}
        <div className="lg:col-span-6 bg-[#FF6B9D] p-8 lg:p-12 relative flex items-center justify-center min-h-[460px]">
          
          {/* Top-Right Decorative Badge */}
          <div className="absolute top-4 right-4 z-30 font-mono text-xs font-bold bg-[#C6F135] text-black px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase tracking-wider">
            ★ Active
          </div>

          {/* Layered Composition Container */}
          <div className="relative w-full max-w-[320px] aspect-[4/5] my-4 flex items-center justify-center">

            {/* BACK LAYER: Lime Green (#C6F135) Offset Rectangle */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#C6F135] border-3 border-black z-0" />

            {/* MIDDLE LAYER: Static Profile Image Card */}
            <div className="relative z-10 w-full h-full bg-[#F5F3EE] border-3 border-black overflow-hidden">
              <Image
                src={PROFILE_IMAGE_PATH}
                alt="Profile Headshot"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* FRONT LAYER: Purple Terminal Card (Overlapping Bottom-Right Corner) */}
            <div className="absolute -bottom-6 -right-6 z-20 w-[85%] bg-[#7B5FE8] text-white border-3 border-black p-4 shadow-[6px_6px_0px_0px_#000]">
              <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-black/40">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B9D] border border-black" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C6F135] border border-black" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                </div>
                <span className="font-mono text-[10px] text-[#C6F135] font-bold">
                  developer.ts
                </span>
              </div>

              <pre className="font-mono text-[11px] leading-tight text-white space-y-1 overflow-x-auto">
                <code>
                  <div><span className="text-[#C6F135]">const</span> dev = &#123;</div>
                  <div className="pl-3">role: <span className="text-[#C6F135]">&apos;Security & Fullstack&apos;</span>,</div>
                  <div className="pl-3">status: <span className="text-[#C6F135]">&apos;Building&apos;</span></div>
                  <div>&#125;;</div>
                </code>
              </pre>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}