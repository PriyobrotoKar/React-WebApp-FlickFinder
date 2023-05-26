import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Img from "./Img";

const CaraosulSection = ({ data, loading, url, genres }) => {
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

  return (
    <div className="overflow-visible">
      {!loading && (
        <Carousel responsive={responsive} className="overflow-visible">
          {data?.results?.map((item) => {
            return (
              <div
                key={item.id}
                className="relative mr-6 text-neutral-100 hover:scale-110 transition-all duration-200 cursor-pointer"
              >
                <div className="absolute z-20 top-2 left-2 bg-[#161616ab] flex justify-center gap-1 items-center px-4 py-2 rounded-3xl text-[0.8rem]">
                  <div className="text-[#ffbd42]">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="text-neutral-100  leading-4 relative top-[0.08rem] font-semibold">
                    {item.vote_average.toFixed(1)}
                  </div>
                </div>
                <div className="rounded-[1.2rem]  hover:shadow-xl transition-all duration-200 overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:w-full before:h-full before:z-10 before:bg-gradient-to-t before:from-[#000] before:to-transparent">
                  <Img
                    src={url.backdrop + item.poster_path}
                    className={"inline-block"}
                  />
                </div>
                <div className="absolute bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-20">
                  <h4 className="text-xl font-medium tracking-wide truncate w-[80%]">
                    {item.original_title}
                  </h4>
                  <div className="text-base leading-2 opacity-60">
                    {item.genre_ids.splice(0, 3).map((genre, ind, items) => {
                      return (
                        <span key={ind}>
                          {genres[genre].name +
                            (ind === items.length - 1 ? "" : ",")}{" "}
                        </span>
                      );
                    })}
                  </div>
                  <button className="bg-primary text-neutral-100 text-lg w-full py-2 rounded-xl mt-2 hover:bg-[#ff4d4d] hover:shadow-[0_0.8rem_2rem_0rem] hover:shadow-[#a00d0d71] transition-all">
                    More Info
                  </button>
                </div>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default CaraosulSection;
