import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) return "Please fill in all fields.";
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) return setStatus(error);

    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    // Gmail compose link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mohammadakmal152@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");

    setStatus("Redirecting to Gmail...");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="container my-4">
      <h2 className="text-center mb-3 fw-bold" style={{ color: "#809D3C", fontSize: "1.2rem" }}>
        Contact
      </h2>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-5 col-lg-4">
          <div
            className="card shadow-sm border-0 mx-auto"
            style={{ backgroundColor: "#F4FFC3", padding: "0.75rem" }}
          >
            <div className="card-body p-2">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="form-label fw-semibold" style={{ fontSize: "0.8rem" }}>
                    <FaUser className="me-2" /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-sm"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ fontSize: "0.8rem", padding: "0.3rem" }}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-semibold" style={{ fontSize: "0.8rem" }}>
                    <FaEnvelope className="me-2" /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-sm"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ fontSize: "0.8rem", padding: "0.3rem" }}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-semibold" style={{ fontSize: "0.8rem" }}>
                    <FaCommentDots className="me-2" /> Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control form-control-sm"
                    rows="3"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ fontSize: "0.8rem", padding: "0.4rem" }}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      backgroundColor: "#809D3C",
                      color: "#fff",
                      fontWeight: "bold",
                      padding: "0.4rem 1rem",
                      fontSize: "0.85rem",
                      borderRadius: "0.3rem",
                    }}
                  >
                    Send
                  </button>
                </div>
              </form>
              {status && (
                <p className="text-center mt-2 text-muted" style={{ fontSize: "0.75rem" }}>
                  <small>{status}</small>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
