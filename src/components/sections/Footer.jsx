import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const GlassPanel = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* 1. Inset Gradient Border Effect */}
      <div className="absolute -inset-[1px] rounded-[inherit] overflow-hidden">
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/40 via-blue-100/30 to-purple-100/30"></div>
      </div>

      {/* Main Glass/Blur Layer */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-[inherit] border border-white/80 p-6 shadow-lg">
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-[inherit]"></div>

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/nadunmA",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nadunal21/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:nadun@example.com",
      icon: (
        <svg
          className="w-5 h-5"
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
      ),
    },
    {
      name: "Twitter",
      url: "https://x.com/N_Algoda",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/", hash: "#home" },
    { name: "About", path: "/", hash: "#about" },
    { name: "Projects", path: "/", hash: "#projects" },
    { name: "Contact", path: "/", hash: "#footer" },
    { name: "Certifications", path: "/certifications", hash: null },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();

    if (item.path === "/certifications") {
      navigate("/certifications");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToSection(item.hash);
      }, 100);
    } else {
      scrollToSection(item.hash);
    }
  };

  const scrollToSection = (hash) => {
    if (hash === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(hash);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.1, ease: "easeOut" },
    }),
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: custom * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Animated Liquid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 -right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={0}
            variants={fadeInUp}
          >
            <GlassPanel className="rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Nadun Algoda
                </span>
              </h3>
              <p className="text-gray-700 font-semibold mb-3">
                Full-Stack Developer | Cloud Enthusiast | DevOps Enthusiast
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Passionate about building scalable applications and automating
                infrastructure. Currently pursuing my undergraduate degree at
                SLIIT while exploring the world of cloud computing and modern
                web technologies.
              </p>
            </GlassPanel>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={2}
            variants={fadeInUp}
          >
            <GlassPanel className="rounded-2xl h-full">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.hash || link.path}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center space-x-2 group cursor-pointer"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"></span>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={3}
            variants={fadeInUp}
          >
            <GlassPanel className="rounded-2xl h-full">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Connect
              </h4>
              <div className="flex flex-wrap gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group rounded-lg"
                    title={social.name}
                    custom={index + 4}
                    variants={popIn}
                  >
                    <div className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    </div>
                    {/* Simplified icon button style for hover effect */}
                    <div className="relative p-3 bg-white/80 backdrop-blur-xl border border-white/90 rounded-lg shadow-sm text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-2 font-medium">
                  Get in touch:
                </p>
                <a
                  href="mailto:nadun@example.com"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
                >
                  nadun@example.com
                </a>
              </div>
            </GlassPanel>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="relative my-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={6}
          variants={fadeInUp}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </motion.div>

        {/* Bottom Section - Copyright */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={7}
          variants={fadeInUp}
        >
          {/* Copyright Text */}
          <div className="relative px-4 py-2 bg-white/70 backdrop-blur-md border border-white/80 rounded-xl shadow-sm">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {currentYear} Nadun Algoda. All rights reserved.
            </p>
          </div>

          {/* Back to Top Button */}
          <div className="text-center md:order-last">
            <div className="relative inline-block group">
              <div className="absolute -inset-[1px] rounded-full opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
              </div>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 100);
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-base hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
              >
                <svg
                  className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                Back to Top
              </a>
            </div>
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
    </footer>
  );
}
