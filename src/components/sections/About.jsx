import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const technologies = [
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Python",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Express.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    },
    {
      name: "React",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Docker",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "Nginx",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
    },
    {
      name: "Jenkins",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
    },
    {
      name: "Terraform",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg",
    },
    {
      name: "Grafana",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg",
    },
    {
      name: "Git",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      name: "Linux",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    },
    {
      name: "SonarQube",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sonarqube/sonarqube-original.svg",
    },
    {
      name: "Cloudflare",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cloudflare/cloudflare-original.svg",
    },
  ];
  const highlights = [
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "MERN Stack Development",
      desc: "Building full-stack applications with MongoDB, Express, React, and Node.js",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      title: "Cloud Enthusiast",
      desc: "Exploring cloud platforms and DevOps practices for scalable solutions",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Undergraduate at SLIIT",
      desc: "Pursuing a degree in Software Engineering with focus on modern technologies",
      gradient: "from-orange-400 to-red-400",
    },
  ];

  // 2. Animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 overflow-hidden"
    >
      {/* Animated Liquid Background*/}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={0}
          variants={fadeInUp}
        >
          <p className="text-sm md:text-base text-gray-600 font-medium tracking-wide uppercase mb-4">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Nadun Algoda
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Profile Card*/}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={1}
            variants={fadeInUp}
          >
            {/* Liquid glass border effect */}
            <div className="absolute -inset-[1px] rounded-3xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-blue-100/50 to-purple-100/50"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-blue-200/40 via-white/50 to-purple-200/40"></div>
            </div>

            {/* Main White Glass Card */}
            <div className="relative bg-white/70 backdrop-blur-3xl rounded-3xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] p-8 hover:bg-white/80 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-3xl"></div>

              {/* Liquid Shimmer Effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-40">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 animate-shimmer"></div>
              </div>

              <div className="relative z-10">
                {/* Profile Image */}
                <div className="w-36 h-36 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                  <div className="absolute inset-2 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                    <svg
                      className="w-16 h-16 text-white"
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
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Nadun Algoda
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Full-Stack Developer & Cloud Enthusiast
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-3">
                  {["MERN Stack", "Cloud Computing", "DevOps"].map(
                    (badge, i) => (
                      <span
                        key={i}
                        className="px-5 py-2 bg-white/60 backdrop-blur-xl border border-white/80 rounded-full text-gray-800 text-sm font-medium shadow-[0_2px_8px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] hover:bg-white/80 hover:scale-105 transition-all duration-300"
                      >
                        {badge}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={2}
            variants={fadeInUp}
          >
            {/* Text Content */}
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-3xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-blue-100/50 to-purple-100/50"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-blue-200/40 via-white/50 to-purple-200/40"></div>
              </div>
              <div className="relative bg-white/70 backdrop-blur-3xl border border-white rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-3xl"></div>
                <div className="relative text-gray-700 leading-relaxed space-y-4 text-lg">
                  <p>
                    I'm a passionate{" "}
                    <span className="font-bold text-gray-900">
                      Full-Stack Developer
                    </span>{" "}
                    specializing in the{" "}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                      MERN stack
                    </span>{" "}
                    (MongoDB, Express.js, React, Node.js). Currently pursuing my
                    undergraduate degree at{" "}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      SLIIT
                    </span>
                    , I'm dedicated to building robust and scalable web
                    applications.
                  </p>
                  <p>
                    My journey in software development has sparked a strong
                    interest in{" "}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                      Cloud Computing
                    </span>
                    . I'm actively expanding my skills in cloud technologies and
                    DevOps practices, aiming to become proficient in designing
                    and deploying cloud-native solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  num: "15+",
                  label: "Projects",
                  gradient: "from-blue-600 to-cyan-600",
                },
                {
                  num: "5+",
                  label: "Technologies",
                  gradient: "from-purple-600 to-pink-600",
                },
                {
                  num: "2+",
                  label: "Years",
                  gradient: "from-orange-600 to-red-600",
                },
              ].map((stat, i) => (
                <div key={i} className="relative">
                  <div className="absolute -inset-[1px] rounded-2xl">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-blue-100/30 to-purple-100/30"></div>
                  </div>
                  <div className="relative bg-white/70 backdrop-blur-3xl border border-white rounded-2xl p-4 text-center shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] hover:bg-white/80 hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-2xl"></div>
                    <div className="relative">
                      <div
                        className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-1`}
                      >
                        {stat.num}
                      </div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards*/}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={i + 2}
              variants={fadeInUp}
            >
              <div className="absolute -inset-[1px] rounded-3xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-blue-100/50 to-purple-100/50"></div>
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-tl ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                ></div>
              </div>
              <div className="relative bg-white/70 backdrop-blur-3xl border border-white rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] h-full hover:bg-white/80 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </div>
                <div className="relative">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={1}
          variants={fadeInUp}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Technologies I Work With
          </h3>
          <p className="text-gray-600">
            Constantly learning and adapting to new technologies
          </p>
        </motion.div>

        {/* Non-Scrolling Tech Grid*/}
        <motion.div
          className="relative py-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={2}
          variants={fadeInUp}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="relative flex-shrink-0"
              >
                <div className="absolute -inset-[1px] rounded-xl">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white via-blue-100/30 to-purple-100/30"></div>
                </div>
                <div className="relative px-4 sm:px-6 py-3 sm:py-4 bg-white/70 backdrop-blur-3xl border border-white rounded-xl flex items-center space-x-2 sm:space-x-3 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] hover:bg-white/80 hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent"></div>
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="relative w-7 h-7 sm:w-8 sm:h-8 object-contain z-10"
                  />
                  <span className="relative text-gray-800 font-medium text-sm sm:text-base whitespace-nowrap z-10">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { transform: translate(30px, -50px) scale(1.1); border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { transform: translate(-20px, 20px) scale(0.9); border-radius: 50% 60% 30% 70% / 60% 40% 60% 30%; }
          75% { transform: translate(50px, 30px) scale(1.05); border-radius: 70% 30% 50% 50% / 30% 70% 40% 60%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
