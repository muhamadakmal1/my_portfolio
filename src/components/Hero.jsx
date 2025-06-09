import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../style/Hero.css"; // Import CSS for styles and animations

function Hero() {
  return (
    <div className="hero-section text-center">
      <h1
        className="display-3 fade-in delay-0"
        style={{ color: "black" }}
      >
        Hello, I'm{" "}
        <span style={{ fontFamily: "Playfair Display, serif" }}>
          Muhamad Akmal
        </span>
      </h1>

      <p className="lead fade-in delay-1" style={{ color: "black" }}>
        MERN Developer & Data Science Enthusiast
      </p>

      <div className="mt-4 fade-in delay-2">
        <a href="#contact" className="btn btn-primary btn-lg mx-2">
          Contact Me
        </a>
      </div>

      <div className="mt-4 fade-in delay-3">
        <a
          href="https://github.com/muhamadakmal1"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link mx-2"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/muhamadakmal019/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link mx-2"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
}

export default Hero;
