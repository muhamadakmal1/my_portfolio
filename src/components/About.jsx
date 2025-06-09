import React from "react";

function About() {
  return (
    <section id="about" className="container my-5">
      <h2 className="mb-4 text-center fw-bold" style={{ color: "#809D3C" }}>
        About Me
      </h2>
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <p className="lead">
            I'm a web developer with a strong foundation in the{" "}
            <strong style={{ color: "#809D3C" }}>MERN stack</strong> and a
            background in
            <strong style={{ color: "#809D3C" }}> Data Science</strong>. From
            February to May, I trained intensively in full-stack development,
            focusing on building robust applications and integrating advanced
            technologies.
          </p>
          <p>
            I'm particularly passionate about exploring{" "}
            <strong style={{ color: "#809D3C" }}>Generative AI</strong> tools
            like LangChain and Hugging Face, and I enjoy solving real-world
            problems using modern web and AI technologies.
          </p>
          <p>
            I'm a fast learner, collaborative team player, and always eager to
            push boundaries in tech. My goal is to build scalable, impactful
            solutions that combine clean code and intelligent design.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <div className="image-wrapper">
            <img
              src="/profile.png"
              alt="Danish Profile"
              className="img-fluid profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
