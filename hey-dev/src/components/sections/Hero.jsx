import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaGithub ,FaLinkedin  } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";


const Hero = () => {
  const socials = [
    {
      label: "GitHub",
      icon: FaGithub,
      href: "https://github.com/devch105",
    },
    {
      label: "LinkedIn",
      icon: FaLinkedin ,
      href: "https://www.linkedin.com/in/dev-dhama-nh3105",
    },
    {
      label: "Email",
      icon: Mail,
      href: "mailto:devdhama23@email.com",
    },
    {
        label:"Leetcode",
        icon:TbBrandLeetcode,
        href:"https://www.leetcode.com/devch105",
    }
  ];

  return (
    <div   className="
    relative
    flex
    min-h-[420px]
    flex-col
    justify-between

    sm:min-h-[400px]
    xl:min-h-0
  
  ">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72  rounded-full  bg-yellow-600/[0.08] blur-[100px]"
      />

      {/* Secondary glow */}
      <div
        className=" pointer-events-none absolute -bottom-32 right-0 h-64 w-64 rounded-full bg-orange-600/[0.05] blur-[100px]"
      />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="relative"
      >
        {/* Availability */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 12,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            },
          }}
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-purple-400/15
            bg-purple-500/[0.05]
            px-3
            py-1.5
          "
        >
          <span className="relative flex h-2 w-2">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-yellow-400
                opacity-50
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2
                w-2
                rounded-full
                bg-yellow-400
              "
            />
          </span>

          <span className="text-xs font-medium text-yellow-300">
            Available for opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              y: 15,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="text-sm font-medium text-zinc-500"
        >
          Hey, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
              },
            },
          }}
          className="
            mt-2
            text-5xl
            font-bold
            tracking-[-0.045em]
            text-white
            sm:text-6xl
          "
        >
          Dev Dhama
          <span className="text-yellow-400">.</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={{
            hidden: {
              opacity: 0,
              y: 15,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="
            mt-3
            text-lg
            font-medium
            text-zinc-300
            sm:text-xl
          "
        >
          Software Engineer
          <span className="mx-2 text-zinc-700">·</span>
          Problem Solver
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              y: 15,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="
            mt-5
            max-w-xl
            text-sm
            leading-6
            text-zinc-500
            sm:text-base
          "
        >
          I build scalable web applications, solve challenging
          problems, and turn ideas into reliable real-world
          products.
        </motion.p>
      </motion.div>

      {/* Bottom area */}
      <div className="relative mt-8">
        <div className="flex flex-wrap items-center gap-3">
          {/* Primary CTA */}
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-black
            "
          >
            View My Work

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

          {/* Secondary CTA */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              inline-flex
              items-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.02]
              px-5
              py-3
              text-sm
              font-medium
              text-zinc-300

              transition-colors
              hover:border-white/20
              hover:bg-white/[0.05]
              hover:text-white
            "
          >
            Let's Talk
          </motion.a>

          {/* Divider */}
          <div className="mx-1 hidden h-6 w-px bg-white/10 sm:block" />

          {/* Social links */}
          <div className="flex items-center gap-1">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    text-zinc-500

                    transition-colors
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  <Icon size={17} />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Small metadata */}
        <div className="mt-5 flex items-center gap-2 text-xs text-zinc-600">
          <span>Based in India</span>

          <span className="h-1 w-1 rounded-full bg-zinc-700" />

          <span>Open to work</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;