import {motion} from "motion/react";
import {ArrowUpRight} from "lucide-react";

import Stat from "../ui/Stat"
const About = () => {

   const stats = [
    {
      value: "2+",
      label: "Years Learning",
    },
    {
      value: "100+",
      label: "Problems Solved",
    },
    {
      value: "5+",
      label: "Projects Built",
    },
  ];

  return (
    <div className = "relative flex h-fit flex-col justify-between">
      <div className="pointer-events-none 
      absolute -left-24 -top-24 
      h-72 w-72 rounded-full 
      bg-yellow-800/8 blur-[100px]"/>
      <div className="pointer-events-none 
      absolute -bottom-32 right-0 
      h-64 w-64 rounded-full 
      bg-yellow-600/5 blur "/>

      <div className="flex items-start justify-between">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400">
              About
            </p>

            <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
              A little about me
            </h2>
          </div>

            <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-zinc-500
            "
          >
            <ArrowUpRight size={15} />
          </motion.div>

      </div>

       <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500">
          I'm a software engineer who enjoys building web
          applications, solving data structures and algorithms
          problems, and continuously learning new technologies.
        </p>

       <div className="mt-6 grid grid-cols-3 border-t border-white/[0.06] pt-5">
        {stats.map((stat) => (
          <Stat
            key={stat.label}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>

    </div>
  )
}

export default About
