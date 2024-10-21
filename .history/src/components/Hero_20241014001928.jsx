import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/KevinRushProfile.jpg";
import { motion } from "framer-motion";
import MatrixRain from './MatrixRain';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl font-thin tracking-tight md:text-6xl lg:text-8xl" // Adjusted for smaller devices
            >
              Alaa Yousfi
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-t from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight md:text-4xl" // Adjusted for smaller devices
            >
              Computer Science Student
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 font-light tracking-tighter text-center" // Adjusted for padding
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-4">
          <motion.div 
            variants={container(0.5)}
            initial={{ x: 100, opacity: 0 }}
            animate="visible"
            className="flex justify-center"
            style={{ marginTop: '20px', position: 'relative', height: '250px' }} // Adjusted height and margin
          >
            <MatrixRain style={{ transform: 'scale(0.4)' }} /> {/* Further scale down for smaller devices */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
