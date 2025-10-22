import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Rehnuma Taskin
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Engineering Innovation at the Intersection of Research & Creativity
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center text-sm md:text-base">
            <span className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full">
              🏆 AntlerxLovable Hackathon Runner-up
            </span>
            <span className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full">
              🚀 Google AI for Good Semifinalist
            </span>
            <span className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full">
              🎓 NYU Abu Dhabi '26
            </span>
          </div>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            General Engineering student with a passion for Human-Computer Interaction, 
            Cognitive Neuroscience, and Interactive Media. Bridging research innovation 
            with creative storytelling.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary/50 hover:bg-primary/10"
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a 
              href="https://github.com/TaskinRe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-colors hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-colors hover:scale-110 transition-transform"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:rt2609@nyu.edu"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-colors hover:scale-110 transition-transform"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button 
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
