import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Microscope, Cpu, Heart, HandMetal, Headphones, Users, Video } from "lucide-react";
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
  description: string;
  icon: any;
  image: string;
  tags: string[];
  links?: { url: string; label: string }[];
}

const Projects = () => {
  const projectCategories = {
    product: [
      {
        id: "andoor",
        title: "Andoor",
        description: "Haptic device that mimics cat purr frequencies to help kids with ASD self-regulate",
        icon: Heart,
        image: andoorAbstract,
        tags: ["Product Design", "Haptic Feedback"]
      },
      {
        id: "bhaptics",
        title: "bHaptics Tactile Designer",
        description: "200+ vibration patterns mapped to Unity physics for full-body VR immersion",
        icon: HandMetal,
        image: bhapticsAbstract,
        tags: ["Haptic Design", "VR"]
      },
      {
        id: "vr-project",
        title: "VR Interactive Experience",
        description: "Synchronized visual, audio, and haptic feedback in Unity for seamless immersion",
        icon: Headphones,
        image: vrAbstract,
        tags: ["Virtual Reality", "Unity"]
      }
    ],
    research: [
      {
        id: "eeg-brain-imaging",
        title: "EEG Brain Imaging",
        description: "Decoding language processing and social interactions through electrical brain activity",
        icon: Brain,
        image: eegAbstract,
        tags: ["Neuroscience", "Python"]
      },
      {
        id: "fmri-motion",
        title: "fMRI Motion Perception",
        description: "Mapping brain regions that compute visual motion using fMRI and MATLAB",
        icon: Cpu,
        image: fmriAbstract,
        tags: ["MATLAB", "fMRI"]
      }
    ],
    engineering: [
      {
        id: "muon-tomography",
        title: "Muon Tomography Simulation",
        description: "C++ simulations using cosmic rays for object detection—30% more efficient detectors",
        icon: Microscope,
        image: muonAbstract,
        tags: ["C++", "Geant4"]
      }
    ],
    leadership: [
      {
        id: "westem-outreach",
        title: "weSTEM Conference",
        description: "Organized hands-on STEM workshops for 55+ students from 80 UAE schools",
        icon: Users,
        image: westemAbstract,
        tags: ["Leadership", "Education"]
      }
    ],
    media: [
      {
        id: "geeniuc-games",
        title: "Geeniuc Games",
        description: "Interactive educational games using AI-generated visuals and narrative design",
        icon: Video,
        image: geeniucAbstract,
        tags: ["Game Design", "Storytelling"]
      }
    ],
    hobbies: [
      {
        id: "al-awael-series",
        title: "Al Awael Documentary",
        description: "YouTube series on forgotten Islamic scientific discoveries",
        icon: Video,
        image: geeniucAbstract,
        tags: ["Documentary", "Filmmaking"],
        links: [
          { url: "https://youtu.be/-mHF3AH83EE?si=xbooBxYwmYNjZz1p", label: "Episode 1" },
          { url: "https://youtu.be/PxSg5VwwkYs?si=LRQFR377YVM-BNPJ", label: "Episode 2" }
        ]
      }
    ]
  };

  const allProjects = [
    ...projectCategories.product,
    ...projectCategories.research,
    ...projectCategories.engineering,
    ...projectCategories.leadership,
    ...projectCategories.media,
    ...projectCategories.hobbies
  ];

  const renderProject = (project: ProjectData) => (
    <Link
      key={project.id}
      to={project.id === "andoor" ? "/case-study/andoor" : `/projects/${project.id}`}
      className="group block"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-xl bg-card border border-border"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2">
            <project.icon className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.links && (
            <div className="flex gap-2 pt-2" onClick={(e) => e.stopPropagation()}>
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground">Selected work across product, research, and creative</p>
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {allProjects.map((project) => renderProject(project))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
