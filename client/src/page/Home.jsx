import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [activeSkill, setActiveSkill] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    {
      name: "React",
      icon: "⚛️",
      description: "Building modern web applications",
    },
    { name: "Node.js", icon: "🟢", description: "Backend development & APIs" },
    { name: "TypeScript", icon: "📘", description: "Type-safe JavaScript" },
    { name: "MongoDB", icon: "🍃", description: "NoSQL Database" },
    { name: "AWS", icon: "☁️", description: "Cloud Services" },
    { name: "TailwindCSS", icon: "🎨", description: "Utility-first CSS" },
    { name: "Git", icon: "📦", description: "Version Control" },
    { name: "Docker", icon: "🐳", description: "Containerization" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="hero min-h-[80vh] bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            className="max-w-sm lg:max-w-lg transform transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://placehold.co/600x400/212534/ffffff?text=Portfolio"
              className={`rounded-lg shadow-2xl transition-all duration-500 ${
                isHovered ? "scale-105 rotate-2" : ""
              }`}
              alt="Hero"
            />
          </div>
          <div className="lg:mr-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
              Michael Cembrano
            </h1>
            <p className="py-6 text-xl">SAP MM/IM Consultant and Freelance Full Stack Developer</p>
            <p className="pb-6 text-base-content/70">
              Passionate about creating beautiful and functional web
              applications with modern technologies.
            </p>
            <div className="flex gap-4">
              <button
                className="btn btn-primary hover:scale-105 transition-transform"
                onClick={() => navigate("/projects")}
              >
                View Projects
              </button>
              <button
                className="btn btn-ghost hover:scale-105 transition-transform"
                onClick={() => navigate("/contactus")}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`card bg-base-100 hover:shadow-xl transition-all duration-300 cursor-pointer 
                ${activeSkill === skill.name ? "ring-2 ring-primary" : ""}`}
              onClick={() =>
                setActiveSkill(skill.name === activeSkill ? null : skill.name)
              }
            >
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-2">{skill.icon}</div>
                <h3 className="card-title">{skill.name}</h3>
                {activeSkill === skill.name && (
                  <p className="text-sm text-base-content/70 animate-fade-in">
                    {skill.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="card bg-base-200 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/projects#project-${item}`)}
              >
                <figure className="px-4 pt-4 overflow-hidden">
                  <img
                    src={`https://placehold.co/600x400/212534/ffffff?text=Project+${item}`}
                    className="rounded-xl transform transition-transform group-hover:scale-110"
                    alt={`Project ${item}`}
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Project {item}</h3>
                  <p>Brief description of the project goes here.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 text-center relative overflow-hidden">
        <div
          className="max-w-2xl mx-auto px-4 transform hover:scale-105 transition-transform cursor-pointer"
          onClick={() => navigate("/contactus")}
        >
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="mb-8 text-base-content/70">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <button className="btn btn-primary btn-lg animate-bounce">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
