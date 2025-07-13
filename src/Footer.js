import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-900 to-black text-gray-200 py-10 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-extrabold text-cyan-400 mb-4">
            💜 Vaishnavi
          </h2>
          <p className="text-gray-400">
            Crafting modern, responsive, and user-focused designs with Frontend,
            Python, and Machine Learning expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-cyan-300 mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "About", "Education", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold text-cyan-300 mb-4">Connect</h3>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/vaishnavi-agrawal-412bb6277"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="https://github.com/vaishAgrawal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="mailto:agrawalvaishnavi66@gmail.com"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaEnvelope size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Vaishnavi Agrawal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
