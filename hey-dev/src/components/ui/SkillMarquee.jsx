import SkillPill from "./SkillPill";

const SkillMarquee = ({
  skills,
  direction = "left",
  duration = 30,
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#111116] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#111116] to-transparent" />

      <div
        className={
          direction === "left"
            ? "skill-marquee skill-marquee-left"
            : "skill-marquee skill-marquee-right"
        }
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        <div className="flex shrink-0 items-center gap-2.5">
          {skills.map((skill) => (
            <SkillPill
              key={skill.name}
              skill={skill}
              compact
            />
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          {skills.map((skill) => (
            <SkillPill
              key={`duplicate-${skill.name}`}
              skill={skill}
              compact
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillMarquee;