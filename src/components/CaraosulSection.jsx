import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const CaraosulSection = ({ data, loading }) => {
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
        <Carousel responsive={responsive} className="overflow-visible z-10">
          {data?.results?.map((item) => {
            return <MovieCard item={item} isFromSearch={false} />;
          })}
        </Carousel>
      )}
    </div>
  );
};

export default CaraosulSection;
