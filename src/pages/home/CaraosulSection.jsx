import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "./Img";

const CaraosulSection = ({ data, loading, url, genres }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
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
                <div className="rounded-[1.2rem]  hover:shadow-xl transition-all duration-200 overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:w-full before:h-full before:z-10 before:bg-gradient-to-t before:from-[#000] before:to-transparent">
                  <Img
                    src={url.backdrop + item.poster_path}
                    className={"inline-block"}
                  />
                </div>
                <div className="absolute bottom-4 left-3 w-[80%] z-20">
                  <h4 className="text-xl font-medium tracking-wide truncate">
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
