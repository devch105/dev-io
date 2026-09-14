import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, featured = false }) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`
        group
        relative
        h-full
        overflow-hidden
        rounded-2xl
        border border-white/[0.08]
        bg-white/[0.015]
        p-5
        transition-colors
        duration-300
        hover:border-yellow-400/20
        hover:bg-white/[0.025]
        ${featured ? "min-h-[320px]" : "min-h-[260px]"}
      `}
    >
      {/* Subtle yellow glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-yellow-400/[0.04]
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-yellow-400/[0.08]
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-yellow-400">
              {project.type}
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
              {project.name}
            </h3>
          </div>

          {/* Project Links */}
          <div className="flex shrink-0 items-center gap-2">
            {/* GitHub */}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} GitHub repository`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.08]
                text-zinc-500
                transition-all
                duration-200
                hover:border-yellow-400/25
                hover:bg-yellow-400/[0.06]
                hover:text-yellow-400
              "
            >
              <FaGithub size={16} />
            </motion.a>

            {/* Live Project */}
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live project`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.08]
                text-zinc-500
                transition-all
                duration-200
                hover:border-yellow-400/25
                hover:bg-yellow-400/[0.06]
                hover:text-yellow-400
              "
            >
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-500">
          {project.description}
        </p>

        {/* Stats */}
        <div className="mt-auto flex flex-wrap gap-x-8 gap-y-4 pt-7">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-semibold tracking-tight text-white">
                {stat.value}
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-[0.12em]
                  text-zinc-600
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-lg
                border
                border-white/[0.06]
                bg-white/[0.025]
                px-2.5
                py-1
                text-[10px]
                text-zinc-500
                transition-colors
                duration-200
                group-hover:border-white/[0.09]
                group-hover:text-zinc-400
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;