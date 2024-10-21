import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial : {y: -10},
  animate: {
    y: [10, -10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl ">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-700 "/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-7xl "/>
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400 "/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-400 "/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaLaravel className="text-7xl text-red-700 "/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl" />
        </div>
      </div>
    </div>
  )
}

export default Tech