import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Globe3D } from "./Globe3D";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const data = {
      access_key: process.env.REACT_APP_WEB3FORMS_KEY,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: `Portfolio Contact from ${formData.name}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const sampleMarkers = [
    { lat: 40.7128,  lng: -74.006,   src: "https://assets.aceternity.com/avatars/1.webp",  label: "New York" },
    { lat: 51.5074,  lng: -0.1278,   src: "https://assets.aceternity.com/avatars/2.webp",  label: "London" },
    { lat: 35.6762,  lng: 139.6503,  src: "https://assets.aceternity.com/avatars/3.webp",  label: "Tokyo" },
    { lat: -33.8688, lng: 151.2093,  src: "https://assets.aceternity.com/avatars/4.webp",  label: "Sydney" },
    { lat: 48.8566,  lng: 2.3522,    src: "https://assets.aceternity.com/avatars/5.webp",  label: "Paris" },
    { lat: 28.6139,  lng: 77.209,    src: "https://assets.aceternity.com/avatars/6.webp",  label: "New Delhi" },
    { lat: 55.7558,  lng: 37.6173,   src: "https://assets.aceternity.com/avatars/7.webp",  label: "Moscow" },
    { lat: -22.9068, lng: -43.1729,  src: "https://assets.aceternity.com/avatars/8.webp",  label: "Rio de Janeiro" },
    { lat: 31.2304,  lng: 121.4737,  src: "https://assets.aceternity.com/avatars/9.webp",  label: "Shanghai" },
    { lat: 25.2048,  lng: 55.2708,   src: "https://assets.aceternity.com/avatars/10.webp", label: "Dubai" },
    { lat: -34.6037, lng: -58.3816,  src: "https://assets.aceternity.com/avatars/11.webp", label: "Buenos Aires" },
    { lat: 1.3521,   lng: 103.8198,  src: "https://assets.aceternity.com/avatars/12.webp", label: "Singapore" },
    { lat: 37.5665,  lng: 126.978,   src: "https://assets.aceternity.com/avatars/13.webp", label: "Seoul" },
  ];

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        {/* Heading */}
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <h1 className="contact-heading">
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p className="contact-subheading">
              Have a question, project idea, or just want to say hi? I'd love to
              hear from you!
            </p>
          </Col>
        </Row>

        {/* Body */}
        <Row className="justify-content-center contact-body">
          {/* Left Side — 3D Globe */}
          <Col md={4} className="contact-socials">
            <Globe3D
              markers={sampleMarkers}
              config={{
                atmosphereColor: "#4da6ff",
                atmosphereIntensity: 20,
                bumpScale: 5,
                autoRotateSpeed: 0.3,
              }}
              onMarkerClick={(marker) => console.log("Clicked:", marker.label)}
              onMarkerHover={(marker) => { if (marker) console.log("Hovering:", marker.label); }}
            />
          </Col>

          {/* Form */}
          <Col md={6} className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="contact-form-title">Send a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-custom">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Krish Bhuva"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div className="form-group-custom">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div className="form-group-custom">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your message here..."
                    required
                    disabled={status === "loading"}
                  />
                </div>

                {status === "success" && (
                  <div className="contact-alert contact-alert-success">
                    ✅ Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="contact-alert contact-alert-error">
                    ❌ Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="contact-spinner" />
                  ) : (
                    "Send Message 🚀"
                  )}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
