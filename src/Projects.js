import React from "react";
import weatherImg from "./assets/weather.png";
import yoloImg from "./assets/YOLO.webp";
import wedding from "./assets/wedding.jpeg";
import fruitBounty from "./assets/fruitbounty.png";
import Resume from "./assets/Resume.png";

const projects = [
  {
    id: 1,
    title: "Resume Shortlisting System",
    description:
      "An ATS-focused web app that helps evaluate resumes quickly with an intuitive and modern interface.",
    image: Resume,
    link: "https://ats-checker-klvd.onrender.com/",
  },
  {
    id: 2,
    title: "Sky-Cast Weather App",
    description:
      "A sleek React app showing live weather updates with location support and a beautiful UI.",
    image: weatherImg,
    link: "https://sky-cast-aiz6.vercel.app/", // 🔗 Your link
  },
  {
    id: 3,
    title: "Real-time Object Detection",
    description:
      "A YOLO-based Python project detecting objects from live webcam feed with high accuracy.",
    image: yoloImg,
    link: "https://github.com/vaishAgrawal/real-time-object-detection", // 🔗 Your link
  },
  {
  id: 4,
  title: "Wedding Decoration Chooser",
  description:
    "A React-based feature that allows users to explore, select, and upload wedding stage decoration ideas with a clean and user-friendly interface.",
  image: wedding, // import your image at top
  link: "https://celebrate-hub-21hs.vercel.app/", // or your main wedding planner repo
},
  {
  id: 5,
  title: "FruitBounty",
  description:
    "A fruit salad startup website built with React, featuring a vibrant green theme, product customization, and a seamless shopping experience for fresh daily salads.",
  image: fruitBounty,
  link: "https://fruitbountyshop.vercel.app/",
},

];

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-100 min-h-screen py-24 px-6 sm:px-10"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-8">
          My Projects
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Explore some of my works showcasing my skills in frontend, ReactJS,
          and Python development.
        </p>
      </div>

      {/* Project Cards */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[22rem] bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-transform duration-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-3xl w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-purple-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* GitHub Link */}
      <div className="text-center mt-12">
        <h3 className="text-lg sm:text-xl text-gray-300 mb-6">
          More projects on my GitHub →
        </h3>
        <a
          href="https://github.com/vaishAgrawal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-purple-400 hover:to-cyan-400 text-black px-6 py-2 rounded-full transition-all font-semibold shadow-md">
            Visit GitHub
          </button>
        </a>
      </div>
    </section>
  );
}

export default Projects;
