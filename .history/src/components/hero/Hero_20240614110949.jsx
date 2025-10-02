import heroImage from "../../assets/hero.jpg";
import arrow from "../../assets/arrow-down-circle-svgrepo-com.svg"
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      className="hero bg-cover bg-center bg-no-repeat bg-gradient-to-r from-gray-500 h-svh flex place-content-center items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content grid grid-cols-1 justify-items-center align-items-center text-center md:px-28 md:w-3/4 ">
        <motion.h1 className="text-6xl cursor-pointer text-stone-600 font-semibold mb-4"
          initial={{y: -250}}
          animate={{y: -10}}
        >
          The Fit Hunter
        </motion.h1>
        <motion.p className="leading-loose text-stone-600"
        animate={{}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minus eos delectus aliquam ratione. Optio cupiditate voluptas unde
          veniam dignissimos, qui perspiciatis voluptatibus voluptate voluptatum
          sed iste quas repellat minus!
        </motion.p>
        <div className="see-more grid grid-cols-1 justify-items-center align-items-center">
          <img
            className="animate-bounce w-12 h-12 mt-12"
            src={arrow}
            alt=""
          />
          <p className="text-slate-100">see more</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
