/* eslint-disable react/no-unescaped-entities */
import { useRef } from 'react';
import about_image from '../../assets/about-me.png';
import mission_image from '../../assets/mission.png';
import objective_image from '../../assets/objective.png';
import vision_image from '../../assets/vision.png';
import { motion, useScroll } from "framer-motion";


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
  const ref = useRef(null);
  const
  useScroll({
    target: '',
    offset: ['0 1', '1.33 1']
  });
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:flex md:justify-between md:items-center md:px-28 md:py-12">
        <motion.img
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 25 }}
          className="about-image w-4/5"
          ref={ref}
          src={about_image}
          alt="about-me-image"
        />
        <p ref={ref} className="about-text leading-loose text-center">
          {/* Your About Me content here */}
          At The FitHunter, we're dedicated to your well-being. We believe in a
          holistic approach to fitness that goes beyond just workouts. Our
          mission is to inspire and support you in maintaining a fit, healthy,
          and balanced lifestyle. Join us on this journey towards a happier,
          stronger you!
        </p>
      </div>
      <div className="values grid grid-cols-1 gap-4 md:grid md:grid-cols-3 md:justify-items-center md:align-items-center md:gap-8 md:px-28">
        {cardData.map((item) => (
          <div key={item.heading} className="card shadow-lg rounded-lg p-2">
            <img
              className="rounded"
              src={item[/* typo fixed */ "image"]}
              alt={item.heading}
            />
            <h1 className="text-center font-semibold text-lg text-stone-600">
              {item.heading}
            </h1>
            <p className="leading-loose text-stone-600">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
