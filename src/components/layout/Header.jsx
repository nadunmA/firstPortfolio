import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                onClick={() => handleNavClick("home")}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300"
              >
                Nadun Algoda
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-semibold transition-all duration-300 relative group ${
                    activeSection === item.id
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-transform duration-300 origin-left ${
                      activeSection === item.id
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop 
            <div className="hidden md:block">
              <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:shadow-purple-500/30">
                Get in Touch
              </button>
            </div>*/}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-900 hover:bg-gray-100/80 rounded-lg backdrop-blur-sm transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 text-black border border-purple-200"
                      : "text-gray-600 hover:bg-gray-50 hover:text-black"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile Navigation 
              <button className="w-full mt-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg">
                Get in Touch
              </button>*/}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section matching spacing */}
      <div className="pt-20"></div>
    </>
  );
}
