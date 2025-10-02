import { useRef } from "react";

const VideoPlayer = ({ playState, setPlayState, videoSrc }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`z-50 top-0 fixed w-full h-full backdrop-blur-sm bg-black/60 ${
        playState ? "flex flex-col items-center justify-center" : "hidden"
      }`}
      ref={player}
      onClick={closePlayer}
    >
      <video
        className="border-4 border-slate-50 rounded-md"
        src={videoSrc}
        autoPlay
        controls
        loop
        muted
      />
    </div>
  );
};

export default VideoPlayer;
