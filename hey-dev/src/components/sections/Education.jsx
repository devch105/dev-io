import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <div className="flex h-full min-h-[190px] flex-col justify-between">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-yellow-400">
            Education
          </p>

          <h2 className="mt-2 text-lg font-semibold tracking-tight text-white">
            B.Tech — Computer Science
          </h2>
        </div>

        <div
          className="
            flex h-9 w-9 shrink-0 items-center justify-center
            rounded-xl
            border border-white/[0.08]
            bg-white/[0.025]
            text-zinc-500
          "
        >
          <GraduationCap size={17} />
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-zinc-300">
          IMS Engineering College
        </p>

        <p className="mt-1 text-xs text-zinc-500">
          Ghaziabad, India
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-lg border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[10px] text-zinc-500">
            Computer Science & Engineering
          </span>

          <span className="rounded-lg border border-yellow-400/10 bg-yellow-400/[0.03] px-2.5 py-1 text-[10px] text-yellow-400/70">
            2025
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;