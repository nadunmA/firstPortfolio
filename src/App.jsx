import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import Certifications from "./components/pages/Certifications";

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
