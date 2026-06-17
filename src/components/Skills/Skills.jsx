// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[8vw] md:px-[5vw] lg:px-[8vw] xl:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and tools gained through learning,
        projects, and hands-on practice
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
          gyroscope={true}
          className="w-full"
        >
          <div className="bg-gray-900 backdrop-blur-md px-3 py-5 rounded-2xl border border-white h-full shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">

            <h3 className="text-lg sm:text-xl font-semibold text-gray-400 mb-3 text-center">
              {category.title}
            </h3>

            {/* 2 cols on mobile, 3 cols from md onwards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-row items-center gap-2
                    border border-gray-700 rounded-xl
                    py-2 px-2 min-h-[44px] w-full overflow-hidden"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <span
                    className="text-gray-300 leading-tight min-w-0 flex-1"
                    style={{
                      fontSize: "clamp(9px, 1.4vw, 12px)",
                      wordBreak: "keep-all",
                      overflowWrap: "normal",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;