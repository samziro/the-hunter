import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="py-4 mx-4 flex justify-between text-lightFontHeading dark:text-darkFontText md:px-28 ">
      <div className="rights">
        <p className="text-sm md:text-base ">&copy; {`${new Date().getFullYear()} ` }  Designed by <a className="font-bold" href="https://samuel-ziro.vercel.app">samtech</a></p>
      </div>
      <div className="back-top flex flex-col md:flex-row gap-4 items-center">
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <FontAwesomeIcon
            icon={faArrowUp}
            className=" cursor-pointer md:right-0 font-bold "
            alt="arrow-up"
          />
        </Link>
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <p className=" cursor-pointer hidden md:block  font-bold">
            back to top
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
