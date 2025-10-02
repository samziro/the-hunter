/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';


const Navbar = () => {
  return (
    <motion.div
      className="z-50 fixed w-full bg-white text-stone-600 md:px-28 md:flex md:justify-between md:align-center md:py-2 md:shadow"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, type}}
    >
      <div className="logo">
        <h1 className="text-2xl cursor-pointer font-semibold md:pt-1">
          Hunter's World
        </h1>
      </div>
      <div className="links">
        <ul className="hidden cursor-pointer font-medium md:flex md:justify-between md:align-center md:gap-8 md:pt-2">
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            Home
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            About Us
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            Services
          </li>
          <li className="hover:underline decoration-inherit decoration-2 underline-offset-4">
            Contact Us
          </li>
        </ul>
      </div>
      <div className="join-btn font-medium">
        <button className="py-2 px-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900">
          Join us
        </button>
      </div>
    </motion.div>
  );
}

export default Navbar
