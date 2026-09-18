import { motion, useScroll, useTransform } from "motion/react";
import "./RoleSwapper.css";

// These roles are all backed by your real skills — nothing invented.
const roles = ["Full-Stack Developer", "React & Node Engineer", "AI-Curious Developer"];

function RoleSwapper({ containerRef }) {
  // Tracks scroll progress (0 to 1) as the user scrolls through the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div className="role-swapper">
      {roles.map((role, index) => (
        <RoleText
          key={role}
          role={role}
          index={index}
          total={roles.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}

function RoleText({ role, index, total, progress }) {
  // Each role fades in/out based on how close the scroll position is to its "slot".
  // This creates a smooth crossfade instead of an abrupt swap.
  const opacity = useTransform(progress, (p) => {
    const scaled = p * (total - 1);
    const distance = Math.abs(scaled - index);
    return Math.max(0, 1 - distance * 2);
  });

  const y = useTransform(progress, (p) => {
    const scaled = p * (total - 1);
    return (scaled - index) * 14;
  });

  return (
    <motion.h2 className="hero-role role-swapper-text" style={{ opacity, y }}>
      {role}
    </motion.h2>
  );
}

export default RoleSwapper;