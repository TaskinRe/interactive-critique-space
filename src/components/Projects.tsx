import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Palette, Rocket, Microscope, Film } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EEG Brain Imaging Research",
      description: "SONA Lab - Investigating linguistic content and social information using event-related potentials (ERPs)",
      icon: Brain,
      tags: ["Neuroscience", "EEG", "Data Analysis"],
      gradient: "from-primary/20 to-secondary/20",
      period: "Oct 2024 - Present"
    },
    {
      title: "Muon Tomography Simulation",
      description: "Geant4 simulation of cosmic ray detectors using C++ on Linux with modified geometric arrangements",
      icon: Microscope,
      tags: ["C++", "Geant4", "Physics"],
      gradient: "from-accent/20 to-primary/20",
      period: "Summer 2024"
    },
    {
      title: "fMRI Motion Perception Study",
      description: "Analyzed neural responses in MT (V5) and V1 cortices using MATLAB, Psychtoolbox, and GLM modeling",
      icon: Cpu,
      tags: ["MATLAB", "fMRI", "Computer Vision"],
      gradient: "from-secondary/20 to-accent/20",
      period: "Spring 2024"
    },
    {
      title: "Drug Diffusion Modeling",
      description: "Statistical model for drug diffusion in PLGA-based delivery systems using random walk simulations",
      icon: Rocket,
      tags: ["Python", "Biomedical", "Modeling"],
      gradient: "from-primary/20 to-accent/20",
      period: "Spring 2024"
    },
    {
      title: "Geeniuc Games - Story Design",
      description: "Utilized Midjourney for storyboarding educational games blending public domain stories with gameplay",
      icon: Palette,
      tags: ["Game Design", "Storytelling", "AI Art"],
      gradient: "from-accent/20 to-secondary/20",
      period: "Summer 2023"
    },
    {
      title: '"Bodies of Wind" Screendance',
      description: "Second Assistant Director for Focus Film Festival - conceptualized shots and storyboard designs",
      icon: Film,
      tags: ["Filmmaking", "Directing", "Visual Arts"],
      gradient: "from-secondary/20 to-primary/20",
      period: "Fall 2022"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of research projects, creative work, and technical innovations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    {project.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="bg-secondary/20 hover:bg-secondary/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
