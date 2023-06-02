import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "../home/Img";
import VideoPopup from "./VideoPopup";
import "./videosSection.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  largeScreens: {
    breakpoint: { max: 3000, min: 1524 },
    items: 6,
  },
  mediumScreen: {
    breakpoint: { max: 1524, min: 1200 },
    items: 4,
  },
  smallScreen: {
    breakpoint: { max: 1200, min: 1024 },
    items: 3,
  },
  largetablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  smalltablet: {
    breakpoint: { max: 800, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const VideosSection = ({ videos, videosLoading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState();
  return (
    <>
      {!videosLoading ? (
        <div className="px-4 lg:px-10 mt-6 ">
          <h3 className="text-neutral-500 text-xl font-medium ">
            Official Videos
          </h3>
          <Carousel
            responsive={responsive}
            className="overflow-visible mt-2 z-10"
          >
            {videos?.results?.map((video) => {
              return (
                <div
                  onClick={() => {
                    setShow(true);
                    setVideoId(video.key);
                  }}
                  className=" mr-4 "
                >
                  <div className="video">
                    <button className="bg-primary px-4 py-2 text-neutral-100 rounded-2xl z-10 absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[65%] transition-all duration-200">
                      Watch
                    </button>
                    <Img
                      src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    />
                  </div>
                  <div className="text-neutral-100 text-base truncate">
                    {video.name}
                  </div>
                </div>
              );
            })}
          </Carousel>

          <VideoPopup
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoId}
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default VideosSection;
