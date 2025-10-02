/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import bars from '../../assets/bars-svgrepo-com.svg'



const Navbar = () => {
  return (
    <motion.div
      className="z-50 fixed w-full bg-white text-stone-600 md:px-28 flex justify-between align-center py-2 shadow"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 120 }}
    >
      <div className="logo">
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <h1 className="text-lg md:text-2xl cursor-pointer font-semibold md:pt-1">
            Hunter's World
          </h1>
        </Link>
      </div>
      <div className="links">
        <ul className="hidden cursor-pointer font-medium md:flex md:justify-between md:align-center md:gap-8 md:pt-2">
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link to="Hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link to="About" smooth={true} offset={-100} duration={500}>
              About Us
            </Link>
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link to="Services" smooth={true} offset={-110} duration={500}>
              Services
            </Link>
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link to="Pricing" smooth={true} offset={-160} duration={500}>
              Pricing
            </Link>
          </li>
        </ul>
      </div>
      <img className="w-8 md:hidden cursor-pointer -mr-15" src={bars} alt="bars" />
      <div className="join-btn font-medium">
        <Link to="Contact" smooth={true} offset={-120} duration={500}>
          <button className="hidden md:block py-2 px-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900">
            Contact Us
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Navbar
