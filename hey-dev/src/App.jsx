import Navbar from "./components/layout/Navbar";
import BentoGrid from "./components/layout/BentoGrid";
import BentoCard from "./components/ui/BentoCard";

import Hero from "./components/sections/Hero";
import Profile from "./components/sections/Profile";
import About from "./components/sections/About";

function App() {
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

        {/* Profile placeholder */}
        <BentoCard
          className="
            md:col-span-2
            xl:col-span-2
            xl:row-span-2
          "
           glow
          hover={false}
        >
          <Profile/>
        </BentoCard>

        {/* About placeholder */}
        <BentoCard
          id="about"
          className="xl:col-span-2"
        >
         <About/>
        </BentoCard>

        {/* Skills placeholder */}
        <BentoCard
          id="skills"
          className="xl:col-span-2"
        >
          <span className="text-sm text-zinc-600">
            Skills
          </span>
        </BentoCard>
      </BentoGrid>
    </div>
  );
}

export default App;