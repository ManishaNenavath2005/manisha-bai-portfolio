import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-card">
          <p className="footer-line-1">
            © 2026 Manisha Bai Nenavath
            <span className="footer-pipe">|</span>
            <span className="footer-tagline">Full-Stack Developer Portfolio</span>
          </p>

          <p className="footer-line-2">Built with React.js · Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;