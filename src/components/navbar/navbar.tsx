import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SlSocialInstagram } from 'react-icons/sl';

const Navbar = () => {
  const [nav, setnav] = useState(false);
  function chang() {
    setnav(!nav);
  }
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",  
      });
    }
  };
  useEffect(() => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        if (targetId) {
          scrollToSection(targetId);
        }
      });
    });
  }, []);

  return (
    <div id="nav" className="flex absolute w-full  top-0  justify-between items-center h-24 mx-auto px-4 text-white">
      <a href="#" onClick={() => scrollToSection("hello")}>
          <img className="h-20 w-23" src={logo} alt="" />
        </a>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal	text-white hover:text-orange-600"
            onClick={() => scrollToSection("about_us")}
            href="#about_us"
          >
            ACCUEIL
          </a>
        </li>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal	text-white hover:text-orange-600"
            onClick={() => scrollToSection("projects")}
            href="#projects"
          >
            MENU
          </a>
        </li>
         <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal	text-white hover:text-orange-600"
            onClick={() => scrollToSection("projects")}
            href="#projects"
          >
            A PROPOS
          </a>
        </li>

      </ul>
      <ul className="hidden md:flex">
      <li className="p-4">
          {" "}
          <a
            className="  hover:text-orange-600"
            onClick={() => scrollToSection("contact")}
            href="#contact"
          >
            <SlSocialInstagram size={20}  color={"white"}  />
          </a>
        </li>
      </ul>
       
       
       
      <div onClick={chang} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} color={"white"}/>
        ) : (
          <AiOutlineMenu size={20} color={"white"}/>
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0  h-full w-[90%] border-r border-r-gray-900 bg-amber-700 ease-in-out duration-500 flex items-center justify-center flex-col"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
         <a href="#" onClick={() => scrollToSection("hello")}>
          <img className="h-20 w-23" src={logo} alt="" />
        </a>
        <li className="p-4 ">
          <a
            className="no-underline mx-4 cursor-pointer font-thin text-white hover:text-orange-600"
            onClick={() => scrollToSection("about_us")}
            href="#about_us"
          >
            ABOUT US
          </a>
        </li>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-thin text-white hover:text-orange-600 "
            onClick={() => scrollToSection("projects")}
            href="#projects"
          >
            OUR PROJECTS
          </a>
        </li>
        <li className="p-4">
          {" "}
          <a
            className="no-underline mx-4 cursor-pointer font-thin text-white hover:text-orange-600 "
            onClick={() => scrollToSection("contact")}
            href="#contact"
          >
            CONTACT US
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;