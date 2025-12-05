import React from "react";
import { motion } from "framer-motion";
// Assume solomonImg and busTricky are correctly defined/imported
import solomonImg from "../../Images/solomon.png";
import busTricky from "../../Images/bus.png";

// Placeholder images for demonstration since actual imports are relative

// 💡 Best Practice: Abstract the Project Card into a separate component for clean code.
const ProjectCard = ({ project, index, fadeInUp }) => {
  return (
    <motion.div
      key={project.id}
      className="relative group h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      custom={index + 1}
      variants={fadeInUp}
    >
      {/* 1. Liquid Glass Border Effect */}
      <div className="absolute -inset-[1px] rounded-3xl">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 via-blue-100/50 to-purple-100/50"></div>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-blue-200/40 via-white/50 to-purple-200/40"></div>
      </div>

      {/* 2. Main Card Body */}
      <div className="relative bg-white/70 backdrop-blur-3xl rounded-3xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden h-full flex flex-col hover:bg-white/80 transition-all duration-500 min-h-[480px]">
        {/* Inner white reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent"></div>

        {/* Hover shimmer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden flex-shrink-0 rounded-t-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Project Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {project.title}
            </h3>

            {/* DESCRIPTION: flex-grow ensures this description pushes the buttons to the bottom */}
            <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  // Simplified tag style for visual balance with the card
                  className="px-3 py-1 bg-white/70 backdrop-blur-xl border border-white/80 rounded-full text-xs font-semibold text-gray-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons (Using mt-auto to push to bottom) */}
            <div className="flex gap-3 mt-auto">
              {/* Live Demo Button */}
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-1 group/btn"
              >
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-70 group-hover/btn:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Demo
                </div>
              </a>

              {/* Source Code Button */}
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/btn"
              >
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 opacity-70 group-hover/btn:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all duration-300 shadow-lg">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI Prompt Library",
      description:
        "An AI prompt library providing ready-to-use prompts that users can copy and paste into ChatGPT, Grok, Gemini, or other AI models to generate images. This project demonstrates proficiency in building a clean, modern, and highly responsive user interface with an emphasis on performance and search engine optimization (SEO). It's hosted on Cloudflare Pages and utilizes GitHub Actions for continuous deployment.",
      tags: ["React", "Cloudflare", "GitHub Actions", "Tailwind"],
      image: solomonImg,
      liveDemo: "https://solomonprompts.site/",
      sourceCode: "https://github.com/nadunmA/solomonAi",
    },
    {
      id: 2,
      title: "User Management System (OBTS)",
      description:
        "User Management System for an online bus tracking platform. Handles secure user registration, authentication, and profile management for Admins, Drivers, and Passengers with role-based access control using MERN stack. The backend is containerized using Docker and deployed on an AWS EC2 instance, demonstrating practical skills in cloud deployment and DevOps practices.",
      tags: ["MERN Stack", "Docker", "AWS EC2", "DevOps", "Tailwind"],
      image: busTricky,
      liveDemo: "https://github.com/nadunmA", // Placeholder
      sourceCode: "https://github.com/nadunmA/OBTS-User-Management",
    },
  ];

  // Animation Variants (Kept same)
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 overflow-hidden"
    >
      {/* Animated Liquid Background - (Kept same) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Using motion.header for semantics)*/}
        <motion.header
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={0}
          variants={fadeInUp}
        >
          <p className="text-sm md:text-base text-gray-600 font-medium tracking-wide uppercase mb-4">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my work in full-stack development, cloud
            infrastructure, and DevOps automation
          </p>
        </motion.header>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            // Using the abstracted ProjectCard component here
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              fadeInUp={fadeInUp}
            />
          ))}
        </div>

        {/* View More Button (Kept same) */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={projects.length + 1} // Ensure proper staggering after projects
          variants={fadeInUp}
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-gray-700 to-gray-900 opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <a
              href="https://github.com/nadunalgoda"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-base hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View All Projects on GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% { 
            transform: translate(30px, -50px) scale(1.1);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% { 
            transform: translate(-20px, 20px) scale(0.9);
            border-radius: 50% 60% 30% 70% / 60% 40% 60% 30%;
          }
          75% { 
            transform: translate(50px, 30px) scale(1.05);
            border-radius: 70% 30% 50% 50% / 30% 70% 40% 60%;
          }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
