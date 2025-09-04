import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", name: "All Skills" },
    { id: "Machine Learning", name: "Machine Learning" },
    { id: "Programming Languages", name: "Programming" },
    { id: "Frameworks-Libraries", name: "Frameworks" },
    { id: "Deployment", name: "Deployment" },
  ];
  
  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My expertise spans across various domains of AI and software development,
            with a focus on machine learning and deep learning technologies.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto" onValueChange={setActiveCategory}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {categories.map(category => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="mb-4"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 bg-card rounded-lg p-6 shadow-sm max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-md">
              <h4 className="font-medium mb-2 text-primary">Machine Learning</h4>
              <p className="text-sm text-muted-foreground">
                Deep learning, neural networks, NLP, computer vision, and reinforcement learning
              </p>
            </div>
            <div className="bg-muted p-4 rounded-md">
              <h4 className="font-medium mb-2 text-primary">Large Language Models</h4>
              <p className="text-sm text-muted-foreground">
                Fine-tuning, prompt engineering, RAG systems, and LLM evaluation
              </p>
            </div>
            <div className="bg-muted p-4 rounded-md">
              <h4 className="font-medium mb-2 text-primary">MLOps</h4>
              <p className="text-sm text-muted-foreground">
                Model deployment, monitoring, versioning, and continuous integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;