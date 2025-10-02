import heroImage from "../../assets/hero.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div
      className="Hero bg-opacity-50 bg-cover bg-center bg-no-repeat h-svh flex place-content-center items-center "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="hero-content m-4 grid grid-cols-1 justify-items-center align-items-center md:text-center md:px-28 md:w-3/4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <h1 className=" text-4xl md:text-6xl cursor-pointer  font-semibold mb-4">
          The Fit Hunter
        </h1>
        <p className="leading-loose ">
          Welcome to Hunter's World, dedicated guide on a transformative fitness
          journey. As a passionate fitness enthusiast and expert, I am committed
          to helping you achieve your unique goals. At Hunter's World, we
          provide personalized training programs, nutritional guidance, and a
          supportive community to nurture both body and mind.
        </p>
        <div className="see-more grid grid-cols-1 justify-items-center align-items-center">
          <Link to="About" smooth={true} offset={-110} duration={500}>
            <p className="mt-8 py-1 px-4 animate-bounce rounded-lg cursor-pointer text-2xl text-slate-100 bg-neutral-700 hover:bg-neutral-900">
              see more
            </p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
