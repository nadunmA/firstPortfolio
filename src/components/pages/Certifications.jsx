import React, { useState } from "react";
import { motion } from "framer-motion";
import aws from "../../Images/aws.png"; // aws image eka import karala thiyenawa.

// 💡 REUSABLE HELPER COMPONENT: Glass Card/Panel
const GlassCard = ({
  children,
  className = "",
  onClick,
  isHoverable = true,
}) => {
  const hoverClasses = isHoverable
    ? "group-hover:bg-white/80 group-hover:scale-[1.01] transition-all duration-500"
    : "";

  // Base shadow is consistent with previous sections
  const baseShadow = "shadow-[0_8px_32px_rgba(0,0,0,0.08)]";

  return (
    <div
      className={`relative ${className} ${isHoverable ? "group" : ""}`}
      onClick={onClick}
    >
      {/* 1. Inset Gradient Border Effect */}
      <div className="absolute -inset-[1px] rounded-[inherit] overflow-hidden">
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/40 via-blue-100/30 to-purple-100/30"></div>
      </div>

      {/* 2. Main Glass/Blur Layer */}
      <div
        className={`relative bg-white/70 backdrop-blur-xl rounded-[inherit] border border-white/80 ${baseShadow} ${hoverClasses}`}
      >
        {/* Subtle overlay gradient for depth/shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-[inherit]"></div>

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

// ---------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isCertificateViewOpen, setIsCertificateViewOpen] = useState(false);

  // Note: Added `certificateImage` property to the object for future flexibility
  const certifications = [
    {
      id: 1,
      title: "Amazon Q Developer",
      issuer: "Amazon Web Services",
      date: "November 2025",
      credentialId: "AWS-12345",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      gradient: "from-orange-400 to-red-400",
      skills: [
        "Cloud Architecture",
        "AWS Services",
        "Security",
        "Scalability",
        "AI/ML Integration",
      ],
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      certificateImage: aws, // Using the imported image here
    },
    // Add more certifications here...
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

  const handleOpenDetails = (cert) => {
    setSelectedCert(cert);
    setIsCertificateViewOpen(false); // Ensure image view is closed
  };

  const handleViewCertificate = (e) => {
    e.stopPropagation();
    setIsCertificateViewOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
    setIsCertificateViewOpen(false);
  };

  // Component to render a single Certificate Card
  const CertificateCard = ({ cert, i }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      custom={i + 1}
      variants={fadeInUp}
    >
      <GlassCard
        className="rounded-3xl cursor-pointer"
        onClick={() => handleOpenDetails(cert)}
      >
        <div className="p-6 relative">
          {/* Shimmer Effect */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-tl ${cert.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
            ></div>
            <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
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

            {/* View Details Link */}
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
      </GlassCard>
    </motion.div>
  );

  // ---------------------------------------------------
  // RENDER FUNCTION
  // ---------------------------------------------------

  return (
    <section
      id="certifications"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-46 pb-26 overflow-hidden"
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
        <motion.header
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
        </motion.header>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, i) => (
            <CertificateCard cert={cert} i={i} key={cert.id} />
          ))}
        </div>

        {/* Modal (Certificate Details) */}
        {selectedCert && !isCertificateViewOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative max-w-2xl w-full rounded-3xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Using GlassCard for the Modal Content */}
              <GlassCard className="rounded-3xl p-0" isHoverable={false}>
                <div className="relative p-8">
                  {/* Close Button */}
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-20"
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
                  <div className="flex items-start gap-6 mb-6 pt-4">
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
                        Issued: {selectedCert.date}
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
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={handleViewCertificate}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    >
                      View Certificate
                    </button>
                    <button className="flex-1 px-6 py-3 bg-white/60 backdrop-blur-xl border border-white/80 text-gray-700 rounded-xl font-medium shadow-lg hover:bg-white/80 hover:scale-[1.02] transition-all duration-300">
                      Verify Credential
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* New Certificate Image View Modal */}
      {isCertificateViewOpen && selectedCert && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-[999]" // Increased Z-index
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCertificateViewOpen(false)}
        >
          <motion.div
            className="relative max-w-4xl w-full h-auto max-h-[95vh]" // Increased max-h
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-xl shadow-2xl p-4 sm:p-6 overflow-auto max-h-[95vh]">
              {/* Close Button */}
              <button
                onClick={() => setIsCertificateViewOpen(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Certificate Image */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {selectedCert.title} - Full Certificate
              </h3>
              <img
                src={selectedCert.certificateImage}
                alt={`${selectedCert.title} Certificate`}
                className="w-full h-auto object-contain rounded-lg border border-gray-200"
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Custom CSS STYLES (Kept Same) */}
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
