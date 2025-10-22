import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rt2609@nyu.edu",
      href: "mailto:rt2609@nyu.edu"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+971) 567606174",
      href: "tel:+971567606174"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Abu Dhabi, UAE",
      href: null
    },
    {
      icon: Github,
      label: "GitHub",
      value: "TaskinRe",
      href: "https://github.com/TaskinRe"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing research opportunities, creative collaborations, 
              or innovative projects. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  {item.href ? (
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 hover:text-primary transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Currently Seeking</h3>
                <p className="text-muted-foreground">
                  Research positions, innovative internships, and collaborative projects 
                  in HCI, neuroscience, and interactive media
                </p>
              </div>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  size="lg"
                  onClick={() => window.open('mailto:rt2609@nyu.edu', '_blank')}
                  className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                  className="border-primary/50 hover:bg-primary/10"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
