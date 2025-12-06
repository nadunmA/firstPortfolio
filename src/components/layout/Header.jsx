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

  // Smooth scroll logic
  const scrollToSection = (hash) => {
    if (hash === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (hash === "#footer") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      return;
    }

    const el = document.querySelector(hash);
    if (!el) return;

    const offset = 80;
    const position = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: position, behavior: "smooth" });
  };

  // Nav click handler
  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If certifications: navigate separately
    if (item.path === "/certifications") {
      navigate("/certifications");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setActiveSection(item.hash);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(item.hash), 150);
    } else {
      scrollToSection(item.hash);
    }
  };

  // Detect scroll + detect active section
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname !== "/") return;

      const sections = [
        { hash: "#projects", element: document.querySelector("#projects") },
        { hash: "#about", element: document.querySelector("#about") },
      ];

      for (const sec of sections) {
        if (sec.element) {
          const rect = sec.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(sec.hash);
            return;
          }
        }
      }

      if (window.scrollY < 200) setActiveSection("#home");

      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (bottom) setActiveSection("#footer");
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const isActive = (item) => {
    if (item.path === "/certifications") {
      return location.pathname === "/certifications";
    }
    return item.hash === activeSection && location.pathname === "/";
  };

  return (
    <>
      {/* Main Nav */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            animate={{
              backgroundColor: isScrolled
                ? "rgba(255,255,255,0.55)"
                : "rgba(255,255,255,0.35)",
              backdropFilter: "blur(20px)",
            }}
            className={`flex items-center justify-between h-14 px-6 rounded-full border 
            border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.06)] 
            transition-all duration-300`}
          >
            {/* Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-lg font-semibold text-gray-900 tracking-tight"
            >
              Nadun Algoda
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 
                    ${
                      isActive(item)
                        ? "bg-black text-white shadow-sm"
                        : "text-gray-700 hover:bg-gray-200/60"
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-200 transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden max-w-5xl mx-auto mt-3"
            >
              <div
                className="bg-white/70 backdrop-blur-xl border border-white/40 
              rounded-2xl shadow-md p-4"
              >
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm mb-1 
                      ${
                        isActive(item)
                          ? "bg-black text-white"
                          : "text-gray-800 hover:bg-gray-200/60"
                      }
                    `}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
