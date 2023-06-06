import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import MovieCard from "../../components/MovieCard";
import { useSelector } from "react-redux";

const ComingSoon = () => {
  const [allData, setAllData] = useState({ results: [] });
  const { url, genres } = useSelector((state) => state.home);
  const {
    data: movie,
    loading: movieLoading,
    error: movieError,
  } = useFetch("/movie/upcoming");
  const {
    data: tv,
    loading: tvLoading,
    error: tvError,
  } = useFetch("/tv/on_the_air");

  tv?.results.forEach((obj) => {
    obj.media_type = "tv";
  });

  const getAllData = () => {
    if (!movieLoading && !tvLoading) {
      const results = [...movie?.results, ...tv?.results];
      results.sort((b, a) => {
        return a.popularity - b.popularity;
      });
      setAllData({ results: results });
      console.log(allData);
    }
  };
  useEffect(() => {
    getAllData();
  }, [movie, tv]);
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] gap-6 px-4 lg:px-10 pb-10">
        {allData?.results?.map((item, ind) => {
          if (item.media_type === "person") return;
          return (
            <MovieCard
              key={ind}
              item={item}
              url={url}
              genres={genres}
              notFromHome={true}
            />
          );
        })}
      </div>
    </>
  );
};

export default ComingSoon;
