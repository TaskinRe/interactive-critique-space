import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "MATLAB", "C++", "Swift", "P5.js"],
      color: "primary"
    },
    {
      category: "Research Tools",
      skills: ["Geant4", "Psychtoolbox", "Jupyter Notebooks", "fMRI Analysis", "EEG"],
      color: "secondary"
    },
    {
      category: "Engineering",
      skills: ["Arduino", "Physical Computing", "Robot Vision", "Digital Logic", "Robotics"],
      color: "accent"
    },
    {
      category: "Creative Tools",
      skills: ["Adobe Suite", "Unity", "Character Creation 4", "Midjourney", "Audacity"],
      color: "primary"
    },
    {
      category: "Development",
      skills: ["Git", "Visual Studio", "Linux", "OpenGL"],
      color: "secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit spanning engineering, research, and creative disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-primary">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i}
                        variant="outline"
                        className={`border-${category.color}/30 hover:border-${category.color} hover:bg-${category.color}/10 transition-colors`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-4xl font-bold text-primary">35+</div>
                <p className="text-muted-foreground">Debate Championships Won</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-4xl font-bold text-secondary">80+</div>
                <p className="text-muted-foreground">Schools Reached via weSTEM</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-4xl font-bold text-accent">25+</div>
                <p className="text-muted-foreground">Media Projects Completed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
