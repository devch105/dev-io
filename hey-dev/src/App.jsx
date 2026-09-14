import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import BentoGrid from "./components/layout/BentoGrid";
import BentoCard from "./components/ui/BentoCard";

import Hero from "./components/sections/Hero";
import Profile from "./components/sections/Profile";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import SkillsModal from "./components/sections/SkillsModal";

import { techStack } from "./data/techStack";

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
        <BentoCard
          id="about"
          className="xl:col-span-2"
        >
          <About />
        </BentoCard>

        {/* Skills */}
        <BentoCard
          id="skills"
          className="xl:col-span-2"
        >
          <TechStack
            onViewAll={() => setIsSkillsModalOpen(true)}
          />
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