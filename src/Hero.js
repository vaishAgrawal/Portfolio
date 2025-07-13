import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-100 min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 py-24 text-center"
    >
      <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
        Welcome to my world ✨
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white">
        Hi, I'm <span className="text-cyan-400">Vaishnavi</span>
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-300">
        Frontend Developer | Python Programmer | ML Enthusiast
      </h2>
      <p className="max-w-lg text-gray-400 mb-8">
        I craft responsive web designs and develop intelligent solutions using
        modern technologies to create impactful digital experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <a
          href="http://www.linkedin.com/in/vaishnavi-agrawal-412bb6277"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-cyan-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-cyan-300 transition duration-300 w-full sm:w-auto">
            LinkedIn
          </button>
        </a>
        <a
          href="https://github.com/vaishAgrawal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-transparent border border-cyan-400 px-6 py-2 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition duration-300 w-full sm:w-auto">
            GitHub
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
