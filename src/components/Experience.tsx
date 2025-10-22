import { Building2, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      type: "research",
      icon: GraduationCap,
      title: "Research Assistant - SONA Lab",
      organization: "NYU Abu Dhabi",
      period: "Oct 2024 - Present",
      description: "EEG brain imaging and analysis, investigating linguistic content and social information using event-related potentials",
      color: "primary"
    },
    {
      type: "research",
      icon: GraduationCap,
      title: "Summer Research - Muography",
      organization: "Arenodo Lab, NYUAD",
      period: "Summer 2024",
      description: "Simulated cosmic ray detectors using Geant4 (C++) on Linux with modified geometric arrangements for muon tomography",
      color: "primary"
    },
    {
      type: "leadership",
      icon: Building2,
      title: "Head of Resources",
      organization: "weSTEM NYUAD",
      period: "Jan 2024 - Present",
      description: "Managing STEM resources database, coordinating sessions for high school students across 80+ schools in UAE",
      color: "secondary"
    },
    {
      type: "leadership",
      icon: Building2,
      title: "Head of Outreach",
      organization: "weSTEM Conference 2024",
      period: "2024",
      description: "Managed collaboration between weSTEM and NYUAD Admissions, coordinated logistics for 80 high schools",
      color: "secondary"
    },
    {
      type: "creative",
      icon: Briefcase,
      title: "Story & Visual Designer Intern",
      organization: "Geeniuc Games",
      period: "Jun - Aug 2023",
      description: "Utilized Midjourney for game storyboarding, blending education with entertainment through public domain stories",
      color: "accent"
    },
    {
      type: "creative",
      icon: Briefcase,
      title: "Second Assistant Director",
      organization: '"Bodies of Wind" Film Festival',
      period: "Fall 2022",
      description: "Conceptualized shots and created detailed storyboard designs for screendance film at Focus Festival",
      color: "accent"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
            <p className="text-xl text-muted-foreground">
              Research, leadership, and creative roles shaping my journey
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-glow"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-${exp.color}/20 to-${exp.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <exp.icon className={`w-6 h-6 text-${exp.color}`} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-sm font-medium text-primary">{exp.organization}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
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

export default Experience;
