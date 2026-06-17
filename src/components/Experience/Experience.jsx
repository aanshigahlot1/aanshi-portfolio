import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My internship experience and the skills I gained through collaborative
          and project-based learning
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full" />

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* ── Content Card ── */}
            <div
              className={`w-full sm:max-w-md rounded-2xl
                border border-[#8245ec]/40
                bg-gray-900 backdrop-blur-md
                shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                hover:scale-105 transition-transform duration-300
                sm:ml-44 sm:mr-44 ml-8
                ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"}
                overflow-hidden`}
            >
              {/* Purple top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#8245ec] to-purple-400" />

              <div className="p-5 sm:p-7">

                {/* ── Header: Logo LEFT + text RIGHT ── */}
                <div className="flex items-center gap-4">
                  {/* Company Logo — circular */}
                  <div
                    className="w-14 h-14 flex-shrink-0 rounded-full bg-white
                    border-2 border-[#8245ec]/50
                    flex items-center justify-center
                    shadow-[0_0_10px_2px_rgba(130,69,236,0.3)]
                    overflow-hidden"
                  >
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Role + Company + Date */}
                  <div className="flex flex-col gap-[3px] min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm text-purple-300 font-medium truncate">
                      {experience.company}
                    </h4>
                    <p className="text-xs text-gray-500">{experience.date}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-700 my-4" />

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {experience.desc}
                </p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white text-sm mb-2">Skills:</h5>
                  <ul className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs rounded-lg border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;