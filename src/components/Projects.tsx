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
        description: "My younger cousin used to rock back and forth when everything got too loud. I noticed our cat's purr was the only thing that helped. So I built Andoor—a small device that recreates that exact vibration pattern. It's not therapy, it's not a cure. It's just a pocket-sized anchor for kids who need one. We tested it with actual families. It works.",
        icon: Heart,
        image: andoorAbstract,
        tags: ["Product Design", "Haptic Feedback", "ASD"],
        period: "2024"
      },
      {
        id: "bhaptics",
        title: "bHaptics Tactile Designer",
        description: "VR looks incredible. But it still feels like air. I spent months programming vibration patterns—mapping every raindrop, every footstep, every collision to your body. The goal? Make you forget you're wearing a suit. When you pull a virtual bowstring and feel the tension in your arms, that's when VR stops being a trick and starts being an experience.",
        icon: HandMetal,
        image: bhapticsAbstract,
        tags: ["Haptic Design", "VR", "UX"],
        period: "2024"
      },
      {
        id: "vr-project",
        title: "VR Interactive Experience",
        description: "Built a VR world where everything syncs—what you see, what you hear, what you feel through the haptics. The magic happens when your brain stops questioning if it's real. I'm obsessed with those moments when someone takes off the headset and goes 'wait, that was virtual?' That's the whole point.",
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
        description: "At the SONA Lab, I'm reading brain waves. Literally. We attach electrodes to people's heads and watch electrical patterns spike when they process language or react to social cues. Every tiny voltage change tells a story about how we think and connect. It's like eavesdropping on neurons having a conversation.",
        icon: Brain,
        image: eegAbstract,
        tags: ["Neuroscience", "EEG", "Data Analysis"],
        period: "Oct 2024 - Present"
      },
      {
        id: "fmri-motion",
        title: "fMRI Motion Perception",
        description: "Ever wonder how your brain sees motion? I mapped the exact brain regions (V1 and MT cortex) that light up when you watch something move. Used fMRI scans and MATLAB to decode how visual signals travel through your head. Turns out, your brain is doing calculus every time you watch a car drive by. Pretty cool.",
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
        description: "Cosmic rays from space hit Earth constantly. I simulated detectors in C++ to catch them and use them like X-rays to see through solid objects. Think airport security scanners, but powered by particles from exploding stars. Spent my summer optimizing detector designs in Geant4. Physics is weird and I love it.",
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
        description: "Reached out to 80 high schools across the UAE to bring 55+ students to NYUAD for STEM workshops. As Head of Outreach, I dealt with emails, logistics, and making sure teenagers actually showed up excited. Some of them said it changed how they see science. That's why I did it.",
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
        description: "Turned classic stories into educational games. Used Midjourney to design every scene and storyboard. The goal? Make learning so fun kids forget they're learning. If a game can teach without feeling like homework, we're doing something right.",
        icon: Video,
        image: geeniucAbstract,
        tags: ["Game Design", "Storytelling", "Visual Design"],
        period: "Summer 2023"
      }
    ],
    hobbies: [
      {
        id: "al-awael-series",
        title: "Al Awael - Cultural Documentary Series",
        description: "Hosted and produced a YouTube series about early Islamic scientific discoveries that most people have never heard of. Shot everything myself, wrote the scripts, did the editing. Thousands of people watched it. History matters when you tell it like it actually happened—messy, surprising, and human.",
        icon: Video,
        image: geeniucAbstract,
        tags: ["Documentary", "Hosting", "Filmmaking"],
        period: "Spring 2023",
        links: [
          { url: "https://youtu.be/-mHF3AH83EE?si=xbooBxYwmYNjZz1p", label: "📺 Episode 1" },
          { url: "https://youtu.be/PxSg5VwwkYs?si=LRQFR377YVM-BNPJ", label: "📺 Episode 2" }
        ]
      }
    ]
  };

  const allProjects = [...projectCategories.product, ...projectCategories.research, ...projectCategories.engineering, ...projectCategories.leadership, ...projectCategories.media, ...projectCategories.hobbies];

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
                  whileHover={{ y: -5 }}
                >
                  <Link 
                    to={project.id === "andoor" ? "/case-study/andoor" : `/projects/${project.id}`}
                    className="group block"
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.03 }}
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

          {/* Personal Projects & Hobbies */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">Personal Projects & Hobbies</h3>
            <div className="space-y-20">
              {projectCategories.hobbies.map((project, index) => (
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

                       {project.links && (
                        <motion.div 
                          className="flex flex-wrap gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          {project.links.map((link, i) => (
                            <motion.a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all font-medium shadow-medium hover:shadow-soft hover:scale-105"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Video className="w-5 h-5" />
                              {link.label}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
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
