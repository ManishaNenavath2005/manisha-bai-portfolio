import { socialLinks } from "../data/links";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="divider-line" />

      <div className="container footer-inner">
        <p className="footer-wordmark">MANISHA.</p>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 Manisha Bai Nenavath. Built with React.js.
          </p>

          <div className="footer-socials">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;