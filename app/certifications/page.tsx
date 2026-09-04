'use client';

import { useState } from 'react';
import Navbar from '../components/sections/Navbar';

interface DetailedCert {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: string;
  description: string;
  skills: string[];
  accentColor: 'pink' | 'purple' | 'lime';
  credlyUrl: string; //URL link to Credly or verification provider
  imagePlaceholder: string; //Image path for certificate preview
  isNew?: boolean;
}

const detailedCerts: DetailedCert[] = [
  {
    id: 'isc2-cc',
    title: 'Certified in Cybersecurity (CC)',
    issuer: 'ISC2',
    issueDate: '2026',
    category: 'Cybersecurity',
    description: 'Information Security, Cybersecurity Governance, and Security Operations (SecOps).',
    skills: ['Information Security', 'Governance', 'SecOps', 'Access Controls'],
    accentColor: 'purple',
    credlyUrl: 'https://www.credly.com/badges/0adbba2d-5cfe-478c-83aa-501ab6940e51/public_url',
    imagePlaceholder: '/cert_images/CC.jpg',
    isNew: true,
  },
  {
    id: 'google-cybersecurity',
    title: 'Google Cybersecurity Certificate',
    issuer: 'Google',
    issueDate: '2026',
    category: 'Cybersecurity',
    description: 'Hands-on practice with Security Information & Event Management (SIEM), Python, SQL, and log analysis.',
    skills: ['SIEM', 'Python', 'SQL', 'Log Analysis', 'Linux'],
    accentColor: 'pink',
    credlyUrl: 'https://coursera.org/share/44494cd1fae47d436239e465ca85ca91',
    imagePlaceholder: '/cert_images/Google_Cybersec.jpg',
    isNew: true,
  },
  {
    id: 'google-cloud-cybersecurity',
    title: 'Google Cloud Cybersecurity Certificate',
    issuer: 'Google Cloud',
    issueDate: '2026',
    category: 'Cloud & Infrastructure',
    description: 'Cloud Cybersecurity, Google Cloud Platform (GCP) infrastructure defense, and incident management.',
    skills: ['GCP', 'Cloud Security', 'Incident Management', 'IAM'],
    accentColor: 'lime',
    credlyUrl: 'https://coursera.org/share/18383dcdcd0dec1ff30171b05dc3598c',
    imagePlaceholder: '/cert_images/Google_Cloud.jpg',
    isNew: true,
  },
  {
    id: 'google-ai-essentials',
    title: 'Google AI Essentials',
    issuer: 'Google',
    issueDate: '2026',
    category: 'AI & Analytics',
    description: 'Core Artificial Intelligence (AI) concepts, AI Literacy, and prompt engineering with Generative AI tools.',
    skills: ['Generative AI', 'AI Literacy', 'Prompting', 'Productivity'],
    accentColor: 'purple',
    credlyUrl: 'https://coursera.org/share/0ff9ec29339f97752fe8780680cc5105',
    imagePlaceholder: '/cert_images/Google_AI.jpg',
    isNew: true,
  },
  {
    id: 'datacamp-ds-business',
    title: 'Data Science for Business',
    issuer: 'DataCamp',
    issueDate: '2025',
    category: 'AI & Analytics',
    description: 'Data literacy fundamentals, strategic management, and driving business decisions through data analysis.',
    skills: ['Data Literacy', 'Strategic Management', 'Analytics'],
    accentColor: 'pink',
    credlyUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ec86b7ea982128e673ba70c81ab1f48ddb528853?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
    imagePlaceholder: '/cert_images/datacamp-ds.jpg',
  },
  {
    id: 'datacamp-tableau',
    title: 'Analyzing Data in Tableau',
    issuer: 'DataCamp',
    issueDate: '2025',
    category: 'AI & Analytics',
    description: 'Interactive dashboard creation, visual data storytelling, calculated fields, and business insights.',
    skills: ['Tableau Desktop', 'Dashboards', 'Data Visualization'],
    accentColor: 'lime',
    credlyUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/193add8d96546182a9dedae62754185582312aa5?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
    imagePlaceholder: '/cert_images/datacamp-tableau.jpg',
  },
  {
    id: 'mastercard-cybersecurity',
    title: 'MasterCard Cybersecurity Job Simulation',
    issuer: 'Forage',
    issueDate: '2026',
    category: 'Cybersecurity',
    description: 'Practical exercise in phishing email analysis and design, security result interpretation, and threat modeling.',
    skills: ['Phishing Analysis', 'Security Simulations', 'Threat Detection'],
    accentColor: 'purple',
    credlyUrl: 'https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_69b0128d509f6298f3a3a113_1773149559937_completion_certificate.pdf',
    imagePlaceholder: '/cert_images/mastercard-forage.jpg',
  },
    {
    id: 'rhodes-bsc',
    title: 'Bachelor of Science (BSc)',
    issuer: 'Rhodes University',
    issueDate: '2026',
    category: 'Degree',
    description: 'Bachelor of Science in Computer Science & Information Systems.',
    skills: ['Data Structures and Algorithms','Systems Analysis and Design',  'Computer Networks', 'Software Engineering', 'Database Systems'],
    accentColor: 'pink',
    credlyUrl: 'https://veri-quik.com/verify/60602',
    imagePlaceholder: '/cert_images/bsc.png',
  },
];

