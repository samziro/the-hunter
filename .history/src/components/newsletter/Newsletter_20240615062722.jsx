import { facebook } from '../../assets/facebook-svgrepo-com.svg'
import { instagram } from '../../assets/instagram-svgrepo-com (1).svg'
import { youtube } from '../../assets/youtube-168-svgrepo-com.svg'
import { whatsapp } from '../../assets/whatsapp-fill-svgrepo-com.svg'
import {phone_call} from '../../assets/phone-call-ringing-svgrepo-com.svg'

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
        <div className="icons flex justify-center align-center gap-4 ">
         
          <img src={instagram} alt="instagram" className="w-8 h-8" />
          <img src={youtube} alt="youtube" className="w-8 h-8" />
          <img src={phone_call} alt="phone_call" className="w-8 h-8" />
          <img src={whatsapp} alt="whatsapp" className="w-8 h-8" />
        </div>
      </div>
      <hr className="my-2" />
    </>
  );
};

export default Newsletter;
