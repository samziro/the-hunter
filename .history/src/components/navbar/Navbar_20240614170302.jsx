/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <motion.div
      className="z-50 fixed w-full bg-white text-stone-600 py-3 md:px-28 md:flex md:justify-between md:align-center md:py-2 shadow"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 120 }}
    >
      <div className="logo">
        <h1 className="text-2xl cursor-pointer font-semibold md:pt-1">
          Hunter's World
        </h1>
      </div>
      <div className="links">
        <ul className="hidden cursor-pointer font-medium md:flex md:justify-between md:align-center md:gap-8 md:pt-2">
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link to='home smooth={true} >Home</Link>
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link>About Us</Link>
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link>Services</Link>
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            <Link>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="join-btn font-medium">
        <button className="hidden md:block py-2 px-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900">
          Join us
        </button>
      </div>
    </motion.div>
  );
}

export default Navbar
