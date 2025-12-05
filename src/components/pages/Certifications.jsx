import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "December 2024",
      credentialId: "AWS-12345",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      gradient: "from-orange-400 to-red-400",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
      logo: "https://cdn.simpleicons.org/amazonaws/FF9900",
    },
    {
      id: 2,
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "October 2024",
      credentialId: "MONGO-67890",
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      gradient: "from-green-400 to-emerald-400",
      skills: ["NoSQL", "Database Design", "Aggregation", "Performance"],
      logo: "https://cdn.simpleicons.org/mongodb/47A248",
    },
    {
      id: 3,
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "September 2024",
      credentialId: "DOCKER-24680",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      gradient: "from-blue-400 to-cyan-400",
      skills: ["Containerization", "Docker Compose", "Networking", "Volumes"],
      logo: "https://cdn.simpleicons.org/docker/2496ED",
    },
    {
      id: 4,
      title: "Kubernetes Administrator (CKA)",
      issuer: "The Linux Foundation",
      date: "August 2024",
      credentialId: "K8S-13579",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      gradient: "from-purple-400 to-pink-400",
      skills: [
        "Orchestration",
        "Cluster Management",
        "Deployments",
        "Services",
      ],
      logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
    },
    {
      id: 5,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "July 2024",
      credentialId: "REACT-97531",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      gradient: "from-cyan-400 to-blue-400",
      skills: [
        "React Hooks",
        "Component Design",
        "State Management",
        "Performance",
      ],
      logo: "https://cdn.simpleicons.org/react/61DAFB",
    },
    {
      id: 6,
      title: "Jenkins Certified Engineer",
      issuer: "CloudBees",
      date: "June 2024",
      credentialId: "JENKINS-86420",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      gradient: "from-red-400 to-orange-400",
      skills: ["CI/CD", "Pipeline", "Automation", "Integration"],
      logo: "https://cdn.simpleicons.org/jenkins/D24939",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="certifications"
      className="relative min-h-screen bg-gradient-to-br from-gray-400 via-blue-50 to-purple-50 pt-46 pb-26 overflow-hidden"
    >
      {/* Animated Liquid Background */}
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
            Professional Achievements
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Certifications
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Continuously learning and validating my expertise in modern
            technologies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="relative group cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={i + 1}
              variants={fadeInUp}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="absolute -inset-[1px] rounded-3xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-blue-100/50 to-purple-100/50"></div>
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-tl ${cert.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                ></div>
              </div>

              <div className="relative bg-white/70 backdrop-blur-3xl border border-white rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] h-full hover:bg-white/80 transition-all duration-500 overflow-hidden group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-3xl"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
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
                          d={cert.icon}
                        />
                      </svg>
                    </div>
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-10 h-10 object-contain opacity-70"
                    />
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mb-4">{cert.date}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/60 backdrop-blur-xl border border-white/80 rounded-full text-gray-700 text-xs font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-3 py-1 bg-white/60 backdrop-blur-xl border border-white/80 rounded-full text-gray-700 text-xs font-medium shadow-sm">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details */}
                  <div className="mt-4 flex items-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    View Details
                    <svg
                      className="w-4 h-4 ml-1 text-blue-600 group-hover:translate-x-1 transition-transform"
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
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -inset-[1px] rounded-3xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-blue-100/50 to-purple-100/50"></div>
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-tl ${selectedCert.gradient} opacity-30`}
                ></div>
              </div>

              <div className="relative bg-white/90 backdrop-blur-3xl border border-white rounded-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-3xl"></div>

                <div className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-0 right-0 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${selectedCert.gradient} rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0`}
                    >
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={selectedCert.icon}
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedCert.title}
                      </h3>
                      <p className="text-gray-600 text-lg mb-1">
                        {selectedCert.issuer}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {selectedCert.date}
                      </p>
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="mb-6 p-4 bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl">
                    <p className="text-sm text-gray-600 mb-1">Credential ID</p>
                    <p className="font-mono font-semibold text-gray-900">
                      {selectedCert.credentialId}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      Skills Demonstrated
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/60 backdrop-blur-xl border border-white/80 rounded-full text-gray-700 text-sm font-medium shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      View Certificate
                    </button>
                    <button className="flex-1 px-6 py-3 bg-white/60 backdrop-blur-xl border border-white/80 text-gray-700 rounded-xl font-medium shadow-lg hover:bg-white/80 hover:scale-105 transition-all duration-300">
                      Verify Credential
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
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
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
}
