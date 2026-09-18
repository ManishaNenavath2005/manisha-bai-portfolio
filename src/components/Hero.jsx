import { useRef } from "react";
import { motion } from "motion/react";
import RoleSwapper from "./RoleSwapper";
import { socialLinks } from "../data/links";
import "./Hero.css";

// Code shown inside the developer window
const codeLines = [
  { text: "const developer = {", indent: 0 },
  { text: "name: 'Manisha Bai Nenavath',", indent: 1 },
  { text: "role: 'Full-Stack Developer',", indent: 1 },
  { text: "stack: ['React', 'Node', 'Express'],", indent: 1 },
  { text: "exploring: 'Generative AI',", indent: 1 },
  { text: "};", indent: 0 },
];

function Hero() {
  const heroRef = useRef(null);

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Background glow effects */}
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />

      <div className="container hero-inner">
        {/* Hero Content */}
        <div className="hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hello, I'm Manisha
          </motion.h1>

                    <RoleSwapper containerRef={heroRef} />

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I build modern web applications and explore AI-powered solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              GitHub
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Code Window */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="code-window">
            {/* Code Window Header */}
            <div className="code-window-header">
              <span className="code-dot code-dot-red" />
              <span className="code-dot code-dot-yellow" />
              <span className="code-dot code-dot-green" />

              <span className="code-window-title">
                developer.js
              </span>
            </div>

            {/* Code */}
            <div className="code-window-body">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  className="code-line"
                  style={{
                    paddingLeft: `${line.indent * 1.25}rem`,
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + index * 0.12,
                  }}
                >
                  <span className="code-line-number">
                    {index + 1}
                  </span>

                  <span className="code-line-text">
                    {line.text}
                  </span>
                </motion.div>
              ))}

              <span className="code-cursor" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.a
        href="#about"
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <span>Scroll to explore</span>
        <span className="hero-scroll-arrow">↓</span>
      </motion.a>
    </section>
  );
}

export default Hero;