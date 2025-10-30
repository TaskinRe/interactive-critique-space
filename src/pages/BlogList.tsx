import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Palette, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const BlogList = () => {
  const blogPosts = [
    {
      id: "bengali-heritage",
      title: "Bengali Heritage in Design",
      description: "Exploring how traditional Alpona patterns inspire modern interactive design",
      icon: Palette,
      gradient: "from-primary/20 to-secondary/20",
      date: "March 2025"
    },
    {
      id: "assistive-technology",
      title: "Assistive Technology & Inclusion",
      description: "Building accessible solutions for diverse communities",
      icon: Heart,
      gradient: "from-secondary/20 to-accent/20",
      date: "March 2025"
    },
    {
      id: "cultural-storytelling",
      title: "Cultural Storytelling Through Tech",
      description: "Blending art, culture, and engineering for meaningful narratives",
      icon: Globe,
      gradient: "from-accent/20 to-primary/20",
      date: "March 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex gap-4 mb-12">
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
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
              <p className="text-xl text-muted-foreground">
                Reflections on culture, technology, and design
              </p>
            </div>

            <div className="grid gap-6 mt-12">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link to={`/blog/${post.id}`}>
                    <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-medium bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <post.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {post.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{post.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
