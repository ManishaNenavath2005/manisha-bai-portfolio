import { motion } from "motion/react";
import "./About.css";

const focusTags = ["Full-Stack Development", "React & Node", "Problem Solving"];

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status card — replaces a profile photo with a developer-themed visual */}
          <div className="about-card card">
            <div className="about-card-status">
              <span className="status-dot" />
              Open to Opportunities
            </div>
            <div className="about-card-icon" aria-hidden="true">
              {"</>"}
            </div>
            <p className="about-card-caption">B.Tech CSE · 2026 Graduate</p>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">System Profile</span>
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a Computer Science graduate with hands-on experience building
            full-stack web applications using React.js, Node.js, and
            Express.js, backed by strong fundamentals in Data Structures,
            Algorithms, and Object-Oriented Programming. I enjoy designing
            clean, database-driven applications and RESTful APIs, and I'm
            actively exploring Artificial Intelligence and Generative AI to
            build smarter, more useful software.
          </p>

          <div className="about-tags">
            {focusTags.map((tag) => (
              <span key={tag} className="about-tag">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;