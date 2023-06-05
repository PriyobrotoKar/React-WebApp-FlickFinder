import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Img from "../../components/Img";
import { fetchData } from "../../utils/api";
import MovieCard from "../../components/MovieCard";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchResults = () => {
  let { query } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLaoding] = useState();
  const [pageNum, setPageNum] = useState(1);
  const { url, genres } = useSelector((state) => state.home);

  const fetchDataFromApi = () => {
    setLaoding(true);
    fetchData("/search/multi", { query, page: pageNum }).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLaoding(false);
    });
  };

  const fetchNextDataFromApi = () => {
    console.log("next");
    fetchData("/search/multi", { query, page: pageNum }).then((res) => {
      if (data?.results) {
        setData({ ...data, results: [...data?.results, ...res.results] });
      }
      setPageNum((prev) => prev + 1);
    });
  };

  useEffect(() => {
    setPageNum(1);
    fetchDataFromApi();
  }, [query]);

  return (
    <>
      {!loading ? (
        data?.results?.length > 0 ? (
          <div className="px-4 lg:px-10 space-y-6">
            <div className="text-neutral-100 text-xl">
              {`Search ${
                data?.results.length > 1 ? "results" : "result"
              } of '${query}'`}
            </div>
            <InfiniteScroll
              dataLength={data?.results?.length || []}
              next={fetchNextDataFromApi}
              hasMore={pageNum <= data?.total_pages}
              loader={<div>Loading...</div>}
              className="grid grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] gap-6"
              style={{ overflow: "visible" }}
            >
              {data?.results?.map((item, ind) => {
                return (
                  <MovieCard
                    key={ind}
                    item={item}
                    url={url}
                    genres={genres}
                    isFromSearch={true}
                  />
                );
              })}
            </InfiniteScroll>
          </div>
        ) : (
          <div>Result not found</div>
        )
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
};

export default SearchResults;
