//app/components/sections/SkillsStrip.tsx
import { skillsData } from "@/data/skills";

export default function SkillsStrip() {
  //Flatten all skills across all categories
  const allSkills = skillsData.flatMap((cat) => cat.skills);

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 mb-12">
      <div className="brutal-card p-0 flex flex-col md:flex-row items-stretch overflow-hidden group">
         {/* Purple Label Block */}
        <div className="brutal-card-purple p-4 md:px-6 flex items-center justify-center border-none border-b-3 md:border-b-0 md:border-r-3 border-black">
          <h3 className="font-mono text-lg font-bold text-white uppercase tracking-wider whitespace-nowrap">
            // TECH_STACK
          </h3>
        </div>

        {/*Marquee Container*/}
        <div className="p-4 bg-white flex-1 overflow-hidden flex items-center">
          {/* Scrolling Track */}
          <div className="flex items-center gap-3 w-max animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused]">
            {/*First render of flattened skills*/}
            {allSkills.map((skill, index) => (
              <span
                key={`skill-1-${index}`}
                className="brutal-btn bg-[#F5F3EE] px-3 py-1 font-mono text-xs uppercase font-bold text-black flex-shrink-0"
              >
                {skill.name}
              </span>
            ))}

            {/*Duplicated array for seamless infinite loop*/}
            {allSkills.map((skill, index) => (
              <span
                key={`skill-2-${index}`}
                className="brutal-btn bg-[#F5F3EE] px-3 py-1 font-mono text-xs uppercase font-bold text-black flex-shrink-0"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}