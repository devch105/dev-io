import { motion } from "motion/react";
import { Award, ArrowUpRight } from "lucide-react";

const Achievements = () => {
  return (
    <div className="flex h-full min-h-[190px] flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-yellow-400">
            Achievement
          </p>

          <h2 className="mt-2 text-lg font-semibold tracking-tight text-white">
            Problem Solver
          </h2>
        </div>

        <div
          className="
            flex h-9 w-9 items-center justify-center
            rounded-xl
            border border-yellow-400/10
            bg-yellow-400/[0.04]
            text-yellow-400
          "
        >
          <Award size={17} />
        </div>
      </div>

      <div className="mt-3 flex items-end justify-between gap-4">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-4xl
              font-bold
              tracking-[-0.04em]
              text-white
            "
          >
            530<span className="text-yellow-400">+</span>
          </motion.p>

          <p className="mt-1 text-xs text-zinc-500">
            DSA problems solved
          </p>

          <p className="mt-0.5 text-xs text-zinc-600">
            on LeetCode
          </p>
        </div>

        <ArrowUpRight
          size={18}
          className="text-zinc-700 transition-colors duration-200 group-hover:text-yellow-400"
        />
      </div>
    </div>
  );
};

export default Achievements;