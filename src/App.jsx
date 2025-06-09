import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Skills />
      <Certificates />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
