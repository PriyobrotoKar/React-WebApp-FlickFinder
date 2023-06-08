import React from "react";
import MovieCard from "../../components/MovieCard";

const Watchlist = () => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  console.log(watchlist);
  const NoWatchlist = () => {
    return (
      <div className="pt-20">
        <img className="w-52 mx-auto" src="/noresult.png" alt="" />
        <div className="text-center font-semibold text-2xl text-neutral-600 dark:text-neutral-500">
          Nothing to show
        </div>
        <div className="text-center font-semibold text-xl text-neutral-600 dark:text-neutral-500">
          Add some movies to your watchlist
        </div>
      </div>
    );
  };
  return (
    <>
      <div>{watchlist ? "" : <NoWatchlist />}</div>
      <div
        className={
          watchlist?.length > 6
            ? "flex-[0_0_40rem] grid auto-rows-min grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] gap-6 px-4 lg:px-10 pb-20"
            : "flex-[0_0_40rem] grid auto-rows-min grid-cols-[repeat(auto-fit,7rem)] md:grid-cols-[repeat(auto-fit,13rem)] gap-6 px-4 lg:px-10 pb-20"
        }
      >
        {watchlist?.map((item, ind) => {
          return <MovieCard item={item} notFromHome={true} />;
        })}
      </div>
    </>
  );
};

export default Watchlist;
