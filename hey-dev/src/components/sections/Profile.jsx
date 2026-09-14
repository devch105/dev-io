import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
// import {profileImage} from "../../assets/images/profile_img.png"
import  { IMAGES } from "../../assets/images/images";

const Profile = () => {
  return (
    <div className="relative h-full min-h-[380px] overflow-hidden sm:min-h-[420px] xl:min-h-[480px] rounded-md">
      {/* Profile Image */}
      <motion.img src={IMAGES.Profile_image} alt="Dev Dhama"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }} className=" absolute inset-0  w-full object-fit "/>
      {/* Top ambient gradient */}
      <div className=" pointer-events-none absolute inset-0 bg-gradient-to-br  from-purple-500/20 via-transparent to-transparent "/>
      {/* Bottom gradient */}
      <div className=" pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/20 to-transparent "/>
      {/* Image edge vignette */}
      <div className=" pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.05]"/>
      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="flex items-end justify-between gap-4">
          {/* Location */}
          <div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <MapPin size={13} />

              <span>India</span>
            </div>

            <p className="mt-1.5 text-sm font-medium text-white">
              Building. Learning. Improving.
            </p>
          </div>

          {/* About button */}
          <motion.a
            href="#about"
            whileHover={{
              scale: 1.05,
              rotate: 45,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            aria-label="Go to About section"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center

              rounded-full
              border
              border-white/10
              bg-black/30
              backdrop-blur-md

              text-white
              transition-colors
              hover:bg-black/50
            "
          >
            <ArrowUpRight size={17} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Profile;