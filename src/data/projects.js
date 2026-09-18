// Add a new project by adding one object here — Projects.jsx automatically
// renders a card for every entry in this array, no other code changes needed.

export const projects = [
  {
    id: "mental-health-advisor",
    tag: "PROJECT 01",
    category: "AI / Generative AI",
    title: "Personalized Mental Health Advisor",
    role: "Team Lead & Full-Stack Developer",
    description:
      "An AI-assisted mental wellness platform that analyzes user responses to offer personalized, non-diagnostic coping guidance. Built machine learning models with Scikit-learn and Pandas, and integrated a TinyLlama-based Generative AI engine for empathetic conversational support, with a Flask backend handling real-time interaction.",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "XGBoost", "TinyLlama"],
    github: "YOUR_GITHUB_URL",
    live: "YOUR_LIVE_DEMO_URL",
  },
  {
    id: "jobby-app",
    tag: "PROJECT 02",
    category: "Full-Stack Web App",
    title: "Jobby App — Job Search Platform",
    role: "Full-Stack Developer",
    description:
      "A full-featured job search platform with secure JWT-based authentication, protected routing, and persistent login sessions. Integrated REST APIs for dynamic, real-time job listings with search, multi-filtering, and loading/failure/empty-state handling across responsive, reusable UI components.",
    tech: ["React.js", "React Router", "JWT Auth", "Bootstrap", "REST APIs"],
    github: "YOUR_GITHUB_URL",
    live: "YOUR_LIVE_DEMO_URL",
  },
  {
    id: "nxt-watch",
    tag: "PROJECT 03",
    category: "Full-Stack Web App",
    title: "Nxt Watch — Video Streaming App",
    role: "Full-Stack Developer",
    description:
      "A YouTube-inspired video streaming platform with Trending, Gaming, Saved Videos, and Search functionality. Implemented JWT-based authentication and protected routes, and consumed REST APIs to fetch, filter, and render dynamic video content across categories in real time.",
    tech: ["React.js", "React Router", "JWT Auth", "Bootstrap", "REST APIs"],
    github: "YOUR_GITHUB_URL",
    live: "YOUR_LIVE_DEMO_URL",
  },
];