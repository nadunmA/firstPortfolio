import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // 1. Import Framer Motion

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Cloud Engineer", "Full-Stack Developer", "DevOps Enthusiast"];

  useEffect(() => {
    let index = 0;
    const currentText = roles[currentRole];

    const typingInterval = setInterval(() => {
      if (index <= currentText.length) {
        setDisplayText(currentText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRole]);

  // Animation settings
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.2, // Stagger effect (එකින් එක එන්න)
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative w-full h-screen m-0 p-0 overflow-hidden">
      {/* Hero Section */}
      <section className="absolute inset-0 h-screen w-full flex items-center m-0 p-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="space-y-6">
            {/* Welcome Text */}
            <motion.div
              className="mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }} // 👈 Scroll කරන හැම වෙලාවෙම play වෙනවා
              custom={0}
              variants={fadeInUp}
            >
              <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">
                Welcome to my portfolio
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={1}
              variants={fadeInUp}
            >
              Experience liftoff
              <br />
              <span className="text-white">with Nadun Algoda</span>
            </motion.h1>

            {/* Typing Animation & Description */}
            <motion.div
              className="min-h-24 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={2}
              variants={fadeInUp}
            >
              <p className="text-xl md:text-2xl text-gray-300 font-medium mb-3">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Passionate about building scalable applications and automating
                infrastructure. Expertise in modern web technologies, cloud
                platforms, and DevOps practices.
              </p>
            </motion.div>

            {/* Skill Badges */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={3}
              variants={fadeInUp}
            >
              {/* Badges content... (කලින් තිබ්බ code එකමයි) */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-full">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <span className="text-white text-sm font-medium">
                  Full Stack
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-full">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <span className="text-white text-sm font-medium">Cloud</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-full">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-white text-sm font-medium">DevOps</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 pt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={4}
              variants={fadeInUp}
            >
              <button className="group px-8 py-4 bg-white text-black rounded-full font-medium text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                <span className="flex items-center gap-2">
                  Get Started
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>

              <button className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium text-base transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
                <span className="flex items-center gap-2">
                  Download CV
                  <svg
                    className="w-4 h-4 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex items-center justify-center gap-4 pt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={5}
              variants={fadeInUp}
            >
              {/* Icons content... (කලින් තිබ්බ code එකමයි) */}
              <a
                href="https://github.com/nadunalgoda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300 hover:scale-110 group"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* Other icons... */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300 hover:scale-110 group"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:your@email.com"
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300 hover:scale-110 group"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:text-black transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - මෙකත් animate කරමු */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-2 text-white/70">
            <p className="text-xs uppercase tracking-wider">Scroll</p>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Global Reset */}
      <style>{`
        html, body {
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
    </div>
  );
}
