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
          className="w-full md:w-3/4 rounded-md mx-auto mt-4 md:mt-0"
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

            <ul className="list-mark grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-6 my-4">
              <li className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4"><b className="dark:text-lightFontText text-lightFontHeading">Personalized training programs</b> tailored to your body type, goals, and preferences</li>
              <li className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4"><b className="dark:text-lightFontText text-lightFontHeading">Weight loss and fat-burning plans</b> for sustainable results</li>
              <li className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4"><b className="dark:text-lightFontText text-lightFontHeading">Muscle gain and strength-building programs</b> to enhance performance</li>
              <li className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4"><b className="dark:text-lightFontText text-lightFontHeading">Holistic wellness coaching</b> to improve energy, confidence, and overall health</li>
            </ul>
         </p>
          
          </div>
        
      </div>
      
    </>
  );
};

export default About;

