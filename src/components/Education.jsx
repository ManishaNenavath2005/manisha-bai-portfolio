import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container education-header">
        <span className="eyebrow">Academic Background</span>
        <h2 className="section-title">Education</h2>
      </div>

      <div className="container education-list">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            className="education-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="education-icon">
              <GraduationCap size={22} />
            </div>

            <div className="education-details">
              <h3>{item.degree}</h3>
              {item.field && <p className="education-field">{item.field}</p>}
              <p className="education-institution">{item.institution}</p>
            </div>

            <div className="education-meta">
              <span className="education-years">{item.years}</span>
              <span className="education-score">{item.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;