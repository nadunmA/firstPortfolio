import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", hash: "#home" },
    { name: "About", path: "/", hash: "#about" },
    { name: "Projects", path: "/", hash: "#projects" },
    { name: "Certifications", path: "/certifications", hash: null },
    { name: "Contact", path: "/", hash: "#footer" },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If it's the certifications page route
    if (item.path === "/certifications") {
      navigate("/certifications");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Update active section immediately on click
    setActiveSection(item.hash);

    // If we're not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        scrollToSection(item.hash);
      }, 100);
    } else {
      // Already on home page, just scroll
      scrollToSection(item.hash);
    }
  };

  const scrollToSection = (hash) => {
    if (hash === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (hash === "#footer") {
      // Scroll to bottom of page for footer
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
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

  const isActive = (item) => {
    if (item.path === "/certifications") {
      return location.pathname === "/certifications";
    }
    // Use activeSection state instead of location.hash
    return location.pathname === "/" && activeSection === item.hash;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect which section is in view and update active section
      if (location.pathname === "/") {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        // Check if we're near the bottom of the page (for footer)
        if (scrollTop + windowHeight >= documentHeight - 50) {
          setActiveSection("#footer");
          return;
        }

        // Check other sections
        const sections = [
          { hash: "#projects", element: document.querySelector("#projects") },
          { hash: "#about", element: document.querySelector("#about") },
          { hash: "#home", element: null },
        ];

        for (const section of sections) {
          if (section.element) {
            const rect = section.element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom > 150) {
              setActiveSection(section.hash);
              return;
            }
          }
        }

        // Default to home if nothing else matches
        setActiveSection("#home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

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
                <Link
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-900 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                >
                  Nadun Algoda
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.hash || item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive(item)
                        ? "bg-black/80 text-white shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl"
                        : "text-gray-800 hover:text-black hover:bg-white/20 hover:shadow-[inset_0_1px_0_rgba(0,0,0,0.1)]"
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
                  className="p-2 text-gray-800 hover:bg-white/20 rounded-full transition-all duration-300"
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
                        key={item.name}
                        href={item.hash || item.path}
                        onClick={(e) => handleNavClick(e, item)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        whileTap={{ scale: 0.95 }}
                        className={`block px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 ${
                          isActive(item)
                            ? "bg-black/80 text-white shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl"
                            : "text-gray-800 hover:bg-white/20 hover:text-black hover:shadow-[inset_0_1px_0_rgba(0,0,0,0.1)]"
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
    </>
  );
}
