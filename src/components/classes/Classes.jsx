import { useState } from "react";
import personal_training_image from "../../assets/personal trainer.png";
import hiit_workout_image from "../../assets/hiit-work-out.png";
import gym_workout_image from "../../assets/back.png";
import hiit_work_out_video from "../../assets/hiit-work-out.webm";
import personal_trainer_video from "../../assets/personal trainer.webm";
import gym_work_out_video from "../../assets/gym.webm";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import Title from "../title/Title";


const Classes = () => {
  const [playState, setPlayState] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const classData = [
    {
      image: personal_training_image,
      heading: "Personal Training",
      description: "One-on-one training sessions tailored to your specific fitness goals and needs.",
      
      video: personal_trainer_video,
    },
    {
      image: hiit_workout_image,
      heading: "Defined Abs Program",
      description: "A specialized program targeting your abdominal muscles to strengthen and sculpt your core. Workouts get progressively harder each month for consistent results.",
      video: hiit_work_out_video
    },
    {
      image: gym_workout_image,
      heading: "Workout Programs",
      description: "Starter Pack – Build a strong foundation Mass Gainer – Muscle growth & strength Shred Package – Fat-burning & lean physique",
      video: gym_work_out_video,
    },
    
  ];

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const handleButtonClick = (video) => {
    setCurrentVideo(video);
    setPlayState(true);
  };

  return (
    <div>
      <Title Title1={"Choose Your"} Title2={"Transformation Path"} subTitle={"TRAINING PROGRAMS"}/>
      <div className="Class h-full mx-4 md:mx-0 grid grid-cols-1 gap-4 md:grid md:grid-cols-3 md:justify-items-center md:align-items-center md:gap-4 md:px-28 py-8 ">
        {classData.map((item) => (
          <div
            key={item.heading}
            className="shadow-lg rounded-lg p-1 flex flex-col justify-between bg-slate-50 dark:bg-darkCardTheme gap-1"
            data-aos="zoom-in-up"
          >
            <img className="rounded" src={item.image} alt={item.heading} />
            <p className="text-center font-semibold text-lg text-lightFontHeading dark:text-lightFontText">
              {item.heading}
            </p>
            <p className="leading-loose text-center text-lightFontHeading dark:text-lightFontText">
              {item.description}
            </p>
            <button
              className="py-2 px-6 font-bold rounded-md dark:text-lightFontHeading bg-btnDarkTheme hover:bg-bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btnDarkTheme"
              onClick={() => handleButtonClick(item.video)}
            >
              Click for More
            </button>
          </div>
        ))}
      </div>
      {playState && (
        <VideoPlayer
          playState={playState}
          setPlayState={setPlayState}
          videoSrc={currentVideo}
        />
      )}
    </div>
  );
};

export default Classes;
