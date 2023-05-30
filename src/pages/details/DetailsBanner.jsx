import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Img from "../home/Img";
import ImportantInfo from "./ImportantInfo";
import "./detailsBanner.css";

const DetailsBanner = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`/movie/${id}`);
  const { url } = useSelector((state) => state.home);

  return (
    <div>
      {!loading ? (
        <div className=" h-[60svh] relative  banner  w-full">
          <Img
            src={url.backdrop + data.backdrop_path}
            className={"object-cover object-[50%_20%] h-full w-full"}
          />
          <div className="h-full absolute inset-0 bg-gradient-to-t from-[#1a1c20]"></div>
          <div className="absolute -bottom-20 space-y-4 px-4 w-full">
            <h1 className="text-2xl leading-[2.5rem] lg:text-[3rem] xl:text-3xl text-neutral-100 font-semibold lg:leading-[3.5rem]  xl:leading-[4rem]">
              {data.original_title}
            </h1>
            <div className="flex w-full gap-2">
              {data.genres.map((g) => {
                return (
                  <div className="text-base xl:text-lg backdrop-blur-lg text-neutral-100 bg-[#ffffff28] rounded-2xl px-4 py-1">
                    {g.name}
                  </div>
                );
              })}
            </div>
            <ImportantInfo data={data} />
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default DetailsBanner;
