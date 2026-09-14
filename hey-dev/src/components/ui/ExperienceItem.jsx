import { motion } from "motion/react";

const ExperienceItem = ({ item, isLast }) => {
  return (
    <div className="relative flex gap-4">
      {/* Timeline */}
      <div className="relative flex w-3 shrink-0 justify-center">
        {!isLast && (
          <div
            className="
              absolute
              top-3
              h-[calc(100%+2rem)]
              w-px
              bg-white/[0.08]
            "
          />
        )}

        <div
          className="
            relative z-10
            mt-1.5
            h-2.5
            w-2.5
            shrink-0
            rounded-full
            border-2
            border-yellow-400/60
            bg-[#111116]
          "
        />
      </div>

      {/* Content */}
      <motion.div
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2 }}
        className="min-w-0 flex-1 pb-8"
      >
        {/* Top row */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-white">
              {item.role}
            </h3>

            <p className="mt-0.5 text-sm text-yellow-400">
              {item.company}
            </p>
          </div>

          <div className="shrink-0">
            <span
              className="
                rounded-lg
                border border-white/[0.07]
                bg-white/[0.025]
                px-2.5 py-1
                text-[10px]
                text-zinc-500
              "
            >
              {item.period}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-6 text-zinc-500">
          {item.description}
        </p>

        {/* Highlights */}
        <ul className="mt-4 space-y-2">
          {item.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-xs leading-5 text-zinc-500"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-yellow-400/60" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-lg
                border border-white/[0.06]
                bg-white/[0.025]
                px-2.5 py-1
                text-[10px]
                text-zinc-600
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceItem;