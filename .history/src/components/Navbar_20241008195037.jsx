import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Navbar = () => {
  return (
   <nav className=" mb-20 flex items-center justify-between py-5">
    <div className="flex flex-shrink-0 items-center">
        <a href="#" className=" m-10 width-10 text-4xl text-white no-underline font-bold ml-6">AY</a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaFacebook/>
        <FaSquareXTwitter/>
        
    </div>
   </nav>
  )
}

export default Navbar