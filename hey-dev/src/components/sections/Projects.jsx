import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <div className="space-y-5">
      {/* Section heading */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400">
            Projects
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Selected Work
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Things I've built and shipped
          </p>
        </div>

        <motion.div
          whileHover={{ x: 2, y: -2 }}
          className="hidden text-zinc-600 sm:block"
        >
          <ArrowUpRight size={20} />
        </motion.div>
      </div>

      {/* Featured project */}
      {featuredProject && (
        <ProjectCard
          project={featuredProject}
          featured
        />
      )}

      {/* Other projects */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;