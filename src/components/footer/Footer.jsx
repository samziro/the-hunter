import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="p-1 mx-.5 flex justify-between text-lightFontText dark:text-darkFontText md:px-28">
      <div className="rights">
        <p className="text-sm md:text-base">&copy; {`${new Date().getFullYear()} ` }  Designed by <a className="font-bold" href="https://samuel-ziro.vercel.app">samtech</a></p>
      </div>
      <div className="back-top flex flex-col items-center">
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <FontAwesomeIcon
            icon={faArrowUp}
            className="absolute right-2 p-4 w-6 -mt-3  cursor-pointer md:right-0"
            alt=""
          />
        </Link>
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <p className=" cursor-pointer hidden md:block">
            back to top
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
