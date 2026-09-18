import { motion } from "motion/react";
import { skillCategories } from "../data/skills";
import "./Skills.css";

// Flatten every category's skills into one list, then split it into two
// halves — one for each marquee row (top row scrolls left, bottom row scrolls right).
const allSkills = skillCategories.flatMap((category) => category.skills);
const midpoint = Math.ceil(allSkills.length / 2);
const rowOne = allSkills.slice(0, midpoint);
const rowTwo = allSkills.slice(midpoint);

function MarqueeRow({ skills, direction }) {
  return (
    <div className="marquee-row">
      <div className={`marquee-track marquee-${direction}`}>
        {/* Duplicated so the loop has no visible seam */}
        {[...skills, ...skills].map((skill, i) => (
          <span key={`${skill}-${i}`} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="divider-line" />

      <div className="container skills-header">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What I Work With
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          className="section-subtitle skills-subtitle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tools and technologies I use to design, build, and ship full-stack applications.
        </motion.p>
      </div>

      <motion.div
        className="skills-marquees"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <MarqueeRow skills={rowOne} direction="left" />
        <MarqueeRow skills={rowTwo} direction="right" />
      </motion.div>
    </section>
  );
}

export default Skills;