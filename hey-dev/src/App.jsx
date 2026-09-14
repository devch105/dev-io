import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import BentoGrid from "./components/layout/BentoGrid";
import BentoCard from "./components/ui/BentoCard";

import Hero from "./components/sections/Hero";
import Profile from "./components/sections/Profile";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import SkillsModal from "./components/sections/SkillsModal";
import Projects from "./components/sections/Projects";
import { techStack } from "./data/techStack";
import Experience from "./components/sections/Experience";
import Achievements from "./components/sections/Achievements";
import Education from "./components/sections/Education";
import Quote from "./components/sections/Quote";
import Contact from "./components/sections/Contact";

function App() {
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b]">
      <Navbar />

      <BentoGrid>
        {/* Hero */}
        <BentoCard
          id="home"
          className="
            md:col-span-2
            xl:col-span-2
            xl:row-span-2
          "
          glow
          hover={false}
        >
          <Hero />
        </BentoCard>

        {/* Profile */}
        <BentoCard
          className="
            md:col-span-2
            xl:col-span-2
            xl:row-span-2
          "
          glow
          hover={false}
        >
          <Profile />
        </BentoCard>

        {/* About */}
        <BentoCard id="about" className="xl:col-span-2">
          <About />
        </BentoCard>

        {/* Skills */}
        <BentoCard id="skills" className="xl:col-span-2">
          <TechStack onViewAll={() => setIsSkillsModalOpen(true)} />
        </BentoCard>

        <BentoCard id="projects" className="md:col-span-2 xl:col-span-4">
          <Projects />
        </BentoCard>

        {/* Experience */}
        <BentoCard
          id="experience"
          className="
            md:col-span-2
            xl:col-span-2
            xl:row-span-2
          "
        >
          <Experience />
        </BentoCard>

        {/* Right side nested Bento */}
        <div
          className="
                md:col-span-2
                xl:col-span-2
                xl:row-span-2
                grid
                grid-cols-1
                gap-4
              "
        >
          {/* Achievements */}
          <BentoCard>
            <Achievements />
          </BentoCard>

          {/* Education */}
          <BentoCard>
            <Education />
          </BentoCard>
        </div>
        {/* Quote */}
        <BentoCard
          id="quote"
          className="
                md:col-span-1
                xl:col-span-2
              "
        >
          <Quote />
        </BentoCard>

        {/* Contact */}
        <BentoCard
          id="contact"
          className="
                  md:col-span-1
                  xl:col-span-2
                "
        >
          <Contact />
        </BentoCard>
      </BentoGrid>

      {/* Skills Modal */}
      <SkillsModal
        isOpen={isSkillsModalOpen}
        onClose={() => setIsSkillsModalOpen(false)}
        skills={techStack}
      />
    </div>
  );
}

export default App;
