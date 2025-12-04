import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const technologies = [
    {
      name: "AWS",
      logo: "https://cdn.simpleicons.org/amazonaws/FF9900",
      color: "bg-orange-100 border-orange-300",
    },
    {
      name: "Python",
      logo: "https://unpkg.com/simple-icons@latest/icons/python.svg",
      color: "bg-blue-100 border-blue-300",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.simpleicons.org/mongodb/47A248",
      color: "bg-green-100 border-green-300",
    },
    {
      name: "Express.js",
      logo: "https://cdn.simpleicons.org/express/000000",
      color: "bg-gray-100 border-gray-300",
    },
    {
      name: "React",
      logo: "https://cdn.simpleicons.org/react/61DAFB",
      color: "bg-blue-100 border-blue-300",
    },
    {
      name: "Node.js",
      logo: "https://cdn.simpleicons.org/nodedotjs/339933",
      color: "bg-green-100 border-green-300",
    },
    {
      name: "Docker",
      logo: "https://cdn.simpleicons.org/docker/2496ED",
      color: "bg-blue-100 border-blue-300",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
      color: "bg-blue-100 border-blue-300",
    },
    {
      name: "Nginx",
      logo: "https://cdn.simpleicons.org/nginx/009639",
      color: "bg-green-100 border-green-300",
    },
    {
      name: "Jenkins",
      logo: "https://cdn.simpleicons.org/jenkins/D24939",
      color: "bg-red-100 border-red-300",
    },
    {
      name: "Terraform",
      logo: "https://cdn.simpleicons.org/terraform/7B42BC",
      color: "bg-purple-100 border-purple-300",
    },
    {
      name: "Grafana",
      logo: "https://cdn.simpleicons.org/grafana/F46800",
      color: "bg-orange-100 border-orange-300",
    },
    {
      name: "Git",
      logo: "https://cdn.simpleicons.org/git/F05032",
      color: "bg-orange-100 border-orange-300",
    },
    {
      name: "Linux",
      logo: "https://cdn.simpleicons.org/linux/FCC624",
      color: "bg-yellow-100 border-yellow-300",
    },
    {
      name: "SonarQube",
      logo: "https://cdn.simpleicons.org/sonarqube/4E9BCD",
      color: "bg-blue-100 border-blue-300",
    },
    {
      name: "Cloudflare",
      logo: "https://cdn.simpleicons.org/cloudflare/F38020",
      color: "bg-orange-100 border-orange-300",
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-[#F8FAFC] overflow-hidden">
      {/* Background Gradient Orbs - Softened for the clean look */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Who I Am
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* --- REDESIGNED PROFILE CARD SECTION --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 relative"
          >
            {/* White Card Container */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-white/50 relative overflow-hidden z-10 text-center">
              {/* Profile Image Circle */}
              <div className="w-32 h-32 mx-auto mb-6 relative">
                {/* Gradient Border/Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-0 m-1 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-14 h-14 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">
                Nadun Algoda
              </h3>
              <p className="text-gray-500 font-medium text-sm mb-8">
                Full-Stack Developer
              </p>

              {/* Badges - Styled to match image pills */}
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-5 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold shadow-sm border border-blue-100">
                  MERN Stack
                </span>
                <span className="px-5 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-bold shadow-sm border border-purple-100">
                  Cloud
                </span>
              </div>
            </div>

            {/* Decorative background blur behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-[3rem] blur-2xl -z-10 opacity-50"></div>
          </motion.div>
          {/* --- END PROFILE CARD SECTION --- */}

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 space-y-8 pt-4"
          >
            <div className="text-gray-600 leading-relaxed space-y-6 text-lg">
              <p>
                I'm a passionate{" "}
                <span className="font-bold text-gray-900">
                  Full-Stack Developer
                </span>{" "}
                specializing in the{" "}
                <span className="font-bold text-blue-600">MERN stack</span>{" "}
                (MongoDB, Express.js, React, Node.js). Currently pursuing my
                undergraduate degree at{" "}
                <span className="font-bold text-purple-600">SLIIT</span>, I'm
                dedicated to building robust and scalable web applications.
              </p>
              <p>
                My journey in software development has sparked a strong interest
                in{" "}
                <span className="font-bold text-blue-600">Cloud Computing</span>
                . I'm actively expanding my skills in cloud technologies and
                DevOps practices, aiming to become proficient in designing and
                deploying cloud-native solutions.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              {[
                {
                  color: "blue",
                  title: "MERN Stack Development",
                  desc: "Building full-stack applications with MongoDB, Express, React, and Node.js",
                  path: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                },
                {
                  color: "purple",
                  title: "Cloud Enthusiast",
                  desc: "Exploring cloud platforms and DevOps practices for scalable solutions",
                  path: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
                },
                {
                  color: "pink",
                  title: "Undergraduate at SLIIT",
                  desc: "Pursuing a degree in Software Engineering with focus on modern technologies",
                  path: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className={`flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/50 transition-colors duration-300`}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-${item.color}-50 rounded-xl flex items-center justify-center border border-${item.color}-100`}
                  >
                    <svg
                      className={`w-6 h-6 text-${item.color}-600`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={item.path}
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated Tech Stack Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Technologies I Work With
            </span>
          </h3>

          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10"></div>

            <div className="flex animate-scroll hover:pause">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className={`flex-shrink-0 mx-4 px-6 py-3 bg-white rounded-xl border border-gray-100 flex items-center space-x-3 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300`}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-gray-700 font-medium text-sm whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
