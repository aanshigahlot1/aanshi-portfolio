import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full" />

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
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
                  {/* Logo — leftmost, circular */}
                  <div
                    className="w-14 h-14 flex-shrink-0 rounded-full bg-white
                    border-2 border-[#8245ec]/50
                    flex items-center justify-center
                    shadow-[0_0_10px_2px_rgba(130,69,236,0.3)]
                    overflow-hidden"
                  >
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Degree + School + Date */}
                  <div className="flex flex-col gap-[3px] min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-purple-300 font-medium truncate">
                      {edu.school}
                    </h4>
                    <p className="text-xs text-gray-500">{edu.date}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-700 my-4" />

                {/* CGPA — B.Tech only */}
                {edu.CGPA && !edu.grade && (
                  <p className="text-sm text-gray-300 font-semibold mb-2">
                    🎓 CGPA:{" "}
                    <span className="text-purple-300">{edu.CGPA}</span>
                  </p>
                )}

                {/* Percentage — Class X and XII only */}
                {edu.grade && !edu.CGPA && (
                  <p className="text-sm text-gray-300 font-semibold mb-2">
                    📊 Percentage:{" "}
                    <span className="text-purple-300">{edu.grade}</span>
                  </p>
                )}

                {/* Description */}
                {edu.desc && (
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {edu.desc}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;