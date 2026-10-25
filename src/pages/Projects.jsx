import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageShell from "../components/PageShell";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/portfolio";
import { sfx } from "../utils/sfx";

const projectTabs = [
  { id: "ALL", label: "ALL BUILDS" },
  { id: "DESIGN", label: "UI / UX DESIGN" },
  { id: "PRODUCT", label: "PRODUCT DASHBOARDS" },
  { id: "AI", label: "AI EXPERIENCES" },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("ALL");

  useEffect(() => {
    const handleOpen = (event) => {
      const requested = String(event.detail || "").toLowerCase();
      const match = projects.find((project) =>
        project.id.toLowerCase() === requested ||
        project.title.toLowerCase().includes(requested)
      );
      if (match) setSelectedProject(match);
    };
    const handleClose = () => setSelectedProject(null);
    window.addEventListener("open-project-modal", handleOpen);
    window.addEventListener("close-project-modal", handleClose);
    return () => {
      window.removeEventListener("open-project-modal", handleOpen);
      window.removeEventListener("close-project-modal", handleClose);
    };
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "DESIGN") return project.id === "school-website";
    if (activeTab === "PRODUCT") return project.id === "crm-dashboard";
    if (activeTab === "AI") return project.id === "ai-cooking-assistant";
    return true;
  });

  return (
    <PageShell
      eyebrow="03 / SELECTED BUILDS"
      title="Projects & Prototypes"
      intro="Explore concepts that bring together user-focused design, useful web experiences, and AI-assisted workflows. Open any project to inspect its approach, highlights, and toolkit."
    >
      <section className="section" style={{ paddingTop: "10px" }}>
        <div className="container">
          <motion.div
            className="skills-filter-bar"
            role="tablist"
            aria-label="Project filter tabs"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {projectTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-btn ${isActive ? "active" : ""}`}
                  onClick={() => {
                    sfx.playClick();
                    setActiveTab(tab.id);
                  }}
                  onMouseEnter={() => sfx.playHover()}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>{`// ${tab.label}`}</span>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            className="projects-grid projects-grid-large"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            animate="visible"
            key={activeTab}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25, rotateX: 5 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -12 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    onInspect={(item) => setSelectedProject(item)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </PageShell>
  );
}
