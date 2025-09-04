import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5"
          animate={{
            y: [0, 30, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-secondary/5"
          animate={{
            y: [0, -40, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient bg-gradient-to-r from-primary to-accent">
                Himadri Mondal
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90">
              AI Engineer & Machine Learning Specialist
            </h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg">
              Building intelligent systems that solve real-world problems using machine learning, 
              deep learning, and natural language processing technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-600">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
            
            <div className="flex space-x-4">
              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30"></div>
              <div className="relative bg-card rounded-lg p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-sm font-mono text-muted-foreground">terminal</div>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-green-500 dark:text-green-400">$ python</div>
                    <div className="text-blue-500 dark:text-blue-400">&gt;&gt;&gt; from himadri import skills</div>
                    <div className="text-blue-500 dark:text-blue-400">&gt;&gt;&gt; skills.top_expertise</div>
                    <div>['Machine Learning', 'Deep Learning', 'NLP', 'LLM', 'Python']</div>
                    <div className="text-blue-500 dark:text-blue-400">&gt;&gt;&gt; skills.frameworks</div>
                    <div>['TensorFlow', 'PyTorch', 'Scikit-Learn', 'LangChain', 'FastAPI']</div>
                    <div className="text-blue-500 dark:text-blue-400">&gt;&gt;&gt; skills.current_focus</div>
                    <div>"Building intelligent AI systems that solve real-world problems"</div>
                    <div className="text-green-500 dark:text-green-400 animate-pulse">_</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;