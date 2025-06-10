
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am seeking an entry-level position at a dynamic firm that values my analytical, technical skills and 
              provides opportunities for continuous learning and personal growth. I am eager to contribute to the 
              company's success while advancing my career.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Personal Interests</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-secondary rounded-full text-sm">Internet Browsing</span>
                <span className="px-3 py-1 bg-secondary rounded-full text-sm">Playing Cricket</span>
                <span className="px-3 py-1 bg-secondary rounded-full text-sm">Problem Solving</span>
                <span className="px-3 py-1 bg-secondary rounded-full text-sm">Team Collaboration</span>
              </div>
            </div>
          </div>
          
          <Card className="p-6">
            <CardContent className="space-y-4 p-0">
              <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Meddhalli, Bengaluru</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 9701121627</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:kummerapavan@gmail.com" className="text-primary hover:underline">
                    kummerapavan@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <a href="https://www.linkedin.com/in/kummara-pavan-745617262/" className="text-primary hover:underline text-sm">
                    linkedin.com/in/kummara-pavan-745617262/
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
