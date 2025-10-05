import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="py-4 mx-4 flex justify-between items-center text-lightFontHeading dark:text-darkFontText md:px-28">
      <div className="rights">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Designed by{" "}
          <a
            className="font-bold hover:underline"
            href="https://samuel-ziro.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            SamTech
          </a>
        </p>
      </div>

      <div className="back-top flex flex-col md:flex-row gap-4 items-center">
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <FontAwesomeIcon
            icon={faArrowUp}
            className="cursor-pointer text-xl transition-transform duration-300 hover:-translate-y-1"
          />
        </Link>
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <p className="cursor-pointer hidden md:block font-bold hover:text-btnDarkTheme">
            Back to top
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
