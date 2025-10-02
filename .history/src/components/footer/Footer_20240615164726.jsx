import arrow from '../../assets/arrow-up-circle-svgrepo-com.svg'
import { Link } from 'react-scroll';


const Footer = () => {
  return (
    <div className="p-1 mx-.5 flex justify-between md:px-28">
      <div className="rights">
        <p className="text-stone-600">Copyright © 2024 Hunter's world watamu.</p>
      </div>
      <div className="back-top grid grid-cols-1 place-items-center">
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <img className=" rigtw-8 h-8 cursor-pointer" src={arrow} alt="" />
        </Link>
        <Link to="Hero" smooth={true} offset={0} duration={500}>
          <p className="text-stone-600 cursor-pointer hidden md:block">back to top</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
