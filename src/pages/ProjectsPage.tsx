import { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/portfolio-data";
import Hotjar from '@hotjar/browser';

const siteId = 6513098;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Projects | Himadri Mondal";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-muted-foreground max-w-3xl">
            A comprehensive collection of my work in AI, machine learning, and data science.
            Each project demonstrates different aspects of my technical skills and problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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

        <div className="mt-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Project Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3 text-primary">Planning & Research</h3>
              <p className="text-sm text-muted-foreground">
                I begin each project with thorough research and planning, defining clear objectives
                and identifying the most suitable technologies and approaches.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3 text-primary">Development & Testing</h3>
              <p className="text-sm text-muted-foreground">
                I follow best practices in software development, with rigorous testing and
                validation to ensure robust, reliable, and efficient solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3 text-primary">Deployment & Iteration</h3>
              <p className="text-sm text-muted-foreground">
                I deploy solutions with careful monitoring and continuous improvement,
                incorporating feedback and adapting to changing requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Interested in collaborating?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button asChild className="bg-primary hover:bg-primary-600">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;