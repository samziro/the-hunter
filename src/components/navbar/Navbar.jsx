/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import "aos/dist/aos.css";
import Aos from "aos";
import logo from "../../assets/logo.png";

const NavItem = ({ to, offset, duration, children, onClick }) => (
  <Link
    to={to}
    smooth={true}
    offset={offset}
    duration={duration}
    onClick={onClick}
    className="cursor-pointer transition hover:font-bold"
  >
    <li>{children}</li>
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-30 backdrop-blur bg-transparent shadow-sm">
      <motion.nav
        className={` flex justify-between items-center px-4 md:px-20 py-2 transition-colors duration-300 ${
        scrolled
          ? "bg-lightTheme/50 text-lightFontHeading dark:bg-darkTheme/50 dark:text-lightFontText shadow"
          : "bg-transparent text-lightFontText "
      }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 120 }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="Hero" smooth offset={0} duration={500} className="cursor-pointer">
          <img
            className="w-20 md:w-24 cursor-pointer"
            src={logo}
            alt="personal-trainer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center text-sm ">
          <NavItem to="Hero" offset={0} duration={500}>Home</NavItem>
          <NavItem to="About" offset={-280} duration={500}>About</NavItem>
          <NavItem to="Class" offset={-280} duration={500}>Classes</NavItem>
          <NavItem to="Pricing" offset={-480} duration={500}>Pricing</NavItem>
        </ul>

        {/* Contact Button (Desktop) */}
        <Link
          to="Contact"
          smooth
          offset={-60}
          duration={500}
          className="hidden text-lightFontHeading dark:text-lightFontText md:inline-block px-6 py-2 font-bold cursor-pointer rounded-full  hover:bg-btnDarkTheme hover:text-lightFontHeading transition bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <RiCloseLargeFill /> : <FaBarsStaggered />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-4 right-4 bg-slate-50 dark:bg-darkCardTheme text-lightFontHeading dark:text-lightTheme shadow-lg rounded-lg px-6 py-5 z-40 w-full "
          >
            <ul className="space-y-5 text-stone-700 text-base">
        
              <NavItem className="hover:bg-darkFontText border " to="hero" offset={0} duration={500} onClick={toggleMenu}>Home</NavItem>
              <NavItem to="about" offset={-80} duration={500} onClick={toggleMenu}>About</NavItem>
              <NavItem to="services" offset={-60} duration={500} onClick={toggleMenu}>Classes</NavItem>
              <NavItem to="services" offset={-80} duration={500} onClick={toggleMenu}>Pricing</NavItem>
              <Link
                to="Contact"
                smooth
                offset={-80}
                duration={500}
                onClick={toggleMenu}
                className="inline-block px-4 py-2 border border-yellow-200 dark:border-yellow-700 rounded-full bg-yellow-50 dark:bg-yellow-900/20 transition"
              >
                Contact Me
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );

};

export default Navbar;
