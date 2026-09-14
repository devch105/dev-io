import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { techStack } from "../../data/techStack";
import SkillMarquee from "../ui/SkillMarquee";

const TechStack = ({ onViewAll }) => {
  const firstRow = techStack.slice(0, 14);
  const secondRow = techStack.slice(14);

  return (
    <div className="flex h-full min-h-[230px] flex-col justify-around ">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400">
            Skills
          </p>

          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
            Tech Stack
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Technologies I work with
          </p>
        </div>

        <motion.button
          type="button"
          onClick={onViewAll}
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.97 }}
          className="group flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-zinc-500 transition-colors hover:text-white"
        >
          View All

          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </motion.button>
      </div>

      {/* Skills */}
      <div className="mt-1 space-y-8 pt-8">
        <SkillMarquee
          skills={firstRow}
          direction="left"
          duration={28}
        />

        <SkillMarquee
          skills={secondRow}
          direction="right"
          duration={32}
        />
      </div>
    </div>
  );
};

export default TechStack;