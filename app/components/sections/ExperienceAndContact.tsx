// app/components/sections/ExperienceAndContact.tsx
import { experienceData } from "@/data/experience";

export default function ExperienceAndContact() {
  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-4 mb-16">
        <div className="brutal-card p-0 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Pink Sidebar */}
          <div className="brutal-card-pink p-6 md:w-1/4 flex items-center justify-center border-none border-b-3 md:border-b-0 md:border-r-3 border-black">
            <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight md:-rotate-90 whitespace-nowrap">
              EXPERIENCE
            </h2>
          </div>

          {/* Right Timeline Content */}
          <div className="p-6 md:w-3/4 bg-white space-y-6">
            {experienceData.map((item) => (
              <div key={item.id} className="border-b-2 border-black pb-6 last:border-none last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-bold text-lg uppercase text-black">{item.role}</h3>
                  <span className="font-mono text-xs bg-[#C6F135] text-black px-2 py-0.5 border border-black font-bold self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>
                <p className="font-mono text-xs font-bold text-[#7B5FE8] uppercase mb-3">{item.organization}</p>
                <ul className="list-disc list-inside text-xs font-medium space-y-1 text-black">
                  {item.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-4 mb-12">
        <div className="brutal-card-purple p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tight leading-none">
              LET&apos;S BUILD SOMETHING AMAZING TOGETHER
            </h2>
            <p className="font-mono text-xs text-[#C6F135] uppercase font-bold">
              // Open for full-time opportunities &amp; technical collaborations
            </p>
          </div>

          <a
            href="mailto:angapeter@outlook.com"
            className="brutal-btn bg-white text-black px-8 py-4 font-mono text-sm uppercase tracking-wider font-bold z-10 whitespace-nowrap"
          >
            Get In Touch &rarr;
          </a>
        </div>
      </section>
    </>
  );
}