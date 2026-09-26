import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Mail, ArrowUpRight } from "lucide-react";
import {
  socialLinks,
  contactInfo,
  availabilityStatus,
} from "../data/links";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (href) => {
    return activeSection === href.slice(1);
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <div className="navbar-inner container">
        {/* Mobile Logo */}
        <a href="#home" className="navbar-logo-mobile">
          MANISHA
          <span className="navbar-logo-dot">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-desktop">
          {/* Availability Status */}
          <div className="navbar-pill navbar-status">
            <span className="status-dot" />
            {availabilityStatus}
          </div>

          {/* Navigation Links */}
          <nav className="navbar-pill navbar-links-pill">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`navbar-link ${
                  isActive(link.href) ? "navbar-link-active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Contact */}
            <a
              href="#contact"
              className={`navbar-link navbar-link-contact ${
                isActive("#contact") ? "navbar-link-active" : ""
              }`}
            >
              Contact
              <ArrowUpRight size={14} />
            </a>
          </nav>

          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="navbar-pill navbar-email-pill"
          >
            <Mail size={14} />
            {contactInfo.email}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="navbar-mobile"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {/* Mobile Availability */}
            <div className="navbar-mobile-status">
              <span className="status-dot" />
              {availabilityStatus}
            </div>

            {/* Mobile Links */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`navbar-mobile-link ${
                  isActive(link.href) ? "navbar-link-active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Contact */}
            <a
              href="#contact"
              onClick={closeMenu}
              className={`navbar-mobile-link ${
                isActive("#contact") ? "navbar-link-active" : ""
              }`}
            >
              Contact
            </a>

            {/* Mobile Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={closeMenu}
            >
              Resume
            </a>

            {/* Mobile Social Links */}
            <div className="navbar-mobile-socials">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;