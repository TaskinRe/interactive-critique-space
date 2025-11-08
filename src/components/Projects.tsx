import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Brain, Microscope, Cpu, ArrowRight, Heart, HandMetal, Headphones, Users, Video, Target, Lightbulb, TrendingUp } from "lucide-react";
import eegAbstract from "@/assets/eeg-abstract.png";
import muonAbstract from "@/assets/muon-abstract.png";
import fmriAbstract from "@/assets/fmri-abstract.png";
import andoorAbstract from "@/assets/andoor-abstract.png";
import bhapticsAbstract from "@/assets/bhaptics-abstract.png";
import vrAbstract from "@/assets/vr-abstract.png";
import westemAbstract from "@/assets/westem-abstract.png";
import geeniucAbstract from "@/assets/geeniuc-abstract.png";

interface ProjectData {
  id: string;
  title: string;
  what: string;
  how: string;
  impact: string;
  icon: any;
  image: string;
  tags: string[];
  period: string;
  links?: { url: string; label: string }[];
}

const Projects = () => {
  const projectCategories = {
    product: [
      {
        id: "andoor",
        title: "Andoor",
        what: "Pocket-sized haptic device mimicking cat purr frequencies to help kids with ASD self-regulate during overwhelming moments",
        how: "Engineered precise vibration motors + iterative user testing with families + biomimetic design patterns",
        impact: "Tested with 8 families—kids calmed 40% faster than traditional methods. No screens. Just physics.",
        icon: Heart,
        image: andoorAbstract,
        tags: ["Product Design", "Haptic Feedback", "ASD"],
        period: "2024"
      },
      {
        id: "bhaptics",
        title: "bHaptics Tactile Designer",
        what: "VR experiences that you actually feel—rain on your shoulders, bowstring tension, collision impacts across your entire body",
        how: "Programmed 200+ vibration patterns in bHaptics Studio + mapped tactile feedback to Unity physics engine + UX iteration",
        impact: "Transformed passive VR into full-body immersion. Users forgot they were wearing tech.",
        icon: HandMetal,
        image: bhapticsAbstract,
        tags: ["Haptic Design", "VR", "UX"],
        period: "2024"
      },
      {
        id: "vr-project",
        title: "VR Interactive Experience",
        what: "Fully synchronized VR world where visual, audio, and haptic feedback create seamless reality-bending immersion",
        how: "Unity development + spatial audio design + bHaptics integration + real-time physics synchronization",
        impact: "'Wait, that was virtual?' —exact reaction we're aiming for. Brain-tricking mission accomplished.",
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
        what: "Reading electrical brain activity to decode how humans process language and respond to social interactions",
        how: "EEG electrode arrays + signal processing in Python + statistical analysis of neural patterns at SONA Lab",
        impact: "Mapping the exact milliseconds when your brain 'gets' a word or recognizes a face. Neural eavesdropping at its finest.",
        icon: Brain,
        image: eegAbstract,
        tags: ["Neuroscience", "EEG", "Data Analysis"],
        period: "Oct 2024 - Present"
      },
      {
        id: "fmri-motion",
        title: "fMRI Motion Perception",
        what: "Identified brain regions (V1 & MT cortex) that compute visual motion when you track moving objects",
        how: "fMRI scans + MATLAB signal analysis + visual stimulus design + statistical brain mapping techniques",
        impact: "Discovered your brain does calculus every time a car drives by. Motion perception = biological supercomputer.",
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
        what: "Using cosmic ray particles from space to X-ray through solid objects—airport security powered by stars",
        how: "C++ simulations in Geant4 + detector optimization algorithms + particle trajectory modeling",
        impact: "Designed detector configurations 30% more efficient at catching cosmic particles. Space radiation as a scanning tool.",
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
        what: "Brought 55+ high schoolers from 80 UAE schools to NYUAD for hands-on STEM workshops that actually excited them",
        how: "As Head of Outreach: cold emails + logistics coordination + workshop design + stakeholder management",
        impact: "'This changed how I see science' —multiple students. Mission accomplished. Seeds planted.",
        icon: Users,
        image: westemAbstract,
        tags: ["Leadership", "STEM Education", "Event Management"],
        period: "2023-2024"
      }
    ],
    media: [
      {
        id: "geeniuc-games",
        title: "Geeniuc Games",
        what: "Educational games disguised as fun—classic stories transformed into interactive experiences kids forget are learning",
        how: "Midjourney AI visual design + narrative storyboarding + game mechanics iteration + educational psychology",
        impact: "If kids forget they're learning, we won. Teaching without the homework feel.",
        icon: Video,
        image: geeniucAbstract,
        tags: ["Game Design", "Storytelling", "Visual Design"],
        period: "Summer 2023"
      }
    ],
    hobbies: [
      {
        id: "al-awael-series",
        title: "Al Awael Documentary Series",
        what: "YouTube series uncovering forgotten Islamic scientific discoveries—history told raw, messy, and human",
        how: "Full production: writing + hosting + filming + editing. One-woman documentary crew.",
        impact: "Thousands of views. Made people care about history they never knew existed.",
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

  const renderProject = (project: ProjectData, index: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link 
        to={project.id === "andoor" ? "/case-study/andoor" : `/projects/${project.id}`}
        className="block"
      >
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 items-start">
          {/* Image Section */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              {/* Floating badge */}
              <motion.div
                className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm"
                whileHover={{ scale: 1.05 }}
              >
                {project.period}
              </motion.div>

              {/* Arrow indicator */}
              <motion.div
                className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-3"
                whileHover={{ scale: 1.1, rotate: -45 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Title & Tags */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <project.icon className="w-6 h-6 text-primary" />
                <h3 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge 
                    key={i} 
                    variant="outline"
                    className="border-primary/30 text-foreground/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* What/How/Impact Grid */}
            <div className="space-y-4">
              <motion.div 
                className="flex gap-3 items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-1">What</h4>
                  <p className="text-base text-foreground/90 leading-relaxed">{project.what}</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-3 items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secondary-foreground uppercase tracking-wide mb-1">How</h4>
                  <p className="text-base text-foreground/90 leading-relaxed">{project.how}</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-3 items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-accent-foreground uppercase tracking-wide mb-1">Impact</h4>
                  <p className="text-base text-foreground/90 leading-relaxed font-medium">{project.impact}</p>
                </div>
              </motion.div>
            </div>

            {/* Links if available */}
            {project.links && (
              <div className="flex gap-3 pt-2">
                {project.links.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            )}

            {/* View case study CTA */}
            <motion.div 
              className="flex items-center gap-2 text-primary font-semibold pt-2"
              whileHover={{ gap: 12 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>View Full Case Study</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Hero Header */}
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              What I built · How I built it · What changed
            </p>
          </motion.div>

          {/* Product Design */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="h-1 w-12 bg-primary rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold">Product Design</h2>
            </motion.div>
            <div className="space-y-16">
              {projectCategories.product.map((project, index) => renderProject(project, index))}
            </div>
          </div>

          {/* Research */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="h-1 w-12 bg-primary rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold">Research</h2>
            </motion.div>
            <div className="space-y-16">
              {projectCategories.research.map((project, index) => renderProject(project, index))}
            </div>
          </div>

          {/* Engineering */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="h-1 w-12 bg-primary rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold">Engineering</h2>
            </motion.div>
            <div className="space-y-16">
              {projectCategories.engineering.map((project, index) => renderProject(project, index))}
            </div>
          </div>

          {/* Leadership */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="h-1 w-12 bg-primary rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold">Leadership</h2>
            </motion.div>
            <div className="space-y-16">
              {projectCategories.leadership.map((project, index) => renderProject(project, index))}
            </div>
          </div>

          {/* Creative */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="h-1 w-12 bg-primary rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold">Creative</h2>
            </motion.div>
            <div className="space-y-16">
              {projectCategories.media.map((project, index) => renderProject(project, index))}
              {projectCategories.hobbies.map((project, index) => renderProject(project, index))}
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
