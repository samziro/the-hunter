import arrow from '../../assets/arrow-up-circle-svgrepo-com.svg'
import { Link } from 'react-scroll';


const Footer = () => {
  return (
    <div className="flex justify-between md:px-28">
      <div className="rights">
        <p className="text-stone-600">Copyright © fitlikevic watamu.</p>
      </div>
      <div className="back-top grid grid-cols-1 place-items-center">
        <Link to="About" smooth={true} offset={0} duration={500}>
          <img className=" w-8 h-8 cursor-pointer" src={arrow} alt="" />
        </Link>
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <p className="text-stone-600">back to top</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
