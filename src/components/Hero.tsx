import { Github, Linkedin, Mail, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FloatingOrbs from "./FloatingOrbs";
import HandwrittenName from "./HandwrittenName";
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-soft"
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
            className="space-y-6"
          >
            <HandwrittenName />
            <p className="text-xl md:text-2xl text-muted-foreground">
              Design Engineer • HCI Researcher • Creative Storyteller
            </p>
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
