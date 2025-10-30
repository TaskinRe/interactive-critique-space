import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Home, Calendar, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import eegSketch from "@/assets/eeg-sketch.png";
import muonSketch from "@/assets/muon-sketch.png";
import fmriSketch from "@/assets/fmri-sketch.png";

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  image: string;
  overview: string;
  challenge: string;
  approach: string[];
  results: string[];
  impact: string;
  tools: string[];
  link?: string;
}

const projects: Record<string, ProjectData> = {
  "eeg-brain-imaging": {
    id: "eeg-brain-imaging",
    title: "EEG Brain Imaging Research",
    subtitle: "Investigating Linguistic Content & Social Information Processing",
    period: "Oct 2024 - Present",
    tags: ["Neuroscience", "EEG", "Data Analysis", "Python"],
    image: eegSketch,
    overview: "Working with the SONA Lab to investigate how the brain processes linguistic content and social information using event-related potentials (ERPs). This research helps us understand the neural mechanisms underlying language comprehension and social cognition.",
    challenge: "Understanding the temporal dynamics of language processing in the brain requires precise measurement and analysis of neural responses occurring within milliseconds. The challenge lies in isolating specific cognitive processes from complex, overlapping brain signals.",
    approach: [
      "Designed and conducted EEG experiments with carefully controlled linguistic stimuli",
      "Implemented signal processing pipelines to filter and analyze ERP data",
      "Used statistical methods to identify significant neural responses",
      "Collaborated with neuroscience team to interpret findings in context of existing literature"
    ],
    results: [
      "Identified distinct ERP components associated with different aspects of language processing",
      "Contributed to lab's understanding of how social context influences linguistic interpretation",
      "Developed reusable analysis scripts for future experiments"
    ],
    impact: "This research contributes to our fundamental understanding of language processing and has implications for developing assistive technologies for individuals with language processing disorders.",
    tools: ["Python", "MNE-Python", "NumPy", "SciPy", "MATLAB", "EEGLab"]
  },
  "muon-tomography": {
    id: "muon-tomography",
    title: "Muon Tomography Simulation",
    subtitle: "Geant4 Cosmic Ray Detector Modeling",
    period: "Summer 2024",
    tags: ["C++", "Geant4", "Physics", "Linux"],
    image: muonSketch,
    overview: "Developed Monte Carlo simulations of cosmic ray detectors using Geant4 framework in C++ on Linux. Investigated how different geometric arrangements affect muon detection efficiency for tomography applications.",
    challenge: "Muon tomography is a non-invasive imaging technique with applications in archaeology, nuclear waste monitoring, and security. Optimizing detector placement and configuration requires extensive computational modeling to predict performance before physical construction.",
    approach: [
      "Implemented Geant4 simulations with custom detector geometries",
      "Modeled cosmic ray muon interactions with various materials",
      "Tested different detector arrangements and orientations",
      "Analyzed simulation data to quantify detection efficiency and image resolution",
      "Optimized code performance for large-scale simulations on Linux clusters"
    ],
    results: [
      "Successfully simulated multiple detector configurations",
      "Identified optimal geometric arrangements for specific imaging scenarios",
      "Quantified trade-offs between spatial resolution and detection efficiency",
      "Generated predictive models for detector performance"
    ],
    impact: "This work provides a foundation for designing more effective muon tomography systems, with potential applications in infrastructure monitoring and archaeological exploration.",
    tools: ["C++", "Geant4", "ROOT", "Linux", "Bash", "Python (analysis)"]
  },
  "fmri-motion": {
    id: "fmri-motion",
    title: "fMRI Motion Perception Study",
    subtitle: "Neural Responses in Visual Cortex",
    period: "Spring 2024",
    tags: ["MATLAB", "fMRI", "Computer Vision", "Neuroscience"],
    image: fmriSketch,
    overview: "Analyzed neural responses in the MT (V5) and V1 cortices using functional magnetic resonance imaging (fMRI) to understand how the brain processes visual motion. Implemented General Linear Model (GLM) analysis using MATLAB and Psychtoolbox.",
    challenge: "Motion perception is fundamental to navigation, object recognition, and interaction with our environment. Understanding how different brain regions contribute to motion processing requires careful experimental design and sophisticated analysis techniques.",
    approach: [
      "Designed visual motion stimuli using Psychtoolbox in MATLAB",
      "Conducted fMRI scanning sessions with carefully controlled experimental conditions",
      "Preprocessed fMRI data to remove artifacts and normalize signals",
      "Implemented GLM analysis to identify motion-selective brain regions",
      "Compared activation patterns between V1 (early visual cortex) and MT (motion area)"
    ],
    results: [
      "Successfully identified motion-selective regions in both V1 and MT",
      "Quantified differences in temporal response patterns between regions",
      "Demonstrated how different types of motion activate distinct neural pathways",
      "Created visualization tools for displaying activation maps"
    ],
    impact: "This research deepens our understanding of visual perception and has implications for developing better visual prosthetics and understanding motion processing disorders.",
    tools: ["MATLAB", "Psychtoolbox", "SPM", "FSL", "Python", "FreeSurfer"]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  if (!id || !projects[id]) {
    return <Navigate to="/projects" replace />;
  }

  const project = projects[id];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8">
          <Button asChild variant="outline" size="sm">
            <Link to="/projects">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/">
              <Home className="w-4 h-4" />
              Home
            </Link>
          </Button>
        </div>

        <div ref={containerRef} className="max-w-5xl mx-auto space-y-16">
          {/* Hero Section with Parallax */}
          <motion.div
            style={{ opacity: headerOpacity }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">{project.period}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-2xl text-muted-foreground mb-6">{project.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image with Parallax */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
          </motion.div>

          {/* Overview Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
          </motion.section>

          {/* Two Column Layout - Challenge & Approach */}
          <div className="grid md:grid-cols-2 gap-12">
            <motion.section
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <Badge key={i} variant="outline" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Approach Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 space-y-6"
          >
            <h2 className="text-3xl font-bold">My Approach</h2>
            <ul className="space-y-4">
              {project.approach.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Results Section - Staggered Cards */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Key Results</h2>
            <div className="space-y-4">
              {project.results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-6 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <p className="text-muted-foreground">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Impact Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20"
          >
            <h2 className="text-3xl font-bold mb-4">Impact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.impact}</p>
          </motion.section>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 py-8"
          >
            <Button asChild size="lg">
              <Link to="/projects">View All Projects</Link>
            </Button>
            {project.link && (
              <Button asChild variant="outline" size="lg">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Learn More
                </a>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
