/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from "framer-motion";
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
  { to: "class", label: "Classes", offset: -260 },
  { to: "Pricing", label: "Pricing", offset: -480 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderNavItems = () =>
    navItems.map(({ to, label, offset }, i) => (
      <motion.li
        key={to}
        whileHover={{ scale: 1.05, cursor: "pointer" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="hover:underline decoration-inherit decoration-2 underline-offset-4"
      >
        <Link
          to={to}
          smooth={true}
          offset={offset}
          duration={500}
          onClick={() => setIsOpen(false)}
          className="block px-2 py-1"
        >
          {label}
        </Link>
      </motion.li>
    ));

  return (
    <motion.nav
      className={`z-30 fixed w-full flex justify-between items-center px-4 md:px-20 py-2 transition-colors duration-300 ${
        scrolled
          ? "bg-lightTheme text-lightFontHeading dark:bg-darkTheme dark:text-lightFontText shadow"
          : "bg-transparent text-lightFontText "
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 120 }}
    >
      {/* Logo */}
      <div className="logo flex items-center">
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <img
            className="w-20 md:w-24 cursor-pointer"
            src={logo}
            alt="personal-trainer"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:gap-8 font-bold">{renderNavItems()}</ul>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden block focus:outline-none z-40 bg-btnDarkTheme text-lightTheme p-2 rounded"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2xl" />
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white dark:bg-darkTheme text-lightFontHeading dark:text-darkFontHeading shadow-md md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-4 py-6 font-medium">
              {renderNavItems()}
              <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="Contact" smooth={true} offset={-270} duration={500}>
                  <button className="mt-2 py-2 px-6 rounded-lg text-white bg-btnDarkTheme shadow">
                    Contact Us
                  </button>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Link to="Contact" smooth={true} offset={-270} duration={500}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 px-6 rounded-lg text-lightFontHeading bg-btnDarkTheme shadow font-bold"
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
