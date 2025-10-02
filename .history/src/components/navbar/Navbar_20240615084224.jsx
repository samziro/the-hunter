/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="z-50 fixed w-full bg-white text-stone-600 px-4 py-2 shadow md:px-28 flex justify-between items-center"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 120 }}
    >
      <div className="logo">
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <h1 className="text-lg ml-4 md:m-0 md:text-2xl cursor-pointer font-semibold md:pt-1">
            Hunter's World
          </h1>
        </Link>
      </div>
      <div className="links md:flex md:justify-between md:gap-8">
        <ul className={isOpen ? "flex flex-col gap-4" : "hidden"}>
          {" "}
          {/* Conditional rendering */}
          <li>
            <Link to="Hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="About" smooth={true} offset={-100} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="Services" smooth={true} offset={-110} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="class" smooth={true} offset={-100} duration={500}>
              Classes
            </Link>
          </li>
          <li>
            <Link to="Pricing" smooth={true} offset={-150} duration={500}>
              Pricing
            </Link>
          </li>
        </ul>
      </div>
      <div className="join-btn">
        <Link to="Contact" smooth={true} offset={-120} duration={500}>
          <button className="hidden md:block mt-1 py-1 px-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900">
            Contact Us
          </button>
        </Link>
        <button
          className="md:hidden block focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
