import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-container">
        <motion.div
          className="about-card card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Initials avatar — no photo, as requested */}
          <div className="about-avatar">
            <span>MB</span>
          </div>

          <h2 className="about-heading">About Me</h2>

          <div className="about-text">
            <p>
              Hi, I'm <span className="hl hl-pink">Manisha Bai Nenavath</span>
              , a Computer Science graduate and{" "}
              <span className="hl hl-pink">Full-Stack Developer</span> who
              enjoys building clean, scalable, and user-focused web
              applications.
            </p>

            <p>
              My core programming language is{" "}
              <span className="hl hl-green">Java</span>, alongside{" "}
              <span className="hl hl-green">Python</span> and{" "}
              <span className="hl hl-green">JavaScript</span>, with hands-on
              experience building applications using{" "}
              <span className="hl hl-cyan">React.js</span>,{" "}
              <span className="hl hl-cyan">Node.js</span>, and{" "}
              <span className="hl hl-cyan">Express.js</span>.
            </p>

            <p>
              I have a strong foundation in{" "}
              <span className="hl hl-green">Data Structures</span>,{" "}
              <span className="hl hl-green">Algorithms</span>, and{" "}
              <span className="hl hl-green">
                Object-Oriented Programming
              </span>
              , and I'm currently exploring{" "}
              <span className="hl hl-cyan">Generative AI</span> to build
              smarter applications.
            </p>
          </div>

          <div className="about-badge">
            <GraduationCap size={16} />
            B.Tech CSE @ Ashoka Women's Engineering College · CGPA: 8.5
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;