import { BriefcaseBusiness } from "lucide-react";

import { experience } from "../../data/experience";
import ExperienceItem from "../ui/ExperienceItem";

const Experience = () => {
  return (
    <div className="flex h-full min-h-[420px] flex-col">
      {/* Header */}
      <div className="flex shrink-0 items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-yellow-400">
            Experience
          </p>

          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
            Where I've Worked
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            My professional journey
          </p>
        </div>

        <div
          className="
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-xl
            border border-white/[0.08]
            text-zinc-600
          "
        >
          <BriefcaseBusiness size={16} />
        </div>
      </div>

      {/* Scrollable experience area */}
      <div
        className="
          mt-7
          min-h-0
          flex-1
          overflow-hidden
          pr-2

          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-white/10
        "
      >
        {experience.map((item, index) => (
          <ExperienceItem
            key={`${item.company}-${item.role}`}
            item={item}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;