import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Testimonials = () => {
  const testimonialData = [
    {
      heading: "Lisa B.",
      description:
        "I'm so glad I found The.Fit.Hunter. The variety of classes and the expertise of the instructors are unmatched. Whether it's yoga, strength training, or cardio, they have it all covered!",
    },
    {
      heading: "Michael S.",
      description:
        "As a busy professional, finding time for fitness was always a challenge. The.Fit.Hunter's flexible class schedules and virtual training options have been a lifesaver. I'm in the best shape of my life!",
    },
    {
      heading: "David P.",
      description:
        "I can't say enough good things about The.Fit.Hunter. The holistic approach they take to health and fitness is truly transformative. I've not only lost weight but gained confidence and a new outlook on life!",
    },
    {
      heading: "Emily L.",
      description:
        "The personal training sessions here are top-notch. The trainers are not only skilled but also motivating. They push you to reach your full potential while ensuring your safety and well-being.",
    },
    {
      heading: "John D",
      description:
        "The nutrition advice I received from The.Fit.Hunter team has been a game-changer for me. They provided personalized meal plans that were easy to follow and delicious.",
    },
    {
      heading: "Samantha",
      description:
        "I've been attending classes here for a while now, and I'm incredibly impressed with the quality of instruction and the friendly atmosphere. They and truly care about your progress.",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0.5, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <>
      <div className="values h-full mx-4 md:mx-0 grid grid-cols-1 gap-4 md:grid md:grid-cols-3 md:justify-items-center md:align-items-center md:gap-4 md:px-28 py-8">
        {testimonialData.map((item) => (
          <motion.div
            key={item.heading}
            className="shadow-lg rounded-lg p-2"
            ref={ref}
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
              type: "spring",
              ease: "easeIn",
            }}
          >
            <h1 className="font-semibold text-lg">{item.heading}</h1>
            <p className="leading-loose text-stone-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
