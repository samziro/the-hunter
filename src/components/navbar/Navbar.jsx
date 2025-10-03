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
        <Link to="hero" smooth offset={0} duration={500} className="cursor-pointer">
          <img
            className="w-20 md:w-24 cursor-pointer"
            src={logo}
            alt="personal-trainer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center text-sm ">
          <NavItem to="hero" offset={0} duration={500}>Home</NavItem>
          <NavItem to="about" offset={-280} duration={500}>About</NavItem>
          <NavItem to="class" offset={-280} duration={500}>Classes</NavItem>
          <NavItem to="pricing" offset={-480} duration={500}>Pricing</NavItem>
        </ul>

        {/* Contact Button (Desktop) */}
        <Link
          to="contact"
          smooth
          offset={-60}
          duration={500}
          className="hidden md:inline-block px-6 py-2 font-bold cursor-pointer rounded-full border border-stone-400 hover:bg-btnDarkTheme hover:text-lightFontHeading transition"
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
            className="md:hidden absolute top-16 left-4 right-4 bg-white shadow-lg rounded-lg px-6 py-5 z-40 text-center"
          >
            <ul className="space-y-5 text-stone-700 text-base">
              <NavItem to="hero" offset={0} duration={500} onClick={toggleMenu}>Home</NavItem>
              <NavItem to="about" offset={-80} duration={500} onClick={toggleMenu}>About</NavItem>
              <NavItem to="services" offset={-60} duration={500} onClick={toggleMenu}>Classes</NavItem>
              <NavItem to="services" offset={-80} duration={500} onClick={toggleMenu}>Pricing</NavItem>
              <Link
                to="contact"
                smooth
                offset={-80}
                duration={500}
                onClick={toggleMenu}
                className="inline-block px-4 py-2 border border-stone-400 rounded-full hover:bg-stone-700 hover:text-white transition"
              >
                Contact Me
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );


// const Navbar = () => {
  

  // const renderNavItems = () =>
  //   navItems.map(({ to, label, offset }, i) => (
  //     <motion.li
  //       key={to}
  //       whileHover={{ scale: 1.05, cursor: "pointer" }}
  //       whileTap={{ scale: 0.95 }}
  //       initial={{ opacity: 0, y: -10 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ delay: i * 0.1 }}
  //       className="hover:underline decoration-inherit decoration-2 underline-offset-4"
  //     >
  //       <Link
  //         to={to}
  //         smooth={true}
  //         offset={offset}
  //         duration={500}
  //         onClick={() => setIsOpen(false)}
  //         className="block px-2 py-1"
  //       >
  //         {label}
  //       </Link>
  //     </motion.li>
  //   ));

  // return (
  //   <header className="z-30 fixed top-0 left-0 right-0 w-full backdrop-blur">
  //     <motion.nav
  //     className={` flex justify-between items-center px-4 md:px-20 py-2 transition-colors duration-300 ${
  //       scrolled
  //         ? "bg-lightTheme/50 text-lightFontHeading dark:bg-darkTheme/50 dark:text-lightFontText shadow"
  //         : "bg-transparent text-lightFontText "
  //     }`}
  //     initial={{ y: -100 }}
  //     animate={{ y: 0 }}
  //     transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 120 }}
  //   >
  //     {/* Logo */}
  //     <div className="logo flex items-center">
  //       <Link to="Hero" smooth={true} offset={0} duration={500}>
  //         <img
  //           className="w-20 md:w-24 cursor-pointer"
  //           src={logo}
  //           alt="personal-trainer"
  //         />
  //       </Link>
  //     </div>

  //     {/* Desktop Menu */}
  //     <ul className="hidden md:flex md:gap-8 font-bold">{renderNavItems()}</ul>

  //     {/* Mobile Menu Toggle */}
  //     <button
  //       className="md:hidden block focus:outline-none z-40 bg-btnDarkTheme text-lightTheme p-1"
  //       onClick={toggleMenu}
  //       aria-label="Toggle navigation menu"
  //     >
  //       <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="xl" />
  //     </button>

  //     {/* Mobile Dropdown */}
  //     <AnimatePresence>
  //       {isOpen && (
  //         <motion.div
  //           className="absolute top-full left-0 w-full bg-white dark:bg-darkTheme text-lightFontHeading dark:text-darkFontHeading shadow-md md:hidden"
  //           initial={{ opacity: 0, y: -20 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           exit={{ opacity: 0, y: -20 }}
  //           transition={{ duration: 0.3 }}
  //         >
  //           <ul className="flex flex-col items-center gap-4 py-6 font-medium">
  //             {renderNavItems()}
  //             <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  //               <Link to="Contact" smooth={true} offset={-270} duration={500}>
  //                 <button className="mt-2 py-2 px-6 rounded-lg text-white bg-btnDarkTheme shadow">
  //                   Contact Us
  //                 </button>
  //               </Link>
  //             </motion.li>
  //           </ul>
  //         </motion.div>
  //       )}
  //     </AnimatePresence>

  //     {/* Desktop Button */}
  //     <div className="hidden md:block">
  //       <Link to="Contact" smooth={true} offset={-270} duration={500}>
  //         <motion.button
  //           whileHover={{ scale: 1.05 }}
  //           whileTap={{ scale: 0.95 }}
  //           className="py-2 px-6 rounded-lg text-lightFontHeading bg-btnDarkTheme shadow font-bold"
  //         >
  //           Contact Us
  //         </motion.button>
  //       </Link>
  //     </div>
  //   </motion.nav>
  //   </header>

    
  // );
};

export default Navbar;
