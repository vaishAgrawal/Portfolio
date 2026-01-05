import React from "react";
import myImage from "./assets/myone.jpg"; // ✅ Correct image import
// import myResume from "./assets/Resume.pdf"; // ✅ Import your Resume

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-100 min-h-screen flex items-center px-10 md:px-20 py-16"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Avatar */}
        <div className="flex justify-center">
          <img
            src={myImage}
            alt="Vaishnavi Avatar"
            className="rounded-full w-150 h-80 object-cover shadow-2xl border-4 border-gray-800 hover:scale-105 transition-transform duration-500"

          />
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-5xl font-extrabold text-cyan-400 mb-4">
            About Me
          </h2>
          <p className="mb-4 text-lg text-gray-300 leading-relaxed">
            Hi 👋, I’m <span className="text-green-400 font-semibold">Vaishnavi</span> — a passionate 
            <span className="text-yellow-300"> Frontend Developer</span>, 
            <span className="text-blue-300"> Python Programmer</span>, and 
            <span className="text-green-300"> Machine Learning Enthusiast</span>.
          </p>
          <p className="mb-6 text-gray-400">
            I specialize in crafting sleek and responsive UIs, writing clean Python scripts, and building ML models to create innovative solutions for real-world problems.
          </p>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition">
                HTML
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition">
                CSS
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition">
                JavaScript
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition">
                ReactJS
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition">
                Python
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition">
                Machine Learning
              </span>
            </div>
          </div>

          {/* Download CV Button */}
          <a
            // href={myResume}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-cyan-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-cyan-300 transition duration-300">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
