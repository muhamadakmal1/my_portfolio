import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/Projects.css";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const projects = [
    {
      title: "Weather App",
      description: "React app with weather Api.",
      image: "/projects/weather.png",
      link: "https://weather-sepia-ten-53.vercel.app/",
      category: "REACT",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio using React and Bootstrap.",
      image: "/projects/portfolio.png",
      link: "https://github.com/muhamadakmal1/portfolio",
      category: "Frontend",
    },
    {
      title: "Pitch For Profit",
      description:
        "A MERN stack platform connecting entrepreneurs and investors through startup pitch submissions and structured investor feedback. Investors can provide feedback on submitted pitches to support startup development.",
      image: "/projects/pitchForProfit.png",
      link: "https://github.com/muhamadakmal1/pitch-For-Profit",
      category: "Fullstack",
    },
    {
      title: "Lung Cancer Prediction App",
      description:
        "This is an interactive Streamlit web app that predicts the likelihood of lung cancer based on user survey inputs such as age, smoking habits, anxiety, and other health indicators.",
      image: "/projects/Lung.png",
      link: "https://github.com/muhamadakmal1/Lung-Cancer-Survey-Analysis",
      category: "MACHINE LEARNING",
    },
{
  title: "Traffic Crashes: In-Depth Analysis",
  description: "An in-depth Jupyter Notebook project analyzing traffic crash data using EDA techniques. It highlights patterns, high-risk zones, and contributing factors through visual storytelling.",
  image: "/projects/traffic.png",
  link: "https://github.com/muhamadakmal1/traffic-crashes-in-depth-analysis",
  category: "EDA"
}
  ];

  const categoryColors = {
    MERN: "#D1E7DD",
    "Data Science": "#F8D7DA",
    Fullstack: "#FFF3CD",
    Frontend: "#D0EBFF",
    "Machine Learning": "#D0EBFF", // soft blue
    "Generative AI": "#E2E3E5", // soft grayish white
    "EDA" : "#FFC745"
  };

  const badgeColors = {
    MERN: "#2E7D32",
    "Data Science": "#C2185B",
    Fullstack: "#F57C00",
    Frontend: "#0277BD",
    "Machine Learning": "#1565C0", // blue
    "Generative AI": "#6C757D", // neutral gray
    "EDA": "#007A78" // orange
  };

  return (
    <section id="projects" className="container my-5">
      <h2 className="mb-4 text-center fw-bold" style={{ color: "#5D7B1F" }}>
        Projects
      </h2>
      <div className="row justify-content-center">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;
          const shortDesc =
            project.description.length > 100
              ? project.description.slice(0, 100) + "..."
              : project.description;

          return (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  backgroundColor:
                    categoryColors[project.category] || "#F4FFC3",
                  borderRadius: "10px",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(128, 157, 60, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top rounded-top"
                  style={{
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <div className="card-body d-flex flex-column p-3">
                  <span
                    className="badge mb-2"
                    style={{
                      backgroundColor:
                        badgeColors[project.category] || "#809D3C",
                      color: "#fff",
                      fontSize: "0.7rem",
                      alignSelf: "flex-start",
                      borderRadius: "5px",
                      padding: "3px 8px",
                      fontWeight: "600",
                    }}
                  >
                    {project.category}
                  </span>

                  <h6
                    className="fw-semibold mb-2"
                    style={{ fontSize: "1rem", color: "#4A6323" }}
                  >
                    {project.title}
                  </h6>

                  <p
                    className="card-text flex-grow-1 small mb-2"
                    style={{ color: "#444" }}
                  >
                    {isExpanded ? project.description : shortDesc}
                    {project.description.length > 100 && (
                      <span
                        onClick={() => toggleReadMore(index)}
                        style={{
                          color: badgeColors[project.category] || "#809D3C",
                          cursor: "pointer",
                          fontWeight: "600",
                          marginLeft: "5px",
                        }}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </span>
                    )}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm mt-auto"
                    style={{
                      backgroundColor:
                        badgeColors[project.category] || "#809D3C",
                      color: "white",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      borderRadius: "6px",
                      border: "none",
                      padding: "6px 14px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                    }}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
