import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Brain, Microscope, Cpu, ArrowRight } from "lucide-react";
import eegSketch from "@/assets/eeg-sketch.png";
import muonSketch from "@/assets/muon-sketch.png";
import fmriSketch from "@/assets/fmri-sketch.png";

const Projects = () => {
  const projects = [
    {
      id: "eeg-brain-imaging",
      title: "EEG Brain Imaging Research",
      description: "Investigating linguistic content and social information using event-related potentials in the SONA Lab",
      icon: Brain,
      image: eegSketch,
      tags: ["Neuroscience", "EEG", "Data Analysis"],
      period: "Oct 2024 - Present"
    },
    {
      id: "muon-tomography",
      title: "Muon Tomography Simulation",
      description: "Geant4 simulation of cosmic ray detectors using C++ on Linux with modified geometric arrangements",
      icon: Microscope,
      image: muonSketch,
      tags: ["C++", "Geant4", "Physics"],
      period: "Summer 2024"
    },
    {
      id: "fmri-motion",
      title: "fMRI Motion Perception Study",
      description: "Analyzed neural responses in MT (V5) and V1 cortices using MATLAB, Psychtoolbox, and GLM modeling",
      icon: Cpu,
      image: fmriSketch,
      tags: ["MATLAB", "fMRI", "Computer Vision"],
      period: "Spring 2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Case studies in neuroscience research, physics simulation, and computational modeling
            </p>
          </motion.div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link 
                  to={`/projects/${project.id}`}
                  className="group block"
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <motion.div 
                      className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <motion.div
                        className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <project.icon className="w-5 h-5" />
                        <span>{project.period}</span>
                      </div>
                      
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary"
                            className="bg-secondary/20 hover:bg-secondary/30 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground">
              Interested in more projects? Check out my{" "}
              <Link to="/blog" className="text-primary hover:underline">
                blog
              </Link>{" "}
              for detailed write-ups and insights.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
