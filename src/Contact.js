import React from "react";
import { FaLinkedin, FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-100 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-cyan-400 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Let’s connect and collaborate on amazing projects!
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-6xl mx-auto px-4">
        {/* Common Card Style */}
        {[
          {
            icon: <FaLinkedin size={30} />,
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/vaishnavi-agrawal-412bb6277",
            text: "linkedin.com/in/vaishnavi-agrawal",
          },
          {
            icon: <FaPhoneAlt size={30} />,
            title: "Phone",
            link: "tel:+9763157871",
            text: "+91 9763157871",
          },
          {
            icon: <FaEnvelope size={30} />,
            title: "Email",
            link: "mailto:agrawalvaishnavi66@gmail.com",
            text: "agrawalvaishnavi66@gmail.com",
          },
          {
            icon: <FaGithub size={30} />,
            title: "GitHub",
            link: "https://github.com/vaishAgrawal",
            text: "github.com/vaishAgrawal",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-800 bg-opacity-40 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-500 w-72 h-72"
          >
            <div className="bg-pink-500 bg-opacity-20 rounded-full p-5 mb-5 text-cyan-400">
              {item.icon}
            </div>
            <h3 className="font-semibold text-xl text-gray-300 mb-2">
              {item.title}
            </h3>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-200 hover:text-cyan-100 hover:underline text-center break-all"
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
