import { motion } from "framer-motion";
import { experiences, education } from "@/data/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="experience">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in AI and machine learning, along with my academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-primary h-6 w-1 mr-3 rounded-full"></span>
              Work Experience
            </h3>
            
            <div className="relative pl-6 border-l-2 border-primary-300 space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="timeline-dot"></div>
                  <Card className="border-none shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{exp.company}</CardTitle>
                      <div className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="font-medium text-primary">{exp.position}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{exp.duration}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-primary h-6 w-1 mr-3 rounded-full"></span>
              Education
            </h3>
            
            <div className="relative pl-6 border-l-2 border-primary-300 space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="timeline-dot"></div>
                  <Card className="border-none shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{edu.institution}</CardTitle>
                      <div className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="font-medium text-primary">{edu.degree}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{edu.duration}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        <span className="font-medium">GPA:</span> {edu.gpa}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Certifications placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <Card className="bg-card/50 border border-dashed">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-medium mb-2">Certifications & Additional Training</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    I continuously enhance my skills through specialized courses and certifications in AI, 
                    machine learning, and related technologies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="default" className="bg-primary hover:bg-primary-600">
            <Link to="/experience">
              View Full Experience <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;