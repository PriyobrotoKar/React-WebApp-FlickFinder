import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "../home/Img";

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
  return (
    <>
      {!videosLoading ? (
        <div className="px-4 lg:px-10">
          <h3>Official Videos</h3>
          <Carousel responsive={responsive}>
            {videos?.results?.map((video) => {
              return (
                <div className="mr-4 rounded-lg overflow-hidden">
                  <Img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default VideosSection;
