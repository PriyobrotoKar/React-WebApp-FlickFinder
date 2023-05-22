import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "./Img";

import "./heroBanner.css";
import { fetchData } from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Herobanner = () => {
  const [background, setBackground] = useState("");
  const [popMovies, setpopMovies] = useState([""]);
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    genres: [],
    rating: 0,
  });
  const { data, loading } = useFetch("/movie/popular");
  const { url } = useSelector((state) => state.home);
  let slideValue = 0;

  useEffect(() => {
    const populateArray = async () => {
      const movies = await data.results;
      setpopMovies(movies);
      getMovieDetails(movies[0].id);
      // setBackground(movies[0].backdrop_path);
      // setMovieDetails({
      //   title: movies[0].original_title,
      //   genres: movies[0],
      //   rating: movies[0].vote_average,
      // });
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

  const getMovieDetails = (id) => {
    fetchData(`/movie/${id}`).then((res) => {
      setBackground(res.backdrop_path);
      setMovieDetails({
        title: res.original_title,
        genres: res.genres,
        rating: res.vote_average,
      });
    });
  };

  return (
    <>
      {!loading && (
        <div className="h-[50svh]  font-Poppins relative bg-clip-content overflow-hidden before:bg-gradient-to-t  before:from-[#000] before:rounded-[3rem] before:to-transparent before:absolute before:inset-0 before:w-full before:h-full">
          <div className="absolute top-10 left-10 bg-[#161616ab] flex justify-center gap-1 items-center px-4 py-2 rounded-3xl text-[0.8rem]">
            <div className="text-[#ffbd42]">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="text-neutral-100  leading-4 relative top-[0.08rem] font-semibold">
              {movieDetails.rating.toFixed(1)}
            </div>
          </div>
          <div className="absolute bottom-10 left-10 space-y-3 max-w-[60%]">
            <h2 className="text-3xl text-neutral-100 font-semibold  leading-[4rem]">
              {movieDetails.title}
            </h2>
            <div className="text-base flex gap-1 text-neutral-100 opacity-60 tracking-wide">
              {movieDetails.genres.map((elem, ind, genres) => {
                return (
                  <div>
                    {elem.name + (ind === genres.length - 1 ? "" : ",")}
                  </div>
                );
              })}
            </div>
            <button className="px-6 py-3 bg-primary text-xl rounded-xl text-neutral-100 shadow-[0_0.8rem_2rem_0rem] shadow-[#ff000071]">
              Watch
            </button>
          </div>
          <Carousel
            responsive={responsive}
            className="absolute bottom-10 right-0 w-[30%] z-10"
          >
            {popMovies.map((elem, ind) => {
              return (
                <div
                  className="h-full poster mx-4 rounded-[20%] overflow-hidden"
                  key={elem.id}
                  onClick={(e) => {
                    getMovieDetails(elem.id);
                    document.querySelectorAll(".img").forEach((elem) => {
                      if (elem.classList.contains("thumb_active")) {
                        elem.classList.remove("thumb_active");
                      }
                    });
                    e.target.classList.add("thumb_active");
                  }}
                >
                  <Img
                    key={elem.id}
                    src={url.backdrop + elem.poster_path}
                    className={"h-full object-cover img cursor-pointer"}
                  />
                </div>
              );
            })}
          </Carousel>
          <img
            src={url.backdrop + background}
            alt=""
            className="w-full h-full object-cover object-[0_20%]  rounded-[3.2rem]"
          />
        </div>
      )}
    </>
  );
};

export default Herobanner;
