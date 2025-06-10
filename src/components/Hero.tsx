
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-in slide-in-from-bottom duration-1000">
            Kummara Pavan Kumar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-in slide-in-from-bottom duration-1000 delay-200">
            Computer Science Student & Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-400">
            Passionate about creating dynamic solutions that merge analytical and technical skills. 
            Eager to contribute to innovative projects while continuously learning and growing.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center animate-in slide-in-from-bottom duration-1000 delay-600">
          <Button size="lg" className="gap-2">
            <Mail className="w-4 h-4" />
            Contact Me
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center animate-in slide-in-from-bottom duration-1000 delay-800">
          <a href="mailto:kummerapavan@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/kummara-pavan-745617262/" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
