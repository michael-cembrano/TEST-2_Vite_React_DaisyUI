import React, { useState } from "react";

const About = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-base-200 py-12">
      {/* Personal Info Section */}
      <div className="container mx-auto px-4">
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div
                className="avatar"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className={`w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 transition-all duration-500 ${
                    isHovered ? "scale-110" : ""
                  }`}
                >
                  <img
                    src="https://placehold.co/200x200/212534/ffffff?text=Avatar"
                    alt="Profile"
                    className="hover:rotate-6 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="animate-fade-in">
                <h1 className="text-4xl font-bold mb-4">Michael Cembrano</h1>
                <p className="text-xl text-base-content/70 mb-4">
                  SAP MM IM Consultant | IFS SCM Consultant | Developer
                </p>
                <p className="max-w-2xl">
                  A passionate developer with 5 years of experience in building
                  web applications. Focused on creating user-friendly solutions
                  using modern technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">Professional Journey</h2>
              <ul className="timeline timeline-vertical">
                <li className="hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  <div className="timeline-start timeline-box">
                    2024 - Present
                  </div>
                  <div className="timeline-middle">
                    <div className="badge badge-primary">●</div>
                  </div>
                  <div className="timeline-end timeline-box">
                    Senior SAP MM IM Consultant at DxC Technology
                  </div>
                  <hr />
                </li>
                <li className="hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  <div className="timeline-start timeline-box">2023 - 2024</div>
                  <div className="timeline-middle">
                    <div className="badge badge-primary">●</div>
                  </div>
                  <div className="timeline-end timeline-box">
                    IFS SCM Consultant at ProV
                  </div>
                  <hr />
                </li>
                <li className="hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  <div className="timeline-start timeline-box">2019 - 2023</div>
                  <div className="timeline-middle">
                    <div className="badge badge-primary">●</div>
                  </div>
                  <div className="timeline-end timeline-box">
                    SAP MM IM Consultant at Accenture
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Interest & Skills Section */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">Interests & Expertise</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "SAP ECC / S4HANA",
                    skills: ["Material Management", "Inventory Management"],
                    icon: "💼",
                  },
                  {
                    title: "Frontend Development",
                    skills: ["React", "Vue", "TypeScript"],
                    icon: "🎨",
                  },
                  {
                    title: "Backend Development",
                    skills: ["Node.js", "Python", "MongoDB", "SQL"],
                    icon: "⚙️",
                  },
                  {
                    title: "Other Interests",
                    skills: ["Open Source", "AI/ML", "Cloud Computing"],
                    icon: "🚀",
                  },
                ].map((category) => (
                  <div
                    key={category.title}
                    className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                      activeSkill === category.title
                        ? "bg-base-200 shadow-lg"
                        : "hover:bg-base-200"
                    }`}
                    onClick={() =>
                      setActiveSkill(
                        activeSkill === category.title ? null : category.title
                      )
                    }
                  >
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      {category.title}
                    </h3>
                    <div
                      className={`flex flex-wrap gap-2 transition-all duration-300 ${
                        activeSkill === category.title
                          ? "opacity-100"
                          : "opacity-70"
                      }`}
                    >
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="badge badge-outline hover:badge-primary transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Statement */}
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="card-body text-center hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">My Approach</h2>
            <p className="max-w-3xl mx-auto text-base-content/70">
              I believe in writing clean, maintainable code and creating
              intuitive user experiences. My goal is to build applications that
              not only solve problems but are also a joy to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
