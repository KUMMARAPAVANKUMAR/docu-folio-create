
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Settings, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MSSQL Server"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Front-end Technologies",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Frameworks",
      icon: Settings,
      skills: ["Spring Boot", "Flask"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Operating Systems",
      icon: Settings,
      skills: ["Windows"],
      color: "bg-indigo-500/10 text-indigo-600"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem Solving", "Communication and Team work"],
      color: "bg-pink-500/10 text-pink-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:scale-[1.05] group">
                <CardHeader className="text-center pb-3">
                  <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="px-3 py-2 bg-secondary/50 rounded-lg text-sm font-medium">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
