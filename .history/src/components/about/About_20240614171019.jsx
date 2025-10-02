/* eslint-disable react/no-unescaped-entities */

import about_image from '../../assets/about-me.png';
import mission_image from '../../assets/mission.png';
import objective_image from '../../assets/objective.png';
import vision_image from '../../assets/vision.png';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";


const About = () => {

  const cardData = [
    {
      image: mission_image,
      heading: "Our Mission",
      description:
        "To empower individuals to take charge of their health and well-being, provide             accessible,  effective, and enjoyable fitness solutions that promote a balanced and active lifestyle.",
    },
    {
      image: objective_image,
      heading: "Our Objective",
      description:
        "We offer comprehensive fitness programs, nutritional guidance, and to providing fitness solutions that are accessible to people of all backgrounds, ages, and fitness levels, fostering an inclusive community that celebrates diversity.",
    },
    {
      image: vision_image,
      heading: "Our Vision",
      description:
        "Envisioning a world where every individual embraces a fit and healthy lifestyle, revolutionize the way people approach fitness, fostering a global community that prioritizes well-being, self-improvement.",
    },
  ];
  
   useEffect(() => {
     Aos.init({ duration: 1000 });
   }, []);
  return (
    <>
      <div className=" mx-4 h-full grid grid-cols-1 gap-8 md:mx-0 md:flex md:justify-between md:items-center md:px-28 md:py-12 ">
        <img src={about_image} alt="about-me-image" data-Aos="zoom-in-up" />
        <p
          className="about-text leading-loose text-stone-600"
          data-Aos="zoom-in-up"
        >
          At The FitHunter, we're dedicated to your well-being. We believe in a
          holistic approach to fitness that goes beyond just workouts. Our
          mission is to inspire and support you in maintaining a fit, healthy,
          and balanced lifestyle. Join us on this journey towards a happier,
          stronger you!
        </p>
      </div>
      <div className="values mx-4 md:mx-0 grid grid-cols-1 gap-4 md:grid md:grid-cols-3 md:justify-items-center md:align-items-center md:gap-8 md:px-28">
        {cardData.map((item) => (
          <div
            key={item.heading}
            className="card shadow-lg rounded-lg p-2"
            data-Aos="slide-up"
          >
            <img
              className="rounded"
              src={item[/* typo fixed */ "image"]}
              alt={item.heading}
            />
            <h1 className="font-semibold text-lg">{item.heading}</h1>
            <p className="leading-loose text-stone-600">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
