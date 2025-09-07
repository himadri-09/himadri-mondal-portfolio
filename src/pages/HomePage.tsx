import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

import Clarity from '@microsoft/clarity';
const projectId = "t74xpz3k3l";

Clarity.init(projectId);

import Hotjar from '@hotjar/browser';

const siteId = 6513098;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
const HomePage = () => {
  useEffect(() => {
    document.title = "Himadri Mondal | AI Engineer Portfolio";
  }, []);

  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;