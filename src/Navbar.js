import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-6 sm:px-10 py-4 shadow-lg backdrop-blur-md flex justify-between items-center transition-all duration-500">
      {/* Logo */}
      <div className="text-3xl font-extrabold tracking-wider animate-pulse text-cyan-400">
        
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-lg font-medium tracking-wide">
        {["Home", "About", "Education", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative group transition-colors duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
