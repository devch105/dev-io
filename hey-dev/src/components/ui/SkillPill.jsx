import TechIcon from "./TechIcon";

const SkillPill = ({ skill, compact = false }) => {
  return (
    <div
      className={`
        flex
        shrink-0
        items-center
        gap-2
        rounded-xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        text-zinc-400
        transition-all
        duration-200

        hover:border-purple-400/25
        hover:bg-purple-500/[0.06]
        hover:text-zinc-200

        ${
          compact
            ? "px-3 py-1.5 text-xs"
            : "px-3.5 py-2 text-sm"
        }
      `}
    >
      <span className="text-zinc-500">
        <TechIcon
          name={skill.icon}
          size={compact ? 15 : 17}
        />
      </span>

      <span>{skill.name}</span>
    </div>
  );
};

export default SkillPill;