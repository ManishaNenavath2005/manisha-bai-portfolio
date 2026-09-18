import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  const scrollRef = useRef(null);

  // Scrolls the card row left/right by roughly one card's width
  const scrollByCard = (direction) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="section projects">
      <div className="container projects-header">
        <span className="eyebrow">Portfolio Index</span>
        <h2 className="section-title">Featured Engineering Projects</h2>
        <p className="section-subtitle">
          A selection of projects that reflect how I design, build, and ship full-stack applications.
        </p>
      </div>

      <div className="projects-scroll-wrapper">
        <div className="projects-scroll" ref={scrollRef}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="projects-controls container">
          <button
            className="projects-arrow"
            onClick={() => scrollByCard("prev")}
            aria-label="Scroll to previous project"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="projects-arrow"
            onClick={() => scrollByCard("next")}
            aria-label="Scroll to next project"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;