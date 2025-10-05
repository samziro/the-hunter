import React from "react";
import heroImage from "../../assets/hero.webp"; // keep this
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-scroll";

/**
 * Note:
 * - If you generate a WebP version of `hero.jpg`, place it next to the JPG
 *   and name it hero.webp. This component will try to use that WebP automatically.
 * - We intentionally use an <img> (wrapped in <picture>) for the hero so it becomes
 *   the page's LCP element and can be preloaded from index.html.
 */

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  // If you have a webp version, this will be used by the <source> element.
  // If you don't have a webp file yet, create one (sharp/imagemagick or build pipeline).
  const heroWebp = heroImage.replace(/\.(jpe?g|png)$/i, ".webp");

  const motionProps = shouldReduceMotion
    ? { initial: {}, animate: {} }
    : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6, duration: 0.8 } };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full h-[calc(100dvh-64px)] md:h-[100dvh] flex items-center justify-center overflow-hidden"
      role="banner"
    >
      {/* Prefer picture so we can serve WebP with fallback for best compression */}
      <picture aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full">
        {/* If you have hero.webp in same folder, browser will use it */}
        <source srcSet={heroWebp} type="image/webp" />
        <img
          src={heroImage}
          alt="Personal trainer coaching a client outdoors — Fit Hunter training session"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"            /* hero should be eager for LCP */
          fetchPriority="high"      /* hints browser to prioritize */
          decoding="async"
        />
      </picture>

      {/* Overlay (semi-transparent) */}
      <div
        className="absolute inset-0 bg-black/45 dark:bg-black/55 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 py-12 max-w-4xl text-center"
        {...motionProps}
      >
        
        <h1 id="hero-heading" className="text-white dark:text-white font-extrabold leading-tight text-6xl sm:text-5xl md:text-8xl ">
          GET FIT.
          <br />
          <span className="text-btnDarkTheme block"><h1>BEYOND STANDARD.</h1></span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
          Build a stronger physique and transform your life with personalized training programs designed for your goals.
        </p>

        <h4 className="mt-6 text-darkFontHeading text-center text-xl md:text-2xl font-bold">
          TRUST THE PROCESS AND TRANSFORM YOUR LIFE.
        </h4>

        <div className="mt-8 flex justify-center">
          <Link to="Price" smooth={true} offset={-100} duration={500}>
            <button
              aria-label="Join now — view pricing and packages"
              className="inline-flex items-center justify-center rounded-md bg-btnDarkTheme hover:bg-[#d8a800] px-8 py-3 text-2xl font-bold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d8a800]"
            >
              JOIN NOW
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
