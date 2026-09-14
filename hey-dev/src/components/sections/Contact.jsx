import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="flex h-full min-h-[220px] flex-col justify-between">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-yellow-400">
            Contact
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Let's build something.
          </h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
            Have an idea, opportunity, or interesting problem?
            Let's talk.
          </p>
        </div>

        <div
          className="
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-xl
            border border-white/[0.08]
            bg-white/[0.025]
            text-zinc-500
          "
        >
          <Mail size={16} />
        </div>
      </div>

      <div className="mt-8">
        <motion.a
          href="mailto:devdhama23@gmail.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-yellow-400
            px-4
            py-2.5
            text-sm
            font-semibold
            text-black
            transition-all
            duration-200
            hover:bg-yellow-300
          "
        >
          Let's Talk

          <ArrowUpRight
            size={16}
            className="
              transition-transform
              duration-200
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </motion.a>

        <p className="mt-3 text-xs text-zinc-600">
          devdhama23@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;