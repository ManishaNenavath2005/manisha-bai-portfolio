import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import "./Training.css";

const trainingTech = [
  "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "SQL", "MongoDB", "Python",
];

function Training() {
  return (
    <section id="training" className="section training">
      <div className="container">
        <motion.div
          className="training-card card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="training-top">
            <div className="training-icon">
              <Rocket size={22} />
            </div>
            <div>
              <span className="eyebrow">Currently Training</span>
              <h2 className="training-title">Full-Stack Development Trainee</h2>
              <p className="training-org">NxtWave CCBP 4.0 Academy · 2024 – Present</p>
            </div>
          </div>

          <p className="training-note">
            This is structured, ongoing training — not professional employment —
            focused on building production-ready, industry-aligned full-stack
            web applications using real-world tools and practices.
          </p>

          <div className="training-stat">
            <span className="training-stat-number">300+</span>
            <span className="training-stat-label">DSA problems solved</span>
          </div>

          <div className="training-tech">
            {trainingTech.map((tech) => (
              <span key={tech} className="training-tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Training;