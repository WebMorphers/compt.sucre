 import { BiLogoAngular } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"; 
import React, { useState } from "react";
import logo from '../assets/logo.png'

const NavBar = () => {
  let links = [
    { name: "ACCUEIL", link: "/" },
    { name: "MENU", link: "/" },
    { name: "A PROPOS", link: "/" }, 
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed shadow top-0 left-0">
      <div className="md:flex items-center justify-between   py-4 md:px-10 px-7">
        <div className="text-2xl flex items-center cursor-pointer font-bold text-green-800">
        <img className="h-20 w-23" src={logo} alt="" /> 
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="absolute right-8 top-6 md:hidden cursor-pointer"
        >
          {open ? (
            <AiOutlineClose className="text-3xl text-white" />
          ) : (
            <AiOutlineMenu className="text-3xl  text-white" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static     md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ${
            open
              ? "top-16 opacity-100"
              : "top-[-350px] md:opacity-100 opacity-0"
          }`}
        >
          {links.map((link, index) => (
            <li key={index} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-white    hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))} 
        </ul>
      </div>
    </div>
  );
};

export default NavBar;