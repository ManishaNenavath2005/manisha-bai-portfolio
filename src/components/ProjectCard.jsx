import { motion } from "motion/react";
import { ExternalLink, ImageIcon } from "lucide-react";
import "./Projects.css";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="project-image-placeholder" aria-hidden="true">
        <ImageIcon size={28} />
        <span>project-image-placeholder</span>
      </div>

      <div className="project-body">
        <div className="project-meta">
          <span className="project-tag">{project.tag}</span>
          <span className="project-category">{project.category}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>

        {project.role && (
          <p className="project-role">{project.role}</p>
        )}

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="project-tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary project-btn"
          >
            Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary project-btn"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;