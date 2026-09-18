import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, CheckCircle2, Send } from "lucide-react";
import { socialLinks, contactInfo } from "../data/links";
import "./Contact.css";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  consent: false,
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
        throw new Error(data.error || "Something went wrong.");
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
        <span className="eyebrow">Live Dispatch Mode</span>

        <h2 className="section-title">
          Let's Build Something Together
        </h2>

        <p className="section-subtitle contact-subtitle">
          I'm open to Software Engineering opportunities, internships,
          and interesting projects.
        </p>
      </div>

      <div className="container contact-grid">

        {/* Contact information and live preview */}
        <motion.div
          className="contact-preview card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-preview-header">
            <span className="code-dot code-dot-red" />
            <span className="code-dot code-dot-yellow" />
            <span className="code-dot code-dot-green" />

            <span className="contact-preview-title">
              payload_preview.json
            </span>
          </div>

          <pre className="contact-preview-body">
{`{
  "firstName": "${form.firstName || "..."}",
  "lastName": "${form.lastName || "..."}",
  "email": "${form.email || "..."}",
  "message": "${
    form.message
      ? form.message.slice(0, 40) +
        (form.message.length > 40 ? "..." : "")
      : "..."
  }"
}`}
          </pre>

          <div className="contact-direct">

            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-direct-item"
            >
              <Mail size={16} />
              {contactInfo.email}
            </a>

            <a
              href={`tel:${contactInfo.phone}`}
              className="contact-direct-item"
            >
              <Phone size={16} />
              {contactInfo.phone}
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-item"
            >
              GitHub
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-item"
            >
              LinkedIn
            </a>

          </div>
        </motion.div>

        {/* Contact form */}
        <motion.form
          className="contact-form card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >

          <div className="contact-form-row">

            <div className="contact-field">
              <label htmlFor="firstName">
                First Name
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="lastName">
                Last Name
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="contact-field">
            <label htmlFor="email">
              Email Address
            </label>

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
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message here..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <label className="contact-checkbox">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              required
            />

            I give permission to contact me at this email address.
          </label>

          <button
            type="submit"
            className="btn btn-primary contact-submit"
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