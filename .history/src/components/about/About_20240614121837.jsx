/* eslint-disable react/no-unescaped-entities */
import { useRef } from 'react';
import about_image from '../../assets/about-me.png';
import mission_image from '../../assets/mission.png';
import objective_image from '../../assets/objective.png';
import vision_image from '../../assets/vision.png';
import { motion, useScroll, useTransform } from "framer-motion";


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
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['0.6 1', '1.33 1']
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [., 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  return (
    <>
      <div className="grid grid-cols-1 gap-2 md:flex md:justify-between md:items-center md:px-28 md:py-12">
        <motion.img
          className="about-image rounded-md md:w-4/5"
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          src={about_image}
          alt="about-me-image"
        />
        <motion.p
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          className="about-text leading-loose text-stone-600"
        >
          {/* Your About Me content here */}
          At The FitHunter, we're dedicated to your well-being. We believe in a
          holistic approach to fitness that goes beyond just workouts. Our
          mission is to inspire and support you in maintaining a fit, healthy,
          and balanced lifestyle. Join us on this journey towards a happier,
          stronger you!
        </motion.p>
      </div>
      <motion.div
        className="values grid grid-cols-1 gap-4 md:grid md:grid-cols-3 md:justify-items-center md:align-items-center md:gap-8 md:px-28"
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: scrollYProgress,
        }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
      >
        {cardData.map((item) => (
          <div key={item.heading} className="card shadow-lg rounded-lg p-2">
            <img
              className="rounded"
              src={item[/* typo fixed */ "image"]}
              alt={item.heading}
            />
            <h1 className="font-semibold text-lg">{item.heading}</h1>
            <p className="leading-loose text-stone-600">{item.description}</p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default About;
