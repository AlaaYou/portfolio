import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl ">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500 "/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-7xl "/>
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400 "/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500 "/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaLaravel className="text-7xl text-red-700 "/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px">
                <path fill="#D32F2F" d="M24.1,2c1.2,0.7,2.2,1.2,3.3,2c0.7,0.4,1.2,1.1,1.8,1.7c-0.6,0.3-1.2,0.8-1.7,1.3c-0.6-0.4-1.2-0.8-1.8-1.2C25,4.9,24.5,4.4,24,4C23.8,3.5,23.7,2.7,24.1,2z"/>
                <path fill="#5382A1" d="M20,38c0,2.7,0.5,5.3,1.5,7.5c1,1.3,2.8,2.5,4.5,2.5s3.5-1.2,4.5-2.5c1-2.2,1.5-4.8,1.5-7.5H20z"/>
            </svg>
        </div>
      </div>
    </div>
  )
}

export default Tech
