import heroImage from "../../assets/hero.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div
      className="Hero bg-opacity-50 bg-cover bg-center bg-no-repeat h-svh flex place-content-center items-center "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black dark:opacity-[45%] "></div>
      <motion.div
        className="hero-content m-4 grid grid-cols-1 justify-items-center align-items-center md:text-center md:px-28 md:w-3/4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <h1 className=" text-6xl text-center md:leading-loose md:text-8xl cursor-pointer text-lightFontText z-10 font-extrabold mb-4">
          GET FIT. <br /> <span> <h1 className="text-darkFontHeading">BEYEOND STANDARD.</h1></span>
        </h1 >
        
        <p className="leading-loose text-xl text-center text-lightFontText z-10 max-width:1/2">
          {`Build a stronger physique and transform your life with personalized training programs designed for your goals.`}
        </p>
        <h3 className="text-darkFontHeading z-10 text-center text-3xl font-bold my-2">TRUST THE PROCESS AND TRANSFORM YOUR LIFE.</h3>
        <div className="see-more grid grid-cols-1 justify-items-center align-items-center z-10">
          <Link to="About" smooth={true} offset={-110} duration={500}>
            <button className="mt-8 py-4 px-8 rounded cursor-pointer text-2xl text-lightFontText bg-[#eebd2b] hover:bg-[#d8a800] font-extrabold ">
              JOIN NOW
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
