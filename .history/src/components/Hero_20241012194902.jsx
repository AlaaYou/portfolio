import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/KevinRushProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = ({}) => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col items-center lg:flex-row lg:items-start">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight text-center lg:mt-16 lg:text-8xl"
          >
            Alaa Yousfi
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-t from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center"
          >
            Computer Science Student
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter text-center"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img src={profilePic} alt="Profile" className="rounded-full w-48 h-48 lg:w-64 lg:h-64" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
