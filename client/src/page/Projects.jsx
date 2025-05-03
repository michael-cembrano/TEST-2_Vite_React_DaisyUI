import React from "react";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "A responsive admin dashboard with real-time sales analytics and inventory management.",
    image: "https://placehold.co/600x400/212534/ffffff?text=Dashboard",
    technologies: ["React", "Redux", "TailwindCSS"],
    demoLink: "/",
    sourceLink: "https://github.com/demo1",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Real-time weather forecasting application with location-based updates.",
    image: "https://placehold.co/600x400/212534/ffffff?text=Weather+App",
    technologies: ["React", "API", "Geolocation"],
    demoLink: "/",
    sourceLink: "https://github.com/demo2",
  },
  {
    id: 3,
    title: "Task Manager",
    description:
      "A collaborative task management tool with real-time updates and team features.",
    image: "https://placehold.co/600x400/212534/ffffff?text=Task+Manager",
    technologies: ["React", "Firebase", "TailwindCSS"],
    demoLink: "/",
    sourceLink: "https://github.com/demo3",
  },
  {
    id: 4,
    title: "Recipe Finder",
    description:
      "Search and save your favorite recipes with ingredient-based filtering.",
    image: "https://placehold.co/600x400/212534/ffffff?text=Recipe+Finder",
    technologies: ["React", "API", "DaisyUI"],
    demoLink: "/",
    sourceLink: "https://github.com/demo4",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills.",
    image: "https://placehold.co/600x400/212534/ffffff?text=Portfolio",
    technologies: ["React", "TailwindCSS", "DaisyUI"],
    demoLink: "/",
    sourceLink: "https://github.com/michael-cembrano/TEST-2_Vite_React_DaisyUI",
  },
  {
    id: 6,
    title: "Chat Application",
    description:
      "Real-time chat application with private messaging and group chat features.",
    image: "https://placehold.co/600x400/212534/ffffff?text=Chat+App",
    technologies: ["React", "Socket.io", "MongoDB"],
    demoLink: "/",
    sourceLink: "https://github.com/demo6",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <figure className="px-4 pt-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl object-cover w-full h-48"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p className="text-base-content/70">{project.description}</p>
              <div className="flex flex-wrap gap-2 my-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="badge badge-outline">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="card-actions justify-end mt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm hover:scale-105 transition-transform"
                >
                  View Project
                </a>
                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm hover:bg-base-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
