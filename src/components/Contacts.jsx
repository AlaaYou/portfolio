import { CONTACT } from "../constants";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div  className="border border-neutral-900 pb-20">
      <motion.h2
      whileInView={{opacity: 1 ,y: 0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:0.5}}
      className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter ">
        <motion.a href="#"
        whileInView={{opacity: 1 ,x: 0}}
        initial={{opacity:0, x: -100}}
        transition={{duration:1}}
        className="my-4 hover:text-purple-400 hover:scale-110">{CONTACT.address}</motion.a>
        <motion.p
        whileInView={{opacity: 1 ,x: 0}}
        initial={{opacity:0, x: 100}}
        transition={{duration:1}}
        className="my-4 ">{CONTACT.phoneNo}</motion.p>
        <a href="mailto:yousfialaa01@gmail.com" className="border-b">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
