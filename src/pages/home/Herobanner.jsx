import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import Img from "../../components/Img";
import useFetch from "../../hooks/useFetch";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchData } from "../../utils/api";
import "./heroBanner.css";

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
    };

    data ? populateArray() : "";
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
        title: res.title,
        genres: res.genres,
        rating: res.vote_average,
      });
    });
  };

  return (
    <>
      {!loading && (
        <div className="min-h-[20rem] lg:min-h-[30rem] h-[50vh]  font-Poppins relative bg-clip-content overflow-hidden before:bg-gradient-to-t  before:from-[#000] before:rounded-[3rem] before:to-transparent before:absolute before:inset-0 before:w-full before:h-full">
          <div className="absolute top-6 lg:top-10 left-6 lg:left-10 bg-[#161616ab] flex justify-center gap-1 items-center px-4 py-2 rounded-3xl text-[0.8rem]">
            <div className="text-[#ffbd42]">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="text-neutral-100  leading-4 relative top-[0.08rem] font-semibold">
              {movieDetails.rating.toFixed(1)}
            </div>
          </div>
          <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 max-w-[80%] lg:max-w-[55%] xl:max-w-[60%]">
            <h2 className="text-2xl leading-[2.5rem] lg:text-[3rem] xl:text-3xl text-neutral-100 font-semibold lg:leading-[3.5rem]  xl:leading-[4rem]">
              {movieDetails.title}
            </h2>
            <div className="mt-2 text-base lg:text-lg flex gap-1 text-neutral-100 opacity-60 tracking-wide">
              {movieDetails.genres.map((elem, ind, genres) => {
                return (
                  <div>
                    {elem.name + (ind === genres.length - 1 ? "" : ",")}
                  </div>
                );
              })}
            </div>
            <button className="px-6 py-3 mt-4 bg-primary hover:bg-[#ff4d4d] text-xl rounded-xl text-neutral-100 hover:shadow-[0_0.8rem_2rem_0rem] hover:shadow-[#ff000050] transition-all">
              Watch
            </button>
          </div>
          <Carousel
            responsive={responsive}
            className="absolute bottom-10 right-0 w-[30%] lg:w-[40%] 2xl:w-[30%] z-10"
          >
            {popMovies.map((elem, ind) => {
              return (
                <div
                  className="h-full poster mx-4 lg:mx-1 xl:mx-2  rounded-[20%] overflow-hidden"
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
            className="w-full h-full object-cover object-center lg:object-[0_20%]  rounded-[3.2rem]"
          />
        </div>
      )}
    </>
  );
};

export default Herobanner;
