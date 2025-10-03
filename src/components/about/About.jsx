/* eslint-disable react/no-unescaped-entities */

import about_image from "../../assets/about.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const About = () => {
  
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
          className="w-full md:w-3/4 rounded-md mx-auto"
        />
        <div
          className="about-text flex flex-col gap-4 leading-8 text-text-lightFontText   dark:text-darkFontText"
          data-aos="zoom-in-up"
        >
          <p className="text-4xl font-bold mb-4  ">Welcome to FIT Hunter – Your Trusted Partner in Fitness and Wellness</p>
          <>
            At FIT Hunter, we specialize in personal training, fitness coaching, and wellness 
          programs designed to help individuals achieve lasting results. 
          With 8+ years of experience in the fitness industry and 4 years as a professional personal trainer, 
          I bring proven expertise, passion, and motivation to every training session.
          </>
          

         <p >
           My mission is to help you achieve your health, fitness, and lifestyle goals through:

            <ul className="list-mark grid grid-cols-1 gap-2 md:grid md:grid-cols-2 md:gap-6 my-4">
              <li className="ring-1 ring-gold p-2 rounded shadow-glow dark:bg-transparent bg-yellow-100"><b>Personalized training programs</b> tailored to your body type, goals, and preferences</li>
              <li className="ring-1 ring-gold p-2 rounded shadow-glow dark:bg-transparent bg-yellow-100"><b>Weight loss and fat-burning plans</b> for sustainable results</li>
              <li className="ring-1 ring-gold p-2 rounded shadow-glow dark:bg-transparent bg-yellow-100"><b>Muscle gain and strength-building programs</b> to enhance performance</li>
              <li className="ring-1 ring-gold p-2 rounded shadow-glow dark:bg-transparent bg-yellow-100"><b>Holistic wellness coaching</b> to improve energy, confidence, and overall health</li>
            </ul>
         </p>
          
          <p >
            At FIT Hunter, fitness is not just a destination — it’s a journey of transformation. I combine expert guidance, empathetic coaching, and motivational support to ensure you stay consistent and empowered every step of the way.

          Whether you want to lose weight, gain lean muscle, build strength, boost endurance, or improve overall wellness, I am here to guide you.
          </p>

        </div>
        
      </div>
      
    </>
  );
};

export default About;
