import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Brain, Microscope, Cpu, ArrowRight, Heart, HandMetal, Headphones, Users, Video } from "lucide-react";
import eegAbstract from "@/assets/eeg-abstract.png";
import muonAbstract from "@/assets/muon-abstract.png";
import fmriAbstract from "@/assets/fmri-abstract.png";
import andoorAbstract from "@/assets/andoor-abstract.png";
import bhapticsAbstract from "@/assets/bhaptics-abstract.png";
import vrAbstract from "@/assets/vr-abstract.png";
import westemAbstract from "@/assets/westem-abstract.png";
import geeniucAbstract from "@/assets/geeniuc-abstract.png";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const projectCategories = {
    product: [
      {
        id: "andoor",
        title: "Andoor - Haptic Companion for Calm",
        description: "Built a therapeutic haptic device that mimics cat purring vibrations. Tested with neurodivergent children to support sensory regulation during overwhelming moments.",
        icon: Heart,
        image: andoorAbstract,
        tags: ["Product Design", "Haptic Feedback", "ASD"],
        period: "2024"
      },
      {
        id: "bhaptics",
        title: "bHaptics Tactile Designer",
        description: "Designed immersive haptic feedback patterns for VR experiences. Created tactile sensations that enhance virtual interactions through precise vibration mapping.",
        icon: HandMetal,
        image: bhapticsAbstract,
        tags: ["Haptic Design", "VR", "UX"],
        period: "2024"
      },
      {
        id: "vr-project",
        title: "VR Interactive Experience",
        description: "Developed an immersive VR environment combining spatial audio and haptic feedback for enhanced presence and user engagement.",
        icon: Headphones,
        image: vrAbstract,
        tags: ["Virtual Reality", "Unity", "Interactive Media"],
        period: "2024"
      }
    ],
    research: [
      {
        id: "eeg-brain-imaging",
        title: "EEG Brain Imaging",
        description: "Working with event-related potentials to understand how the brain processes linguistic content and social cues in the SONA Lab.",
        icon: Brain,
        image: eegAbstract,
        tags: ["Neuroscience", "EEG", "Data Analysis"],
        period: "Oct 2024 - Present"
      },
      {
        id: "fmri-motion",
        title: "fMRI Motion Perception",
        description: "Studied how V1 and MT cortices respond to motion stimuli using fMRI. Built the experimental paradigm in MATLAB with Psychtoolbox and analyzed results through GLM modeling.",
        icon: Cpu,
        image: fmriAbstract,
        tags: ["MATLAB", "fMRI", "Vision Science"],
        period: "Spring 2024"
      }
    ],
    engineering: [
      {
        id: "muon-tomography",
        title: "Muon Tomography Simulation",
        description: "Simulated cosmic ray muon detectors in Geant4 with C++ on Linux. Modified detector geometries to optimize detection efficiency.",
        icon: Microscope,
        image: muonAbstract,
        tags: ["C++", "Geant4", "Physics"],
        period: "Summer 2024"
      }
    ],
    leadership: [
      {
        id: "westem-outreach",
        title: "weSTEM High School Conference",
        description: "Led outreach as Head, managing collaboration between weSTEM and NYUAD Admissions. Coordinated workshops for 80 high schools across the UAE, handling logistics and communications for 55+ students.",
        icon: Users,
        image: westemAbstract,
        tags: ["Leadership", "STEM Education", "Event Management"],
        period: "2023-2024"
      }
    ],
    media: [
      {
        id: "geeniuc-games",
        title: "Geeniuc Games - Story Designer",
        description: "Led story development for an educational game using public domain narratives. Used Midjourney for storyboarding and collaborated on visual design to blend education with entertainment.",
        icon: Video,
        image: geeniucAbstract,
        tags: ["Game Design", "Storytelling", "Visual Design"],
        period: "Summer 2023"
      }
    ]
  };

  const allProjects = [...projectCategories.product, ...projectCategories.research, ...projectCategories.engineering, ...projectCategories.leadership, ...projectCategories.media];

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ y }}
          >
            <h2 className="text-5xl md:text-6xl font-bold">Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Product design, engineering solutions, and research work
            </p>
          </motion.div>

          {/* Product */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">Product</h3>
            <div className="space-y-20">
              {projectCategories.product.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <Link 
                    to={project.id === "andoor" ? "/case-study/andoor" : `/projects/${project.id}`}
                    className="group block"
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <motion.div 
                        className="relative"
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

                      <div className="space-y-6">
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
          </div>

          {/* Research */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">Research</h3>
            <div className="space-y-20">
              {projectCategories.research.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link 
                    to={`/projects/${project.id}`}
                    className="group block"
                  >
                    <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
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
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Engineering Solutions */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">Engineering Solutions</h3>
            <div className="space-y-20">
              {projectCategories.engineering.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <Link 
                    to={`/projects/${project.id}`}
                    className="group block"
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <motion.div 
                        className="relative"
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

                      <div className="space-y-6">
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
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership & Community */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">Leadership & Community</h3>
            <div className="space-y-20">
              {projectCategories.leadership.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-[400px] object-cover"
                        />
                      </div>
                    </motion.div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <project.icon className="w-5 h-5" />
                        <span>{project.period}</span>
                      </div>
                      
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-3">
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Arts & Media */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">Arts & Media</h3>
            <div className="space-y-20">
              {projectCategories.media.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    <motion.div 
                      className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-[400px] object-cover"
                        />
                      </div>
                    </motion.div>

                    <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <project.icon className="w-5 h-5" />
                        <span>{project.period}</span>
                      </div>
                      
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-3">
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground">
              Want to know more? Check out my{" "}
              <Link to="/blog" className="text-primary hover:underline">
                blog
              </Link>{" "}
              for write-ups and process notes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
