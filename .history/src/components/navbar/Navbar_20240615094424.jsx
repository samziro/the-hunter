/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 useEffect(() => {
   Aos.init({ duration: 500 });
 }, []);
  return (
    <motion.div
      className="z-50 fixed w-full bg-white text-stone-600 md:px-28 flex justify-between items-center py-2 shadow"
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
      <div className="links">
        <ul
          className={`md:flex md:justify-between md:items-center md:gap-8 md:pt-2 ${
            isOpen ? "block" : "hidden"
          } md:flex-row flex flex-col items-center gap-4 absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
          data-Aos="fade"
        >
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link
              to="Hero"
              smooth={true}
              offset={0}
              duration={500}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link
              to="About"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link
              to="Services"
              smooth={true}
              offset={-110}
              duration={500}
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link
              to="class"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={toggleMenu}
            >
              Classes
            </Link>
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link
              to="Pricing"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={toggleMenu}
            >
              Pricing
            </Link>
          </li>
        </ul>
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
      <div className="join-btn font-medium">
        <Link to="Contact" smooth={true} offset={-120} duration={500}>
          <button className="hidden md:block mt-1 py-1 px-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900">
            Contact Us
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
