import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Download,
  ArrowDown,
} from "lucide-react";
import RoleSwapper from "./RoleSwapper";
import AnimatedText from "./AnimatedText";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero" ref={heroRef}>
      <motion.div
        className="container hero-inner"
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: 30 }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 1, y: 0 }
        }
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        {/* Hero Title */}
        <h1 className="hero-title">
          <AnimatedText
            text="Hello, I'm Manisha"
            disableAnimation={shouldReduceMotion}
          />{" "}
          <span className="hero-wave">👋</span>
        </h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
          }}
        >
          <RoleSwapper containerRef={heroRef} />
        </motion.div>

        {/* Introduction */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.85,
          }}
        >
          Computer Science graduate passionate about building
          modern, user-focused web applications with React,
          Node.js, and Express. I enjoy solving problems with
          code and exploring Generative AI to build smarter
          applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
        >
          <a
            href="#projects"
            className="btn btn-primary"
          >
            View My Work
            <ArrowRight size={16} />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Download Resume
            <Download size={16} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.a
        href="#about"
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 1.4,
        }}
      >
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}

export default Hero;