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
  const { query } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState();
  const [pageNum, setPageNum] = useState(1);
  const { url, genres } = useSelector((state) => state.home);

  const fetchDataFromApi = (pageNum) => {
    setLoading(true);

    fetchData("/search/multi", { query, page: pageNum }).then((res) => {
      setData(res);
      setPageNum(pageNum + 1);
      setLoading(false);
    });
    console.log(pageNum);
  };

  const fetchNextDataFromApi = () => {
    console.log("next");
    fetchData("/search/multi", { query, page: pageNum }).then((res) => {
      if (data?.results) {
        setData({ ...data, results: [...data?.results, ...res.results] });
      }
      setPageNum(pageNum + 1);
    });
  };

  useEffect(() => {
    setPageNum(1);
    setPageNum((state) => fetchDataFromApi(state));
  }, [query]);

  return (
    <>
      {!loading ? (
        data?.results?.length > 0 ? (
          <div className="px-4 lg:px-10 space-y-6 pb-10">
            <div className="text-neutral-100 text-xl">
              {`Search ${
                data?.results.length > 1 ? "results" : "result"
              } of '${query}'`}
            </div>
            <InfiniteScroll
              dataLength={data?.results?.length || []}
              next={fetchNextDataFromApi}
              hasMore={pageNum <= data?.total_pages}
              loader={
                <div>
                  <img className="w-32 mx-auto" src="/loader.svg" alt="" />
                </div>
              }
              className={
                data?.results?.length > 6
                  ? "grid grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] gap-6"
                  : "grid grid-cols-[repeat(auto-fit,9rem)] md:grid-cols-[repeat(auto-fit,13rem)] gap-6"
              }
              style={{ overflow: "visible" }}
            >
              {data?.results?.map((item, ind) => {
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
            </InfiniteScroll>
          </div>
        ) : (
          <div className="pt-32 flex-[0_0_40rem]">
            <img className="w-52 mx-auto" src="/noresult.png" alt="" />
            <div className="text-center font-semibold text-xl text-neutral-600 dark:text-neutral-500">
              No such result found
            </div>
          </div>
        )
      ) : (
        <div>
          <img className="w-32 mx-auto" src="/loader.svg" alt="" />
        </div>
      )}
    </>
  );
};

export default SearchResults;
