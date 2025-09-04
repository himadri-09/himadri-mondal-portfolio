import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/portfolio-data";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <section className="py-20 bg-muted/30" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work in AI, machine learning, and data science.
            Each project demonstrates different skills and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.metrics && (
                    <div className="space-y-2 mt-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Live Demo</span>
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          {visibleProjects < projects.length ? (
            <Button onClick={showMoreProjects} variant="outline">
              Show More Projects
            </Button>
          ) : (
            <Button asChild variant="default" className="bg-primary hover:bg-primary-600">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;