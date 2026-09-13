import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import Stat from "../ui/Stat";

const About = () => {
  const stats = [
    {
      value: "2+",
      label: "Years Learning",
    },
    {
      value: "100+",
      label: "Problems Solved",
    },
    {
      value: "5+",
      label: "Projects Built",
    },
  ];

  return (
    <div className="flex h-full flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-purple-400">
              About
            </p>

            <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
              A little about me
            </h2>
          </div>

          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-zinc-500
            "
          >
            <ArrowUpRight size={15} />
          </motion.div>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500">
          I'm a software engineer who enjoys building web
          applications, solving data structures and algorithms
          problems, and continuously learning new technologies.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 border-t border-white/[0.06] pt-5">
        {stats.map((stat) => (
          <Stat
            key={stat.label}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};

export default About;