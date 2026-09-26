import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import "./Training.css";

const trainingTech = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "SQL",
  "MongoDB",
  "Python",
  "Generative AI",
];

function Training() {
  return (
    <section id="training" className="section training">
      <div className="container">
        <motion.div
          className="training-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="training-top">
            <div className="training-icon">
              <Rocket size={22} />
            </div>

            <div className="training-heading">
              <span className="eyebrow">Professional Training</span>

              <h2 className="training-title">
                Full-Stack Development Trainee
              </h2>

              <p className="training-org">
                NxtWave CCBP 4.0 Academy · 2024 – Present
              </p>
            </div>
          </div>

          <p className="training-note">
            Completed structured, hands-on training in Full-Stack Development,
            covering frontend, backend, databases, authentication, REST APIs,
            and responsive web application development. Built multiple
            real-world style applications using React.js, JavaScript, Node.js,
            Express.js, SQL, and MongoDB while strengthening problem-solving
            skills through Data Structures and Algorithms practice.
          </p>

          <p className="training-note">
            Also explored Python and Generative AI concepts and applied them
            to practical project development.
          </p>

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