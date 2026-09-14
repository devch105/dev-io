import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

// import SkillMarquee from "../ui/SkillMarquee";
import SkillPill from "../ui/SkillPill";

const categories = [
  "Programming Languages",
  "Frameworks",
  "Databases",
  "Tools & Platforms",
];

const SkillsModal = ({ isOpen, onClose, skills }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed inset-0 z-[999]
            flex items-center justify-center
            bg-black/75 p-4
            backdrop-blur-md
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="skills-modal-title"
            className="
              relative w-full max-w-4xl
              max-h-[85vh]
              overflow-hidden
              rounded-3xl
              border border-white/[0.10]
              bg-[#111116]
              shadow-2xl
            "
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-yellow-400">
                  Skills
                </p>

                <h2
                  id="skills-modal-title"
                  className="mt-1 text-lg font-semibold tracking-tight text-white"
                >
                  Tech Stack
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close skills"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-xl
                  border border-white/[0.08]
                  text-zinc-500
                  transition-all
                  hover:border-white/[0.15]
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                <X size={17} />
              </button>
            </div>

            {/* Content */}
            <div className="max-h-[calc(85vh-73px)] overflow-y-auto">
              
              {/* Animated showcase
              <div className="space-y-3 border-b border-white/[0.08] py-6">
                <SkillMarquee
                  skills={skills.slice(0, 12)}
                  direction="left"
                  duration={28}
                />

                <SkillMarquee
                  skills={skills.slice(12, 24)}
                  direction="right"
                  duration={32}
                />
              </div> */}

              {/* Categories */}
              <div className="space-y-8 p-5 sm:p-7">
                {categories.map((category) => {
                  const categorySkills = skills.filter(
                    (skill) => skill.category === category
                  );

                  return (
                    <section key={category}>
                      <h3 className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                        {category}
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                          <SkillPill
                            key={skill.name}
                            skill={skill}
                            
                          />
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkillsModal;