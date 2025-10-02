/* eslint-disable react/no-unescaped-entities */
import service_image from '../../assets/services.png'
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Services = () => {
 useEffect(() => {
   Aos.init({ duration: 500 });
 }, []);
  return (
    <>
      <div className="Services mx-4 h-full grid grid-cols-1 gap-8 md:mx-0 md:flex md:justify-between md:items-center md:px-28 md:py-12 ">
        <p className="leading-loose text-stone-600" data-Aos="zoom-in-up">
          At Hunter's World, our comprehensive range of services is designed to
          cater to every aspect of your fitness journey. From personalized
          training programs crafted to your unique goals, nutritional guidance
          for a balanced lifestyle, to a supportive community fostering
          motivation, we have your holistic well-being covered.
        </p>
        <img
          className=" w-full rounded-md md:w-"
          src={service_image}
          alt="service-image"
          data-Aos="zoom-in-up"
        />
      </div>
    </>
  );
}

export default Services
