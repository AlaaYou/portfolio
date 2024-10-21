import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/KevinRushProfile.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 animate={{ x: 100 }}  className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Alaa Yousfi</motion.h1>
                    <motion.span whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }} className="bg-gradient-to-t from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Computer Science Student</motion.span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center ">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
