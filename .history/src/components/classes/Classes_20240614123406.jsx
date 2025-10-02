import personal_training_image from '../../assets/personal trainer.png'
import hiit_workout_image from '../../assets/hiit-work-out.png'
import gym_workout_image from '../../assets/back.png'
import  workout_programs_image from '../../assets/work-ou-programs.png'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Classes = () => {
    const classData = [
      {
        image: personal_training_image,
        heading: "Personal Training",
        description:
          "I provide one-on-one sessions tailored to your specific needs and goals ...",
      },
      {
        image: hiit_workout_image,
        heading: "Hiit Workout",
        description:
          "High-Intensity Interval Training (HIIT) is a fast and effective way to boost your metabolism and burn calories ...",
      },
      {
        image: gym_workout_image,
        heading: "Gym Workout",
        description:
          "Our state-of-the-art gym is equipped with everything you need for a comprehensive workout ...",
      },
      {
        image: workout_programs_image,
        heading: "Workout Programs",
        description:
          "We understand that everyone's fitness journey is unique. That's why we offer customized workout programs ...",
      },
  ];
   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
     target: ref,
     offset: ["0 1", "1.33 1"],
   });

   const scaleProgress = useTransform(scrollYProgress, [0.6, 1], [0.6, 1]);
   const opacityProgress = useTransform(scrollYProgress, [0.6, 1], [0.6, 1]);
  return (
    <>
      <motion.div
        className="values h-full grid grid-cols-1 gap-4 md:grid md:grid-cols-4 md:justify-items-center md:align-items-center md:gap-4 md:px-28 py-8"
        
      >
        {classData.map((item) => (
          <div key={item.heading} className="shadow-lg rounded-lg p-2">
            <img
              className="rounded"
              src={item[/* typo fixed */ "image"]}
              alt={item.heading}
            />
            <h1 className="font-semibold text-lg">{item.heading}</h1>
            <p className="leading-loose text-stone-600">{item.description}</p>
            <button className="py-2 px-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900">
              Read more
            </button>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Classes
