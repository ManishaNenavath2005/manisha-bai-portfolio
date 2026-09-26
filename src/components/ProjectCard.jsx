import { motion } from "motion/react";
import { Link as LinkIcon } from "lucide-react";
import "./Projects.css";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
    >
      <h3 className="project-title">
        {project.title}
      </h3>

      <p className="project-description">
        {project.description}
      </p>

      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="project-live-link"
      >
        <LinkIcon size={16} />
        Live
      </a>
    </motion.article>
  );
}

export default ProjectCard;