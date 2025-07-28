import React from "react";
import { motion } from "framer-motion";

const projectsitems = [
  {
    title: "HH Project Management",
    description: "A project management website for managing tasks and projects with real-time chat with team members.",
    image: "/screenshots/6.png",
    link: "https://hhprojectmanagement.onrender.com/",
  },
  {
    title: "HH Agency",
    description: "Shop management website for a shop called HH Agency.",
    image: "/screenshots/3.png",
    link: "https://hh-agency.onrender.com/",
  },
  {
    title: "Mediremedy",
    description:
      "Medicine recommendation website for lifestyle diseases like diabetes, hypertension, etc.",
    image: "/screenshots/1.png",
    link: "https://mediremedy.vercel.app/",
  },
  {
    title: "Ispraire 20",
    description:
      "An event website created as a personal project. The event does not exist.",
    image: "/screenshots/2.png",
    link: "https://ispraire20.vercel.app/",
  },
  {
    title: "Voting System",
    description:
      "It Is A Voting Software for Class Election",
    image: "/screenshots/5.png",
    link: "https://shr-voting.onrender.com/",
  },
  {
    title: "HH Weather App",
    description:
      "Weather app providing real-time temperature and air quality updates.",
    image: "/screenshots/4.png",
    link: "https://weather-xfiq.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-10 px-4 md:px-12 overflow-hidden min-h-screen "
    >
      {/* 🌈 Colorful blurred background blobs */}
      <div className=" inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-violet-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-sky-500 opacity-20 blur-3xl rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-red *:-600 opacity-10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <h2 className="text-4xl font-bold text-center text-gray-600 mb-16 drop-shadow-lg">
        My Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative">
        {projectsitems.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-pink-300/20 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-t-2xl group-hover:opacity-90 transition duration-300"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm">{project.description}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none"></div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
