import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Navbar = () => {
  return (
   <nav className=" mb-20 flex items-center justify-between py-5">
    <div className="flex flex-shrink-0 items-center">
        <a href="#" className=" mx-2 width-10 text-4xl text-white no-underline font-bold ml-0">AY</a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/alaa-yousfi-a8843323b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
      </a>
      <a href="https://github.com/AlaaYou" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100008660613759" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://x.com/yousfialaa01" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter />
      </a>
        
    </div>
   </nav>
  )
}

export default Navbar