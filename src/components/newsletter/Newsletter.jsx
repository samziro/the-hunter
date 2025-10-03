import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
  return (
    <>
      <div className="mx-4 md:px-28 md:1/2 md:grid md:grid-cols-1 md:place-items-center md:m-0">
        <p className="text-center my-4 text-lightFontHeading dark:text-darkFontText">
          Join our program to get news and updates on thefithunter.
        </p>
        <div className="grid grid-cols-1">
          <input
            type="text"
            placeholder="Enter your email ..."
            required
            className=" my-4 p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg "
          />
          <button className="py-2 px-6 mt-1 rounded-lg dark:text-lightFontHeading  bg-btnDarkTheme hover:bg-opacity-90 font-bold">
            Subscribe
          </button>
        </div>
        <div className="icons flex justify-center align-center gap-4 mt-8 text-lightFontHeading dark:text-darkFontHeading">
          <a
            className=" flex items-center justify-center hover:-translate-y-1 duration-500"
            href="https://www.facebook.com/hunterkalama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className=" w-6 h-6" />
          </a>
          <a
            className="flex items-center justify-center hover:-translate-y-1 duration-500"
            href="https://www.instagram.com/the.fit.hunter/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
          <a
            className="flex items-center justify-center hover:-translate-y-1 duration-500"
            href="https://www.youtube.com/@the.fit.hunter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className="w-7 h-7" />
          </a>
          <a
            className="flex items-center justify-center hover:-translate-y-1 duration-500"
            href="https://wa.me/0748679264"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
          </a>
          <a
            className="flex items-center justify-center hover:-translate-y-1 duration-500"
            href="tel:0748679264"
          >
            <FontAwesomeIcon icon={faPhoneAlt} className="w-6 h-6" />
          </a>
        </div>
      </div>
      <hr className="my-2" />
    </>
  );
};

export default Newsletter;
