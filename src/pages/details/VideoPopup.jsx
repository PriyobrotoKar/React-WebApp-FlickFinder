import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  if (show) {
    document.getElementById("contentSection").style.overflow = "hidden";
  }
  const hidePopup = () => {
    setShow(false);
    setPause(true);
    document.getElementById("contentSection").style.overflow = "";
    setVideoId(null);
    setPlayed(true);
  };

  const player1 = useRef();
  const player2 = useRef();

  const [pause, setPause] = useState(true);
  const [played, setPlayed] = useState(true);

  const play = () => {
    setPause(false);
    setPlayed(false);
    console.log(player1.current.getCurrentTime());
    if (played) {
      player2.current.seekTo(0.005, "fraction");
    } else {
      player2.current.seekTo(player1.current.getCurrentTime());
    }
  };

  return (
    <>
      {show && (
        <div
          onClick={hidePopup}
          className="fixed w-screen h-screen inset-0 z-30 bg-[#000000af]"
        >
          <div className="w-[90%] z-50 h-[30rem] xl:aspect-video xl:w-auto xl:h-[80vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              playing={true}
              ref={player1}
              onPause={() => setPause(true)}
              onPlay={() => play()}
              onSeek={(e) => console.log("seek")}
              width={"100%"}
              height={"100%"}
              controls={true}
              onEnded={hidePopup}
            />
          </div>
          <div className="blur-2xl w-[90%]  z-40 h-[30rem] xl:aspect-video xl:w-auto xl:h-[79vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden">
            <ReactPlayer
              ref={player2}
              url={`https://www.youtube.com/watch?v=${videoId}`}
              playing={pause ? false : true}
              muted={true}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;
