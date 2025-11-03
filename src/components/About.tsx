import { Brain, Accessibility, Globe2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const highlights = [
    {
      icon: Brain,
      title: "Cognitive Neuroscience",
      description: "EEG brain imaging, fMRI studies, and neural data analysis at NYU's SONA Lab",
    },
    {
      icon: Accessibility,
      title: "Assistive Technology",
      description: "Designing inclusive solutions for diverse abilities through HCI research",
    },
    {
      icon: Globe2,
      title: "Bengali Heritage",
      description: "Integrating cultural storytelling with modern design principles",
    },
    {
      icon: Sparkles,
      title: "Creative Innovation",
      description: "Game design, filmmaking, and interactive media production",
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
            style={{ y, opacity }}
          >
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A multidisciplinary design engineer bridging cultures, research, and human-centered technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card 
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-medium bg-card border-border h-full"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="text-primary transition-transform group-hover:scale-110 inline-block">
                      <item.icon className="w-10 h-10" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6 shadow-soft"
          >
            <h3 className="text-2xl font-semibold text-foreground">Current Focus</h3>
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
                Rooted in my Bengali heritage and driven by a commitment to accessibility, I create 
                technology solutions that are both innovative and deeply human-centered—bridging 
                cultural storytelling with cutting-edge engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
