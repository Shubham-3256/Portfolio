import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Loader from "./Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  try {
    const res = await fetch(
      "https://shubham-contact-api.onrender.com/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (res.ok) {
      alert("Message sent successfully!");
      e.target.reset(); // clear the form
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred. Please try later.");
  }
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  const projects = [
    {
      title: "Project One",
      img: "https://source.unsplash.com/400x300/?app",
      desc: "A short description of the project goes here.",
    },
    {
      title: "Project Two",
      img: "https://source.unsplash.com/400x300/?website",
      desc: "Another example of a creative project.",
    },
    {
      title: "Project Three",
      img: "https://source.unsplash.com/400x300/?code",
      desc: "A brief showcase of your latest build.",
    },
  ];

  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 />, color: "#e44d26" },
    { name: "CSS", level: 90, icon: <FaCss3Alt />, color: "#2965f1" },
    { name: "JavaScript", level: 85, icon: <FaJsSquare />, color: "#f0db4f" },
    { name: "React", level: 80, icon: <FaReact />, color: "#61dafb" },
    { name: "Node.js", level: 70, icon: <FaNodeJs />, color: "#3c873a" },
  ];

  if (loading) return <Loader />;

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="hero" data-aos="fade-in" id="hero" role="banner">
        <div className="hero-content">
          <h1>Shubham Sharma</h1>
          <p className="hero-subtitle">
            Artificial Intelligence | Machine Learning | Model Optimization
          </p>
          <a href="#about" className="cta-button">
            Explore
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-aos="fade-up" aria-labelledby="about-heading">
        <div className="section-content">
          <h2 id="about-heading">About Me</h2>
          <p>
            <center>
              {" "}
              I am a passionate Computer Science Engineering student
              specializing in full-stack web development and AI/ML. With
              hands-on experience in the MERN stack, Python, and cloud-based
              applications, I am eager to build innovative solutions that solve
              real-world problems. My goal is to contribute to the field of AI
              while continuously learning and evolving as a developer.
            </center>
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        data-aos="fade-left"
        aria-labelledby="skills-heading"
      >
        <div className="section-content">
          <h2 id="skills-heading">My Skills</h2>
          <div className="skills">
            {skills.map((skill, i) => (
              <div key={i} className="skill" data-aos="zoom-in-up">
                <div className="skill-label">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {skill.icon} {skill.name}
                  </span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, #111827)`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        data-aos="zoom-in-up"
        aria-labelledby="projects-heading"
      >
        <div className="section-content">
          <h2 id="projects-heading">My Projects</h2>
          <div className="projects">
            {projects.map((project, i) => (
              <div className="card" key={i}>
                <img
                  src={project.img}
                  alt={`Preview of ${project.title}`}
                  loading="lazy"
                />
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-aos="fade-right"
        aria-labelledby="contact-heading"
      >
        <div className="section-content">
          <h2 id="contact-heading">Contact Me</h2>
          <form onSubmit={handleSubmit} aria-label="Contact form">
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              required
              autoComplete="name"
            />

            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              required
              autoComplete="email"
            />

            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          &copy; 2025 <strong>Shubham Sharma</strong>. All rights reserved.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/Shubham-3256"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham325698?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1UejKY1WQBWy%2FE%2FCoAKrzA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/__shubham__00_/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
