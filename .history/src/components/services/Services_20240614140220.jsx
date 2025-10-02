/* eslint-disable react/no-unescaped-entities */
import service_image from '../../assets/services.png'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Services = () => {
   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
     target: ref,
     offset: ["0 1", ".9 .9"],
   });

   const scaleProgress = useTransform(scrollYProgress, [0.6, 1], [0.6, 1]);
   const opacityProgress = useTransform(scrollYProgress, [0.6, 1], [0.6, 1]);
  return (
    <>
      <motion.div
        className="h-full grid grid-cols-1 gap-8 md:flex md:justify-between md:items-center md:px-28 md:py-12 "
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
      >
        <p className="leading-loose text-stone-600">
          At Hunter's World, our comprehensive range of services is designed to
          cater to every aspect of your fitness journey. From personalized
          training programs crafted to your unique goals, nutritional guidance
          for a balanced lifestyle, to a supportive community fostering
          motivation, we have your holistic well-being covered.
        </p>
        <img className="md: w-4/5" src={service_image} alt="service-image" />
      </motion.div>
    </>
  );
}

export default Services
