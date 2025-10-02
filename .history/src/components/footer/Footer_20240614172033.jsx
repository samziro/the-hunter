import arrow from '../../assets/arrow-up-circle-svgrepo-com.svg'


const Footer = () => {
  return (
    <div className="flex justify-between md:px-28">
      <div className="rights">
        <p className="text-stone-600">Copyright © fitlikevic watamu.</p>
      </div>
      <div className="back-top grid grid-cols-1 place-items-center">
        <Link>
          <img className=" w-8 h-8 cursor-pointer" src={arrow} alt="" />
        </Link>
        <Link></Link>
      </div>
    </div>
  );
};

export default Footer;
