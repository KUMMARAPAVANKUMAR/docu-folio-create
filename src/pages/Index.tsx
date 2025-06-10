
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; 2024 Kummara Pavan Kumar. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-80">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
