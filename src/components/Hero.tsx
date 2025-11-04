import { Github, Linkedin, Mail, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FloatingOrbs from "./FloatingOrbs";
import P5CenteredName from "./P5CenteredName";
import P5ScribbleBackground from "./P5ScribbleBackground";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const achievements = [
    { icon: Award, text: "AntlerxLovable Hackathon Runner-up" },
    { icon: Award, text: "Google AI for Good Semifinalist" },
    { icon: Award, text: "NYU Abu Dhabi '26" },
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
      role="banner"
    >
      <FloatingOrbs />
      <P5ScribbleBackground />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 relative"
          >
            <div className="relative h-32">
              <P5CenteredName text="Rehnuma Taskin" />
            </div>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Design Engineer • HCI Researcher • Creative Storyteller
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-soft hover:shadow-medium transition-shadow"
              >
                <achievement.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">{achievement.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Designing accessible solutions at the intersection of neuroscience, space research, 
            and human-centered innovation with a focus on assistive technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-soft transition-all"
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary/30 hover:bg-primary/5 shadow-soft"
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Featured Case Study Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12"
          >
            <a 
              href="/case-study/andoor" 
              className="block max-w-2xl mx-auto bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-6 hover:border-primary/50 transition-all shadow-medium hover:shadow-glow group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  FEATURED CASE STUDY
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                Andoor: A Haptic Companion for Calm
              </h3>
              <p className="text-muted-foreground mb-4">
                Designing a therapeutic haptic feedback system for children with ASD—combining research, 
                compassion, and innovation to create accessible sensory support tools.
              </p>
              <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                <span>Read the full case study</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-4 justify-center"
            role="list"
            aria-label="Social media links"
          >
            <a 
              href="https://github.com/TaskinRe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/5 transition-all shadow-soft hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/rehnuma-taskin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/5 transition-all shadow-soft hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:rt2609@nyu.edu"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/5 transition-all shadow-soft hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Email contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
