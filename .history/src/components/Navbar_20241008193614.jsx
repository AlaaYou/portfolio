import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Navbar = () => {
  return (
   <nav className="bg-red-900 mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <a href="#" class="text-4xl text-white no-underline font-bold ml-6">AY</a>
    </div>
    <div>
        <FaLinkedin/>
        <FaGithub/>
        <FaFacebook/>
        <FaSquareXTwitter/>
        
    </div>
   </nav>
  )
}

export default Navbar
