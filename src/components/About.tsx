import { Brain, Rocket, Palette, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Research Excellence",
      description: "Working on EEG brain imaging, fMRI studies, and muon tomography at NYU Abu Dhabi",
      color: "text-primary"
    },
    {
      icon: Rocket,
      title: "Innovation Leader",
      description: "Runner-up at AntlerxLovable Hackathon, Semifinalist in Google AI for Good",
      color: "text-accent"
    },
    {
      icon: Palette,
      title: "Creative Storyteller",
      description: "Experience in filmmaking, game design, and interactive media production",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Community Builder",
      description: "Led weSTEM conferences for 80+ schools, mentored students across continents",
      color: "text-primary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a multidisciplinary engineer who thrives at the intersection of cutting-edge 
              research, innovative technology, and creative expression.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`${item.color} transition-transform group-hover:scale-110 inline-block`}>
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-semibold">Current Focus</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a General Engineering major with a minor in Interactive Media at NYU Abu Dhabi, 
                I specialize in Human-Computer Interaction, Cognitive Neuroscience, and Physical Computing.
              </p>
              <p>
                My work spans from analyzing brain imaging data in the SONA Lab to simulating 
                cosmic ray detectors with Geant4, from designing immersive game narratives to 
                leading STEM outreach programs across the UAE.
              </p>
              <p>
                I believe technology should be both powerful and human-centered, and I'm passionate 
                about creating solutions that bridge the gap between complex engineering and 
                meaningful user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
