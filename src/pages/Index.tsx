import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      
      <footer className="py-8 bg-card/50 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Rehnuma Taskin. Designed with passion for innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
