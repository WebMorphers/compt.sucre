import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SlSocialInstagram } from 'react-icons/sl';
import chocolat from '../../../assets/chocolate.png'
import {useNavigate} from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  const navigateAndScrollToSection = (sectionId: string) => {
    if (window.location.pathname === "/menu") {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500); // Adjust the delay as needed
    } else {
      scrollToSection(sectionId);
    }
  };
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
    <div id="nav" className="flex  w-full fixed top-0  justify-between items-center h-24 mx-auto px-10 z-10 text-black bg-[#FFD596]">
      <a href="/" onClick={() => scrollToSection("hello")}>
          <img className="h-20 w-23" src={logo} alt="" />
        </a>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal	text-black hover:text-[#725e5d]"
            onClick={() => scrollToSection("about_us")}
            href="/"
          >
            ACCUEIL
          </a>
        </li>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal	text-black hover:text-[#725e5d]"
            onClick={() => navigateAndScrollToSection("about")}
            href="#about"
          >
            A PROPOS
          </a>
        </li>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal	text-black hover:text-[#725e5d]" 
            href="/menu"
          >
            MENU
          </a>
        </li>
         

      </ul>
      <ul className="hidden md:flex">
      <li className="p-4">
          {" "}
          <a
            className="  hover:text-orange-600"
            onClick={() => scrollToSection("contact")}
            href="https://www.instagram.com/comptoir.sucre/"
            target="blank"
          >
            <SlSocialInstagram size={30}  color={"black"}  />
          </a>
        </li>
      </ul>
       
       
       
      <div onClick={chang} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} color={"black"}/>
        ) : (
          <AiOutlineMenu size={20} color={"black"}/>
        )}
      </div>
      <div  className={
          nav
            ? "fixed left-0 top-0  h-full w-full border-r border-r-gray-900  bg-[#FFD596] ease-in-out duration-500 flex items-center justify-center flex-col"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }>
          <div onClick={chang} className="absolute top-20 right-20 z-10">
        
        <AiOutlineClose size={20} color={"black"}/>
      
    </div>
        
      <ul className="flex flex-col justify-center items-center">
         <a href="/" onClick={() => scrollToSection("hello")}>
          <img className="h-20 w-23" src={logo} alt="" />
        </a>
        <div className="absolute top-0 object-top z-0">
          <img src={chocolat} alt="chocolat" />
        </div>
        <li className="p-4 ">
          <a
            className="no-underline mx-4 cursor-pointer font-thin text-black hover:text-amber-400"
            onClick={() => {scrollToSection("projects"), chang()}}
            href="/"
          >
            ACCUEIL
          </a>
        </li>
        <li className="p-4">
          {" "}
          <a
            className="no-underline mx-4 cursor-pointer font-thin text-black hover:text-amber-400"
            onClick={() => {scrollToSection("projects"), chang()}}
            href="#about"
          >
            A PROPOS
          </a>
        </li>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-thin text-black hover:text-amber-400"
            onClick={() => scrollToSection("projects")}
            href="/menu"
          >
            MENU
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;