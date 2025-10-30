import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BengaliPattern from "@/components/BengaliPattern";

const BlogPost = () => {
  const { id } = useParams();

  const posts: Record<string, { title: string; date: string; content: JSX.Element }> = {
    "bengali-heritage": {
      title: "Bengali Heritage in Design",
      date: "March 2025",
      content: (
        <div className="space-y-6 relative">
          <BengaliPattern />
          <div className="relative z-10">
            <p className="text-lg leading-relaxed">
              The intricate patterns of Alpona, a traditional Bengali art form, have always fascinated me. 
              These geometric designs, traditionally drawn with rice paste during festivals and celebrations, 
              represent more than just decoration—they embody cultural stories, mathematical precision, and 
              community connection.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">From Floor Art to Digital Canvas</h2>
            <p className="text-lg leading-relaxed">
              In my work, I explore how these patterns can inform modern interface design. The radial symmetry, 
              the flow of lines, the balance between complexity and clarity—these principles translate beautifully 
              to user experience design. Just as Alpona guides the eye through a space, thoughtful design guides 
              users through digital experiences.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cultural Computing</h2>
            <p className="text-lg leading-relaxed">
              By incorporating Bengali heritage into my design work, I'm not just preserving culture—I'm 
              demonstrating how cultural perspectives can enrich technology. Whether it's the color palettes 
              inspired by traditional textiles or interaction patterns that echo traditional art forms, 
              cultural computing opens new possibilities for inclusive design.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground">
              "Design is not just about aesthetics or function—it's about storytelling, identity, and connection."
            </blockquote>

            <p className="text-lg leading-relaxed">
              As I continue my journey as a design engineer, I'm committed to bringing these cultural narratives 
              into technology, creating interfaces that are not just usable, but meaningful.
            </p>
          </div>
        </div>
      )
    },
    "assistive-technology": {
      title: "Assistive Technology & Inclusion",
      date: "March 2025",
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Assistive technology isn't a niche—it's a necessity. Through my research in Human-Computer 
            Interaction and work on tactile sensors, EEG interfaces, and adaptive systems, I've learned 
            that the most innovative solutions often come from addressing accessibility challenges.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Beyond Compliance</h2>
          <p className="text-lg leading-relaxed">
            True accessibility goes beyond WCAG compliance. It's about understanding diverse user needs—from 
            neurodivergent individuals who benefit from reduced sensory overload, to users with motor 
            impairments who need alternative input methods. My work with VR stressors and haptic feedback 
            directly addresses these challenges.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Haptic Dimension</h2>
          <p className="text-lg leading-relaxed">
            In my tactile sensor research at NYU Tandon, I explored how touch feedback can create more 
            intuitive interfaces. For users with visual impairments, haptic feedback isn't just helpful—it's 
            transformative. It opens entirely new ways to interact with technology, from feeling virtual 
            textures to receiving spatial information through touch.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Designing for All</h2>
          <p className="text-lg leading-relaxed">
            The principles of universal design benefit everyone. Keyboard navigation helps power users. 
            Clear visual hierarchies aid users with cognitive differences. High contrast modes assist users 
            in bright sunlight. When we design for accessibility, we design better products for everyone.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground">
            "Accessibility is not a feature—it's a fundamental right and a design principle that makes 
            technology better for all users."
          </blockquote>
        </div>
      )
    },
    "cultural-storytelling": {
      title: "Cultural Storytelling Through Tech",
      date: "March 2025",
      content: (
        <div className="space-y-6 relative">
          <BengaliPattern />
          <div className="relative z-10">
            <p className="text-lg leading-relaxed">
              Stories shape how we understand the world. As both an engineer and a storyteller—whether through 
              film, game design, or interactive media—I've discovered that technology is one of the most 
              powerful mediums for cultural narratives.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Interactive Narratives</h2>
            <p className="text-lg leading-relaxed">
              During my internship at Geeniuc Games, I used tools like Midjourney to blend public domain 
              stories with interactive gameplay. This wasn't just about entertainment—it was about preserving 
              cultural stories in formats that resonate with new generations. Interactive media allows users 
              to not just consume stories, but to participate in them.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">From Film to Code</h2>
            <p className="text-lg leading-relaxed">
              My experience as Second Assistant Director on "Bodies of Wind" taught me that every medium has 
              its own language. In film, we use camera angles and editing. In code, we use interaction patterns 
              and data visualization. Both are storytelling—just different vocabularies for the same goal: 
              creating emotional resonance.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Engineering as Art</h2>
            <p className="text-lg leading-relaxed">
              There's an artistry to engineering that often goes unrecognized. The elegance of a well-designed 
              algorithm, the beauty of an intuitive interface, the poetry of clean code—these are creative 
              acts. By approaching engineering through a cultural and artistic lens, we can create technology 
              that doesn't just function, but inspires.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground">
              "Technology without culture is sterile. Culture without technology is static. Together, 
              they create possibilities."
            </blockquote>

            <p className="text-lg leading-relaxed">
              Whether I'm working on EEG research, designing game narratives, or building interactive 
              interfaces, I'm always asking: What story does this tell? How does it connect with human 
              experience? That's the intersection where magic happens.
            </p>
          </div>
        </div>
      )
    }
  };

  const post = posts[id || ""];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <article className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="flex gap-4 mb-12">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="gap-2"
            >
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="gap-2"
            >
              <Link to="/">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <header className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
              <p className="text-muted-foreground">{post.date}</p>
            </header>

            <div className="prose prose-lg max-w-none">
              {post.content}
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
