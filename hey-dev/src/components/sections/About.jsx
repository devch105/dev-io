
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  Server,
} from "lucide-react";

import Stat from "../ui/Stat";
import { aboutContent } from "../../data/about";

const icons = {
  server: Server,
  brain: BrainCircuit,
  code: Code2,
};

const About = () => {
  const { eyebrow, heading, subheading, paragraphs, focusAreas, stats } =
    aboutContent;

  return (
    <section className="relative isolate h-fit overflow-hidden rounded-2xl p-3">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-yellow-500/[0.07] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 -z-10 h-64 w-64 rounded-full bg-amber-500/[0.05] blur-[90px]"
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-400">
              {eyebrow}
            </p>
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {heading}
            <span className="block text-zinc-500">
              {subheading}
            </span>
          </h2>
        </div>

        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-yellow-400"
        >
          <ArrowUpRight size={18} />
        </motion.div>
      </div>

      {/* Introduction */}
      <div className="mt-5 max-w-2xl space-y-3 text-sm leading-7 text-zinc-400 sm:text-base">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Focus areas */}
      <div className="mt-6 flex flex-wrap gap-2">
        {focusAreas.map(({ icon, label }, index) => {
          const Icon = icons[icon];

          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.1,
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-yellow-400/30 hover:bg-yellow-400/[0.04] sm:text-sm"
            >
              <Icon size={15} className="text-yellow-400" />
              {label}
            </motion.div>
          );
        })}
      </div>

      {/* Stats
      <div className="mt-7 grid grid-cols-3 border-t border-white/[0.08] pt-5">
        {stats.map((stat) => (
          <Stat
            key={stat.label}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div> */}
    </section>
  );
};

export default About;
