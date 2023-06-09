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
      {!loading ? (
        <div>
          <Carousel responsive={responsive} className="overflow-visible z-10">
            {data?.results?.map((item, ind) => {
              return <MovieCard key={ind} item={item} isFromSearch={false} />;
            })}
          </Carousel>
        </div>
      ) : (
        <div className="flex gap-6">
          <div className="h-60 min-w-[12rem] bg-gradient-to-r  bg-[100%_0%] animate-load from-[#292929] from-30% via-[#363636] via-40% to-[#292929] to-50% bg-[length:200%_100%] rounded-3xl p-4 flex items-end">
            <div className="space-y-4 h-fit w-full">
              <div className="bg-gradient-to-r bg-[100%_0%] animate-loadSlow   from-[#383838] from-30% via-[#4e4e4e] via-40% to-[#383838] to-50% bg-[length:200%_100%] w-full h-6  rounded-xl "></div>
              <div className="bg-gradient-to-r bg-[100%_0%] animate-loadSlow  from-[#383838] from-30% via-[#4e4e4e] via-40% to-[#383838] to-50% bg-[length:200%_100%] w-full h-10  rounded-xl "></div>
            </div>
          </div>
          <div className="h-60 min-w-[12rem] bg-gradient-to-r  bg-[100%_0%] animate-load from-[#292929] from-30% via-[#363636] via-40% to-[#292929] to-50% bg-[length:200%_100%] rounded-3xl p-4 flex items-end">
            <div className="space-y-4 h-fit w-full">
              <div className="bg-gradient-to-r bg-[100%_0%] animate-loadSlow   from-[#383838] from-30% via-[#4e4e4e] via-40% to-[#383838] to-50% bg-[length:200%_100%] w-full h-6  rounded-xl "></div>
              <div className="bg-gradient-to-r bg-[100%_0%] animate-loadSlow  from-[#383838] from-30% via-[#4e4e4e] via-40% to-[#383838] to-50% bg-[length:200%_100%] w-full h-10  rounded-xl "></div>
            </div>
          </div>
          <div className="h-60 min-w-[12rem] bg-gradient-to-r  bg-[100%_0%] animate-load from-[#292929] from-30% via-[#363636] via-40% to-[#292929] to-50% bg-[length:200%_100%] rounded-3xl p-4 flex items-end">
            <div className="space-y-4 h-fit w-full">
              <div className="bg-gradient-to-r bg-[100%_0%] animate-loadSlow   from-[#383838] from-30% via-[#4e4e4e] via-40% to-[#383838] to-50% bg-[length:200%_100%] w-full h-6  rounded-xl "></div>
              <div className="bg-gradient-to-r bg-[100%_0%] animate-loadSlow  from-[#383838] from-30% via-[#4e4e4e] via-40% to-[#383838] to-50% bg-[length:200%_100%] w-full h-10  rounded-xl "></div>
            </div>
          </div>
          <div className="h-60 min-w-[12rem] bg-gradient-to-r  bg-[100%_0%] animate-load from-[#292929] from-30% via-[#363636] via-40% to-[#292929] to-50% bg-[length:200%_100%] rounded-3xl p-4 flex items-end">
            <div className="space-y-4 h-fit w-full">
              <div className="bg-gradient-to-r bg-[100%_0%] animate-loadSlow   from-[#383838] from-30% via-[#4e4e4e] via-40% to-[#383838] to-50% bg-[length:200%_100%] w-full h-6  rounded-xl "></div>
              <div className="bg-gradient-to-r bg-[100%_0%] animate-loadSlow  from-[#383838] from-30% via-[#4e4e4e] via-40% to-[#383838] to-50% bg-[length:200%_100%] w-full h-10  rounded-xl "></div>
            </div>
          </div>
          <div className="h-60 min-w-[12rem] bg-gradient-to-r  bg-[100%_0%] animate-load from-[#292929] from-30% via-[#363636] via-40% to-[#292929] to-50% bg-[length:200%_100%] rounded-3xl p-4 flex items-end">
            <div className="space-y-4 h-fit w-full">
              <div className="bg-gradient-to-r bg-[100%_0%] animate-loadSlow   from-[#383838] from-30% via-[#4e4e4e] via-40% to-[#383838] to-50% bg-[length:200%_100%] w-full h-6  rounded-xl "></div>
              <div className="bg-gradient-to-r bg-[100%_0%] animate-loadSlow  from-[#383838] from-30% via-[#4e4e4e] via-40% to-[#383838] to-50% bg-[length:200%_100%] w-full h-10  rounded-xl "></div>
            </div>
          </div>
          <div className="h-60 min-w-[12rem] bg-gradient-to-r  bg-[100%_0%] animate-load from-[#292929] from-30% via-[#363636] via-40% to-[#292929] to-50% bg-[length:200%_100%] rounded-3xl p-4 flex items-end">
            <div className="space-y-4 h-fit w-full">
              <div className="bg-gradient-to-r bg-[100%_0%] animate-loadSlow   from-[#383838] from-30% via-[#4e4e4e] via-40% to-[#383838] to-50% bg-[length:200%_100%] w-full h-6  rounded-xl "></div>
              <div className="bg-gradient-to-r bg-[100%_0%] animate-loadSlow  from-[#383838] from-30% via-[#4e4e4e] via-40% to-[#383838] to-50% bg-[length:200%_100%] w-full h-10  rounded-xl "></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaraosulSection;
