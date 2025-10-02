import personal_training_image from '../../assets/personal trainer.png'
import hiit_workout_image from '../../assets/hiit-work-out.png'
import gym_workout_image from '../../assets/back.png'
import  workout_programs_image from '../../assets/work-ou-programs.png'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'

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
  
  useEffect(() => {
    Aos.init({duration:500});
  }, [])
  return (
    <div>
      <div className="class h-full mx-4 md:mx-0 grid grid-cols-1 gap-4 md:grid md:grid-cols-4 md:justify-items-center md:align-items-center md:gap-4 md:px-28 py-8">
        {classData.map((item) => (
          <div
            key={item.heading}
            className="shadow-lg rounded-lg p-2"
            data-Aos="zoom-in-up"
          >
            <img
              className="rounded"
              src={item[/* typo fixed */ "image"]}
              alt={item.heading}
            />
            <h1 className="font-semibold text-lg">{item.heading}</h1>
            <p className="leading-loose text-stone-600">{item.description}</p>
            <button className="py-1 px-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900">
              <a
                href="tel:0748679264"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes
