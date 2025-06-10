
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "MCA Master (Computer Applications)",
      institution: "Mediapragati Institute of Technology and Science, Medangalie",
      duration: "2021-2023",
      score: "8.1 CGPA",
      type: "Master's Degree"
    },
    {
      degree: "B.Sc(Bachelor of Computer Science)",
      institution: "Bharath College of Science and Management, Thanjavur",
      duration: "2018-2021",
      score: "83%",
      type: "Bachelor's Degree"
    },
    {
      degree: "Intermediate",
      institution: "Sujala (Govt)Jnani Memorial Junior College",
      duration: "2016-2018",
      score: "81%",
      type: "Higher Secondary"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <p className="text-sm text-primary font-medium">{edu.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <div className="text-lg font-semibold text-primary mt-1">{edu.score}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground">{edu.institution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
