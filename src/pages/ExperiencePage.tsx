import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, GraduationCap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences, education } from "@/data/portfolio-data";

import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';

amplitude.add(sessionReplayPlugin());
amplitude.init('a83833d0e1fad5e998d87599ac9cdbfe', {"autocapture":{"attribution":true,"fileDownloads":true,"formInteractions":true,"pageViews":true,"sessions":true,"elementInteractions":true,"networkTracking":true,"webVitals":true,"frustrationInteractions":true}});

import Clarity from '@microsoft/clarity';
const projectId = "t74xpz3k3l";

Clarity.init(projectId);

import Hotjar from '@hotjar/browser';

const siteId = 6513098;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
const ExperiencePage = () => {
  useEffect(() => {
    document.title = "Experience | Himadri Mondal";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Experience & Education</h1>
          <p className="text-muted-foreground max-w-3xl">
            My professional journey in AI engineering and machine learning, along with my academic background
            and continuous learning path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-semibold">Work Experience</h2>
              </div>
              
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
                    <Card>
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

            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>
              
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
                    <Card>
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
                        <p className="text-sm text-muted-foreground mt-2">
                          Focused on computer science fundamentals, machine learning, and artificial intelligence.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-4">Technical Skills</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-primary mb-2">Machine Learning</h4>
                      <p className="text-sm text-muted-foreground">
                        Deep Learning, Neural Networks, LLM, NLP, Fine Tuning
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2">Programming Languages</h4>
                      <p className="text-sm text-muted-foreground">
                        Python, SQL, Java, HTML/CSS
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2">Frameworks & Libraries</h4>
                      <p className="text-sm text-muted-foreground">
                        TensorFlow, PyTorch, Scikit-Learn, Pandas, NumPy, Flask, LangChain
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2">Deployment</h4>
                      <p className="text-sm text-muted-foreground">
                        Docker, Jenkins, Vector Database, AWS, Fast API, Git, MLOps
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
              
              <Card className="bg-card/50 border border-dashed mb-4">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">Machine Learning Specialization</h3>
                  <p className="text-sm text-muted-foreground">
                    Coursera - Stanford University
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border border-dashed mb-4">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">Deep Learning Specialization</h3>
                  <p className="text-sm text-muted-foreground">
                    Coursera - DeepLearning.AI
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border border-dashed">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">AWS Certified Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Amazon Web Services
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;