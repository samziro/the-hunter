/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";
import Aos from "aos";
import logo from "../../assets/logo.png";

const navItems = [
  { to: "Hero", label: "Home", offset: 0 },
  { to: "About", label: "About Us", offset: -260 },
  { to: "Services", label: "Services", offset: -110 },
  { to: "class", label: "Classes", offset: -260 },
  { to: "Pricing", label: "Pricing", offset: -480 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderNavItems = () =>
    navItems.map(({ to, label, offset }) => (
      <li
        key={to}
        className="hover:underline decoration-inherit decoration-2 underline-offset-4"
      >
        <Link
          to={to}
          smooth={true}
          offset={offset}
          duration={500}
          onClick={toggleMenu}
        >
          {label}
        </Link>
      </li>
    ));

  return (
    <motion.div
      className={`z-30 fixed w-full md:px-28 flex justify-between items-center py-1 transition-colors duration-300 ${
        scrolled ? "bg-lightTheme text-lightFontHeading dark:bg-darkTheme shadow" : "bg-transparent"
      }`}
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 120 }}
    >
      <div className="logo">
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <img className="w-24" src={logo} alt="personal-trainer" />
        </Link>
      </div>

      <div className="links relative">
        <ul
          className={`md:flex md:justify-between md:items-center md:gap-8 cursor-pointer md:pt-2 ${
            isOpen ? "block" : "hidden"
          } md:flex-row flex flex-col items-center gap-4 absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 
          ${scrolled ? "text-lightFontHeading dark:text-lightFontText" : "text-lightFontText"}`}
        >
          {renderNavItems()}
        </ul>

        <button
          className="md:hidden block focus:outline-none absolute right-2 -mt-3"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      <div className="join-btn font-medium">
        <Link to="Contact" smooth={true} offset={-270} duration={500}>
          <button className="hidden md:block mt-1 py-1 px-4 rounded-lg text-lightFontHeading bg-btnDarkTheme ">
            Contact Us
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
