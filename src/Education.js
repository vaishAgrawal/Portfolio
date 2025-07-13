import React from "react";

const Education = () => {
  const educationDetails = [
    {
      degree: "B.Tech in Artificial Intelligence",
      institute: "Dr. Babasaheb Ambedkar Technological University",
      year: "2023 - Present",
      description:
        "Currently pursuing B.Tech with a focus on Artificial Intelligence and Machine Learning.",
    },
    {
      degree: "Higher Secondary Education",
      institute: "Nav Maharashtra Vidyalay, Pandare",
      year: "2021 - 2022",
      description:
        "Completed Higher Secondary with a specialization in Science stream.",
    },
    {
      degree: "Secondary Education",
      institute: "Freedom English High School, Akot",
      year: "2019 - 2020",
      description:
        "Completed Secondary School with excellent academic performance.",
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-100 py-20 px-10 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-cyan-400 mb-12 text-center">
          Education
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="w-80 bg-gray-800 bg-opacity-40 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-purple-400/40 transition-shadow duration-500"
            >
              <h3 className="text-xl font-bold text-purple-300 mb-2">
                {edu.degree}
              </h3>
              <p className="text-cyan-300 mb-1 font-medium">{edu.institute}</p>
              <p className="text-gray-400 italic mb-3">{edu.year}</p>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
