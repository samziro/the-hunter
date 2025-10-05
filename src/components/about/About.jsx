import { useEffect } from "react";
import aboutImage from "../../assets/about.webp";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router-dom";

/**
 * About section
 * - semantic HTML (section, h2, p, ul)
 * - image uses lazy loading and decoding to help perf
 * - respects prefers-reduced-motion (AOS disabled when reduced-motion requested)
 * - improved alt text and ARIA linking for screen readers
 * - corrected route to /subscription (lowercase) to match your router
 */

const About = () => {
  useEffect(() => {
    // Respect user reduced-motion preference: disable AOS when user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    Aos.init({
      duration: 500,
      // AOS supports a `disable` option — it can be boolean or a function
      disable: () => prefersReducedMotion,
    });
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="About mx-4 grid grid-cols-1 gap-8 md:mx-0 md:grid-cols-2 md:items-center md:px-28 md:py-12"
      role="region"
    >
      <figure className="flex justify-center md:justify-start">
        <img
          src={aboutImage}
          alt="Trainer guiding a client through a resistance exercise — Fit Hunter coaching"
          data-aos="zoom-in-up"
          className="w-full md:w-3/4 rounded-md mx-auto mt-4 md:mt-0 object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* If you add a short caption later, use <figcaption> here */}
      </figure>

      <div
        className="about-text flex flex-col gap-4 leading-8 text-text-lightFontText dark:text-darkFontText"
        data-aos="zoom-in-up"
      >
        <h4 id="about-heading" className="text-3xl md:text-4xl font-bold mb-2">
          Welcome to FIT Hunter – Your Trusted Partner in Fitness and Wellness
        </h4>

        <p>
          At <strong>FIT Hunter</strong>, we specialise in personal training, fitness coaching, and wellness
          programs designed to help you achieve lasting results. With <strong>8+ years </strong> in the fitness industry and
          <strong> 4 years as a professional personal trainer</strong>, I bring proven expertise, motivation, and a results-first
          approach to every session.
        </p>

        <p className="mt-2">
          My mission is to help you achieve your health, fitness, and lifestyle goals through:
        </p>

        <ul className="list-none grid grid-cols-1 gap-4 md:grid-cols-2 my-4">
          <li className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
            <strong className="dark:text-lightFontText text-lightFontHeading">Personalized training programs</strong>
            <span className="block">tailored to your body type, goals, and preferences.</span>
          </li>

          <li className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
            <strong className="dark:text-lightFontText text-lightFontHeading">Weight loss & fat-burning plans</strong>
            <span className="block">designed for sustainable results.</span>
          </li>

          <li className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
            <strong className="dark:text-lightFontText text-lightFontHeading">Muscle gain & strength programs</strong>
            <span className="block">to enhance performance and aesthetics.</span>
          </li>

          <li className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
            <strong className="dark:text-lightFontText text-lightFontHeading">Holistic wellness coaching</strong>
            <span className="block">to improve energy, confidence, and overall health.</span>
          </li>
        </ul>

        <div className="mt-2">
          <Link to="Price">
            <button
              type="button"
              aria-label="Let's get started - view subscription options and pricing"
              className="py-4 px-8 rounded cursor-pointer text-2xl text-lightFontText bg-[#eebd2b] hover:bg-[#d8a800] font-extrabold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d8a800]"
            >
              LET&apos;S GET STARTED
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
