import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name */}
        <h2 className="text-xl font-semibold text-purple-500">
          Aanshi Gahlot
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social & Coding Profiles */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-xl">
          {/* GitHub */}
          <a
            href="https://github.com/aanshigahlot1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-transform transform hover:scale-110"
            title="GitHub"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aanshi-gahlot-752235294"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-transform transform hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/aanshigahlot01/  "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-transform transform hover:scale-110"
            title="LeetCode"
          >
            <SiLeetcode />
          </a>

          {/* CodeChef */}
          <a
            href="https://www.codechef.com/users/aanshi_026"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-transform transform hover:scale-110"
            title="CodeChef"
          >
            <SiCodechef />
          </a>

          {/* Codeforces */}
          <a
            href="https://codeforces.com/profile/aanshigahlot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-transform transform hover:scale-110"
            title="Codeforces"
          >
            <SiCodeforces />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Aanshi Gahlot. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
