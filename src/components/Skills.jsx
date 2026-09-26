import { motion } from "motion/react";
import { Code2, LayoutTemplate, Server, Database, Brain, Wrench, Sparkles } from "lucide-react";
import { skillCategories } from "../data/skills";
import "./Skills.css";

const iconMap = { Code2, LayoutTemplate, Server, Database, Brain, Wrench, Sparkles };

const allSkills = skillCategories.flatMap((category) => category.skills);

function SkillRibbon() {
  return (
    <div className="skills-ribbon">
      <div className="skills-ribbon-track">
        {[...allSkills, ...allSkills].map((skill, i) => (
          <span key={`${skill}-${i}`} className="ribbon-item">
            <span className="ribbon-text">{skill}</span>
            <span className="ribbon-dot" aria-hidden="true">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container skills-header">

        <motion.h2
          className="section-title skills-gradient-title"
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <SkillRibbon />
      </motion.div>

      <div className="container skills-grid">
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.icon];
          return (
            <motion.div
              key={category.id}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="skill-card-header">
                <Icon size={16} />
                <span>{category.title}</span>
              </div>

              <div className="skill-card-pills">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;