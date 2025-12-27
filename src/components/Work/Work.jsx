import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on
        </p>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <p className="text-center text-gray-400">
          Projects will be added soon 🚧
        </p>
      ) : (
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="border border-white bg-gray-900 rounded-2xl shadow-lg cursor-pointer hover:-translate-y-2 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl max-w-3xl w-[90%]">
            <button
              onClick={() => setSelectedProject(null)}
              className="text-white text-2xl float-right"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-white mt-4">
              {selectedProject.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {selectedProject.description}
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 bg-gray-700 text-white py-2 rounded-xl text-center"
              >
                View Code
              </a>

              {selectedProject.webapp ? (
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-purple-600 text-white py-2 rounded-xl text-center"
                >
                  View Live
                </a>
              ) : (
                <div className="w-1/2 bg-gray-600 text-gray-300 py-2 rounded-xl text-center cursor-not-allowed">
                  No Live Link
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
