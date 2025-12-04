import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-6"
      >
        <div className="max-w-5xl mx-auto relative">
          {/* Liquid glass effect with glossy shine */}
          <div className="absolute -inset-[1px] rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-white/5 to-transparent"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-blue-400/20 via-transparent to-purple-400/20"></div>
          </div>

          <motion.div
            animate={{
              backgroundColor: isScrolled
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(255, 255, 255, 0.07)",
            }}
            transition={{ duration: 0.3 }}
            className={`relative max-w-5xl mx-auto transition-all duration-500 ease-out ${
              isScrolled
                ? "backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.3)]"
                : "backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
            } rounded-full border border-white/30`}
          >
            <div className="flex items-center justify-between px-6 h-16">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <a
                  href="#home"
                  onClick={() => handleNavClick("home")}
                  className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                >
                  Nadun Algoda
                </a>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-black/80 text-white shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl"
                        : "text-gray-700 hover:text-black hover:bg-black/10 hover:shadow-[inset_0_1px_0_rgba(0,0,0,0.1)]"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* Mobile menu button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:hidden"
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-white hover:bg-white/15 rounded-full transition-all duration-300"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 max-w-5xl mx-auto"
            >
              <div className="relative">
                {/* Liquid glass effect for mobile menu */}
                <div className="absolute -inset-[1px] rounded-3xl">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-white/5 to-transparent"></div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-blue-400/20 via-transparent to-purple-400/20"></div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.3)] p-4">
                  <div className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        onClick={() => handleNavClick(item.id)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        whileTap={{ scale: 0.95 }}
                        className={`block px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-black/80 text-white shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl"
                            : "text-gray-700 hover:bg-black/10 hover:text-black hover:shadow-[inset_0_1px_0_rgba(0,0,0,0.1)]"
                        }`}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="pt-20"></div>
    </>
  );
}
