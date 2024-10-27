import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import resume from "../assets/Alaa Yousfi Cv.pdf";
import { useState } from "react";
import CustomConfirm from './CustomConfirm'; 

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault(); 
    setShowConfirm(true); 
  };

  const handleConfirm = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Alaa Yousfi Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowConfirm(false); 
  };

  const handleCancel = () => {
    setShowConfirm(false); 
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center relative">
        <a 
          href={resume} 
          onClick={handleDownloadClick} 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
          className="mx-2 width-10 text-4xl text-white no-underline font-bold ml-0 hover:text-purple-400 hover:scale-110"
        >
          AY
        </a>
        {isHovered && (
          <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-1 py-0.5 rounded shadow-lg flex items-center">
            <span>Download</span>
            <span className="mx-1">•</span>
            <span>Resume</span>
          </div>
        )}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/alaa-yousfi-a8843323b/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition duration-300 ease-in-out transform hover:text-purple-400 hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/AlaaYou" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition duration-300 ease-in-out transform hover:text-purple-400 hover:scale-110"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.facebook.com/profile.php?id=100008660613759" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition duration-300 ease-in-out transform hover:text-purple-400 hover:scale-110"
        >
          <FaFacebook />
        </a>
        <a 
          href="https://x.com/yousfialaa01" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition duration-300 ease-in-out transform hover:text-purple-400 hover:scale-110"
        >
          <FaSquareXTwitter />
        </a>
      </div>
      {showConfirm && (
        <CustomConfirm 
          message="Do you want to download my Resume?" 
          onConfirm={handleConfirm} 
          onCancel={handleCancel} 
        />
      )}
    </nav>
  );
};

export default Navbar;
