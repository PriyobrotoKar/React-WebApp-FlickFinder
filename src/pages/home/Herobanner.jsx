import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "./Img";

import "./heroBanner.css";

const Herobanner = () => {
  const [background, setBackground] = useState([""]);
  const { data, loading } = useFetch("/movie/popular");
  const { url } = useSelector((state) => state.home);
  let slideValue = 0;

  useEffect(() => {
    const populateArray = async () => {
      const bg = await data.results;
      setBackground(bg);
    };

    populateArray();
  }, [data]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
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
    <>
      {!loading && (
        <div className="h-[50svh] relative bg-clip-content overflow-hidden before:bg-gradient-to-t  before:from-[#000] before:rounded-[3rem] before:to-transparent before:absolute before:inset-0 before:w-full before:h-full">
          <Carousel
            responsive={responsive}
            className="absolute bottom-10 right-0 w-[30%] z-10"
          >
            {background.map((elem, ind) => {
              return (
                <div className="h-full poster mx-4 rounded-3xl overflow-hidden">
                  <Img
                    src={url.backdrop + elem.poster_path}
                    className={"h-full object-cover"}
                  />
                </div>
              );
            })}
          </Carousel>
          <img
            src={url.backdrop + background[0].backdrop_path}
            alt=""
            className="w-full h-full object-cover  rounded-[3.2rem]"
          />
        </div>
      )}
    </>
  );
};

export default Herobanner;
