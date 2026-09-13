const BentoCard = ({
  children,
  className = "",
  id,
  hover = true,
  glow = false,
}) => {
  return (
    <div
      id={id}
      className={`
        group
        relative
        h-full
        overflow-hidden

        rounded-3xl
        border
        border-white/[0.08]
        bg-[#111116]

        p-6

        ${
          hover
            ? `
              transition-all
              duration-300
              ease-out
              hover:-translate-y-1
              hover:border-purple-500/25
              hover:bg-[#131319]
            `
            : ""
        }

        ${
          glow
            ? "shadow-[0_0_60px_rgba(168,85,247,0.05)]"
            : ""
        }

        ${className}
      `}
    >
      {/* Glow */}
      {hover && (
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-40
            w-40
            rounded-full
            bg-purple-500/0
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-purple-500/[0.06]
          "
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BentoCard;