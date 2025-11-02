import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Heart, BookOpen, Code, Cat } from "lucide-react";
import Navigation from "@/components/Navigation";
import profileSketch from "@/assets/profile-sketch.png";
import catsSketch from "@/assets/cats-sketch.png";
import booksSketch from "@/assets/books-sketch.png";
import { useRef } from "react";
import P5CenteredName from "@/components/P5CenteredName";

const About = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const readingList = [
    "Thinking, Fast and Slow - Daniel Kahneman",
    "The Design of Everyday Things - Don Norman",
    "Invisible Women - Caroline Criado Perez",
    "Project Hail Mary - Andy Weir",
    "Braiding Sweetgrass - Robin Wall Kimmerer"
  ];

  const passions = [
    {
      icon: Code,
      title: "Accessible Design",
      description: "Creating technology that works for everyone, especially those with disabilities"
    },
    {
      icon: Heart,
      title: "Neuroscience Research",
      description: "Understanding how the brain processes language and social information"
    },
    {
      icon: BookOpen,
      title: "Interdisciplinary Learning",
      description: "Bridging physics, neuroscience, design, and storytelling"
    }
  ];

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
        <div className="container mx-auto px-4 py-8">
          {/* Centered interactive name sketch */}
          <section className="relative h-40 md:h-56 mb-6">
            <P5CenteredName />
          </section>

          <div className="flex gap-3 mb-8 justify-end">
            <Button variant="outline" size="sm" onClick={handleBack} aria-label="Go back" className="hover-scale">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <Button asChild size="sm" className="hover-scale shadow-soft hover:shadow-medium">
              <Link to="/" aria-label="Go home">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
          </div>

        <div ref={containerRef} className="max-w-6xl mx-auto space-y-20">
          {/* Hero Section with Parallax */}
          <motion.section 
            className="grid md:grid-cols-2 gap-12 items-center min-h-[60vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div style={{ y: imageY }} className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <motion.img
                  src={profileSketch}
                  alt="Rehnuma Taskin"
                  className="w-full rounded-2xl shadow-elegant"
                  whileHover={{ scale: 1.02, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-accent/20 backdrop-blur-sm rounded-2xl p-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm font-medium">Design Engineer</p>
                  <p className="text-xs text-muted-foreground">Neuroscience Researcher</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div style={{ y: textY }} className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                About Me
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi! I'm Rehnuma, a Design Engineer passionate about creating accessible technology 
                that bridges neuroscience, physics, and human-centered design.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                I believe technology should be beautiful, functional, and accessible to everyone—regardless 
                of their abilities. My work combines rigorous scientific research with creative problem-solving 
                to build tools that truly make a difference.
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Passions Section - Horizontal Layout */}
          <section className="space-y-8">
            <motion.h2 
              className="text-4xl font-bold text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What Drives Me
            </motion.h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {passions.map((passion, index) => (
                <motion.div
                  key={index}
                  className="flex-1 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <passion.icon className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{passion.title}</h3>
                  <p className="text-muted-foreground">{passion.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Cats Section - Fun Horizontal Layout */}
          <motion.section 
            className="bg-gradient-to-r from-accent/10 via-secondary/10 to-accent/10 rounded-3xl p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Cat className="w-12 h-12 mb-4 text-primary" />
                <h2 className="text-4xl font-bold mb-4">I Love Cats! 🐱</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not working on research or design projects, you'll find me spending time 
                  with cats. They remind me to stay curious, independent, and to always land on my feet. 
                  Plus, they're the perfect debugging companions!
                </p>
              </motion.div>
              <motion.img
                src={catsSketch}
                alt="Cats illustration"
                className="w-full max-w-sm mx-auto"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              />
            </div>
          </motion.section>

          {/* Reading List Section */}
          <section className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={booksSketch}
                alt="Books illustration"
                className="w-full max-w-sm mx-auto sticky top-8"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-12 h-12 text-primary" />
              <h2 className="text-4xl font-bold">Current Reading List</h2>
              <p className="text-muted-foreground">
                Books that inspire my work and thinking across science, design, and society.
              </p>
              <ul className="space-y-4">
                {readingList.map((book, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card/30 rounded-lg hover:bg-card/50 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">{book}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </section>

          {/* Call to Action */}
          <motion.section
            className="text-center space-y-6 py-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing research collaborations, accessible design projects, 
              or just chatting about neuroscience and technology.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
