import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Heart, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AndoorCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Andoor
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              A Haptic Companion for Calm
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
              <span className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                Bengali: আদর (Adoor) - Warm Affection
              </span>
              <span className="px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium">
                Chinese: 安 (An) - Peace & Tranquility
              </span>
            </div>
            <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
              "The comfort that responds"
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* The Story Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Moment That Changed Everything</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
              <p className="text-xl leading-relaxed">
                When I was in grade 6, I witnessed something that stayed with me. My friend's younger brother 
                was having a difficult moment—running around, getting increasingly agitated. Everyone was 
                trying to help, offering toys, words of comfort, different approaches. Nothing seemed to work.
              </p>
              
              <p className="text-xl leading-relaxed">
                Then his mom simply walked over and hugged him. Within a few moments, he began to calm down. 
                The steady pressure, the warmth—it worked. That simple observation sparked a question that 
                would shape this project: what if we could create something that provides that same calming 
                presence whenever it's needed?
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="text-lg font-medium text-foreground italic">
                  "What if we could create something that provides that same calming presence, 
                  that same therapeutic comfort, whenever it's needed?"
                </p>
              </div>

              <p className="text-xl leading-relaxed">
                This question became the foundation of Andoor. I set out to design a haptic feedback 
                system that mimics the most universally calming sensation I could think of: a cat's purr. 
                Research shows that cat purring vibrations (25-50 Hz) trigger a parasympathetic response, 
                reducing stress hormones and promoting emotional regulation. It's nature's own therapy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research & Expertise Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Brain className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Deep Research in ASD & Sensory Processing</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-card p-8 rounded-lg border border-border shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">2.8%</div>
                <div className="text-sm text-muted-foreground mb-4">of children (6-12 years)</div>
                <p className="text-foreground">
                  Approximately 1.2 million children in the US are diagnosed with Autism Spectrum Disorder
                </p>
              </motion.div>

              <motion.div 
                className="bg-card p-8 rounded-lg border border-border shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold text-secondary mb-2">60-80%</div>
                <div className="text-sm text-muted-foreground mb-4">sensory processing differences</div>
                <p className="text-foreground">
                  Of neurodivergent children demonstrate sensory processing differences requiring intervention
                </p>
              </motion.div>

              <motion.div 
                className="bg-card p-8 rounded-lg border border-border shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold text-accent mb-2">31-42%</div>
                <div className="text-sm text-muted-foreground mb-4">access gap</div>
                <p className="text-foreground">
                  Only 31-42% of children who need sensory regulation tools currently have access to appropriate devices
                </p>
              </motion.div>
            </div>

            <div className="space-y-6 mt-12">
              <h3 className="text-2xl font-bold text-foreground">Key Research Insights</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/50 p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Sensory Processing Challenges</h4>
                  <p className="text-foreground/80">
                    Neurodivergent children experience heightened sensitivity to lights, sounds, and textures, 
                    or under-responsiveness, leading to anxiety, distress, meltdowns, and communication challenges.
                  </p>
                </div>

                <div className="bg-card/50 p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Current Tool Limitations</h4>
                  <p className="text-foreground/80">
                    Existing tools are often clinical, stigmatizing, or purely functional. Advanced therapeutic 
                    robots like Paro and NAO are expensive and inaccessible to most families.
                  </p>
                </div>

                <div className="bg-card/50 p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Therapeutic Benefits of Vibration</h4>
                  <p className="text-foreground/80">
                    Low-frequency vibrations (25-50 Hz) activate deep pressure receptors, promoting parasympathetic 
                    nervous system response, reducing cortisol levels, and enhancing emotional regulation.
                  </p>
                </div>

                <div className="bg-card/50 p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Design for Dignity</h4>
                  <p className="text-foreground/80">
                    Therapeutic tools must integrate calming sensory input with appealing, comforting design 
                    that doesn't stigmatize users—creating genuine companions, not medical devices.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Haptic Innovation</h2>
            </div>

            <div className="space-y-6 text-foreground/90">
              <p className="text-xl leading-relaxed">
                At the heart of Andoor is a sophisticated haptic feedback system engineered to replicate 
                the therapeutic vibrations of a cat's purr. This isn't just a simple vibration motor—it's 
                a carefully calibrated system designed to deliver the precise frequency range (25-50 Hz) 
                that research shows is most effective for calming and emotional regulation.
              </p>

              <div className="bg-accent/10 p-8 rounded-lg border border-accent/20">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">How It Works</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">1.</span>
                    <span><strong>Pressure Sensing:</strong> Detects when the user hugs or holds Andoor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">2.</span>
                    <span><strong>Adaptive Response:</strong> Activates purring vibrations at the optimal therapeutic frequency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">3.</span>
                    <span><strong>Duration Control:</strong> Maintains consistent vibration for as long as contact is maintained</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">4.</span>
                    <span><strong>Gradual Fade:</strong> Gently reduces intensity to prevent sudden sensory shifts</span>
                  </li>
                </ul>
              </div>

              <p className="text-xl leading-relaxed">
                The result is a companion that responds to a child's need for comfort in the most natural 
                way possible—with the same rhythmic, soothing sensation that has calmed humans for thousands 
                of years. Combined with soft, huggable materials and an appealing design, Andoor becomes more 
                than a tool—it becomes a trusted friend.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Complete Design Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the full journey from problem definition to refined prototype, including research, 
              ideation, user testing, and product lifecycle planning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button asChild size="lg" className="gap-2">
                <a href="/andoor-design-process.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Download Design Process Book
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/andoor-design-process.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  View PDF
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Impact We're Creating</h2>
            
            <p className="text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
              Andoor represents a paradigm shift in sensory support tools—moving from clinical devices to 
              compassionate companions. By combining rigorous research in autism spectrum disorder and sensory 
              processing with human-centered design, we're creating accessible, dignified, and effective support 
              for the millions of children and families who need it.
            </p>

            <div className="pt-8">
              <Button asChild size="lg" variant="secondary">
                <Link to="/projects">
                  View More Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AndoorCaseStudy;
