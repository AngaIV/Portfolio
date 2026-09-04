'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { projectsData } from "@/data/projects";
import { certificationsData } from "@/data/certifications";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  theme?: string;
  github?: string;
  githubUrl?: string;
}

export default function ProjectsAndCerts() {
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);

  // Fallback array if projectsData needs fallback structure or mapping
  const featuredProjects = projectsData.length > 0 ? projectsData.slice(0, 5) : [
    {
      id: 'winharden',
      title: 'WINHARDEN',
      description: 'Windows security auditing tool (C#) that identifies weaknesses and automates remediation.',
      tags: ['C#', 'Windows Security', 'Automation'],
      theme: 'security',
      github: 'https://github.com/AngalV/WinHarden',
    },
    {
      id: 'sec-ops-lab',
      title: 'SECURITY OPERATIONS LAB',
      description: 'Python/CustomTkinter desktop app unifying defensive/offensive tools with live traffic monitoring via tcpdump.',
      tags: ['Python', 'CustomTkinter', 'Linux'],
      theme: 'lab',
      github: 'https://github.com/AngalV/SEC-OPS-Lab',
    },
    {
      id: 'active-defense-siem',
      title: 'ACTIVE DEFENCE SIEM SYSTEM',
      description: 'Wazuh SIEM/XDR integrated with iptables to auto-block IPs on SSH brute-force detection.',
      tags: ['Wazuh', 'SIEM', 'Firewall'],
      theme: 'siem',
      github: 'https://github.com/AngalV',
    },
    {
      id: 'ecommerce-platform',
      title: 'RIVER OF LIFE CHURCH E-COMMERCE PLATFORM',
      description: 'This is a frontend web platform built as an assignment for a CS3 Web Technology course. It combines standard church community pages with an interactive e-commerce store layout.',
      tags: ['HTML', 'PHP', 'MySQL'],
      theme: 'web',
      github: 'https://github.com/AngalV',
    },
    {
      id: 'intergalactic-war',
      title: 'INTERGALACTIC WAR',
      description: '2D arcade game in Java with AI, collision detection, and power-ups.',
      tags: ['Java', 'OOP', 'Game Dev'],
      theme: 'game',
      github: 'https://github.com/AngalV',
    },
  ];

  const handleNext = () => {
    setCurrentProjectIdx((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    setCurrentProjectIdx((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const currentProject = featuredProjects[currentProjectIdx];

  const renderVectorMotif = (index: number) => {
    switch (index % 5) {
      case 0: // Security 
        return (
          <svg className="w-16 h-16 text-[#C6F135] fill-current" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
          </svg>
        );
      case 1: // Lab (Terminal Motif)
        return (
          <svg className="w-16 h-16 text-[#FF6B9D] fill-current" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H7v-2h8v2zm3-4H7v-2h11v2zm0-4H7V8h11v2z" />
          </svg>
        );
      case 2: // SIEM (Radar/Alert Motif)
        return (
          <svg className="w-16 h-16 text-[#7B5FE8] fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        );
      case 3: // Web / E-Commerce (Cart Motif)
        return (
         <svg className="w-16 h-16 text-[#FF6B9D] fill-current" viewBox="0 0 24 24">
            <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
        );
      case 4: // Game (Gamepad Motif)
        return (
           <svg className="w-16 h-16 text-[#C6F135] fill-current" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 mb-12">
      {/* Layout: Two-column  */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Featured Projects Carousel */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            {/* Headline + "VIEW ALL PROJECTS →" + Nav arrows top-right */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-3 border-b-3 border-black">
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black">
                FEATURED PROJECTS
              </h2>

              <div className="flex items-center gap-4">
                {/*<Link
                  href="/projects"
                  className="font-mono text-xs font-bold uppercase text-black hover:text-[#7B5FE8] flex items-center gap-1 underline underline-offset-4"
                >
                  VIEW ALL PROJECTS →
                </Link>*/}
                
                {/* Nav arrows top-right */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous project"
                    className="w-8 h-8 bg-[#F5F3EE] border-2 border-black flex items-center justify-center font-bold hover:bg-[#C6F135] transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next project"
                    className="w-8 h-8 bg-[#F5F3EE] border-2 border-black flex items-center justify-center font-bold hover:bg-[#C6F135] transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Project Carousel Card */}
            <div className="brutal-card p-0 bg-[#F5F3EE] overflow-hidden border-3 border-black shadow-[6px_6px_0px_0px_#000]">
              {/* Card Structure: Screenshot / illustration area on top */}
              <div className="w-full h-48 bg-black p-6 flex flex-col items-center justify-center relative border-b-3 border-black">
                <div className="absolute top-3 left-3 font-mono text-[10px] text-[#C6F135] uppercase font-bold tracking-wider">
            
                </div>
                {renderVectorMotif(currentProjectIdx)}
              </div>

              {/* Title in bold caps below, short description, tag pills, VIEW DETAILS button */}
              <div className="p-6 bg-white space-y-4">
                <h3 className="text-2xl font-extrabold uppercase text-black">
                  {currentProject.title}
                </h3>
                <p className="text-sm font-medium text-black leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {currentProject.tags?.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="font-mono text-[11px] font-bold uppercase bg-[#F5F3EE] text-black px-2.5 py-1 border border-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* "VIEW DETAILS →" Button linking directly to GitHub */}
                <div className="pt-2">
                  <a
                    href={(currentProject as any).githubUrl || (currentProject as any).github || "https://github.com/AngalV"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block brutal-btn bg-[#7B5FE8] text-white font-mono text-xs font-bold uppercase px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                  >
                    VIEW DETAILS →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination dots below*/}
          <div className="flex items-center justify-center gap-2 pt-6">
            {featuredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentProjectIdx(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`h-3 border-2 border-black transition-all ${
                  idx === currentProjectIdx
                    ? 'bg-[#FF6B9D] w-8'
                    : 'bg-zinc-200 hover:bg-zinc-400 w-3'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Certifications Sidebar */}
        <div id="certifications" className="lg:col-span-4">
          <div className="brutal-card-lime p-6 h-full flex flex-col justify-between border-3 border-black shadow-[6px_6px_0px_0px_#000]">
            <div>
              <h2 className="text-2xl font-extrabold uppercase mb-6 border-b-3 border-black pb-2 text-black">
                CERTIFICATIONS
              </h2>

              {/* Stacked gray cards */}
              <div className="space-y-4">
                {(certificationsData.length > 0 ? certificationsData.slice(0, 4) : [
                  { id: '1', title: 'Certified in Cybersecurity (ISC2)', issuer: 'ISC2' },
                  { id: '2', title: 'Google Cybersecurity Certificate', issuer: 'Google' },
                  { id: '3', title: 'Analyzing Data in Tableau (DataCamp)', issuer: 'DataCamp' },
                  { id: '4', title: 'Analyzing Data in Tableau (DataCamp)', issuer: 'DataCamp' },
                ]).map((cert) => (
                  <div key={cert.id} className="brutal-card p-4 bg-[#F5F3EE] border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                    {cert.issuer && (
                      <p className="font-mono text-[10px] font-bold text-[#7B5FE8] uppercase mb-0.5">
                        {cert.issuer}
                      </p>
                    )}
                    <h4 className="font-bold text-sm uppercase text-black leading-tight">
                      {cert.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* "VIEW ALL CERTIFICATIONS →" Button */}
            <div className="mt-8 pt-4 border-t-3 border-black">
              <Link
                href="/certifications"
                className="w-full text-center block brutal-btn bg-black text-white font-mono text-xs font-bold uppercase py-3 px-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-white hover:text-black transition-colors"
              >
                VIEW ALL CERTIFICATIONS →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}