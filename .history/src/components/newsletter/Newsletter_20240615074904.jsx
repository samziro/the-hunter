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
        <p className="my-4 text-stone-600">
          Join our program to get news and updates on thefithunter.
        </p>
        <div className="grid grid-cols-1">
          <input
            type="text"
            placeholder="Enter your email ..."
            required
            className=" my-4 p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg"
          />
          <button className="py-2 px-4 mt-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900 ">
            Subscribe
          </button>
        </div>
        <div className="icons flex justify-center align-center gap-4 mt-8">
          <a href="https://www.facebook.com/hunterkalama" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className='text-neutral-700 hover:text-neutral-900 w-6 h-6'/>
          </a>
          <a href="https://www.instagram.com/the.fit.hunter/?hl=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className='text-stone-700 hover:text-stone-900 w-6 h-6'/>
          </a>
          <a href="https://www.youtube.com/@the.fit.hunter" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} classname='text-stone-700 hover:text-stone-900 w-7 h-7'/>
          </a>
          <a href="https://wa.me/0748679264" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className='text-stone-700 hover:text-stone-900 w-6 h-6'/>
          </a>
          <a href="tel:0748679264">
            <FontAwesomeIcon icon={faPhoneAlt} className='text-stone-700 hover:text-stone-900 w-6 h-7'/>
          </a>
        </div>
      </div>
      <hr className="my-2" />
    </>
  );
};

export default Newsletter;
