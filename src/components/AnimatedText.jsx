import { motion } from "motion/react";
import "./AnimatedText.css";

// Splits text into individual letters and reveals each one with a 3D flip,
// staggered so they cascade in left to right. The color animation is pure
// CSS (see AnimatedText.css) so it keeps running smoothly after the reveal.
function AnimatedText({ text, disableAnimation = false }) {
  const letters = Array.from(text);

  if (disableAnimation) {
    return <span className="animated-text animated-text-static">{text}</span>;
  }

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.035, delayChildren: 0.4 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 24, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className="animated-text"
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          className="animated-letter"
          style={{ "--letter-index": index }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default AnimatedText;