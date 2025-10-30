import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/Projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ProjectsSection />
      </motion.div>
    </div>
  );
};

export default Projects;
