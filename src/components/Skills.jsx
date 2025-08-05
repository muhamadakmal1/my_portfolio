import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const categorizedSkills = {
    "MERN Stack": [
      { name: "MongoDB", image: "/skills/mongodb.png" },
      { name: "Express.js", image: "/skills/express.png" },
      { name: "React.js", image: "/skills/react.png" },
      { name: "Node.js", image: "/skills/node.png" },
      { name: "JavaScript", image: "/skills/java-script.png" },
      { name: "HTML/CSS", image: "/skills/css.png" },
      { name: "Bootstrap", image: "/skills/bootstrap.png" },
      { name: "Postman", image: "/skills/postman.png" },
    ],
    "Data Science": [
      { name: "Python", image: "/skills/python.png" },
      { name: "R Programming", image: "/skills/r.png" },
      { name: "Pandas", image: "/skills/pandas.png" },
      { name: "NumPy", image: "/skills/numpy.png" },
      { name: "Matplotlib", image: "/skills/Matplotlib.png" },
      { name: "Seaborn", image: "/skills/Seaborn.png" },
      { name: "Scikit-learn", image: "/skills/scikit-learn.png" },
    ],
    "Machine Learning": [
      { name: "TensorFlow", image: "/skills/tensorflow.png" },
      { name: "Keras", image: "/skills/keras.png" },
      { name: "PyTorch", image: "/skills/pytorch.png" },
      { name: "OpenCV", image: "/skills/OpenCV.png" },
    ],
    "Generative AI": [
      { name: "LangChain", image: "/skills/langchain.png" },
      { name: "Hugging Face", image: "/skills/huggingface.png" },
    ],
    "Cloud & Tools": [
      { name: "AWS", image: "/skills/aws.png" },
      { name: "Git", image: "/skills/git.png" },
      { name: "Github", image: "/skills/github.png" },
      { name: "Anaconda", image: "/skills/anaconda.png" },
      { name: "Jupyter Notebook", image: "/skills/Jupyter.png" },
      { name: "VS Code", image: "/skills/vscode.png" },
      { name: "Google colab", image: "/skills/gcolab.png" },
      
    ],
    "Analytics & BI": [
      { name: "Excel", image: "/skills/excel.png" },
      { name: "Tableau", image: "/skills/tableau.png" },
      { name: "Power BI", image: "/skills/powerbi.png" },
    ],
    // "Design Tools": [
    //   { name: "Adobe Photoshop", image: "/skills/adobephotoshop.png" },
    //   { name: "GIMP", image: "/skills/gimp.png" },
    //   { name: "Lightroom", image: "/skills/lightroom.png" },
    //   { name: "Canva", image: "/skills/canva.png" },
    //   { name: "Figma", image: "/skills/figma.png" },
    //   { name: "CapCut", image: "/skills/capcut.png" },
    // ],
  };

  return (
    <section id="skills" className="container my-4">
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "#809D3C", fontSize: "1.5rem" }}
      >
        Skills
      </h2>
      {Object.entries(categorizedSkills).map(([category, skills], index) => (
        <div
          key={index}
          className="mb-4"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <h6
            style={{
              color: "#555555",
              marginBottom: "0.75rem",
              fontSize: "1rem",
              fontWeight: "600",
              letterSpacing: "0.02em",
            }}
          >
            {category}
          </h6>
          <div className="row gx-2 gy-3 justify-content-center">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="col-4 col-sm-3 col-md-2 text-center"
              >
                <div
                  className="skill-card mx-auto"
                  style={{
                    backgroundColor: "#F9F9F9",
                    borderRadius: "10px",
                    padding: "10px",
                    width: "75px",
                    height: "75px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(128,157,60,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                  }}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    style={{
                      width: "35px",
                      height: "35px",
                      objectFit: "contain",
                      marginBottom: "6px",
                    }}
                  />
                  <h6
                    className="mb-0"
                    style={{
                      fontSize: "0.7rem",
                      color: "#809D3C",
                      fontWeight: "200",
                      lineHeight: 1.1,
                      userSelect: "none",
                    }}
                  >
                    {skill.name}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
