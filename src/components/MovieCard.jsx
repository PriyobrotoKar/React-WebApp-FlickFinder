import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "./Img";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieCard = ({ item, notFromHome }) => {
  const { url, genres } = useSelector((state) => state.home);
  const navigate = useNavigate();
  return (
    <div
      key={item?.id}
      className={
        "relative h-full min-h-[15rem] font-Poppins  text-neutral-100 hover:scale-110 transition-all duration-200 cursor-pointer " +
        (notFromHome ? "" : "mr-6")
      }
    >
      <div className="absolute z-20 top-2 left-2 bg-[#161616ab] flex justify-center gap-1 items-center px-4 py-2 rounded-3xl text-[0.8rem]">
        <div className="text-[#ffbd42]">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="text-neutral-100  leading-4 relative top-[0.08rem] font-semibold">
          {item?.vote_average?.toFixed(1)}
        </div>
      </div>
      <div className="rounded-[1.2rem]  hover:shadow-xl transition-all duration-200 overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:w-full before:h-full before:z-10 before:bg-gradient-to-t before:from-[#000] before:to-transparent">
        <Img
          src={url.backdrop + item?.poster_path}
          className={"inline-block"}
        />
      </div>
      <div className="absolute bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-20">
        <h4 className={"text-xl font-medium tracking-wide truncate"}>
          {item?.title || item?.name}
        </h4>

        <div className="text-base leading-2 opacity-60">
          {item?.genre_ids?.map((genre, ind, items) => {
            return (
              <span key={ind}>
                {genres[genre]?.name + (ind === items.length - 1 ? "" : ", ")}
              </span>
            );
          })}
        </div>

        <button
          onClick={() =>
            navigate(`/${item?.media_type || "movie"}/${item?.id}`)
          }
          className="bg-primary text-neutral-100 text-lg w-full py-2 rounded-xl mt-2 hover:bg-[#ff4d4d] hover:shadow-[0_0.8rem_2rem_0rem] hover:shadow-[#a00d0d71] transition-all"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
