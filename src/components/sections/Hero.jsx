import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Cloud Engineer", "Full-Stack Developer", "DevOps Enthusiast"];
  const [particles, setParticles] = useState([]);

  /* Create floating particles for depth
  useEffect(() => {
    const particleArray = [];
    const colors = ["#4285f4", "#9333ea", "#ec4899"];

    for (let i = 0; i < 20; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        speedY: Math.random() * 0.2 + 0.1,
        speedX: Math.random() * 0.2 - 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    setParticles(particleArray);
  }, []);*/

  // Animate particles slowly
  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newY = particle.y + particle.speedY;
          let newX = particle.x + particle.speedX;

          if (newY > 100) newY = 0;
          if (newY < 0) newY = 100;
          if (newX > 100) newX = 0;
          if (newX < 0) newX = 100;

          return {
            ...particle,
            y: newY,
            x: newX,
          };
        })
      );

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Typing animation
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

  return (
    <section className="relative h-screen overflow-hidden flex items-center bg-white">
      {/* Smooth animated gradient background */}
      <div
        className="absolute top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"
        style={{
          animation: "floatSlow 8s ease-in-out infinite",
        }}
      ></div>
      <div
        className="absolute top-40 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"
        style={{
          animation: "floatSlow 8s ease-in-out infinite",
          animationDelay: "5s",
        }}
      ></div>
      <div
        className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl"
        style={{
          animation: "floatSlow 6s ease-in-out infinite",
          animationDelay: "10s",
        }}
      ></div>

      {/* Subtle floating particles */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center -mt-16">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          {/* Left Content */}
          <div className="text-gray-900 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-px w-12 bg-gradient-to-r from-blue-400 to-transparent"></div>
              <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                WELCOME TO MY PORTFOLIO
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
              Experience liftoff
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient">
                with Nadun Algoda
              </span>
            </h1>

            <div className="h-12">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              Passionate about building scalable applications and automating
              infrastructure. Expertise in modern web technologies, cloud
              platforms, and DevOps practices.
            </p>

            <div className="flex items-center space-x-6 py-2">
              <div className="flex items-center space-x-2 text-blue-600">
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <span className="text-sm font-medium">Full Stack</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-600">
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
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <span className="text-sm font-medium">Cloud</span>
              </div>
              <div className="flex items-center space-x-2 text-pink-600">
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
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium">DevOps</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {/* Learn More Button */}
              <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white to-transparent"
                    style={{
                      animation: "shimmer 2s infinite",
                      backgroundSize: "200% 100%",
                    }}
                  ></div>
                </div>
                <span className="relative z-10 flex items-center gap-2">
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Learn more
                </span>
              </button>

              {/* Buy Button */}
              <button className="group relative px-8 py-4 bg-transparent border-2 border-gray-800 text-gray-800 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative z-10">Buy</span>
              </button>
            </div>

            <div className="flex items-center space-x-4 pt-3">
              <a
                href="https://github.com/nadunalgoda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-gray-200 shadow hover:shadow-lg hover:scale-110 hover:bg-gray-50 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/nadunalgoda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-gray-200 shadow hover:shadow-lg hover:scale-110 hover:bg-gray-50 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:nadun@example.com"
                className="p-3 rounded-xl bg-white border border-gray-200 shadow hover:shadow-lg hover:scale-110 hover:bg-gray-50 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-gray-900"
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
            </div>
          </div>

          {/* Right Stats Card */}
          <div className="relative hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <pre className="text-xs font-mono text-gray-200 leading-relaxed">
                      {`const developer = {
  name: "Nadun Algoda",
  role: "Full-Stack + Cloud",
  skills: ["React", "Node.js", 
          "AWS", "Docker"],
  passion: "Building the future"
};`}
                    </pre>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        10+
                      </div>
                      <p className="text-gray-600 mt-1 text-xs font-semibold">
                        Projects
                      </p>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        3+
                      </div>
                      <p className="text-gray-600 mt-1 text-xs font-semibold">
                        Years Experience
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-200">
                      AWS Certified
                    </span>
                    <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold border border-purple-200">
                      React Expert
                    </span>
                    <span className="px-3 py-1.5 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold border border-pink-200">
                      DevOps Pro
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <style>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -30px) scale(1.05);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.95);
          }
          75% {
            transform: translate(20px, 30px) scale(1.02);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
}
