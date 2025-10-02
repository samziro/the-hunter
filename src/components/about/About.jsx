/* eslint-disable react/no-unescaped-entities */

import about_image from "../../assets/about-me.jpg";
// import mission_image from "../../assets/mission.png";
// import objective_image from "../../assets/objective.png";
// import vision_image from "../../assets/vision.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const About = () => {
  // const cardData = [
  //   {
  //     image: mission_image,
  //     heading: "Our Mission",
  //     description:
  //       "To empower individuals to take charge of their health and well-being, provide accessible, effective, and enjoyable fitness solutions that promote a balanced and active lifestyle.",
  //   },
  //   {
  //     image: objective_image,
  //     heading: "Our Objective",
  //     description:
  //       "We offer comprehensive fitness programs, nutritional guidance, and provide fitness solutions that are accessible to people of all backgrounds, ages, and fitness levels, fostering an inclusive community that celebrates diversity.",
  //   },
  //   {
  //     image: vision_image,
  //     heading: "Our Vision",
  //     description:
  //       "Envisioning a world where every individual embraces a fit and healthy lifestyle, revolutionizing the way people approach fitness, fostering a global community that prioritizes well-being and self-improvement.",
  //   },
  // ];

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="About mx-4 h-full grid grid-cols-1 gap-8 md:mx-0 md:grid-cols-2 md:justify-between md:items-center md:px-28 md:py-12">
        <img
          src={about_image}
          alt="about-me-image"
          data-aos="zoom-in-up"
          className="w-3/4 rounded-md mx-auto"
        />
        <div
          className="about-text flex flex-col gap-4 leading-8 text-text-lightFontText   dark:text-darkFontText"
          data-aos="zoom-in-up"
        >
          <h2 className="text-xl font-semibold mb-4  ">Welcome to FIT Hunter – Your Trusted Partner in Fitness and Wellness</h2>
          <>
            At FIT Hunter, we specialize in personal training, fitness coaching, and wellness 
          programs designed to help individuals achieve lasting results. 
          With 8+ years of experience in the fitness industry and 4 years as a professional personal trainer, 
          I bring proven expertise, passion, and motivation to every training session.
          </>
          

         <p >
           My mission is to help you achieve your health, fitness, and lifestyle goals through:

            <ul className="list-disc list-inside">
              <li><b>Personalized training programs</b> tailored to your body type, goals, and preferences</li>
              <li><b>Weight loss and fat-burning plans</b> for sustainable results</li>
              <li><b>Muscle gain and strength-building programs</b> to enhance performance</li>
              <li><b>Holistic wellness coaching</b> to improve energy, confidence, and overall health</li>
            </ul>
         </p>
          
          <p >
            At FIT Hunter, fitness is not just a destination — it’s a journey of transformation. I combine expert guidance, empathetic coaching, and motivational support to ensure you stay consistent and empowered every step of the way.

          Whether you want to lose weight, gain lean muscle, build strength, boost endurance, or improve overall wellness, I am here to guide you.
          </p>

        </div>
        
      </div>
      {/* <div className="values mx-4 md:mx-0 grid grid-cols-1 gap-4 md:grid md:grid-cols-3 md:justify-items-center md:align-items-center md:gap-8 md:px-28">
        {cardData.map((item) => (
          <div
            key={item.heading}
            className="card shadow-lg rounded-lg p-1 bg-slate-50 dark:bg-darkCardTheme flex flex-col"
            data-aos="slide-up"
          >
            <img className="rounded" src={item.image} alt={item.heading} />
            <h1 className="font-semibold text-lg  text-lightFontHeading dark:text-darkFontHeading">
              {item.heading}
            </h1>
            <p className="leading-loose text-lightFontText dark:text-darkFontText">
              {item.description}
            </p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default About;
