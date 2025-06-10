
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Facial Expression Classification",
      description: "In our proposed work, we are recognizing the facial expressions of a person using the CNN algorithm along with the TF/VT. We applied the CNN method to recognize facial expressions and emotions. We used TensorFlow with the TF/VT for obtaining the experimental results to achieve the accuracy for the facial expression recognition.",
      technologies: ["Python", "TensorFlow", "CNN", "Computer Vision"],
      category: "Machine Learning",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <div className="flex gap-2 items-center">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-600 text-sm rounded-full">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <Eye className="w-4 h-4" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
