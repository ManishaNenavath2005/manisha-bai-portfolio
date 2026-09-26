import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container education-header">
        <motion.h2
          className="education-neon-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
      </div>

      <div className="container education-list">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            className="education-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="education-icon">
              <GraduationCap size={22} />
            </div>

            <div className="education-body">
              <div className="education-top-row">
                <div>
                  <h3 className="education-degree">{item.degree}</h3>
                  {item.field && <p className="education-field">{item.field}</p>}
                </div>
                <span className="education-years">{item.years}</span>
              </div>

              <p className="education-institution">{item.institution}</p>
              {item.location && (
                <p className="education-location">{item.location}</p>
              )}

              <div className="education-footer-row">
                <div className="education-tags">
                  {item.tags?.map((tag) => (
                    <span key={tag} className="education-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="education-score">{item.score}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;