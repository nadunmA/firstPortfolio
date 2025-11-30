import React from "react";

export default function About() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl"
          style={{
            animation: "float 20s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"
          style={{
            animation: "float 25s ease-in-out infinite",
            animationDelay: "5s",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"
          style={{
            animation: "float 30s ease-in-out infinite",
            animationDelay: "10s",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Who I Am
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left Side - Profile Card */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Nadun Algoda
                </h3>
                <p className="text-gray-700 font-medium mb-6">
                  Full-Stack Developer
                </p>
                <div className="flex justify-center space-x-2 mb-4">
                  <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-300">
                    MERN Stack
                  </span>
                  <span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-300">
                    Cloud
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="md:col-span-3 space-y-6">
            <div className="text-gray-700 leading-relaxed space-y-4">
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
              <p>
                I believe in continuous learning and staying updated with the
                latest technologies. My goal is to bridge the gap between
                development and operations, creating seamless, efficient, and
                scalable applications in the cloud.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4 mt-6">
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
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
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    MERN Stack Development
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Building full-stack applications with MongoDB, Express,
                    React, and Node.js
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
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
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Cloud Enthusiast
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Exploring cloud platforms and DevOps practices for scalable
                    solutions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-pink-50 rounded-xl border border-pink-200">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Undergraduate at SLIIT
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Pursuing a degree in Software Engineering with focus on
                    modern technologies
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-semibold border border-green-300">
                  MongoDB
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold border border-gray-300">
                  Express.js
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold border border-blue-300">
                  React
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-semibold border border-green-300">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-semibold border border-orange-300">
                  AWS
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold border border-blue-300">
                  Docker
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-semibold border border-purple-300">
                  Git
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 30px) scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
