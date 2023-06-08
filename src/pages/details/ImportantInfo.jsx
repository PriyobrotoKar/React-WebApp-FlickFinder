import millify from "millify";
import React, { useState } from "react";
import polygon from "../../assets/Polygon 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ImportantInfo = ({ data, mediaType }) => {
  const [showAdded, setShowAdded] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  let f = 0;
  const addToWatchlist = () => {
    watchlist.forEach((element) => {
      if (element.id === data.id) {
        f = 1;
        return;
      }
    });
    if (f === 1) {
      setAlreadyAdded(true);
      setShowAdded(true);
      setTimeout(() => setShowAdded(false), 2000);
      return;
    }
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
    watchlist.push({
      id: data.id,
      title: data.title || data.name,
      poster_path: data.poster_path,
      vote_average: data.vote_average,
      genre_ids: data.genres.map((elem) => {
        return elem.id;
      }),
      mediaType: mediaType,
    });
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  };
  return (
    <div className="grid auto-rows-[minmax(6rem,1fr)]  xl:auto-rows-[minmax(7rem,1fr)] 2xl:auto-rows-[minmax(9rem,1fr)] grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] flex-wrap gap-2 xl:gap-4 [&>*]:flex-1 w-full text-neutral-100">
      <div
        className={
          "bg-neutral-500 px-4 py-2 pt-[0.6rem] -bottom-2 rounded-xl absolute  left-1/2 -translate-x-1/2 transition-all duration-300 " +
          (showAdded
            ? "translate-y-full opacity-100"
            : "translate-y-0 opacity-0")
        }
      >
        {alreadyAdded ? "Already Added" : "Added to Watchlist"}
      </div>
      <div
        onClick={addToWatchlist}
        className="h-full bg-primary relative cursor-pointer flex justify-center items-center rounded-3xl  hover:shadow-[0_0.8rem_2rem_0rem] hover:shadow-[#ff000050] transition-all duration-200"
      >
        <FontAwesomeIcon className="text-[2.8rem]" icon={faHeart} />
      </div>

      <div className="bg-[#d8d9de7e] dark:bg-[#ffffff15] backdrop-blur-sm relative  text-center rounded-3xl flex justify-center items-center ">
        <div className="text-neutral-600 dark:text-neutral-100 font-SofiaSansCondensed text-xl xl:text-[1.5rem] 2xl:text-[2rem] tracking-wide leading-5 px-4">
          {data.status}
        </div>
        <div className="absolute bottom-2 uppercase tracking-wide text-base text-neutral-500 dark:text-[#ffffff3b]">
          Status
        </div>
      </div>
      <div className="bg-[#d8d9de7e] dark:bg-[#ffffff15] backdrop-blur-sm relative  text-center rounded-3xl flex justify-center items-center ">
        <div className="text-neutral-600 dark:text-neutral-100 font-SofiaSansCondensed text-xl xl:text-[1.5rem] 2xl:text-[2rem] tracking-wide">
          {data.release_date?.replaceAll("-", "/") ||
            data.first_air_date?.replaceAll("-", "/")}
        </div>
        <div className="absolute bottom-2 uppercase tracking-wide text-base text-neutral-500 dark:text-[#ffffff3b]">
          release
        </div>
      </div>
      {mediaType === "movie" ? (
        <div className="bg-[#d8d9de7e] dark:bg-[#ffffff15] backdrop-blur-sm relative  text-center  rounded-3xl flex justify-center items-center ">
          <div className="text-neutral-600 dark:text-neutral-100 font-SofiaSansCondensed text-xl xl:text-[1.5rem] 2xl:text-[2rem] tracking-wide">
            ${millify(data.budget)}
          </div>
          <div className="absolute bottom-2 uppercase tracking-wide text-base text-neutral-500 dark:text-[#ffffff3b]">
            budget
          </div>
        </div>
      ) : (
        <div className="bg-[#d8d9de7e] dark:bg-[#ffffff15] backdrop-blur-sm relative  text-center  rounded-3xl flex justify-center items-center ">
          <div className="text-neutral-600 dark:text-neutral-100 font-SofiaSansCondensed text-xl xl:text-[1.5rem] 2xl:text-[2rem] tracking-wide">
            {data.number_of_seasons}
          </div>
          <div className="absolute bottom-2 uppercase tracking-wide text-base text-neutral-500 dark:text-[#ffffff3b]">
            Seasons
          </div>
        </div>
      )}
      {mediaType === "movie" ? (
        <div className="bg-[#d8d9de7e] dark:bg-[#ffffff15] backdrop-blur-sm relative  text-center  rounded-3xl flex justify-center items-center ">
          <div className="text-neutral-600 dark:text-neutral-100 font-SofiaSansCondensed text-xl xl:text-[1.5rem] 2xl:text-[2rem] tracking-wide">
            {data.runtime} mins
          </div>
          <div className="absolute bottom-2 uppercase tracking-wide text-base text-neutral-500 dark:text-[#ffffff3b]">
            Length
          </div>
        </div>
      ) : (
        <div className="bg-[#d8d9de7e] dark:bg-[#ffffff15] backdrop-blur-sm relative  text-center  rounded-3xl flex justify-center items-center ">
          <div className="text-neutral-600 dark:text-neutral-100 font-SofiaSansCondensed text-xl xl:text-[1.5rem] 2xl:text-[2rem] tracking-wide">
            {data.number_of_episodes}
          </div>
          <div className="absolute bottom-2 uppercase tracking-wide text-base text-neutral-500 dark:text-[#ffffff3b]">
            Episodes
          </div>
        </div>
      )}
      <div className="bg-[#d8d9de7e] dark:bg-[#ffffff15] backdrop-blur-sm relative  text-center  rounded-3xl flex justify-center items-center ">
        <div className="text-neutral-600 dark:text-neutral-100 font-SofiaSansCondensed text-xl xl:text-[1.5rem] 2xl:text-[2rem] tracking-wide">
          {data.vote_average.toFixed(1)}/10
        </div>
        <div className="absolute bottom-2 uppercase tracking-wide text-base text-neutral-500 dark:text-[#ffffff3b]">
          rating
        </div>
      </div>
    </div>
  );
};

export default ImportantInfo;
