import React from "react";

function Certificates() {
  const certificates = [
    {
      title: "MERN Stack Certificate",
      date: "Feb – May 2025",
      description:
        "Completed hands-on training in MongoDB, Express.js, React.js, and Node.js with real-world projects for building full-stack web applications.",
      image: "/certificates/mern.jpg",
      link: "https://drive.google.com/file/d/1z-yeBzZxDUgbCX-XYBgvL6yMeYxwKFKB/view?usp=sharing",
    },
    {
      title: "Complete Web Development",
      date: "2024",
      description:
        "Comprehensive course covering frontend, backend, REST APIs, and deployment practices.",
      image: "/certificates/webdev.jpg",
      link: "https://www.udemy.com/certificate/UC-7b05883c-856d-46c4-9bd4-f07750f25776/",
    },
    {
      title: "GenAI with LangChain & Hugging Face",
      date: "Jan – Feb 2025",
      description:
        "Built and deployed Generative AI apps using LangChain and Hugging Face Transformers.",
      image: "/certificates/genai.jpg",
      link: "https://www.udemy.com/certificate/UC-3e1fa40a-27e0-4315-a623-5ac2d8f366df/",
    },
     {
  title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
  date: "June 2025",
  description:
    "Gained hands-on experience in supervised & unsupervised ML, deep learning with neural networks, and advanced NLP techniques. Applied real-world datasets and deployed scalable AI solutions with modern tools and frameworks.",
  image: "/certificates/ds.jpeg",
  link: "https://www.udemy.com/certificate/UC-9d748652-a094-4138-9fce-f505e6c8bc26/",
},
    
  ];

  return (
    <section id="certificates" className="container my-5">
      <h2
        className="mb-2 text-center fw-bold"
        style={{ color: "#809D3C", fontSize: "1.5rem" }}
      >
        Certificates
      </h2>
      <p className="text-center text-muted mb-4" style={{ fontSize: "0.85rem" }}>
        Completed hands-on training and project-based certifications in modern web and AI development.
      </p>
      <div className="row justify-content-center">
        {certificates.map((cert, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-3">
            <div
              className="card h-100 border-0 shadow-sm"
              style={{
                backgroundColor: "#F4FFC3",
                transition: "transform 0.2s ease",
                minHeight: "260px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="card-img-top"
                style={{ height: "110px", objectFit: "cover" }}
              />
              <div className="card-body p-3 d-flex flex-column">
                <h6
                  className="fw-semibold mb-1"
                  style={{ fontSize: "0.9rem", color: "#5D7B1F" }}
                >
                  {cert.title}
                </h6>
                <small className="text-muted mb-2">{cert.date}</small>
                <p className="card-text small flex-grow-1 mb-2">
                  {cert.description}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm mt-auto"
                  style={{
                    backgroundColor: "#809D3C",
                    color: "white",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    border: "none",
                  }}
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
