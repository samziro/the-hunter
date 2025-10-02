import { useState } from "react";
import personal_training_image from "../../assets/personal trainer.png";
import hiit_workout_image from "../../assets/hiit-work-out.png";
import gym_workout_image from "../../assets/back.png";
import workout_programs_image from "../../assets/work-ou-programs.png";
import hiit_work_out_video from "../../assets/hiit-work-out.webm";
import personal_trainer_video from "../../assets/personal trainer.webm";
import work_out_programs_video from "../../assets/work-out.webm";
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
      
      video: personal_trainer_video,
    },
    {
      image: hiit_workout_image,
      heading: "Defined Abs Program",
      
      video: hiit_work_out_video,
    },
    {
      image: gym_workout_image,
      heading: "Gym Workout",
      
      video: gym_work_out_video,
    },
    {
      image: workout_programs_image,
      heading: "Workout Programs",
      
      video: work_out_programs_video,
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
      <div className="class h-full mx-4 md:mx-0 grid grid-cols-1 gap-4 md:grid md:grid-cols-4 md:justify-items-center md:align-items-center md:gap-4 md:px-28 py-8 ">
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
            <p className="leading-loose text-lightFontText dark:text-lightFontText">
              {item.description}
            </p>
            <button
              className="py-1 px-4 rounded-md dark:text-lightFontHeading bg-btnDarkTheme hover:bg-neutral-900"
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