const categories = [
  'All Certifications',
  'Cybersecurity',
  'Cloud & Infrastructure',
  'AI & Analytics',
  'Degree',
];

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState('All Certifications');
  const [sortBy, setSortBy] = useState<'newest' | 'issuer'>('newest');

  // Filter items by category
  const filteredCerts = detailedCerts.filter(
    (cert) => activeCategory === 'All Certifications' || cert.category === activeCategory
  );

  // Sort filtered items by active state
  const sortedCerts = [...filteredCerts].sort((a, b) => {
    if (sortBy === 'newest') {
      return Number(b.issueDate) - Number(a.issueDate);
    } else if (sortBy === 'issuer') {
      return a.issuer.localeCompare(b.issuer);
    }
    return 0;
  });

  return (
    <main className="min-h-screen pb-16 bg-[#F5F3EE] text-black">
      {/* Shared Neo-Brutalist Navbar */}
      <Navbar />

      {/* Page Header */}
      <section className="max-w-6xl mx-auto px-4 mb-8">
        <div className="brutal-card p-6 md:p-8 bg-graph-paper rounded-none relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 brutal-btn bg-[#7B5FE8] text-white px-3 py-1 font-mono text-xs uppercase">
              {/* SVG Badge Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              <span>Verified Credentials</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none text-black">
              CERTIFICATIONS &amp; HONOURS
            </h1>
            <p className="font-medium text-black text-sm md:text-base leading-relaxed">
              Proven credentials, specialized security coursework, and academic awards backing my work at Rhodes University.
            </p>
          </div>

          {/* Motivational Callout Note */}
          <div className="brutal-card bg-white p-4 max-w-xs rotate-1 md:rotate-2">
            <div className="flex items-center gap-2 mb-2 border-b-2 border-black pb-1">
              <svg className="w-4 h-4 text-[#7B5FE8] fill-current" viewBox="0 0 24 24">
                <path d="M13 2L3 14h7v8l10-12h-7z"/>
              </svg>
              <span className="font-mono text-xs font-bold uppercase text-[#7B5FE8]">Astron Energy Scholar</span>
            </div>
            <p className="font-mono text-xs text-black leading-tight">
              Astron Energy Bursary Recipient (2023–2025). Specialized in Software Developmemt, Cybersecurity Operations, and Business Data Analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-6xl mx-auto px-4 mb-10">
        <div className="brutal-card p-0 flex flex-col md:flex-row items-stretch overflow-hidden">
          <div className="brutal-card-purple p-4 md:px-6 flex items-center justify-center border-none border-b-3 md:border-b-0 md:border-r-3 border-black">
            <h2 className="font-mono text-base font-bold text-white uppercase tracking-wider whitespace-nowrap">
              // STATS_OVERVIEW
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 flex-1 bg-white divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF6B9D] border-2 border-black flex items-center justify-center font-bold text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
              </div>
              <div>
                <div className="text-2xl font-extrabold leading-none">{sortedCerts.length}</div>
                <div className="font-mono text-[10px] font-bold uppercase text-black">Active Certs</div>
              </div>
            </div>

            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C6F135] border-2 border-black flex items-center justify-center font-bold text-black">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>
              </div>
              <div>
                <div className="text-2xl font-extrabold leading-none">ISC2</div>
                <div className="font-mono text-[10px] font-bold uppercase text-black">Certified Member</div>
              </div>
            </div>

            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7B5FE8] border-2 border-black flex items-center justify-center font-bold text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.89 9L12 4.57 20.11 9 12 13.43 3.89 9z"/></svg>
              </div>
              <div>
                <div className="text-2xl font-extrabold leading-none">BSc Hons</div>
                <div className="font-mono text-[10px] font-bold uppercase text-black">Rhodes University</div>
              </div>
            </div>

            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF6B9D] border-2 border-black flex items-center justify-center font-bold text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </div>
              <div>
                <div className="text-2xl font-extrabold leading-none">Domains</div>
                <div className="font-mono text-[10px] font-bold uppercase text-black">Dev, Cyber, Data</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Sidebar*/}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Category Filter Panel */}
            <div className="brutal-card p-0 overflow-hidden">
              <div className="brutal-card-pink p-3 border-none border-b-3 border-black">
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Browse by Category
                </h3>
              </div>
              <div className="p-3 bg-white space-y-2">
                {categories.map((cat) => {
                  const count =
                    cat === 'All Certifications'
                      ? detailedCerts.length
                      : detailedCerts.filter((c) => c.category === cat).length;
                  const isActive = activeCategory === cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full flex items-center justify-between p-2 font-mono text-xs font-bold uppercase border-2 border-black transition-all ${
                        isActive
                          ? 'bg-[#FF6B9D] text-white shadow-[2px_2px_0px_0px_#000]'
                          : 'bg-[#F5F3EE] text-black hover:bg-zinc-200'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className="bg-white text-black px-1.5 py-0.5 border border-black text-[10px]">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Credly Direct Link Note */}
            <div className="brutal-card p-5 bg-white relative overflow-hidden">
              <div className="w-0 h-0 border-t-[30px] border-t-[#7B5FE8] border-r-[30px] border-r-transparent absolute top-0 left-0" />
              <div className="flex items-center gap-2 mb-2 pt-1">
                <svg className="w-4 h-4 text-[#7B5FE8] fill-current" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
                <h4 className="font-mono text-xs font-bold uppercase text-black">Instant Verification</h4>
              </div>
              <p className="font-mono text-xs text-black leading-relaxed">
                Clicking any certificate card will directly open its official Credly or issuing organization badge verification page.
              </p>
            </div>

          </div>

          {/* Right Content Area (~75% / 8 cols) */}
          <div className="lg:col-span-8 space-y-6">

            {/* Header Row */}
            <div className="brutal-card p-3 bg-white flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase">
                Showing: <span className="text-[#7B5FE8]">{sortedCerts.length} Certifications</span>
              </span>

              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="font-mono text-xs font-bold uppercase">
                  Sort By:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'issuer')}
                  className="font-mono text-xs font-bold uppercase bg-[#F5F3EE] text-black border-2 border-black px-2 py-1 outline-none cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="issuer">Issuer Name</option>
                </select>
              </div>
            </div>

            {/* Grid of Certification Cards with Image Placeholders and Credly Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedCerts.map((cert) => {
                const stripeBg =
                  cert.accentColor === 'pink'
                    ? 'bg-[#FF6B9D]'
                    : cert.accentColor === 'purple'
                    ? 'bg-[#7B5FE8]'
                    : 'bg-[#C6F135]';

                return (
                  <a
                    key={cert.id}
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-card p-0 bg-white flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-150"
                  >
                    <div>
                      {/* Top Accent Stripe & Badges */}
                      <div className={`${stripeBg} h-3 border-b-3 border-black relative`} />

                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs font-bold uppercase text-[#7B5FE8]">
                            {cert.issuer}
                          </span>
                          <div className="flex items-center gap-1.5">
                            {cert.isNew && (
                              <span className="font-mono text-[9px] font-bold uppercase bg-[#FF6B9D] text-white px-1.5 py-0.5 border border-black">
                                NEW
                              </span>
                            )}
                            {/* Credly External Link Icon */}
                            <span className="w-6 h-6 rounded-full bg-[#F5F3EE] border border-black flex items-center justify-center text-black group-hover:bg-[#C6F135]">
                              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold uppercase leading-tight text-black mb-2 group-hover:text-[#7B5FE8]">
                          {cert.title}
                        </h3>

                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-600 font-bold uppercase mb-3">
                          <svg className="w-3.5 h-3.5 fill-current text-black" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>
                          <span>Issued: {cert.issueDate}</span>
                        </div>

                        <p className="text-xs font-medium text-black leading-relaxed mb-4">
                          {cert.description}
                        </p>

                        {/* Certificate Image Frame */}
                        <div className="brutal-card p-1 bg-[#F5F3EE] mb-4 overflow-hidden relative group-hover:border-[#7B5FE8]">
                          <div className="w-full h-32 bg-white border border-dashed border-black flex items-center justify-center relative overflow-hidden">
                            <img
                              src={cert.imagePlaceholder}
                              alt={cert.title}
                              className="w-full h-full object-cover !object-top block"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skill Tags & CTA Footer */}
                    <div className="p-4 pt-0 border-t-2 border-black/10 mt-auto">
                      <div className="flex flex-wrap gap-1.5 mt-3 mb-2">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-[9px] font-bold uppercase bg-[#F5F3EE] text-black px-2 py-0.5 border border-black"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="font-mono text-[10px] font-bold uppercase text-[#7B5FE8] flex items-center justify-end gap-1">
                        Verify Credential &rarr;
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Closing CTA Band */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="brutal-card-lime p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-black tracking-tight leading-none">
              ALWAYS LEARNING. ALWAYS BUILDING.
            </h2>
            <p className="font-mono text-xs font-bold text-black uppercase">
              // Continously expanding technical capability across Cybersecurity &amp; Systems Architecture.
            </p>
          </div>

          <a
            href="/#projects"
            className="brutal-btn bg-white text-black px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold whitespace-nowrap"
          >
            See What I&apos;m Building &rarr;
          </a>
        </div>
      </section>

      {/* Shared Footer */}
      <footer className="max-w-6xl mx-auto px-4">
        <div className="brutal-card-lime px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-bold uppercase">
          <p>© {new Date().getFullYear()} Anga Peter. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/AngaIV" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/AngaIV" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}