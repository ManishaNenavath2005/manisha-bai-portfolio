import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { socialLinks } from "../data/links";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <section id="contact" className="section contact"> 
       <div className="container contact-header">
        <motion.h2
          className="contact-neon-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
      </div>
      <div className="container contact-stack">

        {/* Hire Me Card */}
        <motion.div
          className="hire-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="hire-title">Hire Me</h2>

          <p className="hire-text">
            I'm currently open to Software Engineering opportunities,
            internships, and freelance projects. If you're looking for a
            dedicated Full-Stack Developer who brings creativity and
            consistency — let's connect!
          </p>

          <div className="hire-buttons">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hire-btn hire-btn-linkedin"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hire-btn hire-btn-github"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.form
          className="contact-form-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="contact-field">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              "Sending..."
            ) : status === "success" ? (
              <>
                <CheckCircle2 size={16} />
                Message Sent
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>

          {status === "success" && (
            <p className="contact-status contact-status-success">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="contact-status contact-status-error">
              {errorMsg}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;