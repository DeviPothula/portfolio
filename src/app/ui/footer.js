import { PiCopyrightLight } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

const FooterPage = () => {
  const socialMediaLinkStyle = "text-gray-500 pr-[5px] bg-white  border-1 rounded-full hover:text-white hover:bg-[#6e06f2] p-[5px]";
  return (
    <div className="footer-wrapper py-[40px] flex justify-between mx-[40px]">
      <div className="text-sm flex flex-row ">
        <PiCopyrightLight className="w-[20px] h-[20px]" />
        <p className="">{`2024 Devi Pothula. All rights reserved`}</p>
      </div>
      <div className="flex flex-wrap ">
        <a href={"mailto:devikapothula597@gmail.com"} target="_blank" rel="noopener noreferrer" className={`${socialMediaLinkStyle}`}>
          <MdOutlineMail className="h-[20px] md:w-[20px] cursor-pointer" />
        </a>
        <a href={"https://www.linkedin.com/in/devi-pothula-79b6b124a/"} target="_blank" rel="noopener noreferrer" className={`${socialMediaLinkStyle}`}>
          <FaLinkedin className="h-[20px] md:w-[20px] cursor-pointer" />
        </a>
        <a href={"https://github.com/DeviPothula"} target="_blank" rel="noopener noreferrer" className={`${socialMediaLinkStyle}`}>
          <FaGithub className="h-[20px] md:w-[20px] cursor-pointer" />
        </a>
        <a href={"https://medium.com/@devikapothula597"} target="_blank" rel="noopener noreferrer" className={`${socialMediaLinkStyle}`}>
          <FaMedium className="  h-[20px] md:w-[20px] cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default FooterPage;
