import heroImage from "../../assets/hero.jpg";
import arrow from "../../assets/arrow-down-circle-svgrepo-com.svg"
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div
      className="Hero bg-opacity-50 bg-cover bg-center bg-no-repeat h-svh flex place-content-center items-center "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <motion.div
        className="hero-content m-4 grid grid-cols-1 justify-items-center align-items-center md:text-center md:px-28 md:w-3/4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <h1 className=" text-4xl md:text-6xl cursor-pointer text-stone-600 font-semibold mb-4">
          The Fit Hunter
        </h1>
        <p className="leading-loose text-stone-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minus eos delectus aliquam ratione. Optio cupiditate voluptas unde
          veniam dignissimos, qui perspiciatis voluptatibus voluptate voluptatum
          sed iste quas repellat minus!
        </p>
        <div className="see-more grid grid-cols-1 justify-items-center align-items-center">
          <Link to="About" smooth={true} offset={-110} duration={500}>
            <p className="mt-8 py-2 px-4 animate-bounce rounded-lg cursor-pointer text-2xl text-slate-100 bg-neutral-700 hover:bg-neutral-900">
              see more
            </p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
