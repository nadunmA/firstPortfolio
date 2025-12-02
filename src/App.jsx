import {} from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
