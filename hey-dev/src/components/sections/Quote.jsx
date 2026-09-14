import { Quote as QuoteIcon } from "lucide-react";

const Quote = () => {
  return (
    <div className="flex h-full min-h-[220px] flex-col justify-between">
      <div>
        <div
          className="
            flex h-9 w-9
            items-center justify-center
            rounded-xl
            border border-yellow-400/10
            bg-yellow-400/[0.04]
            text-yellow-400
          "
        >
          <QuoteIcon size={17} />
        </div>

        <p className="mt-8 max-w-xl text-2xl font-medium leading-relaxed tracking-tight text-white sm:text-3xl">
          I enjoy turning complex problems into{" "}
          <span className="text-yellow-400">
            simple, reliable systems.
          </span>
        </p>
      </div>

      <p className="mt-8 text-xs uppercase tracking-[0.18em] text-zinc-600">
        Build · Learn · Ship
      </p>
    </div>
  );
};

export default Quote;