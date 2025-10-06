/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import personal_training_image from "../../assets/personal trainer.png";
import hiit_workout_image from "../../assets/hiit-work-out.png";
import online from "../../assets/online.jpg"
import group from "../../assets/group.jpg"
import gym_workout_image from "../../assets/back.png";
import hiit_work_out_video from "../../assets/hiit-work-out.webm";
import personal_trainer_video from "../../assets/personal trainer.webm";
import gym_work_out_video from "../../assets/gym.webm";
import email from "../../assets/email.webp"
import ConsultationModal from "../Modal";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import Title from "../title/Title";

const Classes = () => {
  const [playState, setPlayState] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const classData = [
    {
      image: personal_training_image,
      heading: "Personal Training",
      description:
        "Work directly with a certified coach on a personalized training plan designed for your unique goals.",
      video: personal_trainer_video,
      keywords: "personal trainer, fitness coaching, body transformation",
    },
    {
      image: hiit_workout_image,
      heading: "Defined Abs Program",
      description:
        "Shred stubborn belly fat and sculpt a stronger core with progressive HIIT-based ab workouts.",
      video: hiit_work_out_video,
      keywords: "HIIT workout, ab training, fat burning program",
    },
    {
      image: gym_workout_image,
      heading: "Workout Programs",
      description:
        "A comprehensive program designed to build muscle, enhance endurance, and improve performance.",
      video: gym_work_out_video,
      keywords: "strength training, muscle building, gym workout plan",
    },
    {
      image: online,
      heading: "Online Coaching",
      description:
        "A comprehensive program designed to build muscle, enhance endurance, and improve performance.",
      video: gym_work_out_video,
      keywords: "strength training, muscle building, gym workout plan",
    },
    {
      image: group,
      heading: "Group Coaching",
      description:
        "A comprehensive program designed to build muscle, enhance endurance, and improve performance.",
      video: gym_work_out_video,
      keywords: "strength training, muscle building, gym workout plan",
    },
    {
      image: email,
      heading: "Email Support",
      description:
        "Get continuous support and guidance throughout your journey.",
      video: gym_work_out_video,
      keywords: "strength training, muscle building, gym workout plan",
    },
  ];

  const handleButtonClick = (video) => {
    setCurrentVideo(video);
    setPlayState(true);
  };

  return (
    <section
      id="Class"
      className="py-20 bg-gray-50 dark:bg-darkTheme px-6 md:px-20"
      aria-labelledby="programs-heading"
    >
      <Title
        Title1="Choose Your"
        Title2="Transformation Path"
        subTitle="TRAINING PROGRAMS"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {classData.map((item, index) => (
          <article
            key={index}
            className="group relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-darkCardTheme hover:shadow-2xl transition-all duration-300 flex flex-col"
            data-aos="zoom-in-up"
          >
            <img
              src={item.image}
              alt={`${item.heading} - ${item.keywords}`}
              className="w-full h-64 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="flex flex-col justify-between p-4 flex-grow">
              <h4 className="text-2xl font-bold text-darkFontHeading dark:text-lightFontText mb-3">
                {item.heading}
              </h4>
              <p className="text-base text-lightFontHeading dark:text-gray-300 leading-relaxed mb-6">
                {item.description}
              </p>

              <button
                onClick={() => handleButtonClick(item.video)}
                className="mt-auto flex items-center justify-center gap-2 py-3 px-6 bg-btnDarkTheme text-white font-bold rounded hover:bg-[#d8a800] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btnDarkTheme"
                aria-label={`Watch preview video of ${item.heading}`}
              >
                 ▶ Watch Program Preview
              </button>
            </div>
          </article>
        ))}
      </motion.div>

      {/* Conversion CTA */}
      <div className="text-center mt-16">
        <p className="text-lg md:text-2xl font-semibold text-darkFontHeading dark:text-lightFontText mb-6">
          Unsure which program fits you best? Get a free consultation with our coaching team.
        </p>
        <a
          onClick={() => setIsModalOpen(true)}
          className="px-10 py-4 bg-btnDarkTheme text-white rounded text-xl font-bold hover:bg-[#d8a800] transition cursor-pointer"
        >
          Book a Free Consultation
        </a>
      </div>

        {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Video Modal */}
      {playState && (
        <VideoPlayer
          playState={playState}
          setPlayState={setPlayState}
          videoSrc={currentVideo}
        />
      )}
    </section>
  );
};

export default Classes;
